// src/pages/QuizHub.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useUser } from "@clerk/clerk-react";
import { curriculum, getAllLessons } from "@/lib/curriculum";
import { progressDb } from "@/lib/progressDb";
import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/Navbar";
import { HelpCircle, Check, Lock } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export default function QuizHub() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { supabaseClient } = useAuth();
  const [progress, setProgress] = useState(null);
  const [selectedLang, setSelectedLang] = useState("python");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !supabaseClient) return;
    const load = async () => {
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
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [isLoaded, isSignedIn, user, supabaseClient]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-5 h-5 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
      </div>
    );
  }

  const completed = progress?.completed_lessons || [];
  const streak = progress?.streak_days || 0;
  const lang = curriculum[selectedLang];
  const allFlat = getAllLessons(selectedLang);

  const isUnlocked = (lessonId) => {
    const idx = allFlat.findIndex(l => l.id === lessonId);
    if (idx === 0) return true;
    if (idx === -1) return false;
    return completed.includes(allFlat[idx - 1]?.id);
  };

  return (
    <div className="min-h-screen bg-white">
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
            Test your knowledge with multiple choice questions. Great for mobile or quick revision.
          </p>
        </motion.div>

        {/* Language selector */}
        <div className="flex gap-2 mb-10">
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
        </div>

        {/* Modules and lessons */}
        <div className="space-y-10">
          {lang.modules.map((module) => (
            <div key={module.id}>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                {module.title}
              </p>
              <div className="space-y-1.5">
                {module.lessons.map((lesson) => {
                  const done = completed.includes(lesson.id);
                  const unlocked = isUnlocked(lesson.id);

                  if (!unlocked) {
                    return (
                      <div
                        key={lesson.id}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-zinc-100 opacity-40 cursor-not-allowed select-none"
                      >
                        <Lock size={13} className="text-zinc-300 shrink-0" />
                        <span className="text-sm text-zinc-400 flex-1">
                          {lesson.title}
                        </span>
                        <span className="text-xs text-zinc-300">Locked</span>
                      </div>
                    );
                  }

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
                        <Check
                          size={13}
                          strokeWidth={3}
                          className="text-emerald-500 shrink-0"
                        />
                      ) : (
                        <HelpCircle
                          size={13}
                          className="text-zinc-300 group-hover:text-zinc-500 transition-colors shrink-0"
                        />
                      )}
                      <span
                        className={`text-sm font-medium flex-1 ${
                          done ? "text-emerald-700" : "text-zinc-700"
                        }`}
                      >
                        {lesson.title}
                      </span>
                      <span
                        className={`text-xs ${
                          done ? "text-emerald-500" : "text-zinc-400"
                        }`}
                      >
                        {done ? "Completed" : "7 questions"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}