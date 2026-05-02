// src/pages/Profile.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useUser, useClerk } from "@clerk/clerk-react";
import { getAllLessons } from "@/lib/curriculum";
import { ArrowLeft, Flame, Target, BookOpen, TrendingUp, LogOut, Heart } from "lucide-react";
import { progressDb } from "@/lib/progressDb";
import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/Navbar";

const ease = [0.16, 1, 0.3, 1];

export default function Profile() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const { supabaseClient } = useAuth();
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn || !supabaseClient) {
      setLoading(false);
      return;
    }

    const loadProgress = async () => {
      try {
        const data = await progressDb.getProgress(
          supabaseClient,
          user.id,
          user.primaryEmailAddress?.emailAddress
        );
        setProgress(data);
      } catch (err) {
        console.error("Failed to load progress:", err);
      } finally {
        setLoading(false);
      }
    };
    loadProgress();
  }, [isLoaded, isSignedIn, user, supabaseClient]);

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-5 h-5 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
      </div>
    );
  }

  if (!isSignedIn) return null;

  const lang = progress?.language || "python";
  const allLessons = getAllLessons(lang);
  const completed = progress?.completed_lessons || [];
  const streak = progress?.streak_days || 0;
  const accuracy =
    progress?.total_exercises > 0
      ? Math.round((progress.correct_exercises / progress.total_exercises) * 100)
      : 0;
  const progressPct =
    allLessons.length > 0
      ? Math.round((completed.length / allLessons.length) * 100)
      : 0;

  const stats = [
    { label: "Day streak", value: streak, icon: Flame },
    { label: "Accuracy", value: `${accuracy}%`, icon: Target },
    { label: "Lessons done", value: completed.length, icon: BookOpen },
    { label: "Exercises", value: progress?.total_exercises || 0, icon: TrendingUp },
  ];

  const displayName =
    user?.fullName ||
    user?.primaryEmailAddress?.emailAddress.split("@")[0] ||
    "Coder";
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const initials = displayName.slice(0, 2).toUpperCase();

  return (
    <div className="min-h-screen bg-white">
      <Navbar streak={streak} hideProfile />

      <div className="max-w-xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-center mb-12"
        >
          <div className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center text-base font-semibold text-zinc-700 mx-auto mb-4">
            {initials}
          </div>
          <h1 className="text-2xl font-bold tracking-tight">{displayName}</h1>
          <p className="text-sm text-zinc-400 mt-1">{userEmail}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.07, ease }}
          className="grid grid-cols-2 gap-3 mb-8"
        >
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="border border-zinc-100 rounded-2xl p-5 hover:border-zinc-200 transition-colors duration-200"
            >
              <Icon size={15} className="text-zinc-300 mb-3" />
              <div className="text-2xl font-bold tracking-tight mb-0.5">{value}</div>
              <div className="text-xs text-zinc-400">{label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14, ease }}
          className="mb-10"
        >
          <div className="flex justify-between text-xs text-zinc-400 mb-2">
            <span>{lang === "python" ? "Python" : "Java"} progress</span>
            <span className="tabular-nums font-medium text-zinc-600">{progressPct}%</span>
          </div>
          <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 1, delay: 0.5, ease }}
              className="h-full bg-zinc-900 rounded-full"
            />
          </div>
        </motion.div>

        {progress?.mistake_patterns?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.21, ease }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
              Areas to improve
            </p>
            <div className="space-y-2">
              {progress.mistake_patterns.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-zinc-600 px-4 py-3 bg-zinc-50 rounded-xl border border-zinc-100"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}