import { useLanguage } from "@/lib/LanguageContext";
import { translateContent } from "@/lib/translateContent";
import LocalizedText from "@/components/LocalizedText";
// src/pages/Lesson.jsx
import { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { getLessonById, hasVersion2, loadCurriculum } from "@/lib/curriculum";
import { useCurriculumReady } from "@/hooks/useCurriculumReady";
import { isGuestAccessible, shouldPromptSignup, isExerciseFirst, getGuestLessonIds } from "@/lib/guestAccess";
import { localProgressDb } from "@/lib/localProgressDb";
import { Play, Lightbulb, HelpCircle } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { progressDb } from "@/lib/progressDb";
import { useAuth } from "@/lib/AuthContext";
import Navbar from "@/components/Navbar";
import SignupPrompt from "@/components/SignupPrompt";
import CodeExample from "@/components/CodeExample";

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
  const { language: uiLanguage } = useLanguage();
  const { language, lessonId } = useParams();
  const navigate = useNavigate();
  const { user, isLoaded, isSignedIn } = useUser();
  const { supabaseClient } = useAuth();
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [streak, setStreak] = useState(0);
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  const [curriculumVersion, setCurriculumVersion] = useState(1);
  const isMobile = useIsMobile();

  const isGuest = !isSignedIn;
  const curriculumReady = useCurriculumReady(language);
  const guestAllowed = curriculumReady && isGuestAccessible(language, lessonId);
  const exerciseFirst = useMemo(
    () => isExerciseFirst(language, lessonId, curriculumVersion),
    [language, lessonId, curriculumVersion]
  );

  // Redirect guests trying to access non-guest lessons.
  // Wait for the curriculum cache — on deep links it isn't populated yet.
  useEffect(() => {
    if (isLoaded && curriculumReady && isGuest && !guestAllowed) {
      // Redirect to first guest lesson (v2 for Python, v1 for other languages)
      const guestLessonIds = getGuestLessonIds(language);
      if (guestLessonIds.length > 0) {
        navigate(`/lesson/${language}/${guestLessonIds[0]}`);
      } else {
        navigate("/courses");
      }
    }
  }, [isLoaded, curriculumReady, isGuest, guestAllowed, language, navigate]);

  // For exercise-first lessons, redirect straight to coding page
  useEffect(() => {
    if (!isLoading && result && exerciseFirst) {
      navigate(`/code/${language}/${lessonId}`, { replace: true });
    }
  }, [isLoading, result, exerciseFirst, language, lessonId, navigate]);

  // Load progress and curriculum version
  useEffect(() => {
    const load = async () => {
      if (!isLoaded) return;
      if (isGuest) {
        const guestData = localProgressDb.getProgress();
        setStreak(guestData.streak_days || 0);
        // Guests use version 2 only if the language has it, otherwise version 1
        setCurriculumVersion(hasVersion2(language) ? 2 : 1);
        setIsLoading(false);
        return;
      }
      if (!supabaseClient || !user) {
        setIsLoading(false);
        return;
      }
      try {
        const data = await progressDb.getProgress(
          supabaseClient,
          user.id,
          user.primaryEmailAddress?.emailAddress
        );
        setStreak(data?.streak_days || 0);
        const version = data?.curriculum_version || 1;
        await loadCurriculum(language, version).catch(() => {});
        setCurriculumVersion(version);
      } catch (err) {
        console.error("Failed to load progress:", err);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [isLoaded, isGuest, supabaseClient, user, language]);

  useEffect(() => {
    if (!isLoaded || !curriculumReady) return;
    setIsLoading(true);
    const data = getLessonById(language, lessonId, curriculumVersion);
    setResult(data);
    setIsLoading(false);
  }, [language, lessonId, curriculumVersion, isLoaded, curriculumReady]);

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

  if (isLoading || !curriculumReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-5 h-5 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white text-zinc-400">
        <p className="text-base font-medium">{<LocalizedText text="Lesson not found" />}</p>
        <button
          onClick={() => navigate("/courses")}
          className="text-sm text-zinc-500 hover:text-zinc-900 underline underline-offset-4 transition-colors"
        >{<LocalizedText text="Back to courses" />}</button>
      </div>
    );
  }

  // Exercise-first lessons redirect – show spinner while redirecting
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
      <Helmet>
        <title>{translateContent(lesson.title, uiLanguage)} | {uiLanguage === "ru" ? "Уроки программирования" : "Learn Python with FluentlyCode"}</title>
        <meta name="description" content={`${translateContent(lesson.title, uiLanguage)}: ${translateContent(lesson.explanation, uiLanguage).substring(0, 150)}...`} />
        <meta property="og:title" content={`${translateContent(lesson.title, uiLanguage)} | FluentlyCode`} />
        <meta property="og:description" content={uiLanguage === "ru" ? `Изучайте ${translateContent(lesson.title, uiLanguage)} с интерактивными заданиями и проверкой ИИ.` : `Learn ${lesson.title} with interactive coding and AI-powered feedback.`} />
      </Helmet>
      <Navbar
        streak={streak}
        backTo="/courses"
        backLabel="Courses"
        moduleTitle={translateContent(module.title, uiLanguage)}
      />

      <div className="max-w-2xl mx-auto px-6 py-14">
        <motion.div
          key={lessonId}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
            {translateContent(module.title, uiLanguage)}
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-8 text-balance">
            {translateContent(lesson.title, uiLanguage)}
          </h1>
          <p className="text-base text-zinc-600 leading-relaxed mb-10">
            {translateContent(lesson.explanation, uiLanguage)}
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
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">{<LocalizedText text="Key concept" />}</p>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {translateContent(lesson.concept, uiLanguage)}
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
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">{<LocalizedText text="Example" />}</p>
          <CodeExample code={lesson.example} language={language} />
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
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-1">{<LocalizedText text="Debugging tip" />}</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                {translateContent(lesson.exercise.debuggingTip, uiLanguage)}
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
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">{<LocalizedText text="Exercise" />}</p>
          <p className="text-sm text-zinc-700 leading-relaxed">
            {translateContent(lesson.exercise?.prompt, uiLanguage)}
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
                <HelpCircle size={14} />{<LocalizedText text="Take quiz" />}</button>
              <button
                onClick={() => navigate(`/code/${language}/${lessonId}`)}
                className="w-full flex items-center justify-center gap-2 border border-zinc-200 text-zinc-700 py-3.5 rounded-full text-sm font-semibold hover:border-zinc-900 hover:text-zinc-900 transition-all duration-200"
              >
                <Play size={14} />{<LocalizedText text="Start exercise instead" />}</button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate(`/code/${language}/${lessonId}`)}
                className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white py-3.5 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-all duration-200"
              >
                <Play size={14} />{<LocalizedText text="Start exercise" />}</button>
              <button
                onClick={() => navigate(`/quiz/${language}/${lessonId}`)}
                className="w-full flex items-center justify-center gap-2 border border-zinc-200 text-zinc-700 py-3.5 rounded-full text-sm font-semibold hover:border-zinc-900 hover:text-zinc-900 transition-all duration-200"
              >
                <HelpCircle size={14} />{<LocalizedText text="Take quiz instead" />}</button>
            </>
          )}
        </div>

        {isGuest && showSignupPrompt && guestAllowed && <SignupPrompt />}
      </div>
    </div>
  );
}
