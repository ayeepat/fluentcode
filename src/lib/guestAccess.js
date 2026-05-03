// src/lib/guestAccess.js
import { getAllLessons } from "./curriculum";

const GUEST_LESSON_LIMIT = 3;

/**
 * Returns the IDs of lessons a guest can access (first 3 of each language)
 */
export function getGuestLessonIds(language) {
  const allLessons = getAllLessons(language);
  return allLessons.slice(0, GUEST_LESSON_LIMIT).map((l) => l.id);
}

/**
 * Checks if a specific lesson is accessible to guests
 */
export function isGuestAccessible(language, lessonId) {
  const guestIds = getGuestLessonIds(language);
  return guestIds.includes(lessonId);
}

/**
 * Checks if the user has hit the guest limit and should be prompted to sign up
 */
export function shouldPromptSignup(language, completedLessons) {
  const guestIds = getGuestLessonIds(language);
  const completedGuestLessons = guestIds.filter((id) =>
    completedLessons.includes(id)
  );
  return completedGuestLessons.length >= GUEST_LESSON_LIMIT;
}

export const GUEST_LESSON_LIMIT_COUNT = GUEST_LESSON_LIMIT;