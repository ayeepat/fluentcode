// src/pages/Courses.jsx
import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  getAllLessons,
  getModulesByLanguage,
  hasVersion2,
  loadCurriculum,
} from "@/lib/curriculum";
import { isGuestAccessible } from "@/lib/guestAccess";
import { localProgressDb } from "@/lib/localProgressDb";
import {
  Check,
  Lock,
  Circle,
  ArrowRight,
  HelpCircle,
  Smartphone,
  Code2,
  Loader2,
} from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { progressDb } from "@/lib/progressDb";
import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/Navbar";

const ease = [0.16, 1, 0.3, 1];

// ---------------------------------------------------------------------------
// Language list — inlined here so this component never depends on an async
// export from curriculum.js. If you add a language, update this array too.
// ---------------------------------------------------------------------------
const LANGUAGES = [
  { key: "python",     label: "Python",     mono: "Py" },
  { key: "javascript", label: "JavaScript", mono: "JS" },
  { key: "typescript", label: "TypeScript", mono: "TS" },
  { key: "java",       label: "Java",       mono: "Jv" },
  { key: "ruby",       label: "Ruby",       mono: "Rb" },
  { key: "cpp",        label: "C++",        mono: "C+" },
  { key: "go",         label: "Go",         mono: "Go" },
  { key: "rust",       label: "Rust",       mono: "Rs" },
];

