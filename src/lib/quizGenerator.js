// src/lib/quizGenerator.js

/**
 * Generates multiple choice questions from a lesson object.
 * Returns an array of { question, options, correctIndex, explanation }
 */
export function generateQuizQuestions(lesson, language) {
  const questions = [];

  // Q1 — Concept question (always present)
  if (lesson.concept) {
    const conceptQ = generateConceptQuestion(lesson, language);
    if (conceptQ) questions.push(conceptQ);
  }

  // Q2 — Example code reading question
  if (lesson.example) {
    const exampleQ = generateExampleQuestion(lesson, language);
    if (exampleQ) questions.push(exampleQ);
  }

  // Q3 — Exercise question (what does the solution do)
  if (lesson.exercise?.solution) {
    const solutionQ = generateSolutionQuestion(lesson, language);
    if (solutionQ) questions.push(solutionQ);
  }

  // Q4 — Debugging tip / error avoidance question
  if (lesson.exercise?.debuggingTip) {
    const debugQ = generateDebugQuestion(lesson, language);
    if (debugQ) questions.push(debugQ);
  }

  // Always return at least 2 questions
  return questions.slice(0, 4);
}

function generateConceptQuestion(lesson, language) {
  const concept = lesson.concept;

  // Extract key term from concept (first word that looks like code)
  const codeMatch = concept.match(/`([^`]+)`/) ||
    concept.match(/(\w+\(\))/) ||
    concept.match(/(\w+)/);

  const keyTerm = codeMatch ? codeMatch[1] : lesson.title;

  return {
    question: `What is the main concept taught in "${lesson.title}"?`,
    options: [
      concept.length > 120 ? concept.slice(0, 120) + "..." : concept,
      getWrongConceptOption(lesson, language, 0),
      getWrongConceptOption(lesson, language, 1),
      getWrongConceptOption(lesson, language, 2),
    ],
    correctIndex: 0,
    explanation: concept,
  };
}

function generateExampleQuestion(lesson, language) {
  const lines = lesson.example.split("\n").filter(l => l.trim());
  const firstMeaningfulLine = lines.find(l =>
    !l.trim().startsWith("#") && !l.trim().startsWith("//") && l.trim().length > 0
  ) || lines[0];

  return {
    question: `What does this code do?\n\`\`\`\n${firstMeaningfulLine}\n\`\`\``,
    options: [
      getCorrectExampleAnswer(lesson, firstMeaningfulLine, language),
      getWrongExampleOption(lesson, language, 0),
      getWrongExampleOption(lesson, language, 1),
      getWrongExampleOption(lesson, language, 2),
    ],
    correctIndex: 0,
    explanation: `This is from the "${lesson.title}" lesson. ${lesson.concept}`,
  };
}

function generateSolutionQuestion(lesson, language) {
  return {
    question: `For this exercise: "${lesson.exercise.prompt.slice(0, 100)}..." — which approach is correct?`,
    options: [
      summarizeSolution(lesson.exercise.solution, language),
      getWrongSolutionOption(lesson, language, 0),
      getWrongSolutionOption(lesson, language, 1),
      getWrongSolutionOption(lesson, language, 2),
    ],
    correctIndex: 0,
    explanation: `The correct solution uses: ${summarizeSolution(lesson.exercise.solution, language)}`,
  };
}

function generateDebugQuestion(lesson, language) {
  const tip = lesson.exercise.debuggingTip;
  return {
    question: `Which of the following is the best debugging advice for "${lesson.title}"?`,
    options: [
      tip.length > 120 ? tip.slice(0, 120) + "..." : tip,
      getWrongDebugOption(lesson, language, 0),
      getWrongDebugOption(lesson, language, 1),
      getWrongDebugOption(lesson, language, 2),
    ],
    correctIndex: 0,
    explanation: tip,
  };
}

// ─── Wrong answer generators ───────────────────────────────────────────────

const pythonWrongConcepts = [
  "Variables must always be declared with a type keyword before use.",
  "Functions in Python must always return a value explicitly.",
  "Python uses semicolons to end every statement.",
  "Indentation in Python is optional and just for readability.",
  "Lists in Python can only store values of the same type.",
  "The `def` keyword is used to declare variables in Python.",
  "Python requires a `main()` function to run any program.",
  "Strings in Python cannot be modified once created using .upper().",
  "The `for` loop in Python always requires a counter variable.",
  "You must use `var` to declare variables in Python.",
];

