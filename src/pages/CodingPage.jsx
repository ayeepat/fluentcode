// src/pages/CodingPage.jsx
import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/clerk-react";
import { getLessonById, getAllLessons } from "@/lib/curriculum";
import { isGuestAccessible } from "@/lib/guestAccess";
import { localProgressDb } from "@/lib/localProgressDb";
import CodeEditor from "@/components/editor/CodeEditor";
import AIFeedbackPanel from "@/components/editor/AIFeedbackPanel";
import { Play, Send, ArrowLeft, ArrowRight, Eye, EyeOff, Heart, Lightbulb, CheckCircle, XCircle, Sparkles } from "lucide-react";
import { progressDb } from "@/lib/progressDb";
import { evaluateCode } from "@/lib/groqClient";
import { useAuth } from "@/lib/AuthContext";
import SignupPrompt from "@/components/SignupPrompt";

export default function CodingPage() {
  const { language, lessonId } = useParams();
  const navigate = useNavigate();
  const { user, isLoaded: isUserLoaded, isSignedIn } = useUser();
  const { supabaseClient } = useAuth();

  const isGuest = !isSignedIn;
  const guestAllowed = isGuestAccessible(language, lessonId);

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [progress, setProgress] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [aiRemaining, setAiRemaining] = useState(null);
  const [limitReached, setLimitReached] = useState(false);

  const result = useMemo(() => {
    return getLessonById(language, lessonId);
  }, [language, lessonId]);

  // Redirect guests on non-guest lessons
  useEffect(() => {
    if (isUserLoaded && isGuest && !guestAllowed) {
      navigate("/courses");
    }
  }, [isUserLoaded, isGuest, guestAllowed, navigate]);

  useEffect(() => {
    if (!result) {
      setIsLoading(false);
      return;
    }
    if (isGuest) {
      const savedCode = localProgressDb.getCode(lessonId);
      setCode(savedCode || result.lesson.exercise.starterCode || "");
    } else {
      setCode(result.lesson.exercise.starterCode || "");
    }
    setOutput("");
    setFeedback(null);
    setSubmitted(false);
    setShowSolution(false);
    setShowHint(false);
    setLimitReached(false);
  }, [result, isGuest, lessonId]);

  useEffect(() => {
    if (!result || !isUserLoaded) {
      if (isUserLoaded) setIsLoading(false);
      return;
    }

    if (isGuest) {
      const guestData = localProgressDb.getProgress();
      setProgress(guestData);
      setAiRemaining(null);
      setIsLoading(false);
      return;
    }

    if (!supabaseClient) {
      setIsLoading(false);
      return;
    }

    const load = async () => {
      try {
        const data = await progressDb.getProgress(
          supabaseClient,
          user.id,
          user.primaryEmailAddress?.emailAddress
        );
        setProgress(data);

        const remaining = await progressDb.getAiRequestsRemaining(
          supabaseClient,
          user.id,
          data?.is_pro
        );
        setAiRemaining(remaining);
      } catch (err) {
        console.error("Failed to load progress:", err);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, [result, isUserLoaded, isSignedIn, user, supabaseClient, isGuest]);

  // Auto-save code for guests
  useEffect(() => {
    if (!isGuest || !lessonId) return;
    const timer = setTimeout(() => {
      localProgressDb.saveCode(lessonId, code);
    }, 1000);
    return () => clearTimeout(timer);
  }, [code, isGuest, lessonId]);

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

    // Guest users — use AI evaluation for first 3 lessons (no limit shown)
    if (isGuest) {
      setSubmitting(true);
      setFeedback(null);

      try {
        const aiResponse = await evaluateCode(code, language, lesson);
        setFeedback(aiResponse);
        setSubmitted(true);

        // Only save progress if correct
        if (aiResponse.isCorrect) {
          localProgressDb.completeLesson(lessonId, {
            total_exercises: (progress?.total_exercises || 0) + 1,
            correct_exercises: (progress?.correct_exercises || 0) + 1,
          });
          setProgress(localProgressDb.getProgress());
        }
      } catch (err) {
        console.error("Submit error:", err);
        // Fallback to basic test checking if AI fails
        const tests = lesson.exercise.tests || [];
        let allPassed = true;
        for (const test of tests) {
          if (test.type === "contains" && !code.includes(test.value)) {
            allPassed = false;
            break;
          }
        }
        setFeedback({
          isCorrect: allPassed,
          feedback: allPassed
            ? "Your code looks correct! Well done."
            : "Something isn't quite right. Check the exercise prompt and try again.",
          mistakePatterns: [],
          suggestions: allPassed ? [] : ["Compare your code with the example"],
        });
        setSubmitted(true);

        if (allPassed) {
          localProgressDb.completeLesson(lessonId, {
            total_exercises: (progress?.total_exercises || 0) + 1,
            correct_exercises: (progress?.correct_exercises || 0) + 1,
          });
          setProgress(localProgressDb.getProgress());
        }
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // Logged-in users — full AI evaluation with rate limiting
    if (!supabaseClient) return;

    const check = await progressDb.checkAndIncrementAiCount(
      supabaseClient,
      user.id,
      progress?.is_pro
    );

    if (!check.allowed) {
      setLimitReached(true);
      setFeedback({
        isCorrect: false,
        feedback:
          "You've used all 10 free AI reviews for today. Come back tomorrow, or support the project to unlock unlimited reviews!",
        mistakePatterns: [],
        suggestions: [],
      });
      setSubmitted(true);
      return;
    }

    setAiRemaining(check.remaining);
    setSubmitting(true);
    setFeedback(null);

    try {
      const aiResponse = await evaluateCode(code, language, lesson);
      setFeedback(aiResponse);
      setSubmitted(true);

      const updatedMistakes =
        aiResponse.mistakePatterns && !aiResponse.isCorrect
          ? [
              ...new Set([
                ...(progress?.mistake_patterns || []),
                ...aiResponse.mistakePatterns,
              ]),
            ].slice(-5)
          : progress?.mistake_patterns || [];

      const extraUpdates = {
        total_exercises: (progress?.total_exercises || 0) + 1,
        correct_exercises: aiResponse.isCorrect
          ? (progress?.correct_exercises || 0) + 1
          : progress?.correct_exercises || 0,
        mistake_patterns: updatedMistakes,
      };

      if (aiResponse.isCorrect) {
        const updated = await progressDb.completeLesson(
          supabaseClient,
          user.id,
          lessonId,
          extraUpdates
        );
        if (updated) setProgress(updated);
      } else {
        const updated = await progressDb.updateProgress(
          supabaseClient,
          user.id,
          extraUpdates
        );
        if (updated) setProgress(updated);
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

  const nextRequiresLogin =
    nextLesson && isGuest && !isGuestAccessible(language, nextLesson.id);

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

        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-400 hidden sm:block max-w-xs truncate">
            {lesson.title}
          </span>
          {aiRemaining !== null && !isGuest && (
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                aiRemaining <= 2
                  ? "bg-amber-50 text-amber-600"
                  : "bg-zinc-100 text-zinc-500"
              }`}
            >
              {aiRemaining} AI reviews left today
            </span>
          )}
          {isGuest && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
              Guest mode
            </span>
          )}
        </div>

        {nextLesson && !nextRequiresLogin ? (
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
        ) : nextRequiresLogin && canProceed ? (
          <span className="text-xs text-zinc-400">Sign up to continue →</span>
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

      {/* Result banner */}
      <AnimatePresence>
        {submitted && feedback && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden shrink-0"
          >
            <div
              className={`px-4 py-3 flex items-start gap-3 ${
                feedback.isCorrect
                  ? "bg-emerald-50 border-b border-emerald-100"
                  : "bg-red-50 border-b border-red-100"
              }`}
            >
              {feedback.isCorrect ? (
                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              ) : (
                <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p
                  className={`text-sm font-semibold mb-1 ${
                    feedback.isCorrect ? "text-emerald-700" : "text-red-700"
                  }`}
                >
                  {feedback.isCorrect
                    ? "🎉 Great job! Your code is correct!"
                    : "Not quite right — keep trying!"}
                </p>
                <p
                  className={`text-xs leading-relaxed ${
                    feedback.isCorrect ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {feedback.feedback}
                </p>
                {feedback.isCorrect && isGuest && (
                  <p className="text-xs text-emerald-500 mt-2">
                    <Sparkles size={11} className="inline mr-1" />
                    Create a free account to get detailed AI feedback on every exercise!
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {limitReached && !isGuest && (
        <div className="px-4 py-3 bg-amber-50 border-b border-amber-100 shrink-0">
          <div className="flex items-center justify-between">
            <p className="text-sm text-amber-700">
              Daily AI limit reached. Come back tomorrow or support the project
              for unlimited access.
            </p>
            <Link
              to="/upgrade"
              className="inline-flex items-center gap-1.5 text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-full hover:bg-zinc-700 transition-all shrink-0 ml-3"
            >
              <Heart size={11} /> Support
            </Link>
          </div>
        </div>
      )}

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-hidden p-2">
            <CodeEditor
              value={code}
              onChange={setCode}
              language={language}
            />
          </div>

          <div className="h-36 border-t border-zinc-100 bg-zinc-950 overflow-y-auto shrink-0">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800">
              <div className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="text-xs text-zinc-500 font-mono">output</span>
            </div>
            <pre className="text-xs text-zinc-400 font-mono px-4 py-3 leading-relaxed whitespace-pre-wrap">
              {output || "Press ▶ Run to see output"}
            </pre>
          </div>

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
              disabled={submitting || (limitReached && !isGuest)}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-700 disabled:opacity-40 transition-all duration-200"
            >
              <Send size={12} />
              {submitting
                ? "Checking…"
                : limitReached && !isGuest
                ? "Limit reached"
                : "Submit"}
            </button>

            {/* Hint button */}
            {lesson.exercise?.debuggingTip && (
              <button
                onClick={() => setShowHint((h) => !h)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                  showHint
                    ? "bg-amber-50 text-amber-600 border border-amber-200"
                    : "border border-zinc-200 text-zinc-500 hover:border-amber-300 hover:text-amber-600"
                }`}
              >
                <Lightbulb size={12} />
                {showHint ? "Hide hint" : "Hint"}
              </button>
            )}

            <button
              onClick={() => setShowSolution((p) => !p)}
              className="flex items-center gap-2 px-5 py-2.5 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-xl transition-all duration-200 ml-auto"
            >
              {showSolution ? <EyeOff size={14} /> : <Eye size={14} />}
              {showSolution ? "Hide Solution" : "Show Solution"}
            </button>
          </div>

          {/* Hint panel */}
          <AnimatePresence>
            {showHint && lesson.exercise?.debuggingTip && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden border-t border-zinc-100 shrink-0"
              >
                <div className="bg-amber-50 px-4 py-4 flex gap-3">
                  <Lightbulb size={14} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-1">
                      Hint
                    </p>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      {lesson.exercise.debuggingTip}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Solution panel */}
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

          {/* Signup prompt after completing exercise as guest */}
          {isGuest && canProceed && nextRequiresLogin && (
            <div className="border-t border-zinc-100 px-4 py-6 shrink-0">
              <SignupPrompt />
            </div>
          )}
        </div>

        {/* AI panel — always shown, guest-aware */}
        <div className="w-72 shrink-0 overflow-hidden border-l border-zinc-100 hidden md:block">
          <AIFeedbackPanel
            lesson={lesson}
            userCode={code}
            feedback={feedback}
            language={language}
            userId={user?.id}
            isPro={progress?.is_pro}
            isGuest={isGuest}
          />
        </div>
      </div>
    </div>
  );
}