// src/lib/localProgressDb.js
const STORAGE_KEY = "fluentcode_guest_progress";
const SIGNUP_PROMPT_KEY = "fluentcode_signup_prompted";

function getStoredProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Failed to save guest progress:", err);
  }
}

function getDefaults() {
  return {
    completed_lessons: [],
    completed_quizzes: [],
    total_exercises: 0,
    correct_exercises: 0,
    mistake_patterns: [],
    saved_code: {},
    language: "python",
  };
}

export const localProgressDb = {
  getProgress() {
    return getStoredProgress() || getDefaults();
  },

  completeLesson(lessonId, extraUpdates = {}) {
    const data = this.getProgress();
    if (!data.completed_lessons.includes(lessonId)) {
      data.completed_lessons.push(lessonId);
    }
    Object.assign(data, extraUpdates);
    saveProgress(data);
    return data;
  },

  completeQuiz(lessonId) {
    const data = this.getProgress();
    if (!data.completed_quizzes.includes(lessonId)) {
      data.completed_quizzes.push(lessonId);
    }
    saveProgress(data);
    return data;
  },

  saveCode(lessonId, code) {
    const data = this.getProgress();
    data.saved_code[lessonId] = code;
    saveProgress(data);
    return data;
  },

  getCode(lessonId) {
    const data = this.getProgress();
    return data.saved_code[lessonId] || null;
  },

  setLanguage(language) {
    const data = this.getProgress();
    data.language = language;
    saveProgress(data);
    return data;
  },

  clearProgress() {
    localStorage.removeItem(STORAGE_KEY);
  },

  hasProgress() {
    const data = getStoredProgress();
    if (!data) return false;
    return (
      data.completed_lessons.length > 0 ||
      data.completed_quizzes.length > 0 ||
      Object.keys(data.saved_code || {}).length > 0
    );
  },

  // Signup prompt — only show once ever
  hasSeenSignupPrompt() {
    return localStorage.getItem(SIGNUP_PROMPT_KEY) === "true";
  },

  markSignupPromptSeen() {
    localStorage.setItem(SIGNUP_PROMPT_KEY, "true");
  },
};