const javaWrongConcepts = [
  "Java variables do not need a type declaration.",
  "Java methods always return void unless specified otherwise.",
  "Java does not need semicolons at the end of statements.",
  "In Java, you can write code outside of a class.",
  "ArrayList is a fixed-size data structure in Java.",
  "The `main` method in Java can be named anything.",
  "Java is a dynamically typed language like Python.",
  "You can use `print()` directly in Java without a class.",
  "Java loops do not need curly braces.",
  "Inheritance in Java is achieved using the `extends` keyword only in interfaces.",
];

function getWrongConceptOption(lesson, language, index) {
  const wrongs = language === "java" ? javaWrongConcepts : pythonWrongConcepts;
  return wrongs[(index + lesson.title.length) % wrongs.length];
}

function getCorrectExampleAnswer(lesson, codeLine, language) {
  if (language === "python") {
    if (codeLine.includes("print(")) return "Outputs text to the screen";
    if (codeLine.includes("def ")) return "Defines a new function";
    if (codeLine.includes("for ")) return "Iterates over a sequence";
    if (codeLine.includes("if ")) return "Checks a condition";
    if (codeLine.includes("import ")) return "Imports a module for use";
    if (codeLine.includes("class ")) return "Defines a new class";
    if (codeLine.includes("=")) return "Assigns a value to a variable";
    if (codeLine.includes("return")) return "Returns a value from a function";
  } else {
    if (codeLine.includes("System.out.println")) return "Outputs text to the screen";
    if (codeLine.includes("int ") || codeLine.includes("String ")) return "Declares a variable with a type";
    if (codeLine.includes("for ")) return "Iterates a fixed number of times";
    if (codeLine.includes("if ")) return "Checks a condition";
    if (codeLine.includes("class ")) return "Defines a new class";
    if (codeLine.includes("return")) return "Returns a value from a method";
    if (codeLine.includes("new ArrayList")) return "Creates a new resizable list";
  }
  return `Demonstrates ${lesson.title}`;
}

const wrongExampleOptions = [
  "Deletes a variable from memory",
  "Stops the program from running",
  "Converts a number to a string automatically",
  "Declares a new class",
  "Imports an external library",
  "Creates an infinite loop",
  "Throws an exception",
  "Connects to a database",
];

function getWrongExampleOption(lesson, language, index) {
  return wrongExampleOptions[(index + lesson.id.length) % wrongExampleOptions.length];
}

function summarizeSolution(solution, language) {
  if (!solution) return "Write the correct code as shown in the example";
  const lines = solution.split("\n").filter(l => l.trim() && !l.trim().startsWith("#") && !l.trim().startsWith("//"));
  if (lines.length === 0) return "Follow the lesson concept";
  const first = lines[0].trim();
  if (first.length > 80) return first.slice(0, 80) + "...";
  return first;
}

const wrongSolutionOptions = [
  "Use a while loop instead of the suggested approach",
  "Import a third-party library to solve the problem",
  "Hard-code the answer without using any variables",
  "Use recursion to solve the problem",
  "Solve it using only print statements with no logic",
  "Use a class and object-oriented approach",
  "Store the result in a global variable",
  "Use string concatenation instead of f-strings",
];

function getWrongSolutionOption(lesson, language, index) {
  return wrongSolutionOptions[(index + lesson.id.length) % wrongSolutionOptions.length];
}

const wrongDebugOptions = [
  "Always use global variables to avoid scope issues.",
  "Never use print statements for debugging — they slow down the program.",
  "If your code doesn't work, delete everything and start over.",
  "Semicolons are optional in most programming languages.",
  "Indentation doesn't matter as long as the logic is correct.",
  "You can ignore error messages — they are usually not helpful.",
  "Always test your entire program at once rather than in small pieces.",
  "Comments in code slow down execution and should be avoided.",
];

function getWrongDebugOption(lesson, language, index) {
  return wrongDebugOptions[(index + lesson.id.length) % wrongDebugOptions.length];
}