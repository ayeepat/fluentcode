// src/pages/QuizHub.jsx
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useUser } from "@clerk/clerk-react";
import {
  getCurriculumByVersion,
  hasVersion2,
  loadCurriculum,
} from "@/lib/curriculum";
import { progressDb } from "@/lib/progressDb";
import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/Navbar";
import { HelpCircle, Check, Loader2 } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

// ---------------------------------------------------------------------------
// Language list — inlined so this component never depends on an async
// export from curriculum.js. If you add a language, update this array too.
// ---------------------------------------------------------------------------
const LANGUAGES = [
  { key: "python",     label: "Python"     },
  { key: "javascript", label: "JavaScript" },
  { key: "typescript", label: "TypeScript" },
  { key: "java",       label: "Java"       },
  { key: "ruby",       label: "Ruby"       },
  { key: "cpp",        label: "C++"        },
  { key: "go",         label: "Go"         },
  { key: "rust",       label: "Rust"       },
];

export default function QuizHub() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { supabaseClient } = useAuth();
  const [progress, setProgress]                   = useState(null);
  const [selectedLang, setSelectedLang]           = useState("python");
  const [curriculumVersion, setCurriculumVersion] = useState(2);
  const [loading, setLoading]                     = useState(true);
  const [langLoading, setLangLoading]             = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ------------------------------------------------------------------
  // Version resolver
  // ------------------------------------------------------------------
  const resolveVersion = useCallback(
    (lang, progressData) => {
      if (!isSignedIn) return hasVersion2(lang) ? 2 : 1;
      return progressData?.curriculum_version || 1;
    },
    [isSignedIn]
  );

  // ------------------------------------------------------------------
  // Load progress + ensure the default curriculum chunk is ready
  // ------------------------------------------------------------------
  const loadProgress = useCallback(async () => {
    if (!isLoaded) return;

    if (!isSignedIn || !supabaseClient || !user) {
      const version = resolveVersion(selectedLang, null);
      await loadCurriculum(selectedLang, version);
      setCurriculumVersion(version);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const data = await progressDb.getProgress(
        supabaseClient,
        user.id,
        user.primaryEmailAddress?.emailAddress
      );
      if (data) {
        const lang    = data.language || "python";
        const version = resolveVersion(lang, data);
        await loadCurriculum(lang, version);
        setProgress(data);
        setSelectedLang(lang);
        setCurriculumVersion(version);
      } else {
        const version = resolveVersion(selectedLang, null);
        await loadCurriculum(selectedLang, version);
        setCurriculumVersion(version);
      }
    } catch (err) {
      console.error(err);
      const version = resolveVersion(selectedLang, null);
      await loadCurriculum(selectedLang, version).catch(() => {});
      setCurriculumVersion(version);
    } finally {
      setLoading(false);
    }
  }, [isLoaded, isSignedIn, user, supabaseClient, resolveVersion, selectedLang]);

  useEffect(() => {
    loadProgress();
  }, [loadProgress, location.key]);

  // ------------------------------------------------------------------
  // Language switch
  // ------------------------------------------------------------------
  const handleLangChange = useCallback(
    async (newLang) => {
      if (newLang === selectedLang) return;
      const newVersion = resolveVersion(newLang, progress);
      setLangLoading(true);
      try {
        await loadCurriculum(newLang, newVersion);
      } catch (err) {
        console.error("Failed to load curriculum for", newLang, err);
      } finally {
        setLangLoading(false);
      }
      setSelectedLang(newLang);
      setCurriculumVersion(newVersion);
    },
    [selectedLang, progress, resolveVersion]
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

  const completedQuizzes = progress?.completed_quizzes || [];
  const streak           = progress?.streak_days || 0;
  const lang             = getCurriculumByVersion(curriculumVersion, selectedLang);

  // ------------------------------------------------------------------
  // Render
  // ------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Quiz Hub | Practice Python Quizzes</title>
        <meta name="description" content="Access all Python quizzes. Test your knowledge with interactive questions after each lesson. No prerequisites needed." />
        <meta property="og:title" content="Quiz Hub - FluentlyCode" />
        <meta property="og:description" content="Interactive quizzes covering all Python lessons." />
      </Helmet>
      <Navbar streak={streak} />

      <div className="max-w-2xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <HelpCircle size={20} className="text-zinc-400" />
            <h1 className="text-3xl font-bold tracking-tight">Quiz Mode</h1>
          </div>
          <p className="text-sm text-zinc-400">
            Test your knowledge with multiple choice questions. All quizzes are
            available — no need to complete lessons first.
          </p>
        </motion.div>

        {/* Language selector */}
        <div className="flex gap-2 mb-10">
          {LANGUAGES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleLangChange(key)}
              disabled={langLoading}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 disabled:opacity-60 ${
                selectedLang === key
                  ? "bg-zinc-900 text-white"
                  : "border border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-900"
              }`}
            >
              {langLoading && selectedLang !== key ? (
                label
              ) : langLoading && selectedLang === key ? (
                <span className="flex items-center gap-1.5">
                  <Loader2 size={11} className="animate-spin" />
                  {label}
                </span>
              ) : (
                label
              )}
            </button>
          ))}
        </div>

        {/* Modules and lessons */}
        {langLoading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 size={20} className="animate-spin text-zinc-300" />
          </div>
        ) : (
          <div className="space-y-10">
            {lang?.modules.map((module, moduleIdx) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: moduleIdx * 0.05, ease }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                  {module.title}
                </p>
                <div className="space-y-1.5">
                  {module.lessons.map((lesson) => {
                    const done = completedQuizzes.includes(lesson.id);
                    return (
                      <button
                        key={lesson.id}
                        onClick={() =>
                          navigate(`/quiz/${selectedLang}/${lesson.id}`)
                        }
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-200 group text-left ${
                          done
                            ? "border-emerald-100 bg-emerald-50/30 hover:border-emerald-300"
                            : "border-zinc-200 hover:border-zinc-900"
                        }`}
                      >
                        {done ? (
                          <Check size={13} strokeWidth={3} className="text-emerald-500 shrink-0" />
                        ) : (
                          <HelpCircle size={13} className="text-zinc-300 group-hover:text-zinc-500 transition-colors shrink-0" />
                        )}
                        <span className={`text-sm font-medium flex-1 ${done ? "text-emerald-700" : "text-zinc-700"}`}>
                          {lesson.title}
                        </span>
                        <span className={`text-xs ${done ? "text-emerald-500" : "text-zinc-400"}`}>
                          {done ? "Completed" : "5 questions"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}