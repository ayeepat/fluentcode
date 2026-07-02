// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { BookOpen, Heart, User, LogOut, Flame, ArrowLeft } from "lucide-react";
import { useClerk, useUser, SignInButton, SignUpButton } from "@clerk/clerk-react";
import Wordmark from "@/components/Wordmark";

function StreakBadge({ streak }) {
  if (!streak) return null;
  return (
    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-50 border border-orange-100">
      <Flame size={12} className="text-orange-500" />
      <span className="text-xs font-semibold text-orange-500 tabular-nums">
        {streak}
      </span>
    </div>
  );
}

export default function Navbar({ streak = 0, backTo = null, backLabel = null, moduleTitle = null, hideProfile = false }) {
  const { signOut } = useClerk();
  const { isSignedIn } = useUser();

  if (backTo) {
    return (
      <nav className="sticky top-0 z-40 flex items-center justify-between px-6 py-3.5 bg-white/85 backdrop-blur-xl border-b border-zinc-200/70">
        <Link
          to={backTo}
          className="flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft size={14} />
          {backLabel}
        </Link>
        <span className="text-xs text-zinc-400 max-w-xs truncate hidden sm:block">
          {moduleTitle}
        </span>
        <div className="flex items-center gap-3">
          <StreakBadge streak={streak} />
          {isSignedIn ? (
            <Link
              to="/dashboard"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Dashboard
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <SignInButton mode="modal">
                <button className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Log in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="text-sm font-medium bg-zinc-900 text-white px-3.5 py-1.5 rounded-full hover:bg-zinc-700 transition-all">
                  Sign up
                </button>
              </SignUpButton>
            </div>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between px-6 py-3.5 bg-white/85 backdrop-blur-xl border-b border-zinc-200/70">
      <div className="flex items-center gap-3">
        <Link to="/">
          <Wordmark />
        </Link>
        <StreakBadge streak={streak} />
      </div>
      <div className="flex items-center gap-1">
        <NavBtn to="/courses" icon={<BookOpen size={12} />}>
          Courses
        </NavBtn>
        {isSignedIn ? (
          <>
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
          </>
        ) : (
          <>
            <div className="w-px h-4 bg-zinc-200 mx-2" />
            <SignInButton mode="modal">
              <button className="text-sm text-zinc-500 hover:text-zinc-900 px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-all duration-150">
                Log in
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="text-sm font-medium bg-zinc-900 text-white px-4 py-1.5 rounded-full hover:bg-zinc-700 transition-all duration-200 ml-1">
                Sign up
              </button>
            </SignUpButton>
          </>
        )}
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
