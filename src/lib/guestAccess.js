// src/lib/guestAccess.js
import { getAllLessons } from "./curriculum";

const GUEST_LESSON_LIMIT = 3;
const EXERCISE_FIRST_LIMIT = 3; // First N lessons use exercise-first flow

export function getGuestLessonIds(language) {
  const allLessons = getAllLessons(language);
  return allLessons.slice(0, GUEST_LESSON_LIMIT).map((l) => l.id);
}

export function isGuestAccessible(language, lessonId) {
  const guestIds = getGuestLessonIds(language);
  return guestIds.includes(lessonId);
}

export function shouldPromptSignup(language, completedLessons) {
  const guestIds = getGuestLessonIds(language);
  const completedGuestLessons = guestIds.filter((id) =>
    completedLessons.includes(id)
  );
  return completedGuestLessons.length >= GUEST_LESSON_LIMIT;
}

// Returns true if this lesson should use exercise-first flow
export function isExerciseFirst(language, lessonId) {
  const allLessons = getAllLessons(language);
  const idx = allLessons.findIndex((l) => l.id === lessonId);
  return idx >= 0 && idx < EXERCISE_FIRST_LIMIT;
}

export const GUEST_LESSON_LIMIT_COUNT = GUEST_LESSON_LIMIT;