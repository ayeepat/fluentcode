// src/lib/quizGenerator.js
// ---------------------------------------------------------------------------
// Deterministic, content-driven quiz generator.
//
// Produces up to 5 questions per lesson sourced exclusively from static
// lesson fields.  No random wrong-answer arrays, no regex fragility, no
// language-specific branches.
//
// Question types
// ──────────────
//  1. Concept        – tests lesson.concept
//  2. Example output – tests first output line of lesson.example
//  3. Exercise       – tests first line of lesson.exercise.solution
//  4. Explanation    – tests a key sentence from lesson.explanation
//  5. Debugging tip  – tests lesson.exercise.debuggingTip
//
// Each question object
// ────────────────────
// {
//   question    : string,
//   options     : [string, string, string, string],  // always 4
//   correctIndex: number,                             // 0–3 after shuffle
//   hint        : string,
//   explanation : string,
// }
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Seeded shuffle
// ---------------------------------------------------------------------------

/**
 * Turn a string into a 32-bit unsigned integer seed (djb2 hash).
 */
function seedFromString(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/**
 * LCG pseudo-random number generator (Numerical Recipes constants).
 * Returns a closure that produces the next float in [0, 1) each call.
 */
function makePrng(seed) {
  let s = seed >>> 0;
  return () => {
    s = Math.imul(1664525, s) + 1013904223;
    s = s >>> 0;
    return s / 0x100000000;
  };
}

/**
 * Fisher-Yates shuffle using the supplied PRNG. Mutates and returns `arr`.
 */
function seededShuffle(arr, prng) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(prng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------------------------------------------------------------------------
// Output extraction (Q2)
// ---------------------------------------------------------------------------

/**
 * Patterns ordered from most- to least-specific.
 * Each must have exactly one capture group: the printed value.
 */
const PRINT_PATTERNS = [
  // Python  : print("hello")  print('hello')  print(42)
  /print\(\s*f?["']([^"']+)["']\s*\)/,
  /print\(\s*(\d[\d.]*)\s*\)/,
  // Java    : System.out.println("hello")
  /System\.out\.print(?:ln)?\(\s*"([^"]+)"\s*\)/,
  // JS / TS : console.log("hello")
  /console\.log\(\s*["'`]([^"'`]+)["'`]\s*\)/,
  // Ruby    : puts "hello"  print "hello"
  /(?:puts|print)\s+["']([^"']+)["']/,
  /(?:puts|print)\s+(\d[\d.]*)/,
];

/**
 * Extract the first recognisable output value from example code.
 * Returns a trimmed string, or null when nothing safe can be found.
 */
function extractFirstOutput(exampleCode) {
  if (!exampleCode || typeof exampleCode !== "string") return null;
  for (const pattern of PRINT_PATTERNS) {
    for (const line of exampleCode.split("\n")) {
      const m = line.match(pattern);
      if (m?.[1] !== undefined) {
        const value = m[1].trim();
        if (value.length > 0) return value;
      }
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Explanation extraction (Q4)
// ---------------------------------------------------------------------------

/**
 * Pull the most informative sentence from lesson.explanation.
 *
 * Strategy:
 *  1. Split on sentence boundaries (. ! ?)
 *  2. Prefer sentences that contain "is", "are", "means", "allows",
 *     "lets", "used", "called" — these tend to be definitional.
 *  3. Fall back to the longest sentence if none match.
 *  4. Return null if nothing useful is found.
 */
function extractKeySentence(explanation) {
  if (!explanation || typeof explanation !== "string") return null;

  const sentences = explanation
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20); // discard very short fragments

  if (sentences.length === 0) return null;

  const DEFINITIONAL = /\b(is|are|means|allows|lets|used|called|makes)\b/i;
  const definitional = sentences.filter((s) => DEFINITIONAL.test(s));

  const pool = definitional.length > 0 ? definitional : sentences;

  // Pick the longest from the pool — tends to be the most content-rich
  const best = pool.reduce((a, b) => (b.length > a.length ? b : a));

  // Cap at 160 chars so it fits comfortably as a quiz option
  return best.length > 160 ? best.slice(0, 160).trimEnd() + "…" : best;
}

// ---------------------------------------------------------------------------
// Shared option truncation helper
// ---------------------------------------------------------------------------

function truncate(str, max = 120) {
  if (!str || typeof str !== "string") return str;
  const trimmed = str.trim();
  return trimmed.length > max ? trimmed.slice(0, max).trimEnd() + "…" : trimmed;
}

// ---------------------------------------------------------------------------
// Question builders
// Each returns a raw question object with the correct answer at options[0],
// plus a `_correctAnswer` sentinel used by shuffleAndFinish.
// Returns null when the required lesson field is absent / too short.
// ---------------------------------------------------------------------------

/** Q1 – Core concept */
function buildConceptQuestion(lesson) {
  const concept = lesson?.concept?.trim();
  if (!concept || concept.length < 10) return null;

  const correctAnswer = truncate(concept);

  return {
    question: "What is the main concept covered in this lesson?",
    options: [
      correctAnswer,
      "Incorrect syntax that causes a runtime error",
      "A concept from a different programming topic",
      "An advanced feature not covered in this course",
    ],
    _correctAnswer: correctAnswer,
    hint: "Re-read the concept summary at the top of the lesson.",
    explanation: `The lesson explains: ${correctAnswer}`,
  };
}

/** Q2 – Example output */
function buildExampleQuestion(lesson) {
  const exampleCode = lesson?.example?.trim();
  if (!exampleCode) return null;

  const output = extractFirstOutput(exampleCode);
  if (!output) return null;

  return {
    question:
      "What is the output of the first print statement in the example code?",
    options: [
      output,
      "Error: invalid syntax",
      "Nothing – the code produces no output",
      "undefined",
    ],
    _correctAnswer: output,
    hint: "Look at the first print / log / puts statement in the example.",
    explanation: `Running the example code prints: ${output}`,
  };
}

/** Q3 – Exercise solution */
function buildExerciseQuestion(lesson) {
  const prompt = lesson?.exercise?.prompt?.trim();
  const solution = lesson?.exercise?.solution?.trim();
  if (!prompt || !solution) return null;

  const firstLine = solution
    .split("\n")
    .map((l) => l.trim())
    .find((l) => l.length > 0);
  if (!firstLine) return null;

  const correctAnswer = truncate(firstLine, 100);

  return {
    question: `Which of the following correctly completes this exercise?\n\n"${prompt}"`,
    options: [
      correctAnswer,
      "# This line contains a syntax error",
      "pass  # Missing required code",
      "undefined_variable",
    ],
    _correctAnswer: correctAnswer,
    hint: "Think about the exact syntax shown in the lesson example.",
    explanation: `The correct solution starts with: ${correctAnswer}`,
  };
}

/** Q4 – Explanation comprehension */
function buildExplanationQuestion(lesson) {
  const explanation = lesson?.explanation?.trim();
  if (!explanation || explanation.length < 30) return null;

  const keySentence = extractKeySentence(explanation);
  if (!keySentence) return null;

  return {
    question:
      "Which of the following best describes what this lesson is about?",
    options: [
      keySentence,
      "This lesson covers how to handle exceptions and runtime errors.",
      "This lesson explains how to import external libraries.",
      "This lesson focuses on optimising code for performance.",
    ],
    _correctAnswer: keySentence,
    hint: "Read the lesson explanation section carefully.",
    explanation: `The lesson explains: ${keySentence}`,
  };
}

/** Q5 – Debugging tip */
function buildDebuggingTipQuestion(lesson) {
  const tip = lesson?.exercise?.debuggingTip?.trim();
  if (!tip || tip.length < 10) return null;

  const correctAnswer = truncate(tip);

  return {
    question:
      "Which tip would best help you debug a mistake in this exercise?",
    options: [
      correctAnswer,
      "Add more variables to track the program state.",
      "Restart the interpreter and try a different approach.",
      "Check your internet connection and reload the page.",
    ],
    _correctAnswer: correctAnswer,
    hint: "Think about the specific mistake this exercise is designed to catch.",
    explanation: `The debugging tip for this exercise: ${correctAnswer}`,
  };
}

// ---------------------------------------------------------------------------
// Shuffle and finalise
// ---------------------------------------------------------------------------

/**
 * Shuffle options using the shared PRNG, then compute correctIndex.
 * Strips the internal `_correctAnswer` sentinel before returning.
 */
function shuffleAndFinish(raw, prng) {
  const { _correctAnswer, ...rest } = raw;
  const options = seededShuffle([...raw.options], prng);
  const correctIndex = options.indexOf(_correctAnswer);
  return { ...rest, options, correctIndex };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Generate up to 5 deterministic quiz questions for `lesson`.
 *
 * Questions are skipped (not faked) when the required lesson field is
 * absent, so the returned array may have fewer than 5 items.
 *
 * @param {object} lesson     – a single lesson object from the curriculum
 * @param {string} [language] – reserved for future display tweaks, unused
 * @returns {Array<{
 *   question    : string,
 *   options     : string[],   // 4 items
 *   correctIndex: number,     // 0–3
 *   hint        : string,
 *   explanation : string,
 * }>}
 */
export function generateQuizQuestions(lesson, _language) {
  if (!lesson) return [];

  // Stable seed from lesson ID ensures identical shuffle on every render
  const seed = seedFromString(lesson.id ?? lesson.title ?? "default");
  const prng = makePrng(seed);

  const builders = [
    buildConceptQuestion,
    buildExampleQuestion,
    buildExerciseQuestion,
    buildExplanationQuestion,
    buildDebuggingTipQuestion,
  ];

  return builders
    .map((build) => build(lesson))
    .filter(Boolean)
    .map((raw) => shuffleAndFinish(raw, prng));
}