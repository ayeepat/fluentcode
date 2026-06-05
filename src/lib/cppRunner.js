// src/lib/cppRunner.js
//
// Runs user-submitted C++ code in the browser via JSCPP (a JS C++ interpreter).
// JSCPP is loaded dynamically from a CDN the first time runCpp is called so
// other pages don't pay the bundle cost.

const JSCPP_CDN = "https://esm.sh/JSCPP@2.1.0";

const EXEC_TIMEOUT_MS = 6000;

let jscppPromise = null;

async function loadJscpp() {
  if (!jscppPromise) {
    jscppPromise = import(/* @vite-ignore */ JSCPP_CDN).then(
      (m) => m.default ?? m
    );
  }
  return jscppPromise;
}

/**
 * Run arbitrary C++ code in the JSCPP sandbox.
 *
 * @param {string} code
 * @param {string} [stdin]
 * @returns {Promise<{ output: string, error: string | null }>}
 */
export async function runCpp(code, stdin = "") {
  let JSCPP;
  try {
    JSCPP = await Promise.race([
      loadJscpp(),
      new Promise((_, reject) =>
        setTimeout(
          () =>
            reject(
              new Error(
                "C++ runtime took too long to load - check your connection and try again."
              )
            ),
          30_000
        )
      ),
    ]);
  } catch (err) {
    return {
      output: "",
      error: `Could not load C++ runtime: ${err.message}`,
    };
  }

  let captured = "";
  const config = {
    stdio: {
      write: (s) => {
        captured += s;
      },
    },
    unsigned_overflow: "warn",
    maxTimeout: EXEC_TIMEOUT_MS,
  };

  try {
    const exit = await Promise.race([
      Promise.resolve().then(() => JSCPP.run(code, stdin, config)),
      new Promise((_, reject) =>
        setTimeout(
          () =>
            reject(
              new Error(
                "TimeoutError: Code took longer than 6 seconds.\n" +
                  "Hint: Check for infinite loops (e.g. while(true) without a break)."
              )
            ),
          EXEC_TIMEOUT_MS
        )
      ),
    ]);

    if (typeof exit === "number" && exit !== 0) {
      return {
        output: captured,
        error: `Program exited with status ${exit}.`,
      };
    }
    return { output: captured, error: null };
  } catch (err) {
    const message = err?.message ?? String(err);
    return { output: captured, error: message };
  }
}
