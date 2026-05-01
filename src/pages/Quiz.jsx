// src/pages/Quiz.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/clerk-react";
import { getLessonById, getAllLessons } from "@/lib/curriculum";
import { generateQuizQuestions } from "@/lib/quizGenerator";
import { progressDb } from "@/lib/progressDb";
import { useAuth } from "@/lib/AuthContext";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Trophy,
  Lightbulb,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export default function Quiz() {
  const { language, lessonId } = useParams();
  const navigate = useNavigate();
  const { user, isLoaded, isSignedIn } = useUser();
  const { supabaseClient } = useAuth();

  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [module, setModule] = useState(null);

  useEffect(() => {
    const result = getLessonById(language, lessonId);
    if (!result) return;
    setLesson(result.lesson);
    setModule(result.module);
    const qs = generateQuizQuestions(result.lesson, language);
    setQuestions(qs.map(q => shuffleOptions(q)));
  }, [language, lessonId]);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !supabaseClient) return;
    const load = async () => {
      const data = await progressDb.getProgress(
        supabaseClient,
        user.id,
        user.primaryEmailAddress?.emailAddress
      );
      setProgress(data);
    };
    load();
  }, [isLoaded, isSignedIn, user, supabaseClient]);

  const shuffleOptions = (q) => {
    const indexed = q.options.map((opt, i) => ({
      opt,
      isCorrect: i === q.correctIndex,
    }));
    for (let i = indexed.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
    }
    const newCorrectIndex = indexed.findIndex(o => o.isCorrect);
    return {
      ...q,
      options: indexed.map(o => o.opt),
      correctIndex: newCorrectIndex,
    };
  };

  const handleSelect = (index) => {
    if (confirmed) return;
    setSelectedOption(index);
  };

  const handleConfirm = () => {
    if (selectedOption === null) return;
    setConfirmed(true);
    setShowHint(false);
    if (selectedOption === questions[currentQ].correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = async () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1);
      setSelectedOption(null);
      setConfirmed(false);
      setShowHint(false);
    } else {
      setFinished(true);
      await saveProgress();
    }
  };

  const saveProgress = async () => {
    if (!user || !supabaseClient) return;
    const passed = score >= Math.ceil(questions.length / 2);
    if (!passed) return;
    const alreadyDone = progress?.completed_lessons?.includes(lessonId);
    if (alreadyDone) return;
    const updatedCompleted = [
      ...(progress?.completed_lessons || []),
      lessonId,
    ];
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const last = progress?.last_active_date;
    const newStreak =
      last === yesterday
        ? (progress?.streak_days || 0) + 1
        : last === today
        ? progress?.streak_days || 0
        : 1;
    await progressDb.updateProgress(supabaseClient, user.id, {
      completed_lessons: updatedCompleted,
      total_exercises: (progress?.total_exercises || 0) + 1,
      correct_exercises: (progress?.correct_exercises || 0) + 1,
      last_active_date: today,
      streak_days: newStreak,
    });
  };

  const allLessons = getAllLessons(language);
  const currentIdx = allLessons.findIndex(l => l.id === lessonId);
  const nextLesson = allLessons[currentIdx + 1];
  const passed = score >= Math.ceil(questions.length / 2);

  if (!lesson || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-5 h-5 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
      </div>
    );
  }

  // ─── Results screen ────────────────────────────────────────────────────────
  if (finished) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
          <button
            onClick={() => navigate(`/lesson/${language}/${lessonId}`)}
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to lesson
          </button>
          <span className="text-sm font-semibold text-zinc-900">fluentcode</span>
          <div className="w-24" />
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center px-6 py-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease }}
            className="w-full max-w-md text-center"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-zinc-50 border border-zinc-100">
              <Trophy
                size={28}
                className={passed ? "text-amber-500" : "text-zinc-400"}
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              {passed ? "Nice work!" : "Keep practising"}
            </h1>
            <p className="text-zinc-400 text-sm mb-8">
              You got {score} out of {questions.length} correct
            </p>
            <div className="h-2 bg-zinc-100 rounded-full overflow-hidden mb-10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(score / questions.length) * 100}%` }}
                transition={{ duration: 0.8, ease }}
                className={`h-full rounded-full ${
                  passed ? "bg-emerald-500" : "bg-amber-400"
                }`}
              />
            </div>
            <div className="flex flex-col gap-3">
              {passed && nextLesson && (
                <button
                  onClick={() =>
                    navigate(`/lesson/${language}/${nextLesson.id}`)
                  }
                  className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white py-3.5 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-all"
                >
                  Next lesson <ArrowRight size={14} />
                </button>
              )}
              {passed && (
                <button
                  onClick={() =>
                    navigate(`/code/${language}/${lessonId}`)
                  }
                  className="w-full flex items-center justify-center gap-2 border border-zinc-200 text-zinc-700 py-3.5 rounded-full text-sm font-semibold hover:border-zinc-900 transition-all"
                >
                  Try the code exercise too
                </button>
              )}
              <button
                onClick={() => {
                  setCurrentQ(0);
                  setSelectedOption(null);
                  setConfirmed(false);
                  setShowHint(false);
                  setScore(0);
                  setFinished(false);
                  const qs = generateQuizQuestions(lesson, language);
                  setQuestions(qs.map(q => shuffleOptions(q)));
                }}
                className="w-full flex items-center justify-center gap-2 border border-zinc-200 text-zinc-700 py-3.5 rounded-full text-sm font-semibold hover:border-zinc-400 transition-all"
              >
                Try again
              </button>
              <button
                onClick={() => navigate("/courses")}
                className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors py-2"
              >
                Back to courses
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ─── Quiz screen ───────────────────────────────────────────────────────────
  const q = questions[currentQ];
  const isCorrect = confirmed && selectedOption === q.correctIndex;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
        <button
          onClick={() => navigate(`/lesson/${language}/${lessonId}`)}
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft size={14} />
          Lesson
        </button>
        <span className="text-xs text-zinc-400 max-w-[180px] truncate">
          {lesson.title}
        </span>
        <span className="text-xs text-zinc-400 tabular-nums">
          {currentQ + 1} / {questions.length}
        </span>
      </nav>

      {/* Progress bar */}
      <div className="h-1 bg-zinc-100">
        <motion.div
          animate={{
            width: `${
              ((currentQ + (confirmed ? 1 : 0)) / questions.length) * 100
            }%`,
          }}
          transition={{ duration: 0.4, ease }}
          className="h-full bg-zinc-900"
        />
      </div>

      <div className="flex-1 flex flex-col max-w-lg mx-auto w-full px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease }}
            className="flex-1 flex flex-col"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
              Question {currentQ + 1}
            </p>

            {/* Question text */}
            <h2 className="text-lg font-semibold text-zinc-900 mb-2 leading-snug whitespace-pre-wrap">
              {q.question.includes("```")
                ? q.question.split("```")[0]
                : q.question}
            </h2>

            {/* Code snippet */}
            {q.question.includes("```") && (
              <div className="bg-zinc-950 rounded-xl p-4 mb-4 overflow-x-auto">
                <pre className="text-sm text-zinc-100 font-mono">
                  {q.question.split("```")[1]?.replace(/^[a-z]*\n/, "")}
                </pre>
              </div>
            )}

            {!q.question.includes("```") && <div className="mb-4" />}

            {/* Hint — shown before confirming */}
            <AnimatePresence>
              {showHint && !confirmed && q.hint && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="mb-4 px-4 py-3 bg-amber-50 border border-amber-100 rounded-xl flex gap-2 text-sm text-amber-800"
                >
                  <Lightbulb size={15} className="text-amber-500 shrink-0 mt-0.5" />
                  <span>{q.hint}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Options */}
            <div className="space-y-3 flex-1">
              {q.options.map((option, index) => {
                let style =
                  "border border-zinc-200 text-zinc-700 hover:border-zinc-400";
                if (selectedOption === index && !confirmed) {
                  style =
                    "border-2 border-zinc-900 text-zinc-900 bg-zinc-50";
                }
                if (confirmed) {
                  if (index === q.correctIndex) {
                    style =
                      "border-2 border-emerald-500 bg-emerald-50 text-emerald-800";
                  } else if (
                    index === selectedOption &&
                    index !== q.correctIndex
                  ) {
                    style =
                      "border-2 border-red-400 bg-red-50 text-red-800";
                  } else {
                    style = "border border-zinc-100 text-zinc-400";
                  }
                }
                return (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    disabled={confirmed}
                    className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-150 flex items-start gap-3 ${style}`}
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs mt-0.5">
                      {confirmed && index === q.correctIndex ? (
                        <CheckCircle size={14} className="text-emerald-500" />
                      ) : confirmed && index === selectedOption ? (
                        <XCircle size={14} className="text-red-400" />
                      ) : (
                        String.fromCharCode(65 + index)
                      )}
                    </span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation after confirming */}
            <AnimatePresence>
              {confirmed && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className={`mt-4 p-4 rounded-xl text-sm leading-relaxed ${
                    isCorrect
                      ? "bg-emerald-50 border border-emerald-100 text-emerald-800"
                      : "bg-red-50 border border-red-100 text-red-800"
                  }`}
                >
                  <span className="font-semibold">
                    {isCorrect ? "✓ Correct! " : "✗ Not quite. "}
                  </span>
                  {q.explanation}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Bottom buttons */}
        <div className="mt-8 flex gap-3">
          {!confirmed ? (
            <>
              {/* Hint button */}
              {q.hint && (
                <button
                  onClick={() => setShowHint(h => !h)}
                  className="flex items-center gap-1.5 px-4 py-3.5 rounded-full text-sm text-amber-600 border border-amber-200 hover:bg-amber-50 transition-all shrink-0"
                >
                  <Lightbulb size={14} />
                  {showHint ? "Hide hint" : "Hint"}
                </button>
              )}
              <button
                onClick={handleConfirm}
                disabled={selectedOption === null}
                className="flex-1 py-3.5 rounded-full text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                Confirm
              </button>
            </>
          ) : (
            <button
              onClick={handleNext}
              className="w-full py-3.5 rounded-full text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-700 transition-all flex items-center justify-center gap-2"
            >
              {currentQ < questions.length - 1 ? (
                <>
                  Next question <ArrowRight size={14} />
                </>
              ) : (
                <>
                  See results <Trophy size={14} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}