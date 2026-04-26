// src/pages/CodingPage.jsx
import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/clerk-react";
import { getLessonById, getAllLessons } from "@/lib/curriculum";
import CodeEditor from "@/components/editor/CodeEditor";
import AIFeedbackPanel from "@/components/editor/AIFeedbackPanel";
import { Play, Send, ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react";
import { progressDb } from "@/lib/progressDb";
import { evaluateCode } from "@/lib/groqClient";

export default function CodingPage() {
  const { language, lessonId } = useParams();
  const navigate = useNavigate();
  const { user, isLoaded: isUserLoaded, isSignedIn } = useUser();

  const [code, setCode] = useState("");
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [progress, setProgress] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const result = useMemo(() => {
    return getLessonById(language, lessonId);
  }, [language, lessonId]);

  useEffect(() => {
    if (!result) {
      setIsLoading(false);
      return;
    }

    setCode(result.lesson.exercise.starterCode || "");
    setHasStartedTyping(false);
    setOutput("");
    setFeedback(null);
    setSubmitted(false);
    setShowSolution(false);
  }, [result]);

  useEffect(() => {
    const load = async () => {
      try {
        if (!result) {
          setIsLoading(false);
          return;
        }

        if (!isUserLoaded) return;

        if (!isSignedIn || !user) {
          setIsLoading(false);
          return;
        }

        const data = await progressDb.getProgress(
          user.id,
          user.primaryEmailAddress?.emailAddress
        );

        setProgress(data);
      } catch (err) {
        console.error("Failed to load progress:", err);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, [result, isUserLoaded, isSignedIn, user]);

  const handleCodeChange = (newCode) => {
    if (!hasStartedTyping) {
      setHasStartedTyping(true);
      setCode("");
      return;
    }
    setCode(newCode);
  };

  if (!isUserLoaded || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-5 h-5 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-400 bg-white">
        <p>Lesson not found.</p>
      </div>
    );
  }

  const { lesson } = result;

  const handleRun = () => {
    setOutput(`$ running code...\n\n${code}`);
  };

  const handleSubmit = async () => {
    if (submitting) return;

    setSubmitting(true);
    setFeedback(null);

    try {
      const aiResponse = await evaluateCode(code, language, lesson);
      setFeedback(aiResponse);
      setSubmitted(true);

      if (!user) return;

      const alreadyDone = progress?.completed_lessons?.includes(lessonId);

      const updatedCompleted =
        aiResponse.isCorrect && !alreadyDone
          ? [...(progress?.completed_lessons || []), lessonId]
          : progress?.completed_lessons || [];

      const updatedMistakes =
        aiResponse.mistakePatterns && !aiResponse.isCorrect
          ? [
              ...new Set([
                ...(progress?.mistake_patterns || []),
                ...aiResponse.mistakePatterns,
              ]),
            ].slice(-5)
          : progress?.mistake_patterns || [];

      const today = new Date().toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      const last = progress?.last_active_date;

      const newStreak =
        last === yesterday
          ? (progress?.streak_days || 0) + 1
          : last === today
            ? progress?.streak_days || 0
            : 1;

      const updated = await progressDb.updateProgress(user.id, {
        completed_lessons: updatedCompleted,
        total_exercises: (progress?.total_exercises || 0) + 1,
        correct_exercises: aiResponse.isCorrect
          ? (progress?.correct_exercises || 0) + 1
          : progress?.correct_exercises || 0,
        mistake_patterns: updatedMistakes,
        last_active_date: today,
        streak_days: newStreak,
      });

      if (updated) {
        setProgress(updated);
      }
    } catch (err) {
      console.error("Submit error:", err);
      setFeedback({
        isCorrect: false,
        feedback: "Connection error. Check your internet and try again.",
        mistakePatterns: [],
        suggestions: ["Check your internet connection."],
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const allLessons = getAllLessons(language);
  const currentIdx = allLessons.findIndex((l) => l.id === lessonId);
  const nextLesson = allLessons[currentIdx + 1];
  const canProceed = submitted && feedback?.isCorrect;

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 shrink-0">
        <button
          onClick={() => navigate(`/lesson/${language}/${lessonId}`)}
          className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft size={13} />
          Lesson
        </button>

        <span className="text-xs text-zinc-400 hidden sm:block max-w-xs truncate">
          {lesson.title}
        </span>

        {nextLesson ? (
          <button
            onClick={() =>
              canProceed && navigate(`/lesson/${language}/${nextLesson.id}`)
            }
            disabled={!canProceed}
            className={`flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 ${
              canProceed
                ? "bg-zinc-900 text-white hover:bg-zinc-700"
                : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
            }`}
          >
            Next <ArrowRight size={13} />
          </button>
        ) : (
          <div className="w-20" />
        )}
      </div>

      {/* Exercise prompt */}
      <div className="px-4 py-3 border-b border-zinc-100 bg-zinc-50 shrink-0">
        <p className="text-sm text-zinc-600 leading-relaxed">
          {lesson.exercise.prompt}
        </p>
      </div>

      {/* Main area */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Code editor */}
          <div className="flex-1 overflow-hidden p-2">
            <CodeEditor value={code} onChange={handleCodeChange} language={language} />
          </div>

          {/* Output panel */}
          <div className="h-36 border-t border-zinc-100 bg-zinc-950 overflow-y-auto shrink-0">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800">
              <div className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="text-xs text-zinc-500 font-mono">output</span>
            </div>
            <pre className="text-xs text-zinc-400 font-mono px-4 py-3 leading-relaxed whitespace-pre-wrap">
              {output || "Press ▶ Run to see output"}
            </pre>
          </div>

          {/* Action bar */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-t border-zinc-100 shrink-0">
            <button
              onClick={handleRun}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-zinc-200 rounded-lg text-sm text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 transition-all duration-200"
            >
              <Play size={12} />
              Run
            </button>

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-700 disabled:opacity-40 transition-all duration-200"
            >
              <Send size={12} />
              {submitting ? "Checking…" : "Submit"}
            </button>

            <button
              onClick={() => setShowSolution((p) => !p)}
              className="flex items-center gap-2 px-5 py-2.5 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-xl transition-all duration-200 ml-auto"
            >
              {showSolution ? <EyeOff size={14} /> : <Eye size={14} />}
              {showSolution ? "Hide Solution" : "Show Solution"}
            </button>
          </div>

          {/* Solution drawer */}
          <AnimatePresence>
            {showSolution && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border-t border-zinc-100 shrink-0"
              >
                <div className="bg-zinc-50 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
                    Solution
                  </p>
                  <pre className="text-sm font-mono text-zinc-700 leading-relaxed whitespace-pre-wrap">
                    {lesson.exercise.solution}
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* AI feedback panel */}
        <div className="w-72 shrink-0 overflow-hidden border-l border-zinc-100">
          <AIFeedbackPanel
            lesson={lesson}
            userCode={code}
            feedback={feedback}
            language={language}
          />
        </div>
      </div>
    </div>
  );
}