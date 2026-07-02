// src/lib/clerk-stub.jsx
// Guest-mode stand-in for @clerk/clerk-react, used ONLY when
// VITE_CLERK_PUBLISHABLE_KEY is missing or a placeholder (see vite.config.js).
// Every hook reports "loaded, signed out" so the app runs fully as a guest
// instead of crashing at startup.

/* eslint-disable react-refresh/only-export-components */

const warnOnce = (() => {
  let warned = false;
  return () => {
    if (warned) return;
    warned = true;
    console.warn(
      "⚠️ Clerk key not configured — auth is disabled, running in guest mode. " +
        "Set VITE_CLERK_PUBLISHABLE_KEY in .env.local to enable sign-in."
    );
  };
})();

export function ClerkProvider({ children }) {
  warnOnce();
  return children;
}

export const useUser = () => ({ user: null, isLoaded: true, isSignedIn: false });
export const useAuth = () => ({
  isLoaded: true,
  isSignedIn: false,
  userId: null,
  sessionId: null,
  getToken: async () => null,
  signOut: async () => {},
});
export const useSession = () => ({ session: null, isLoaded: true, isSignedIn: false });
export const useClerk = () => ({
  signOut: async () => {},
  openSignIn: () => warnOnce(),
  openSignUp: () => warnOnce(),
});

export const SignedIn = () => null;
export const SignedOut = ({ children }) => children;

export function RedirectToSignIn() {
  if (typeof window !== "undefined" && window.location.pathname !== "/") {
    window.location.replace("/");
  }
  return null;
}

// Buttons render their child untouched; clicking just logs the warning.
const passthroughButton = ({ children }) => {
  if (children && typeof children === "object") return children;
  return <button onClick={warnOnce}>{children}</button>;
};
export const SignInButton = passthroughButton;
export const SignUpButton = passthroughButton;

const AuthNotConfigured = () => (
  <div className="min-h-[40vh] flex items-center justify-center text-center px-6">
    <div>
      <p className="font-semibold text-zinc-900 mb-1">Auth not configured</p>
      <p className="text-sm text-zinc-500">
        Set VITE_CLERK_PUBLISHABLE_KEY in .env.local to enable sign-in.
      </p>
    </div>
  </div>
);
export const SignIn = AuthNotConfigured;
export const SignUp = AuthNotConfigured;
