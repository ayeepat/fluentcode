// src/pages/Courses.jsx
import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { curriculum } from "@/lib/curriculum";
import { Check, Lock, Circle, ArrowRight, HelpCircle, Smartphone, Code2 } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { progressDb } from "@/lib/progressDb";
import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/Navbar";

const ease = [0.16, 1, 0.3, 1];

export default function Courses() {
  const { user, isSignedIn, isLoaded } = useUser();
  const { supabaseClient } = useAuth();
  const [progress, setProgress] = useState(null);
  const [selectedLang, setSelectedLang] = useState("python");
  const [mode, setMode] = useState("lessons");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const loadProgress = useCallback(async () => {
    if (!isLoaded || !isSignedIn || !supabaseClient || !user) return;
    setLoading(true);
    try {
      const data = await progressDb.getProgress(
        supabaseClient,
        user.id,
        user.primaryEmailAddress?.emailAddress
      );
      if (data) {
        setProgress(data);
        setSelectedLang(data.language || "python");
      }
    } catch (err) {
      console.error("Failed to load progress:", err);
    } finally {
      setLoading(false);
    }
  }, [isLoaded, isSignedIn, user, supabaseClient]);

  // Refetch every time this page is navigated to
  useEffect(() => {
    loadProgress();
  }, [loadProgress, location.key]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-5 h-5 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
      </div>
    );
  }

  const completedLessons = progress?.completed_lessons || [];
  const completedQuizzes = progress?.completed_quizzes || [];
  const streak = progress?.streak_days || 0;
  const lang = curriculum[selectedLang];
  const allFlat = lang.modules.flatMap((m) => m.lessons);
  const totalLessons = allFlat.length;
  const completedLessonCount = completedLessons.filter((id) =>
    allFlat.some((l) => l.id === id)
  ).length;
  const completedQuizCount = completedQuizzes.filter((id) =>
    allFlat.some((l) => l.id === id)
  ).length;

  const progressPct =
    totalLessons > 0
      ? Math.round(
          ((mode === "quiz" ? completedQuizCount : completedLessonCount) /
            totalLessons) *
            100
        )
      : 0;

  const isUnlocked = (lessonId) => {
    const idx = allFlat.findIndex((l) => l.id === lessonId);
    if (idx === 0) return true;
    if (idx === -1) return false;
    return completedLessons.includes(allFlat[idx - 1]?.id);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar streak={streak} />

      <div className="max-w-2xl mx-auto px-6 py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight mb-1.5">Courses</h1>
          <p className="text-sm text-zinc-400">
            {mode === "quiz"
              ? `${completedQuizCount} of ${totalLessons} quizzes completed`
              : `${completedLessonCount} of ${totalLessons} lessons completed`}
          </p>
          <div className="mt-4 h-1 bg-zinc-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="h-full bg-zinc-900 rounded-full"
            />
          </div>
        </motion.div>

        {/* Mode segmented control */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease }}
          className="relative flex bg-zinc-100 rounded-2xl p-1 mb-6"
        >
          <motion.div
            layout
            className="absolute top-1 bottom-1 rounded-xl bg-white shadow-sm"
            style={{ width: "calc(50% - 4px)" }}
            animate={{ x: mode === "lessons" ? 0 : "calc(100% + 4px)" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          />

          <button
            onClick={() => setMode("lessons")}
            className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
              mode === "lessons" ? "text-zinc-900" : "text-zinc-400"
            }`}
          >
            <Code2 size={15} />
            Lessons
          </button>
          <button
            onClick={() => setMode("quiz")}
            className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
              mode === "quiz" ? "text-zinc-900" : "text-zinc-400"
            }`}
          >
            <HelpCircle size={15} />
            Quiz
          </button>
        </motion.div>

        {/* Mobile tip — only shown in quiz mode */}
        <AnimatePresence>
          {mode === "quiz" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-2.5 px-4 py-3 bg-blue-50 border border-blue-100 rounded-xl mb-6 text-sm text-blue-700">
                <Smartphone size={14} className="text-blue-400 shrink-0" />
                <span>
                  Quiz mode works great on mobile — no typing needed, just tap
                  your answers.
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Language selector */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
          className="flex gap-2 mb-10"
        >
          {Object.entries(curriculum).map(([key, val]) => (
            <button
              key={key}
              onClick={() => setSelectedLang(key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedLang === key
                  ? "bg-zinc-900 text-white"
                  : "border border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-900"
              }`}
            >
              {val.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedLang}-${mode}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease }}
            className="space-y-10"
          >
            {lang.modules.map((module) => {
              const modLessons = module.lessons;
              const modCompletedLessons = modLessons.filter((l) =>
                completedLessons.includes(l.id)
              ).length;
              const modCompletedQuizzes = modLessons.filter((l) =>
                completedQuizzes.includes(l.id)
              ).length;

              return (
                <div key={module.id}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                      {module.title}
                    </p>
                    <span className="text-xs text-zinc-300 tabular-nums">
                      {mode === "quiz"
                        ? `${modCompletedQuizzes}/${modLessons.length}`
                        : `${modCompletedLessons}/${modLessons.length}`}
                    </span>
                  </div>

                  <div className="h-0.5 bg-zinc-100 rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{
                        width: `${
                          modLessons.length > 0
                            ? Math.round(
                                ((mode === "quiz"
                                  ? modCompletedQuizzes
                                  : modCompletedLessons) /
                                  modLessons.length) *
                                  100
                              )
                            : 0
                        }%`,
                      }}
                    />
                  </div>

                  <div className="space-y-1.5">
                    {modLessons.map((lesson) => {
                      if (mode === "quiz") {
                        const quizDone = completedQuizzes.includes(lesson.id);

                        return (
                          <button
                            key={lesson.id}
                            onClick={() =>
                              navigate(
                                `/quiz/${selectedLang}/${lesson.id}`
                              )
                            }
                            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-200 group text-left ${
                              quizDone
                                ? "border-emerald-100 bg-emerald-50/30 hover:border-emerald-300"
                                : "border-zinc-200 hover:border-zinc-900"
                            }`}
                          >
                            {quizDone ? (
                              <Check
                                size={13}
                                strokeWidth={3}
                                className="text-emerald-500 shrink-0"
                              />
                            ) : (
                              <HelpCircle
                                size={14}
                                className="text-zinc-300 group-hover:text-zinc-600 transition-colors shrink-0"
                              />
                            )}
                            <span
                              className={`text-sm font-medium flex-1 ${
                                quizDone
                                  ? "text-emerald-700"
                                  : "text-zinc-700"
                              }`}
                            >
                              {lesson.title}
                            </span>
                            <span
                              className={`text-xs ${
                                quizDone
                                  ? "text-emerald-500"
                                  : "text-zinc-400"
                              }`}
                            >
                              {quizDone ? "Completed" : "7 questions"}
                            </span>
                          </button>
                        );
                      }

                      const done = completedLessons.includes(lesson.id);
                      const unlocked = isUnlocked(lesson.id);

                      return (
                        <LessonRow
                          key={lesson.id}
                          lesson={lesson}
                          done={done}
                          unlocked={unlocked}
                          lang={selectedLang}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function LessonRow({ lesson, done, unlocked, lang }) {
  if (!unlocked) {
    return (
      <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-zinc-100 opacity-40 cursor-not-allowed select-none">
        <Lock size={14} className="text-zinc-300 shrink-0" />
        <span className="text-sm text-zinc-400 flex-1">{lesson.title}</span>
        <span className="text-xs text-zinc-300">Locked</span>
      </div>
    );
  }

  return (
    <Link
      to={`/lesson/${lang}/${lesson.id}`}
      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-200 group ${
        done
          ? "border-emerald-100 bg-emerald-50/30 hover:border-emerald-200"
          : "border-zinc-200 hover:border-zinc-900 hover:bg-white"
      }`}
    >
      {done ? (
        <Check
          size={15}
          strokeWidth={3}
          className="text-emerald-500 shrink-0"
        />
      ) : (
        <Circle
          size={15}
          className="text-zinc-300 group-hover:text-zinc-500 transition-colors shrink-0"
        />
      )}
      <span
        className={`text-sm flex-1 ${
          done
            ? "text-emerald-700 font-medium"
            : "text-zinc-700 font-medium"
        }`}
      >
        {lesson.title}
      </span>
      {done ? (
        <span className="text-xs text-emerald-500 font-medium">
          Completed
        </span>
      ) : (
        <ArrowRight
          size={13}
          className="text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-0.5 transition-all duration-200"
        />
      )}
    </Link>
  );
}