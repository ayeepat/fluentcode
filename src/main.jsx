// src/main.jsx
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY in .env");
}

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-6 h-6 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
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
    </Suspense>
  </React.StrictMode>
);