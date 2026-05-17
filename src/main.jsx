// src/main.jsx
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

if (!PUBLISHABLE_KEY) {
  console.error("Missing VITE_CLERK_PUBLISHABLE_KEY in .env");
  console.error("Available env vars:", Object.keys(import.meta.env).filter(k => k.startsWith('VITE_')));
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY in .env");
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
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
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
    </HelmetProvider>
  </React.StrictMode>
);

console.log("✓ App rendered successfully");