export default function Courses() {
  const { user, isSignedIn, isLoaded } = useUser();
  const { supabaseClient } = useAuth();
  const [progress, setProgress]               = useState(null);
  const [selectedLang, setSelectedLang]       = useState("python");
  const [mode, setMode]                       = useState("lessons");
  const [loading, setLoading]                 = useState(true);
  const [langLoading, setLangLoading]         = useState(false);
  const [curriculumVersion, setCurriculumVersion] = useState(2);
  const navigate  = useNavigate();
  const location  = useLocation();

  const isGuest = !isSignedIn;

  // ------------------------------------------------------------------
  // Load progress + ensure the default curriculum chunk is ready
  // ------------------------------------------------------------------
  const loadProgress = useCallback(async () => {
    if (!isLoaded) return;

    if (isGuest) {
      const guestData = localProgressDb.getProgress();
      const lang      = guestData.language || "python";
      const version   = hasVersion2(lang) ? 2 : 1;
      await loadCurriculum(lang, version);
      setProgress({
        completed_lessons:        guestData.completed_lessons,
        completed_quizzes:        guestData.completed_quizzes,
        streak_days:              0,
        language:                 lang,
        v1_python_completed_count: 0,
      });
      setSelectedLang(lang);
      setCurriculumVersion(version);
      setLoading(false);
      return;
    }

    if (!supabaseClient || !user) {
      await loadCurriculum("python", 2);
      setLoading(false);
      return;
    }

    try {
      const data = await progressDb.getProgress(
        supabaseClient,
        user.id,
        user.primaryEmailAddress?.emailAddress
      );
      if (data) {
        const lang    = data.language || "python";
        const version = data.curriculum_version || (hasVersion2(lang) ? 2 : 1);
        await loadCurriculum(lang, version);
        setProgress(data);
        setSelectedLang(lang);
        setCurriculumVersion(version);
      } else {
        await loadCurriculum("python", 2);
      }
    } catch (err) {
      console.error("Failed to load progress:", err);
      await loadCurriculum("python", 2);
    } finally {
      setLoading(false);
    }
  }, [isLoaded, isGuest, supabaseClient, user]);

  useEffect(() => {
    loadProgress();
  }, [loadProgress, location.key]);

  // ------------------------------------------------------------------
  // Language switch
  // ------------------------------------------------------------------
  const handleLangChange = useCallback(
    async (key) => {
      if (key === selectedLang) return;
      const version = hasVersion2(key) ? 2 : 1;
      setLangLoading(true);
      try {
        await loadCurriculum(key, version);
      } catch (err) {
        console.error("Failed to load curriculum for", key, err);
      } finally {
        setLangLoading(false);
      }
      setSelectedLang(key);
      setCurriculumVersion(version);
    },
    [selectedLang]
  );

  // ------------------------------------------------------------------
  // Full-screen initial loading
  // ------------------------------------------------------------------
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-5 h-5 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
      </div>
    );
  }

  // ------------------------------------------------------------------
  // Derived data
  // ------------------------------------------------------------------
  const completedLessons  = progress?.completed_lessons || [];
  const completedQuizzes  = progress?.completed_quizzes || [];
  const streak            = progress?.streak_days || 0;
  const allFlat           = getAllLessons(selectedLang, curriculumVersion);
  const totalLessons      = allFlat.length;

  const completedLessonCount = completedLessons.filter((id) =>
    allFlat.some((l) => l.id === id)
  ).length;
  const completedQuizCount = completedQuizzes.filter((id) =>
    allFlat.some((l) => l.id === id)
  ).length;

  const v1CompletedCount = progress?.v1_python_completed_count || 0;

  const progressPct =
    totalLessons > 0
      ? Math.round(
          ((mode === "quiz" ? completedQuizCount : completedLessonCount) /
            totalLessons) *
            100
        )
      : 0;

  // ------------------------------------------------------------------
  // Unlock logic
  // ------------------------------------------------------------------
  const isUnlocked = (lessonId) => {
    if (isGuest) return isGuestAccessible(selectedLang, lessonId);

    const idx = allFlat.findIndex((l) => l.id === lessonId);
    if (idx === 0) return true;
    if (idx === -1) return false;

    // Already completed this exact lesson
    if (completedLessons.includes(lessonId)) return true;

    // Standard sequential: previous lesson done
    if (completedLessons.includes(allFlat[idx - 1]?.id)) return true;

    // V1→V2 migration: auto-unlock first (N+1) V2 lessons for users
    // who completed N lessons in the old V1 Python curriculum
    if (
      selectedLang === "python" &&
      curriculumVersion === 2 &&
      v1CompletedCount > 0 &&
      idx <= v1CompletedCount
    ) {
      return true;
    }

    return false;
  };

  const modules = getModulesByLanguage(selectedLang, curriculumVersion);

  // ------------------------------------------------------------------
  // Render
  // ------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Courses & Lessons | Learn Python Coding</title>
        <meta name="description" content="Browse Python courses with interactive lessons, quizzes, and AI-powered code feedback. Progress tracking and structured learning paths." />
        <meta property="og:title" content="Courses & Lessons | FluentlyCode" />
        <meta property="og:description" content="Interactive Python curriculum with hands-on coding lessons and instant feedback." />
      </Helmet>
      <Navbar streak={streak} />

      <div className="max-w-2xl mx-auto px-6 py-14">

        {/* Header + progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-8"
        >
          <div className="flex items-end justify-between gap-4 mb-1.5">
            <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
            <span className="text-sm font-semibold text-zinc-900 tabular-nums pb-0.5">
              {progressPct}%
            </span>
          </div>
          <p className="text-sm text-zinc-400">
            {mode === "quiz"
              ? `${completedQuizCount} of ${totalLessons} quizzes completed`
              : `${completedLessonCount} of ${totalLessons} lessons completed`}
          </p>
          <div className="mt-4 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="h-full bg-zinc-900 rounded-full"
            />
          </div>

          {/* V1→V2 migration notice */}
          {v1CompletedCount > 0 &&
            selectedLang === "python" &&
            curriculumVersion === 2 &&
            completedLessonCount < v1CompletedCount && (
              <p className="text-xs text-blue-500 mt-3">
                ✨ You completed {v1CompletedCount} lessons in the previous
                curriculum — the first {v1CompletedCount} lessons here are
                unlocked for you.
              </p>
            )}
        </motion.div>

        {/* Lessons / Quiz toggle */}
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

        {/* Quiz tip banner */}
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
                  Quiz mode works great on mobile — no typing needed, just tap your answers.
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
          className="flex gap-2 mb-10 flex-wrap"
        >
          {LANGUAGES.map(({ key, label, mono }) => {
            const active = selectedLang === key;
            return (
              <button
                key={key}
                onClick={() => handleLangChange(key)}
                disabled={langLoading}
                className={`flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 disabled:opacity-60 ${
                  active
                    ? "bg-zinc-900 text-white shadow-[0_4px_16px_-4px_rgba(0,0,0,0.3)]"
                    : "border border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-900 bg-white"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold font-mono ${
                    active ? "bg-white/15 text-white" : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  {langLoading && active ? (
                    <Loader2 size={11} className="animate-spin" />
                  ) : (
                    mono
                  )}
                </span>
                {label}
              </button>
            );
          })}
        </motion.div>

        {/* Curriculum content */}
        <AnimatePresence mode="wait">
          {langLoading ? (
            <motion.div
              key="lang-loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center py-24"
            >
              <Loader2 size={20} className="animate-spin text-zinc-300" />
            </motion.div>
          ) : (
            <motion.div
              key={`${selectedLang}-${mode}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease }}
              className="space-y-6"
            >
              {modules.map((module) => {
                const modLessons          = module.lessons;
                const modCompletedLessons = modLessons.filter((l) =>
                  completedLessons.includes(l.id)
                ).length;
                const modCompletedQuizzes = modLessons.filter((l) =>
                  completedQuizzes.includes(l.id)
                ).length;
                const modDone =
                  mode === "quiz" ? modCompletedQuizzes : modCompletedLessons;
                const modPct =
                  modLessons.length > 0
                    ? Math.round((modDone / modLessons.length) * 100)
                    : 0;

                return (
                  <div
                    key={module.id}
                    className="border border-zinc-200 rounded-3xl bg-white overflow-hidden"
                  >
                    {/* Module header */}
                    <div className="px-5 pt-5 pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                          {module.title}
                        </p>
                        <span
                          className={`text-xs font-medium tabular-nums px-2 py-0.5 rounded-full ${
                            modPct === 100
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-zinc-100 text-zinc-500"
                          }`}
                        >
                          {modDone}/{modLessons.length}
                        </span>
                      </div>
                      <div className="h-1 bg-zinc-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                          style={{ width: `${modPct}%` }}
                        />
                      </div>
                    </div>

                    {/* Lessons */}
                    <div className="divide-y divide-zinc-100 border-t border-zinc-100">
                      {modLessons.map((lesson, li) => {
                        if (mode === "quiz") {
                          const quizDone      = completedQuizzes.includes(lesson.id);
                          const quizAccessible = isGuest
                            ? isGuestAccessible(selectedLang, lesson.id)
                            : true;

                          if (!quizAccessible) {
                            return (
                              <div
                                key={lesson.id}
                                className="flex items-center gap-3 px-5 py-3.5 opacity-40 cursor-not-allowed select-none"
                              >
                                <span className="w-6 text-xs text-zinc-300 tabular-nums shrink-0">
                                  {String(li + 1).padStart(2, "0")}
                                </span>
                                <Lock size={14} className="text-zinc-300 shrink-0" />
                                <span className="text-sm text-zinc-400 flex-1">
                                  {lesson.title}
                                </span>
                                <span className="text-xs text-zinc-300">
                                  Sign up to unlock
                                </span>
                              </div>
                            );
                          }

                          return (
                            <button
                              key={lesson.id}
                              onClick={() =>
                                navigate(`/quiz/${selectedLang}/${lesson.id}`)
                              }
                              className={`w-full flex items-center gap-3 px-5 py-3.5 transition-colors duration-150 group text-left ${
                                quizDone ? "bg-emerald-50/40 hover:bg-emerald-50/70" : "hover:bg-zinc-50"
                              }`}
                            >
                              <span className="w-6 text-xs text-zinc-300 tabular-nums shrink-0">
                                {String(li + 1).padStart(2, "0")}
                              </span>
                              {quizDone ? (
                                <Check size={14} strokeWidth={3} className="text-emerald-500 shrink-0" />
                              ) : (
                                <HelpCircle size={14} className="text-zinc-300 group-hover:text-zinc-600 transition-colors shrink-0" />
                              )}
                              <span className={`text-sm font-medium flex-1 ${quizDone ? "text-emerald-700" : "text-zinc-700"}`}>
                                {lesson.title}
                              </span>
                              <span className={`text-xs ${quizDone ? "text-emerald-500" : "text-zinc-400"}`}>
                                {quizDone ? "Completed" : "5 questions"}
                              </span>
                            </button>
                          );
                        }

                        const done     = completedLessons.includes(lesson.id);
                        const unlocked = isUnlocked(lesson.id);

                        return (
                          <LessonRow
                            key={lesson.id}
                            lesson={lesson}
                            index={li}
                            done={done}
                            unlocked={unlocked}
                            lang={selectedLang}
                            isGuest={isGuest}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function LessonRow({ lesson, index = 0, done, unlocked, lang, isGuest }) {
  const num = String(index + 1).padStart(2, "0");

  if (!unlocked) {
    return (
      <div className="flex items-center gap-3 px-5 py-3.5 opacity-40 cursor-not-allowed select-none">
        <span className="w-6 text-xs text-zinc-300 tabular-nums shrink-0">{num}</span>
        <Lock size={14} className="text-zinc-300 shrink-0" />
        <span className="text-sm text-zinc-400 flex-1">{lesson.title}</span>
        <span className="text-xs text-zinc-300">
          {isGuest ? "Sign up to unlock" : "Locked"}
        </span>
      </div>
    );
  }

  return (
    <Link
      to={`/lesson/${lang}/${lesson.id}`}
      className={`flex items-center gap-3 px-5 py-3.5 transition-colors duration-150 group ${
        done ? "bg-emerald-50/40 hover:bg-emerald-50/70" : "hover:bg-zinc-50"
      }`}
    >
      <span className="w-6 text-xs text-zinc-300 tabular-nums shrink-0">{num}</span>
      {done ? (
        <Check size={15} strokeWidth={3} className="text-emerald-500 shrink-0" />
      ) : (
        <Circle size={15} className="text-zinc-300 group-hover:text-zinc-500 transition-colors shrink-0" />
      )}
      <span className={`text-sm flex-1 font-medium ${done ? "text-emerald-700" : "text-zinc-700"}`}>
        {lesson.title}
      </span>
      {done ? (
        <span className="text-xs text-emerald-500 font-medium">Completed</span>
      ) : (
        <ArrowRight size={13} className="text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-0.5 transition-all duration-200" />
      )}
    </Link>
  );
}