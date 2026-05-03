// src/pages/Lesson.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getLessonById } from "@/lib/curriculum";
import { isGuestAccessible, shouldPromptSignup, isExerciseFirst } from "@/lib/guestAccess";
import { localProgressDb } from "@/lib/localProgressDb";
import { Play, Lightbulb, HelpCircle } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { progressDb } from "@/lib/progressDb";
import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/Navbar";
import SignupPrompt from "@/components/SignupPrompt";

const ease = [0.16, 1, 0.3, 1];

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

export default function Lesson() {
  const { language, lessonId } = useParams();
  const navigate = useNavigate();
  const { user, isLoaded, isSignedIn } = useUser();
  const { supabaseClient } = useAuth();
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [streak, setStreak] = useState(0);
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  const isMobile = useIsMobile();

  const isGuest = !isSignedIn;
  const guestAllowed = isGuestAccessible(language, lessonId);
  const exerciseFirst = isExerciseFirst(language, lessonId);

  // Redirect guests trying to access non-guest lessons
  useEffect(() => {
    if (isLoaded && isGuest && !guestAllowed) {
      navigate(`/lesson/${language}/${language}-phase0-m1-l1`);
    }
  }, [isLoaded, isGuest, guestAllowed, language, navigate]);

  // For exercise-first lessons, redirect straight to coding page
  useEffect(() => {
    if (!isLoading && result && exerciseFirst) {
      navigate(`/code/${language}/${lessonId}`, { replace: true });
    }
  }, [isLoading, result, exerciseFirst, language, lessonId, navigate]);

  useEffect(() => {
    setIsLoading(true);
    const data = getLessonById(language, lessonId);
    setResult(data);
    setIsLoading(false);
  }, [language, lessonId]);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !supabaseClient) return;
    const loadStreak = async () => {
      try {
        const data = await progressDb.getProgress(
          supabaseClient,
          user.id,
          user.primaryEmailAddress?.emailAddress
        );
        setStreak(data?.streak_days || 0);
      } catch (err) {
        console.error("Failed to load streak:", err);
      }
    };
    loadStreak();
  }, [isLoaded, isSignedIn, user, supabaseClient]);

  useEffect(() => {
    if (!isGuest) return;
    const guestProgress = localProgressDb.getProgress();
    if (shouldPromptSignup(language, guestProgress.completed_lessons)) {
      setShowSignupPrompt(true);
    }
  }, [isGuest, language, lessonId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-5 h-5 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white text-zinc-400">
        <p className="text-base font-medium">Lesson not found</p>
        <button
          onClick={() => navigate("/courses")}
          className="text-sm text-zinc-500 hover:text-zinc-900 underline underline-offset-4 transition-colors"
        >
          Back to courses
        </button>
      </div>
    );
  }

  // Exercise-first lessons redirect — show spinner while redirecting
  if (exerciseFirst) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-5 h-5 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
      </div>
    );
  }

  const { lesson, module } = result;

  if (isGuest && showSignupPrompt && !guestAllowed) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar streak={0} backTo="/courses" backLabel="Courses" />
        <div className="max-w-2xl mx-auto px-6 py-14">
          <SignupPrompt />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        streak={streak}
        backTo="/courses"
        backLabel="Courses"
        moduleTitle={module.title}
      />

      <div className="max-w-2xl mx-auto px-6 py-14">
        <motion.div
          key={lessonId}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
            {module.title}
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-8 text-balance">
            {lesson.title}
          </h1>
          <p className="text-base text-zinc-600 leading-relaxed mb-10">
            {lesson.explanation}
          </p>
        </motion.div>

        {lesson.concept && (
          <motion.div
            key={`concept-${lessonId}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mb-10 bg-zinc-50 rounded-2xl p-6 border border-zinc-100"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
              Key concept
            </p>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {lesson.concept}
            </p>
          </motion.div>
        )}

        <motion.div
          key={`example-${lessonId}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
            Example
          </p>
          <div className="bg-zinc-950 rounded-2xl p-6 overflow-x-auto">
            <pre className="text-sm text-zinc-100 font-mono leading-relaxed whitespace-pre-wrap">
              {lesson.example}
            </pre>
          </div>
        </motion.div>

        {lesson.exercise?.debuggingTip && (
          <motion.div
            key={`debug-${lessonId}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="mb-10 bg-amber-50 rounded-2xl p-5 border border-amber-100 flex gap-3"
          >
            <Lightbulb size={15} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-1">
                Debugging tip
              </p>
              <p className="text-sm text-amber-800 leading-relaxed">
                {lesson.exercise.debuggingTip}
              </p>
            </div>
          </motion.div>
        )}

        <motion.div
          key={`exercise-${lessonId}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="border border-zinc-200 rounded-2xl p-6 mb-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
            Exercise
          </p>
          <p className="text-sm text-zinc-700 leading-relaxed">
            {lesson.exercise?.prompt}
          </p>
        </motion.div>

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          {isMobile ? (
            <>
              <button
                onClick={() => navigate(`/quiz/${language}/${lessonId}`)}
                className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white py-3.5 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-all duration-200"
              >
                <HelpCircle size={14} />
                Take quiz
              </button>
              <button
                onClick={() => navigate(`/code/${language}/${lessonId}`)}
                className="w-full flex items-center justify-center gap-2 border border-zinc-200 text-zinc-700 py-3.5 rounded-full text-sm font-semibold hover:border-zinc-900 hover:text-zinc-900 transition-all duration-200"
              >
                <Play size={14} />
                Start exercise instead
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate(`/code/${language}/${lessonId}`)}
                className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white py-3.5 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-all duration-200"
              >
                <Play size={14} />
                Start exercise
              </button>
              <button
                onClick={() => navigate(`/quiz/${language}/${lessonId}`)}
                className="w-full flex items-center justify-center gap-2 border border-zinc-200 text-zinc-700 py-3.5 rounded-full text-sm font-semibold hover:border-zinc-900 hover:text-zinc-900 transition-all duration-200"
              >
                <HelpCircle size={14} />
                Take quiz instead
              </button>
            </>
          )}
        </div>

        {isGuest && showSignupPrompt && guestAllowed && <SignupPrompt />}
      </div>
    </div>
  );
}