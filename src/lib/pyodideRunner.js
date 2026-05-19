// src/lib/pyodideRunner.js
//
// Loads Pyodide via importScripts-compatible CDN URL.
// Uses a module-level singleton so Pyodide is only ever initialised once
// per page session, regardless of how many times runPython is called.

// Use the ESM build from the CDN — this works correctly inside Vite's
// module environment without conflicting with the bundler's own module
// system. The key difference from the old approach: we use a dynamic
// import() instead of injecting a <script> tag, which avoids the MIME
// type and module-environment conflicts.
const PYODIDE_CDN =
  "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.mjs";

let pyodideInstance = null;
let loadingPromise  = null;

async function getPyodide() {
  if (pyodideInstance) return pyodideInstance;
  if (loadingPromise)  return loadingPromise;

  loadingPromise = (async () => {
    // Dynamic import() of the ESM build — no script tag injection,
    // no MIME conflicts, works with Vite's module system cleanly.
    const { loadPyodide } = await import(/* @vite-ignore */ PYODIDE_CDN);

    pyodideInstance = await loadPyodide({
      // indexURL tells Pyodide where to find its own sub-resources
      // (stdlib wheels, stackframe.js, etc.). Must match the CDN base.
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/",
      stdout: () => {},
      stderr: () => {},
    });

    return pyodideInstance;
  })();

  return loadingPromise;
}

// ---------------------------------------------------------------------------
// stdout capture
// ---------------------------------------------------------------------------

const STDOUT_SETUP = `
import sys
import io as _io
_stdout_capture = _io.StringIO()
sys.stdout = _stdout_capture
`;

const STDOUT_TEARDOWN = `
sys.stdout = sys.__stdout__
_stdout_capture.getvalue()
`;

const EXEC_TIMEOUT_MS = 6000; // 6 seconds for user code

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Run arbitrary Python code in the Pyodide sandbox.
 *
 * @param {string} code
 * @returns {Promise<{ output: string, error: string | null }>}
 */
export async function runPython(code) {
  let pyodide;
  try {
    // Give Pyodide up to 30 s to download on a slow connection.
    // After the first load this resolves instantly from the cache.
    pyodide = await Promise.race([
      getPyodide(),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Pyodide took too long to load — check your connection and try again.")),
          30_000
        )
      ),
    ]);
  } catch (err) {
    return {
      output: "",
      error: `Could not load Python runtime: ${err.message}`,
    };
  }

  const execPromise = (async () => {
    try {
      await pyodide.runPythonAsync(STDOUT_SETUP);
      await pyodide.runPythonAsync(code);
      const output = await pyodide.runPythonAsync(STDOUT_TEARDOWN);
      return { output: output ?? "", error: null };
    } catch (err) {
      try {
        await pyodide.runPythonAsync("sys.stdout = sys.__stdout__");
      } catch (_) {}

      const raw            = err.message ?? String(err);
      const tracebackStart = raw.indexOf("Traceback");
      const formatted      = tracebackStart !== -1
        ? raw.slice(tracebackStart)
        : raw;

      return { output: "", error: formatted };
    }
  })();

  const timeoutPromise = new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          output: "",
          error:
            "TimeoutError: Code took longer than 6 seconds.\n" +
            "Hint: Check for infinite loops (e.g. while True without a break).",
        }),
      EXEC_TIMEOUT_MS
    )
  );

  return Promise.race([execPromise, timeoutPromise]);
}

export async function runPythonSilent(code) {
  const { output } = await runPython(code);
  return output ?? "";
}