// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useUser } from "@clerk/clerk-react";
import { curriculum, getAllLessons } from "@/lib/curriculum";
import { ArrowRight, Flame, Target, BookOpen, Sparkles } from "lucide-react";
import { progressDb } from "@/lib/progressDb";
import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/Navbar";

const ease = [0.16, 1, 0.3, 1];

const stagger = (i) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: i * 0.07, ease },
});

export default function Dashboard() {
  const { user, isSignedIn, isLoaded } = useUser();
  const { supabaseClient } = useAuth();
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [aiRemaining, setAiRemaining] = useState(null);

  useEffect(() => {
    // Wait for auth to load
    if (!isLoaded) return;
    // If not signed in, stop loading
    if (!isSignedIn) {
      setLoading(false);
      return;
    }
    // Wait for supabase client (max ~5 seconds then give up)
    if (!supabaseClient) return;

    const loadProgress = async () => {
      try {
        const clerkUserId = user.id;
        const email = user.primaryEmailAddress?.emailAddress;
        const data = await progressDb.getProgress(
          supabaseClient,
          clerkUserId,
          email
        );
        setProgress(data);

        const remaining = await progressDb.getAiRequestsRemaining(
          supabaseClient,
          clerkUserId,
          data?.is_pro
        );
        setAiRemaining(remaining);
      } catch (err) {
        console.error("Failed to load progress:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [isLoaded, isSignedIn, user, supabaseClient]);

  // Safety timeout — if still loading after 8 seconds, stop
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        console.warn("Loading timeout hit — forcing render");
        setLoading(false);
      }
    }, 8000);
    return () => clearTimeout(timeout);
  }, [loading]);

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
  const nextLesson = allLessons.find((l) => !completed.includes(l.id));
  const accuracy =
    progress?.total_exercises > 0
      ? Math.round(
          (progress.correct_exercises / progress.total_exercises) * 100
        )
      : 0;
  const progressPct =
    allLessons.length > 0
      ? Math.round((completed.length / allLessons.length) * 100)
      : 0;

  const isPro = progress?.is_pro || false;
  const streak = progress?.streak_days || 0;

  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 18) return "Good afternoon";
    return "Good evening";
  };

  const displayName =
    user?.firstName ||
    user?.fullName ||
    user?.primaryEmailAddress?.emailAddress.split("@")[0] ||
    "Coder";

  const stats = [
    { label: "Day streak", value: streak, icon: Flame },
    { label: "Accuracy", value: `${accuracy}%`, icon: Target },
    {
      label: "Completed",
      value: `${completed.length}/${allLessons.length}`,
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar streak={streak} />

      <div className="max-w-2xl mx-auto px-6 py-14">
        <motion.div {...stagger(0)} className="mb-10">
          <p className="text-sm text-zinc-400 mb-1">{getGreeting()},</p>
          <h1 className="text-3xl font-bold tracking-tight">
            {displayName}
            {isPro && (
              <span className="ml-2 text-xs font-semibold bg-emerald-500 text-white px-2 py-0.5 rounded-full align-middle uppercase tracking-wider">
                Supporter
              </span>
            )}
          </h1>
        </motion.div>

        <motion.div {...stagger(1)} className="grid grid-cols-3 gap-3 mb-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="border border-zinc-100 rounded-2xl p-5 hover:border-zinc-200 transition-colors duration-200"
            >
              <Icon size={15} className="text-zinc-300 mb-3" />
              <div className="text-2xl font-bold tracking-tight mb-0.5">
                {value}
              </div>
              <div className="text-xs text-zinc-400">{label}</div>
            </div>
          ))}
        </motion.div>

        {aiRemaining !== null && (
          <motion.div {...stagger(1.5)} className="mb-8">
            <div className="flex items-center justify-between border border-zinc-100 rounded-2xl px-5 py-4">
              <div className="flex items-center gap-3">
                <Sparkles size={15} className="text-zinc-300" />
                <div>
                  <div className="text-sm font-medium text-zinc-700">
                    AI Reviews Today
                  </div>
                  <div className="text-xs text-zinc-400">
                    {aiRemaining === 0
                      ? "Resets tomorrow"
                      : `${aiRemaining} remaining`}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < 10 - aiRemaining ? "bg-zinc-900" : "bg-zinc-100"
                      }`}
                    />
                  ))}
                </div>
                <span
                  className={`text-sm font-bold tabular-nums ${
                    aiRemaining <= 2 ? "text-amber-500" : "text-zinc-900"
                  }`}
                >
                  {aiRemaining}/10
                </span>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div {...stagger(2)} className="mb-10">
          <div className="flex justify-between text-xs text-zinc-400 mb-2">
            <span>{curriculum[lang]?.label} progress</span>
            <span className="tabular-nums font-medium text-zinc-600">
              {progressPct}%
            </span>
          </div>
          <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 1, delay: 0.4, ease }}
              className="h-full bg-zinc-900 rounded-full"
            />
          </div>
        </motion.div>

        <motion.div {...stagger(3)}>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
            {nextLesson ? "Continue learning" : "All done"}
          </p>
          {nextLesson ? (
            <Link
              to={`/lesson/${lang}/${nextLesson.id}`}
              className="flex items-center justify-between p-5 border border-zinc-200 rounded-2xl hover:border-zinc-900 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-200 group"
            >
              <div>
                <div className="text-xs text-zinc-400 mb-1">
                  {nextLesson.moduleTitle}
                </div>
                <div className="text-base font-semibold text-zinc-900">
                  {nextLesson.title}
                </div>
              </div>
              <ArrowRight
                size={15}
                className="text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
              />
            </Link>
          ) : (
            <div className="text-center py-16 border border-zinc-100 rounded-2xl">
              <p className="text-2xl mb-2">🎉</p>
              <p className="font-semibold text-zinc-900 mb-1">
                All lessons complete!
              </p>
              <p className="text-sm text-zinc-400">More content coming soon.</p>
            </div>
          )}
        </motion.div>

        <motion.div {...stagger(4)} className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              All modules
            </p>
            <Link
              to="/courses"
              className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-1.5">
            {curriculum[lang]?.modules.slice(0, 4).map((mod) => {
              const modLessons = mod.lessons;
              const modCompleted = modLessons.filter((l) =>
                completed.includes(l.id)
              ).length;
              const pct = Math.round(
                (modCompleted / modLessons.length) * 100
              );
              return (
                <Link
                  key={mod.id}
                  to="/courses"
                  className="flex items-center gap-4 px-4 py-3.5 border border-zinc-100 rounded-xl hover:border-zinc-300 transition-all duration-200 group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-zinc-700 truncate">
                      {mod.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-16 h-1 bg-zinc-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-zinc-900 rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-zinc-400 tabular-nums w-8 text-right">
                      {modCompleted}/{modLessons.length}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}