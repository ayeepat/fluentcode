// src/main.jsx
import React, { Suspense, createContext, useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const DEV_BYPASS = import.meta.env.VITE_DEV_BYPASS === "true";

export const MockUserContext = createContext(null);
export const MockClerkContext = createContext(null);

const defaultMockUser = {
  id: "mock-user-1",
  firstName: "Test",
  fullName: "Test User",
  primaryEmailAddress: { emailAddress: "test@fluentcode.dev" },
  imageUrl: null,
};

export const SignIn = () => {
  const ctx = useContext(MockClerkContext);
  useEffect(() => { ctx?.signIn(); }, [ctx]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-6 h-6 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
    </div>
  );
};

export const SignUp = () => {
  const ctx = useContext(MockClerkContext);
  useEffect(() => { ctx?.signUp(); }, [ctx]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-6 h-6 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
    </div>
  );
};

export const SignInButton = ({ children }) => {
  const ctx = useContext(MockClerkContext);
  return (
    <span
      onClick={() => ctx?.signIn()}
      style={{ display: "contents", cursor: "pointer" }}
    >
      {children}
    </span>
  );
};

export const SignUpButton = ({ children }) => {
  const ctx = useContext(MockClerkContext);
  return (
    <span
      onClick={() => ctx?.signUp()}
      style={{ display: "contents", cursor: "pointer" }}
    >
      {children}
    </span>
  );
};

export const SignedIn = ({ children }) => {
  const ctx = useContext(MockUserContext);
  return ctx?.isSignedIn ? children : null;
};

export const SignedOut = ({ children }) => {
  const ctx = useContext(MockUserContext);
  return !ctx?.isSignedIn ? children : null;
};

export const RedirectToSignIn = () => {
  const ctx = useContext(MockClerkContext);
  useEffect(() => { ctx?.signIn(); }, [ctx]);
  return null;
};

export const UserButton = () => {
  const ctx = useContext(MockClerkContext);
  return (
    <button
      onClick={() => ctx?.signOut()}
      className="p-2 rounded-full border border-zinc-100 hover:border-zinc-300 transition-colors"
    >
      <span className="text-sm">👤</span>
    </button>
  );
};

const MockAuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(() => {
    return localStorage.getItem("mock_signed_in") === "true";
  });

  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("mock_user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const signIn = () => {
    setIsSignedIn(true);
    setUser(defaultMockUser);
    localStorage.setItem("mock_signed_in", "true");
    localStorage.setItem("mock_user", JSON.stringify(defaultMockUser));
    window.location.href = "/dashboard";
  };

  const signUp = () => {
    setIsSignedIn(true);
    setUser(defaultMockUser);
    localStorage.setItem("mock_signed_in", "true");
    localStorage.setItem("mock_user", JSON.stringify(defaultMockUser));
    window.location.href = "/dashboard";
  };

  const signOut = () => {
    localStorage.removeItem("mock_signed_in");
    localStorage.removeItem("mock_user");
    setIsSignedIn(false);
    setUser(null);
    window.location.replace("/");
  };

  return (
    <MockClerkContext.Provider value={{ signOut, signIn, signUp }}>
      <MockUserContext.Provider value={{ user, isSignedIn, isLoaded: true }}>
        {children}
      </MockUserContext.Provider>
    </MockClerkContext.Provider>
  );
};

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-6 h-6 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
  </div>
);

let RootApp;

if (DEV_BYPASS) {
  console.log("🔓 DEV_BYPASS: mock auth active");

  RootApp = (
    <React.StrictMode>
      <MockAuthProvider>
        <Suspense fallback={<LoadingFallback />}>
          <App />
        </Suspense>
      </MockAuthProvider>
    </React.StrictMode>
  );
} else {
  const LazyClerkApp = React.lazy(async () => {
    const { ClerkProvider } = await import("@clerk/clerk-react");
    const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

    if (!PUBLISHABLE_KEY) {
      throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY in .env");
    }

    return {
      default: function ClerkApp() {
        return (
          <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            afterSignOutUrl="/"
            appearance={{
              layout: {
                termsPageUrl: "/terms",
                privacyPageUrl: "/privacy",
              },
            }}
          >
            <App />
          </ClerkProvider>
        );
      },
    };
  });

  RootApp = (
    <React.StrictMode>
      <Suspense fallback={<LoadingFallback />}>
        <LazyClerkApp />
      </Suspense>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(RootApp);