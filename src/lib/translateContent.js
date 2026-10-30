import landing from "@/locales/ru/landing.json";
import feedback from "@/locales/ru/feedback.json";
import quiz from "@/locales/ru/quiz.json";
import lessons from "@/locales/ru/lesson-reviewed.json";

// Translate only presentation text; source curriculum and executable examples remain untouched.
export function translateContent(text, language) {
  if (language !== "ru" || typeof text !== "string") return text;
  return lessons[text] || landing[text] || quiz[text] || feedback[text] || text;
}

export function translateQuizText(text, language) {
  if (language !== "ru" || typeof text !== "string") return text;
  const direct = translateContent(text, language);
  if (direct !== text) return direct;
  const exercisePrefix = 'Which of the following correctly completes this exercise?\n\n"';
  if (text.startsWith(exercisePrefix) && text.endsWith('"')) {
    const prompt = text.slice(exercisePrefix.length, -1);
    return `Какой вариант правильно выполняет это задание?\n\n«${translateContent(prompt, language)}»`;
  }
  for (const [en, ru] of [
    ["The lesson explains: ", "В уроке объясняется: "],
    ["Running the example code prints: ", "При выполнении примера выводится: "],
    ["The correct solution starts with: ", "Правильное решение начинается с: "],
    ["The debugging tip for this exercise: ", "Подсказка по отладке для этого задания: "],
  ]) {
    if (text.startsWith(en)) {
      const value = text.slice(en.length);
      const isCodeOrOutput = en.startsWith("Running the example") || en.startsWith("The correct solution");
      return ru + (isCodeOrOutput ? value : translateContent(value, language));
    }
  }
  return text;
}

export function translateFeedback(text, language) {
  if (language !== "ru" || typeof text !== "string") return text;
  const required = "Your code should include: ";
  if (text.startsWith(required)) return "Ваш код должен содержать: " + text.slice(required.length);
  const runtime = "Your code has a runtime error:\n\n";
  const runtimeEnd = "\n\nFix the error and try again.";
  if (text.startsWith(runtime) && text.endsWith(runtimeEnd)) {
    return "При выполнении кода возникла ошибка:\n\n" + text.slice(runtime.length, -runtimeEnd.length) + "\n\nИсправьте ошибку и попробуйте снова.";
  }
  const expected = "Expected output:\n";
  const separator = "\n\nYour output:\n";
  if (text.startsWith(expected) && text.includes(separator)) {
    const i = text.indexOf(separator);
    return "Ожидаемый результат:\n" + text.slice(expected.length, i) + "\n\nВаш результат:\n" + text.slice(i + separator.length);
  }
  return translateContent(text, language);
}

// The quiz generator truncates or extracts a sentence from lesson text. Translate
// its source field for display while keeping the original answer and index intact.
function quizSource(question, lesson) {
  if (question === "What is the main concept covered in this lesson?") return lesson.concept;
  if (question === "Which of the following best describes what this lesson is about?") return lesson.explanation;
  if (question === "Which tip would best help you debug a mistake in this exercise?") return lesson.exercise?.debuggingTip;
  return null;
}

export function translateQuizAnswer(question, option, isCorrect, lesson, language) {
  if (language !== "ru") return option;
  const source = isCorrect ? quizSource(question, lesson) : null;
  return source ? translateContent(source, language) : translateQuizText(option, language);
}

export function translateQuizExplanation(question, explanation, lesson, language) {
  if (language !== "ru") return explanation;
  const source = quizSource(question, lesson);
  if (!source) return translateQuizText(explanation, language);
  const prefix = question.startsWith("Which tip") ? "Подсказка по отладке для этого задания: " : "В уроке объясняется: ";
  return prefix + translateContent(source, language);
}
