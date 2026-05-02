// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { BookOpen, Heart, User, LogOut, Flame } from "lucide-react";
import { useClerk } from "@clerk/clerk-react";

export default function Navbar({ streak = 0, backTo = null, backLabel = null, moduleTitle = null, hideProfile = false }) {
  const { signOut } = useClerk();

  if (backTo) {
    return (
      <nav className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <Link
          to={backTo}
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          ← {backLabel}
        </Link>
        <span className="text-xs text-zinc-400 max-w-xs truncate hidden sm:block">
          {moduleTitle}
        </span>
        <div className="flex items-center gap-3">
          {streak > 0 && (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-100">
              <Flame size={12} className="text-orange-500" />
              <span className="text-xs font-semibold text-orange-500 tabular-nums">
                {streak}
              </span>
            </div>
          )}
          <Link
            to="/dashboard"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <div className="flex items-center gap-3">
        <Link to="/" className="text-sm font-semibold tracking-tight text-zinc-900">
          fluentcode
        </Link>
        {streak > 0 && (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-100">
            <Flame size={12} className="text-orange-500" />
            <span className="text-xs font-semibold text-orange-500 tabular-nums">
              {streak}
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-1">
        <NavBtn to="/courses" icon={<BookOpen size={12} />}>
          Courses
        </NavBtn>
        <NavBtn to="/upgrade" icon={<Heart size={12} className="text-rose-500" />}>
          Support
        </NavBtn>
        {!hideProfile && (
          <NavBtn to="/profile" icon={<User size={12} />}>
            Profile
          </NavBtn>
        )}
        <button
          onClick={() => signOut()}
          className="flex items-center gap-1 text-sm text-zinc-500 hover:text-red-500 px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-all duration-150 ml-1"
        >
          <LogOut size={12} />
          Log out
        </button>
      </div>
    </nav>
  );
}

function NavBtn({ to, icon, children }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-all duration-150"
    >
      {icon}
      {children}
    </Link>
  );
}