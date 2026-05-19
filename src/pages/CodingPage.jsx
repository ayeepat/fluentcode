// src/pages/CodingPage.jsx
import { useState, useEffect, useMemo, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/clerk-react";
import { getLessonById, getAllLessons, hasVersion2 } from "@/lib/curriculum";
import {
  isGuestAccessible,
  shouldPromptSignup,
  isExerciseFirst,
} from "@/lib/guestAccess";
import { localProgressDb } from "@/lib/localProgressDb";
// ─── Pyodide is NOT imported statically. ────────────────────────────────────
// Importing it statically pulls the Pyodide chunk into the shared bundle,
// which means the Courses page (and every other page) pays the download
// cost even though they never run code. The lazy loader below ensures
// Pyodide is only fetched the first time the user presses Run or Submit
// on a Python lesson.
import CodeEditor from "@/components/editor/CodeEditor";
import AIFeedbackPanel from "@/components/editor/AIFeedbackPanel";
import TheoryModal from "@/components/TheoryModal";
import {
  Play,
  Send,
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Heart,
  Lightbulb,
  CheckCircle,
  XCircle,
  Sparkles,
  BookOpen,
  Loader2,
} from "lucide-react";
import { progressDb } from "@/lib/progressDb";
import { evaluateCode } from "@/lib/groqClient";
import { useAuth } from "@/lib/AuthContext";
import { useFeedbackWidget } from "@/lib/FeedbackContext";
import SignupPrompt from "@/components/SignupPrompt";

// ---------------------------------------------------------------------------
// Lazy Pyodide loader
//
// The import() call is deferred until the user first runs or submits code.
// Once the module is loaded the Promise is reused for all subsequent calls
// (same singleton behaviour as before, just deferred).
// ---------------------------------------------------------------------------
let _pyodideRunnerPromise = null;

async function getRunPython() {
  if (!_pyodideRunnerPromise) {
    _pyodideRunnerPromise = import("@/lib/pyodideRunner");
  }
  const mod = await _pyodideRunnerPromise;
  return mod.runPython;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function normaliseOutput(raw) {
  return (raw ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((l) => l.trimEnd())
    .join("\n")
    .trim();
}

function passesPatternTests(code, tests) {
  if (!tests || tests.length === 0) return true;
  for (const test of tests) {
    if (test.type === "contains" && !code.includes(test.value)) {
      return false;
    }
  }
  return true;
}

function isPythonLanguage(lang) {
  return lang === "python";
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function CodingPage() {
  const { language, lessonId } = useParams();
  const navigate = useNavigate();
  const { user, isLoaded: isUserLoaded, isSignedIn } = useUser();
  const { supabaseClient } = useAuth();
  const { openFeedbackWidget } = useFeedbackWidget();

  const isGuest    = !isSignedIn;
  const guestAllowed = isGuestAccessible(language, lessonId);

  // ------------------------------------------------------------------
  // State
  // ------------------------------------------------------------------
  const [code, setCode]                   = useState("");
  const [output, setOutput]               = useState("");
  const [feedback, setFeedback]           = useState(null);
  const [submitting, setSubmitting]       = useState(false);
  const [running, setRunning]             = useState(false);
  const [showSolution, setShowSolution]   = useState(false);
  const [showHint, setShowHint]           = useState(false);
  const [progress, setProgress]           = useState(null);
  const [submitted, setSubmitted]         = useState(false);
  const [isLoading, setIsLoading]         = useState(true);
  const [aiRemaining, setAiRemaining]     = useState(null);
  const [limitReached, setLimitReached]   = useState(false);
  const [showSignupModal, setShowSignupModal]   = useState(false);
  const [showTheoryModal, setShowTheoryModal]   = useState(false);
  const [failCount, setFailCount]         = useState(0);
  const [curriculumVersion, setCurriculumVersion] = useState(1);

  const expectedOutputCache    = useRef(null);
  const expectedOutputLessonRef = useRef(null);

  // ------------------------------------------------------------------
  // Derived values
  // ------------------------------------------------------------------
  const exerciseFirst = useMemo(
    () => isExerciseFirst(language, lessonId, curriculumVersion),
    [language, lessonId, curriculumVersion]
  );

  const result = useMemo(
    () =>
      curriculumVersion
        ? getLessonById(language, lessonId, curriculumVersion)
        : null,
    [language, lessonId, curriculumVersion]
  );

  // ------------------------------------------------------------------
  // Guards
  // ------------------------------------------------------------------
  useEffect(() => {
    if (isUserLoaded && isGuest && !guestAllowed) {
      navigate("/courses");
    }
  }, [isUserLoaded, isGuest, guestAllowed, navigate]);

  // ------------------------------------------------------------------
  // Reset lesson state when lesson changes
  // ------------------------------------------------------------------
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
    setShowSignupModal(false);
    setShowTheoryModal(false);
    setFailCount(0);
    expectedOutputCache.current     = null;
    expectedOutputLessonRef.current = null;
  }, [result, isGuest, lessonId]);

  // ------------------------------------------------------------------
  // Load version + progress
  // ------------------------------------------------------------------
  useEffect(() => {
    const loadVersionAndProgress = async () => {
      if (!isUserLoaded) return;

      if (isGuest) {
        const guestData = localProgressDb.getProgress();
        setProgress(guestData);
        setCurriculumVersion(hasVersion2(language) ? 2 : 1);
        setIsLoading(false);
        return;
      }

      if (!supabaseClient) {
        setIsLoading(false);
        return;
      }

      try {
        const data = await progressDb.getProgress(
          supabaseClient,
          user.id,
          user.primaryEmailAddress?.emailAddress
        );
        setProgress(data);
        setCurriculumVersion(data?.curriculum_version || 1);
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

    loadVersionAndProgress();
  }, [isUserLoaded, isSignedIn, user, supabaseClient, isGuest, language]);

  // ------------------------------------------------------------------
  // Auto-save code for guests
  // ------------------------------------------------------------------
  useEffect(() => {
    if (!isGuest || !lessonId) return;
    const timer = setTimeout(() => {
      localProgressDb.saveCode(lessonId, code);
    }, 1000);
    return () => clearTimeout(timer);
  }, [code, isGuest, lessonId]);

  // ------------------------------------------------------------------
  // Loading screens
  // ------------------------------------------------------------------
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

  const { lesson }    = result;
  const allLessons    = getAllLessons(language, curriculumVersion);
  const currentIdx    = allLessons.findIndex((l) => l.id === lessonId);
  const nextLesson    = allLessons[currentIdx + 1];
  const canProceed    = submitted && feedback?.isCorrect;
  const nextRequiresLogin =
    nextLesson && isGuest && !isGuestAccessible(language, nextLesson.id);

  // ------------------------------------------------------------------
  // Expected-output helper
  // ------------------------------------------------------------------
  async function getExpectedOutput(solutionCode) {
    if (
      expectedOutputLessonRef.current === lessonId &&
      expectedOutputCache.current !== null
    ) {
      return expectedOutputCache.current;
    }

    const runPython = await getRunPython();
    const { output: solOutput, error } = await runPython(solutionCode);

    if (error) {
      console.warn("Solution code errored in Pyodide:", error);
      expectedOutputCache.current = null;
    } else {
      expectedOutputCache.current = normaliseOutput(solOutput);
    }
    expectedOutputLessonRef.current = lessonId;
    return expectedOutputCache.current;
  }

  // ------------------------------------------------------------------
  // Run button
  // ------------------------------------------------------------------
  const handleRun = async () => {
    if (running) return;

    if (!isPythonLanguage(language)) {
      setOutput(
        `Live execution for ${language} is coming soon.\n` +
          `Use the Submit button to get AI feedback on your code.`
      );
      return;
    }

    setRunning(true);
    setOutput("Loading Python runtime…");

    try {
      const runPython = await getRunPython();
      const { output: stdout, error } = await runPython(code);

      if (error) {
        setOutput(`Error:\n${error}`);
      } else if (stdout.trim() === "") {
        setOutput("$ (no output)\nTip: Use print() to display results.");
      } else {
        setOutput(stdout);
      }
    } catch (err) {
      setOutput(`Error:\n${err.message ?? String(err)}`);
    } finally {
      setRunning(false);
    }
  };

  // ------------------------------------------------------------------
  // Navigation
  // ------------------------------------------------------------------
  const handleNext = () => {
    if (nextRequiresLogin) {
      setShowSignupModal(true);
      return;
    }
    if (nextLesson) {
      navigate(`/lesson/${language}/${nextLesson.id}`);
    }
  };

  // ------------------------------------------------------------------
  // Submit
  // ------------------------------------------------------------------
  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    setFeedback(null);

    const tests        = lesson.exercise.tests || [];
    const solutionCode = lesson.exercise.solution || "";
    const passedPatterns = passesPatternTests(code, tests);

    // ── Python: real execution path ──────────────────────────────────
    if (isPythonLanguage(language)) {
      let userOutput = "";
      let userError  = null;

      try {
        const runPython = await getRunPython();
        const execResult = await runPython(code);
        userOutput = execResult.output;
        userError  = execResult.error;
      } catch (err) {
        userError = err.message ?? String(err);
      }

      if (userError) {
        setOutput(`Error:\n${userError}`);
      } else if (userOutput.trim() === "") {
        setOutput("$ (no output)\nTip: Use print() to display results.");
      } else {
        setOutput(userOutput);
      }

      // Runtime error → show feedback, never touch AI quota
      if (userError) {
        const newFailCount = failCount + 1;
        setFailCount(newFailCount);
        setFeedback({
          isCorrect: false,
          feedback: `Your code has a runtime error:\n\n${userError}\n\nFix the error and try again.`,
          mistakePatterns: ["runtime_error"],
          suggestions: [
            "Read the error message carefully — it tells you the line number.",
            "Check for typos in variable names or function calls.",
          ],
        });
        setSubmitted(true);

        if (!isGuest && supabaseClient && user) {
          await progressDb.updateProgress(supabaseClient, user.id, {
            total_exercises: (progress?.total_exercises || 0) + 1,
            mistake_patterns: [
              ...new Set([
                ...(progress?.mistake_patterns || []),
                "runtime_error",
              ]),
            ].slice(-5),
          });
        }

        if (exerciseFirst && newFailCount >= 3) {
          setTimeout(() => setShowTheoryModal(true), 800);
        }

        setSubmitting(false);
        return;
      }

      // Output comparison
      const expectedOutput  = await getExpectedOutput(solutionCode);
      const normalisedUser  = normaliseOutput(userOutput);

      const outputMatches =
        expectedOutput === null ||
        expectedOutput === ""   ||
        normalisedUser === expectedOutput;

      const isCorrect = passedPatterns && outputMatches;

      if (isCorrect) {
        await handleCorrectSubmission();
      } else {
        let diffMessage = "Your output doesn't match the expected output yet.";
        if (!passedPatterns) {
          const failing = tests.find(
            (t) => t.type === "contains" && !code.includes(t.value)
          );
          diffMessage = failing
            ? `Your code should include: \`${failing.value}\``
            : "Your code is missing a required construct.";
        } else if (expectedOutput && normalisedUser !== expectedOutput) {
          diffMessage =
            `Expected output:\n${expectedOutput}\n\n` +
            `Your output:\n${normalisedUser || "(empty)"}`;
        }
        await handleIncorrectSubmission(diffMessage);
      }

      setSubmitting(false);
      return;
    }

    // ── Non-Python: AI evaluation path ───────────────────────────────
    if (passedPatterns) {
      await handleAiEvaluation();
    } else {
      const failing = tests.find(
        (t) => t.type === "contains" && !code.includes(t.value)
      );
      const diffMessage = failing
        ? `Your code should include: \`${failing.value}\``
        : "Your code is missing a required construct.";
      await handleIncorrectSubmission(diffMessage);
    }

    setSubmitting(false);
  };

  // ------------------------------------------------------------------
  // Correct submission
  // ------------------------------------------------------------------
  async function handleCorrectSubmission() {
    setFeedback({
      isCorrect: true,
      feedback: "Your code produces the correct output. Great work!",
      mistakePatterns: [],
      suggestions: [],
    });
    setSubmitted(true);
    setTimeout(() => openFeedbackWidget(true), 1200);

    if (isGuest) {
      localProgressDb.completeLesson(lessonId, {
        total_exercises:  (progress?.total_exercises  || 0) + 1,
        correct_exercises: (progress?.correct_exercises || 0) + 1,
      });
      setProgress(localProgressDb.getProgress());
      const updatedProgress = localProgressDb.getProgress();
      if (
        shouldPromptSignup(language, updatedProgress.completed_lessons) &&
        !localProgressDb.hasSeenSignupPrompt()
      ) {
        if (exerciseFirst) {
          setTimeout(() => setShowTheoryModal(true), 600);
        } else {
          setTimeout(() => setShowSignupModal(true), 1500);
        }
      } else if (exerciseFirst) {
        setTimeout(() => setShowTheoryModal(true), 600);
      }
    } else if (supabaseClient && user) {
      const updated = await progressDb.completeLesson(
        supabaseClient,
        user.id,
        lessonId,
        {
          total_exercises:  (progress?.total_exercises  || 0) + 1,
          correct_exercises: (progress?.correct_exercises || 0) + 1,
          mistake_patterns: progress?.mistake_patterns || [],
        }
      );
      if (updated) setProgress(updated);
      if (exerciseFirst) {
        setTimeout(() => setShowTheoryModal(true), 600);
      }
    }
  }

  // ------------------------------------------------------------------
  // Incorrect without AI
  // ------------------------------------------------------------------
  async function handleIncorrectSubmission(reasonMessage) {
    const newFailCount = failCount + 1;
    setFailCount(newFailCount);

    setFeedback({
      isCorrect: false,
      feedback: reasonMessage,
      mistakePatterns: [],
      suggestions: [
        "Re-read the exercise prompt carefully.",
        "Compare your output to the expected output above.",
        "Use the Hint button if you're stuck.",
      ],
    });
    setSubmitted(true);

    if (!isGuest && supabaseClient && user) {
      await progressDb.updateProgress(supabaseClient, user.id, {
        total_exercises: (progress?.total_exercises || 0) + 1,
      });
    }

    if (exerciseFirst && newFailCount >= 3) {
      setTimeout(() => setShowTheoryModal(true), 800);
    }
  }

  // ------------------------------------------------------------------
  // AI evaluation (non-Python)
  // 1. checkAiLimit  – read-only gate
  // 2. evaluateCode  – AI network call
  // 3. incrementAiCount – only on success
  // ------------------------------------------------------------------
  async function handleAiEvaluation() {
    const newFailCount = failCount + 1;
    setFailCount(newFailCount);

    if (!isGuest && supabaseClient && user) {
      const limitCheck = await progressDb.checkAiLimit(
        supabaseClient,
        user.id,
        progress?.is_pro
      );
      if (!limitCheck.allowed) {
        setLimitReached(true);
        setAiRemaining(0);
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
    }

    let aiResponse;
    try {
      aiResponse = await evaluateCode(code, language, lesson);
    } catch (err) {
      console.error("AI evaluation error:", err);
      setFeedback({
        isCorrect: false,
        feedback:
          "Something doesn't look right. Check the exercise prompt and compare your code with the example.",
        mistakePatterns: [],
        suggestions: ["Review the example code", "Check for typos"],
      });
      setSubmitted(true);
      if (exerciseFirst && newFailCount >= 3) {
        setTimeout(() => setShowTheoryModal(true), 800);
      }
      return;
    }

    if (!isGuest && supabaseClient && user) {
      const incrementResult = await progressDb.incrementAiCount(
        supabaseClient,
        user.id,
        progress?.is_pro
      );
      if (incrementResult.remaining !== null) {
        setAiRemaining(incrementResult.remaining);
        if (incrementResult.remaining === 0) setLimitReached(true);
      }
      if (!incrementResult.allowed) {
        setLimitReached(true);
        setAiRemaining(0);
      }
    }

    setFeedback(aiResponse);
    setSubmitted(true);

    if (!aiResponse.isCorrect && exerciseFirst && newFailCount >= 3) {
      setTimeout(() => setShowTheoryModal(true), 800);
    }

    if (aiResponse.isCorrect) {
      if (isGuest) {
        localProgressDb.completeLesson(lessonId, {
          total_exercises:  (progress?.total_exercises  || 0) + 1,
          correct_exercises: (progress?.correct_exercises || 0) + 1,
        });
        setProgress(localProgressDb.getProgress());
        const updatedProgress = localProgressDb.getProgress();
        if (
          shouldPromptSignup(language, updatedProgress.completed_lessons) &&
          !localProgressDb.hasSeenSignupPrompt()
        ) {
          setTimeout(() => setShowSignupModal(true), 1500);
        } else if (exerciseFirst) {
          setTimeout(() => setShowTheoryModal(true), 600);
        }
      } else if (supabaseClient && user) {
        const updated = await progressDb.completeLesson(
          supabaseClient,
          user.id,
          lessonId,
          {
            total_exercises:  (progress?.total_exercises  || 0) + 1,
            correct_exercises: (progress?.correct_exercises || 0) + 1,
            mistake_patterns: progress?.mistake_patterns || [],
          }
        );
        if (updated) setProgress(updated);
        if (exerciseFirst) {
          setTimeout(() => setShowTheoryModal(true), 600);
        }
      }
      setTimeout(() => openFeedbackWidget(true), 1200);
    } else if (!isGuest && supabaseClient && user) {
      const updatedMistakes = aiResponse.mistakePatterns
        ? [
            ...new Set([
              ...(progress?.mistake_patterns || []),
              ...aiResponse.mistakePatterns,
            ]),
          ].slice(-5)
        : progress?.mistake_patterns || [];
      const updated = await progressDb.updateProgress(supabaseClient, user.id, {
        total_exercises: (progress?.total_exercises || 0) + 1,
        mistake_patterns: updatedMistakes,
      });
      if (updated) setProgress(updated);
    }
  }

  // ------------------------------------------------------------------
  // Render
  // ------------------------------------------------------------------
  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      <Helmet>
        <title>AI-Powered Code Editor | {lesson.title} - FluentCode</title>
        <meta
          name="description"
          content="Write code and get instant AI-powered feedback. Practice Python with interactive exercises and AI guidance from FluentCode."
        />
      </Helmet>

      {showSignupModal && (
        <SignupPrompt
          show={true}
          onClose={() => {
            setShowSignupModal(false);
            localProgressDb.markSignupPromptSeen();
          }}
        />
      )}

      <TheoryModal
        lesson={lesson}
        show={showTheoryModal}
        isCorrect={feedback?.isCorrect ?? false}
        nextLesson={nextLesson}
        onClose={() => {
          setShowTheoryModal(false);
          if (
            feedback?.isCorrect &&
            isGuest &&
            shouldPromptSignup(
              language,
              localProgressDb.getProgress().completed_lessons
            ) &&
            !localProgressDb.hasSeenSignupPrompt()
          ) {
            setTimeout(() => setShowSignupModal(true), 300);
          }
        }}
        onNext={() => {
          setShowTheoryModal(false);
          handleNext();
        }}
      />

      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 shrink-0">
        <button
          onClick={() =>
            exerciseFirst
              ? navigate("/courses")
              : navigate(`/lesson/${language}/${lessonId}`)
          }
          className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft size={13} />
          {exerciseFirst ? "Courses" : "Lesson"}
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
          {exerciseFirst && failCount > 0 && !feedback?.isCorrect && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-50 text-red-500">
              {failCount}/3 attempts
            </span>
          )}
        </div>

        {canProceed ? (
          nextLesson && !nextRequiresLogin ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 transition-all duration-200"
            >
              Next <ArrowRight size={13} />
            </button>
          ) : nextRequiresLogin ? (
            <button
              onClick={() => setShowSignupModal(true)}
              className="flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 transition-all duration-200"
            >
              Sign up <ArrowRight size={13} />
            </button>
          ) : (
            <div className="w-20" />
          )
        ) : exerciseFirst && !canProceed ? (
          <button
            onClick={() => setShowTheoryModal(true)}
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            <BookOpen size={13} />
            Theory
          </button>
        ) : (
          <div className="w-20" />
        )}
      </div>

      {/* ── Exercise prompt ── */}
      <div className="px-4 py-3 border-b border-zinc-100 bg-zinc-50 shrink-0">
        <p className="text-sm text-zinc-600 leading-relaxed">
          {lesson.exercise.prompt}
        </p>
      </div>

      {/* ── Feedback banner ── */}
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
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm font-semibold mb-1 ${
                    feedback.isCorrect ? "text-emerald-700" : "text-red-700"
                  }`}
                >
                  {feedback.isCorrect
                    ? "🎉 Great job! Your code is correct!"
                    : failCount >= 3 && exerciseFirst
                    ? "Not quite — the theory below might help!"
                    : "Not quite right — here's what to check:"}
                </p>
                <p
                  className={`text-xs leading-relaxed whitespace-pre-wrap ${
                    feedback.isCorrect ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {feedback.feedback}
                </p>
                {!feedback.isCorrect && feedback.suggestions?.length > 0 && (
                  <div className="mt-2 flex flex-col gap-1">
                    {feedback.suggestions.map((s, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-red-500">
                        <Lightbulb size={11} className="shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                )}
                {feedback.isCorrect && isGuest && (
                  <p className="text-xs text-emerald-500 mt-2">
                    <Sparkles size={11} className="inline mr-1" />
                    Create a free account to unlock AI feedback on every exercise!
                  </p>
                )}
                {feedback.isCorrect && exerciseFirst && (
                  <button
                    onClick={() => setShowTheoryModal(true)}
                    className="mt-2 text-xs text-emerald-600 underline underline-offset-2 hover:text-emerald-800 transition-colors"
                  >
                    See why this works →
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── AI limit warning ── */}
      {limitReached && !isGuest && (
        <div className="px-4 py-3 bg-amber-50 border-b border-amber-100 shrink-0">
          <div className="flex items-center justify-between">
            <p className="text-sm text-amber-700">
              Daily AI limit reached. Come back tomorrow or support the project.
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

      {/* ── Main split ── */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Editor */}
          <div className="flex-1 overflow-hidden p-2">
            <CodeEditor value={code} onChange={setCode} language={language} />
          </div>

          {/* Output panel */}
          <div className="h-36 border-t border-zinc-100 bg-zinc-950 overflow-y-auto shrink-0">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800">
              <div className={`w-2 h-2 rounded-full ${output ? "bg-green-500" : "bg-zinc-700"}`} />
              <span className="text-xs text-zinc-500 font-mono">output</span>
              {running && (
                <Loader2 size={11} className="text-zinc-600 animate-spin ml-1" />
              )}
            </div>
            <pre className="text-xs text-zinc-400 font-mono px-4 py-3 leading-relaxed whitespace-pre-wrap">
              {output || "Press ▶ Run to see output"}
            </pre>
          </div>

          {/* Action bar */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-t border-zinc-100 shrink-0">
            {isPythonLanguage(language) ? (
              <button
                onClick={handleRun}
                disabled={running || submitting}
                className="flex items-center gap-1.5 px-4 py-2 border border-zinc-200 rounded-lg text-sm text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 transition-all duration-200 disabled:opacity-40"
              >
                {running ? (
                  <Loader2 size={12} className="animate-spin" />
                ) : (
                  <Play size={12} />
                )}
                {running ? "Running…" : "Run"}
              </button>
            ) : (
              <button
                disabled
                title={`Live execution for ${language} coming soon`}
                className="flex items-center gap-1.5 px-4 py-2 border border-zinc-100 rounded-lg text-sm text-zinc-300 cursor-not-allowed"
              >
                <Play size={12} />
                Run
              </button>
            )}

            <button
              onClick={handleSubmit}
              disabled={submitting || (limitReached && !isGuest)}
              className="flex items-center gap-1.5 px-5 py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-700 disabled:opacity-40 transition-all duration-200"
            >
              {submitting ? (
                <Loader2 size={12} className="animate-spin" />
              ) : (
                <Send size={12} />
              )}
              {submitting
                ? "Checking…"
                : limitReached && !isGuest
                ? "Limit reached"
                : "Submit"}
            </button>

            {lesson.exercise?.debuggingTip && (
              <button
                onClick={() => setShowHint((h) => !h)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
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
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-200 ml-auto ${
                showSolution
                  ? "bg-zinc-100 text-zinc-900 border border-zinc-200"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 border border-transparent"
              }`}
            >
              {showSolution ? <EyeOff size={13} /> : <Eye size={13} />}
              {showSolution ? "Hide solution" : "Show solution"}
            </button>
          </div>

          {/* Hint drawer */}
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

        {/* AI panel */}
        <div className="w-72 shrink-0 overflow-hidden border-l border-zinc-100 hidden md:block">
          <AIFeedbackPanel
            lesson={lesson}
            userCode={code}
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