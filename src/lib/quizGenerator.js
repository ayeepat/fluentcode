// src/lib/quizGenerator.js

export function generateQuizQuestions(lesson, language) {
  const questions = [];

  if (lesson.concept) {
    const q = generateConceptQuestion(lesson, language);
    if (q) questions.push(q);
  }

  if (lesson.example) {
    const q = generateExampleQuestion(lesson, language);
    if (q) questions.push(q);
  }

  if (lesson.exercise?.solution) {
    const q = generateSolutionQuestion(lesson, language);
    if (q) questions.push(q);
  }

  if (lesson.exercise?.debuggingTip) {
    const q = generateDebugQuestion(lesson, language);
    if (q) questions.push(q);
  }

  if (lesson.example) {
    const q = generateFillBlankQuestion(lesson, language);
    if (q) questions.push(q);
  }

  if (lesson.concept) {
    const q = generateTrueOrFalseQuestion(lesson, language);
    if (q) questions.push(q);
  }

  if (lesson.example) {
    const q = generatePredictOutputQuestion(lesson, language);
    if (q) questions.push(q);
  }

  return questions.slice(0, 7);
}

// ─── Question generators ───────────────────────────────────────────────────

function generateConceptQuestion(lesson, language) {
  const concept = lesson.concept;
  return {
    question: `What is the main concept taught in "${lesson.title}"?`,
    hint: `Think about what the lesson title "${lesson.title}" is referring to.`,
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
    !l.trim().startsWith("#") &&
    !l.trim().startsWith("//") &&
    l.trim().length > 0
  ) || lines[0];

  return {
    question: `What does this code do?\n\`\`\`\n${firstMeaningfulLine}\n\`\`\``,
    hint: `Look at the keywords in the code. What function or operation is being performed?`,
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
    hint: `Re-read the exercise prompt carefully. What does it ask you to do?`,
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
    question: `Which is the best debugging advice for "${lesson.title}"?`,
    hint: `Think about the most common mistake beginners make with this concept.`,
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

function generateFillBlankQuestion(lesson, language) {
  const lines = lesson.example
    .split("\n")
    .filter(l => l.trim() && !l.trim().startsWith("#") && !l.trim().startsWith("//"));

  if (lines.length === 0) return null;

  // Pick a line with an interesting keyword
  const targetLine = lines.find(l =>
    l.includes("(") || l.includes("=") || l.includes("return")
  ) || lines[0];

  // Find a keyword to blank out
  const keywords = language === "python"
    ? ["print", "def", "return", "for", "if", "while", "import", "class", "append", "range"]
    : ["System.out.println", "int", "String", "for", "if", "return", "class", "ArrayList", "static", "void"];

  const foundKeyword = keywords.find(k => targetLine.includes(k));
  if (!foundKeyword) return null;

  const blanked = targetLine.replace(foundKeyword, "______");

  const wrongKeywords = keywords
    .filter(k => k !== foundKeyword)
    .slice(0, 3);

  if (wrongKeywords.length < 3) return null;

  return {
    question: `Fill in the blank:\n\`\`\`\n${blanked}\n\`\`\``,
    hint: `This keyword is one of the core building blocks of ${lesson.title}. Check the example in the lesson.`,
    options: [
      foundKeyword,
      wrongKeywords[0],
      wrongKeywords[1],
      wrongKeywords[2],
    ],
    correctIndex: 0,
    explanation: `The correct keyword is \`${foundKeyword}\`. ${lesson.concept}`,
  };
}

function generateTrueOrFalseQuestion(lesson, language) {
  const concept = lesson.concept;

  // Generate a TRUE statement from the concept
  const trueStatement = concept.length > 100
    ? concept.slice(0, 100) + "..."
    : concept;

  // Generate a FALSE statement
  const falseStatement = getFalseStatement(lesson, language);

  const isCorrectTrue = Math.random() > 0.5;

  if (isCorrectTrue) {
    return {
      question: `True or False: "${trueStatement}"`,
      hint: `Read the key concept section of this lesson carefully.`,
      options: ["True", "False"],
      correctIndex: 0,
      explanation: `TRUE. ${concept}`,
    };
  } else {
    return {
      question: `True or False: "${falseStatement}"`,
      hint: `Think carefully — is this actually how ${lesson.title} works?`,
      options: ["True", "False"],
      correctIndex: 1,
      explanation: `FALSE. ${concept}`,
    };
  }
}

function generatePredictOutputQuestion(lesson, language) {
  const lines = lesson.example.split("\n").filter(l => l.trim());

  const printLine = lines.find(l =>
    l.includes("print(") || l.includes("System.out.println")
  );

  if (!printLine) return null;

  const correctOutput = getPredictedOutput(printLine, lesson, language);
  if (!correctOutput) return null;

  return {
    question: `What is the output of this code?\n\`\`\`\n${printLine.trim()}\n\`\`\``,
    hint: `Trace through the code step by step. What value is being passed to the print function?`,
    options: [
      correctOutput,
      getWrongOutputOption(lesson, language, 0),
      getWrongOutputOption(lesson, language, 1),
      getWrongOutputOption(lesson, language, 2),
    ],
    correctIndex: 0,
    explanation: `The output is "${correctOutput}". ${lesson.concept}`,
  };
}

// ─── Helper functions ──────────────────────────────────────────────────────

function getPredictedOutput(printLine, lesson, language) {
  if (language === "python") {
    const match = printLine.match(/print\("([^"]+)"\)/);
    if (match) return match[1];
    const match2 = printLine.match(/print\('([^']+)'\)/);
    if (match2) return match2[1];
  } else {
    const match = printLine.match(/println\("([^"]+)"\)/);
    if (match) return match[1];
  }
  return null;
}

function getFalseStatement(lesson, language) {
  const falseStatements = language === "python" ? [
    `Python requires you to declare variable types explicitly.`,
    `The print() function in Python uses semicolons.`,
    `Indentation in Python is optional and has no effect on the program.`,
    `Python functions must always explicitly return a value.`,
    `Lists in Python can only contain items of the same data type.`,
    `Python requires a main() function to start execution.`,
    `The def keyword in Python is used to declare variables.`,
    `For loops in Python always require a numeric counter.`,
  ] : [
    `Java variables do not need a type declaration.`,
    `In Java, code can be written outside of a class.`,
    `Java does not require semicolons at the end of statements.`,
    `The main method in Java can be named anything.`,
    `Java is a dynamically typed language.`,
    `ArrayList in Java has a fixed size.`,
    `Java loops do not need curly braces.`,
    `You can use print() directly in Java without a class.`,
  ];

  return falseStatements[(lesson.title.length + lesson.id.length) % falseStatements.length];
}

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
  const lines = solution
    .split("\n")
    .filter(l => l.trim() && !l.trim().startsWith("#") && !l.trim().startsWith("//"));
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

const wrongOutputOptions = [
  "Nothing — the code has a syntax error",
  "undefined",
  "null",
  "An error message",
  "True",
  "False",
  "0",
  "None",
];

function getWrongOutputOption(lesson, language, index) {
  return wrongOutputOptions[(index + lesson.id.length) % wrongOutputOptions.length];
}