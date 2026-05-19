// src/lib/pyodideRunner.js
//
// Singleton Pyodide loader + sandboxed Python executor.
// Import { runPython, runPythonSilent } wherever you need real execution.

const PYODIDE_CDN =
  "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";

// Module-level cache — survives across component re-renders
let pyodideInstance = null;
let loadingPromise = null;

/**
 * Load Pyodide exactly once. Subsequent calls return the cached instance.
 * @returns {Promise<Pyodide>}
 */
async function getPyodide() {
  // Already loaded
  if (pyodideInstance) return pyodideInstance;

  // Load already in progress — wait for it instead of double-loading
  if (loadingPromise) return loadingPromise;

  loadingPromise = (async () => {
    // Dynamically inject the Pyodide bootstrap script into the page
    await new Promise((resolve, reject) => {
      // If it's already on the page from a previous attempt, skip
      if (window.loadPyodide) { resolve(); return; }

      const script = document.createElement("script");
      script.src = PYODIDE_CDN;
      script.onload = resolve;
      script.onerror = () =>
        reject(new Error("Failed to load Pyodide from CDN"));
      document.head.appendChild(script);
    });

    // window.loadPyodide is now available
    pyodideInstance = await window.loadPyodide({
      // Suppress Pyodide's own stdout — we capture it ourselves
      stdout: () => {},
      stderr: () => {},
    });

    return pyodideInstance;
  })();

  return loadingPromise;
}

/**
 * The stdout-capture Python bootstrap we inject before every user script.
 * It redirects sys.stdout to an in-memory StringIO buffer.
 */
const STDOUT_SETUP = `
import sys
import io as _io
_stdout_capture = _io.StringIO()
sys.stdout = _stdout_capture
`;

/**
 * After the user script runs, we read and return the captured output.
 */
const STDOUT_TEARDOWN = `
sys.stdout = sys.__stdout__
_stdout_capture.getvalue()
`;

const EXEC_TIMEOUT_MS = 5000; // 5 seconds

/**
 * Run arbitrary Python code in the Pyodide sandbox.
 *
 * @param {string} code  – Python source to execute
 * @returns {Promise<{ output: string, error: string | null }>}
 *   output – everything written to stdout (may be empty string)
 *   error  – Python traceback string, or null on success
 */
export async function runPython(code) {
  let pyodide;
  try {
    pyodide = await Promise.race([
      getPyodide(),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Pyodide took too long to load")),
          15000 // generous timeout for first load (~10 MB download)
        )
      ),
    ]);
  } catch (err) {
    return {
      output: "",
      error: `Could not load Python runtime: ${err.message}`,
    };
  }

  // Wrap execution in a race against the timeout
  const execPromise = (async () => {
    try {
      // Set up stdout capture
      await pyodide.runPythonAsync(STDOUT_SETUP);

      // Run the user's code
      await pyodide.runPythonAsync(code);

      // Retrieve captured output
      const output = await pyodide.runPythonAsync(STDOUT_TEARDOWN);
      return { output: output ?? "", error: null };
    } catch (err) {
      // Recover stdout so future runs still work
      try {
        await pyodide.runPythonAsync("sys.stdout = sys.__stdout__");
      } catch (_) {
        // ignore secondary error
      }

      // Format the error message — strip the internal Pyodide prefix
      const rawMessage = err.message ?? String(err);
      // Pyodide wraps tracebacks; surface just the Python part
      const tracebackStart = rawMessage.indexOf("Traceback");
      const formatted =
        tracebackStart !== -1
          ? rawMessage.slice(tracebackStart)
          : rawMessage;

      return { output: "", error: formatted };
    }
  })();

  const timeoutPromise = new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          output: "",
          error:
            "TimeoutError: Code took longer than 5 seconds to run.\n" +
            "Hint: Check for infinite loops (e.g., while True without a break).",
        }),
      EXEC_TIMEOUT_MS
    )
  );

  return Promise.race([execPromise, timeoutPromise]);
}

/**
 * Convenience wrapper: run code and return only stdout, or "" on any error.
 * Used internally to pre-compute expected output from solution code.
 *
 * @param {string} code
 * @returns {Promise<string>}
 */
export async function runPythonSilent(code) {
  const { output } = await runPython(code);
  return output ?? "";
}