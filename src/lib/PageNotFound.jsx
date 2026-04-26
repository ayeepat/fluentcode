// src/lib/PageNotFound.jsx
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <div className="text-center">
        <p className="text-8xl font-bold text-zinc-100 mb-6 tracking-tight">404</p>
        <h1 className="text-2xl font-semibold text-zinc-900 mb-2">Page not found</h1>
        <p className="text-sm text-zinc-400 mb-8">
          <span className="font-mono text-zinc-500">{location.pathname}</span> doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 px-5 py-2.5 rounded-full border border-zinc-200 hover:border-zinc-400 hover:text-zinc-900 transition-all duration-200"
        >
          <ArrowLeft size={14} />
          Go home
        </Link>
      </div>
    </div>
  );
}