// src/hooks/useCurriculumReady.js
import { useState, useEffect } from "react";
import { loadCurriculum, hasVersion2 } from "@/lib/curriculum";

/**
 * Ensures the curriculum chunk for a language is in the synchronous cache.
 *
 * Pages reached via deep link (/lesson/:lang/:id, /code/:lang/:id, /quiz/...)
 * call getAllLessons()/getLessonById() which read from a cache that is only
 * populated by an async import. Without this, guest-access checks run against
 * an empty cache and wrongly redirect to /courses or show "Lesson not found".
 *
 * Loads the guest-default version (v2 where available, else v1). Pages that
 * resolve a per-user version from progress additionally await loadCurriculum
 * for that version in their own data flow.
 */
export function useCurriculumReady(language) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setReady(false);
    const version = hasVersion2(language) ? 2 : 1;
    loadCurriculum(language, version)
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, [language]);

  return ready;
}
