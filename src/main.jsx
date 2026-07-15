import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { inject } from "@vercel/analytics";
import { ClerkProvider } from "@clerk/clerk-react";
import { HelmetProvider } from "react-helmet-async";

console.log("✓ main.jsx loaded successfully");
inject();

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

console.log("🔍 Checking Clerk key...", PUBLISHABLE_KEY ? "✓ Found" : "✗ Missing");

// Simple warning if key is missing - no broken if block
if (!PUBLISHABLE_KEY) {
  console.warn("⚠️ VITE_CLERK_PUBLISHABLE_KEY is not set. Using guest mode.");
}

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-6 h-6 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
  </div>
);

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("❌ Root element not found!");
} else {
  console.log("✓ Root element found, mounting React");
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HelmetProvider>
        <Suspense fallback={<LoadingFallback />}>
          {PUBLISHABLE_KEY ? (
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
          ) : (
            // No Clerk key: vite.config.js has aliased @clerk/clerk-react to the
            // guest-mode stub (src/lib/clerk-stub.jsx), whose hooks work without a
            // provider. Render the app so guests can still use it instead of
            // showing a dead-end configuration screen.
            <App />
          )}
        </Suspense>
      </HelmetProvider>
    </React.StrictMode>
  );
}

console.log("✓ App mounted");