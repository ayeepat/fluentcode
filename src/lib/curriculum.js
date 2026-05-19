// src/lib/curriculum.js
// ---------------------------------------------------------------------------
// Lazy-loading curriculum registry
//
// Python V2 is eagerly pre-loaded at module initialisation because it is
// the default language for every new user. Every other language is loaded
// on demand when the user first selects it, then cached so subsequent
// switches are instant.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Internal cache and loaders
// ---------------------------------------------------------------------------

/**
 * Resolved curriculum objects keyed by cache key.
 * Keys:  "python-v1" | "python-v2" | "java" | "javascript" | "ruby" | "typescript"
 */
const loadedCurricula = {};

/**
 * In-flight import Promises.
 * Prevents duplicate network requests when two callers ask for the same
 * curriculum before the first request has finished.
 */
const pendingLoads = {};

/** Dynamic import factory for every supported language/version. */
const curriculumLoaders = {
  'python-v1': () =>
    import('./curriculum-python.js').then((m) => m.pythonCurriculum),
  'python-v2': () =>
    import('./curriculum-python-v2.js').then((m) => m.pythonCurriculumV2),
  java: () =>
    import('./curriculum-java.js').then((m) => m.javaCurriculum),
  javascript: () =>
    import('./curriculum-javascript.js').then((m) => m.javascriptCurriculum),
  ruby: () =>
    import('./curriculum-ruby.js').then((m) => m.rubyCurriculum),
  typescript: () =>
    import('./curriculum-typescript.js').then((m) => m.typescriptCurriculum),
};

/** Convert a language + version pair into the internal cache key. */
function cacheKey(language, version) {
  return language === 'python' ? `python-v${version}` : language;
}

// ---------------------------------------------------------------------------
// Core async loader (private)
// ---------------------------------------------------------------------------

/**
 * Load a curriculum if it is not already cached.
 * Guarantees that only one network request is ever made per curriculum,
 * even if called concurrently.
 *
 * @param {string} language
 * @param {number} version – only meaningful for "python"
 * @returns {Promise<object>} – the resolved curriculum object
 */
async function _load(language, version) {
  const key = cacheKey(language, version);

  // Already in cache – return immediately
  if (loadedCurricula[key]) return loadedCurricula[key];

  // Already loading – share the same Promise
  if (pendingLoads[key]) return pendingLoads[key];

  const loader = curriculumLoaders[key];
  if (!loader) throw new Error(`No curriculum loader for "${key}"`);

  pendingLoads[key] = loader().then((curriculum) => {
    loadedCurricula[key] = curriculum;
    delete pendingLoads[key];
    return curriculum;
  });

  return pendingLoads[key];
}

// ---------------------------------------------------------------------------
// Eager pre-load of Python V2 (runs once when the module is first imported)
// ---------------------------------------------------------------------------
// This keeps the old synchronous getCurriculumByVersion("python", 2) working
// on the initial render for every component that uses the default language.
// The dynamic import is still a separate chunk – it is just kicked off early.
_load('python', 2).catch(() => {
  // Swallow startup errors; the UI will surface them via langLoading state.
});

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Check whether a language has a V2 curriculum.
 * Currently only Python has been updated to V2.
 */
export function hasVersion2(language) {
  return language === 'python';
}

/**
 * ASYNC – load (if needed) and return a curriculum object.
 *
 * Prefer this in useEffect / event handlers where you can await.
 *
 * @param {string} language
 * @param {number} [version=2]
 * @returns {Promise<object>}
 */
export async function loadCurriculum(language, version = 2) {
  return _load(language, version);
}

/**
 * SYNC – return a cached curriculum, or null if not yet loaded.
 *
 * Safe to call during render for Python V2 (which is pre-loaded).
 * For other languages, call loadCurriculum() first and only render
 * after the Promise resolves.
 *
 * @param {number} version
 * @param {string} language
 * @returns {object|null}
 */
export function getCurriculumByVersion(version = 2, language) {
  return loadedCurricula[cacheKey(language, version)] ?? null;
}

/**
 * Lightweight metadata for every supported language.
 * This is the ONLY thing guaranteed to be in the main bundle.
 * Use it to render language-selector buttons without downloading curricula.
 */
export const LANGUAGE_META = {
  python:     { label: 'Python',     versions: [1, 2] },
  java:       { label: 'Java',       versions: [1] },
  javascript: { label: 'JavaScript', versions: [1] },
  ruby:       { label: 'Ruby',       versions: [1] },
  typescript: { label: 'TypeScript', versions: [1] },
};

/**
 * Legacy default export shape (Proxy over the cache).
 *
 * Supports `curriculum[lang]` and `Object.entries(curriculum)` for
 * components that haven't migrated to LANGUAGE_META yet.
 * Returns undefined for languages not yet loaded (same as before).
 */
export const curriculum = new Proxy(
  {},
  {
    get(_, language) {
      // Prefer V2 for Python, V1 for everything else
      const version = hasVersion2(language) ? 2 : 1;
      return loadedCurricula[cacheKey(language, version)];
    },
    ownKeys() {
      return Object.keys(LANGUAGE_META);
    },
    getOwnPropertyDescriptor(_, key) {
      if (key in LANGUAGE_META) {
        return { enumerable: true, configurable: true };
      }
    },
  }
);

// ---------------------------------------------------------------------------
// Synchronous helpers (read from cache – call loadCurriculum first)
// ---------------------------------------------------------------------------

export function getLessonById(language, lessonId, version = 2) {
  const lang = getCurriculumByVersion(version, language);
  if (!lang) return null;
  for (const module of lang.modules) {
    for (const lesson of module.lessons) {
      if (lesson.id === lessonId) return { lesson, module };
    }
  }
  return null;
}

export function getAllLessons(language, version = 2) {
  const lang = getCurriculumByVersion(version, language);
  if (!lang) return [];
  return lang.modules.flatMap((m) =>
    m.lessons.map((l) => ({ ...l, moduleTitle: m.title, moduleId: m.id }))
  );
}

export function getModuleById(language, moduleId, version = 2) {
  const lang = getCurriculumByVersion(version, language);
  if (!lang) return null;
  return lang.modules.find((m) => m.id === moduleId) ?? null;
}

export function getModulesByLanguage(language, version = 2) {
  const lang = getCurriculumByVersion(version, language);
  if (!lang) return [];
  return lang.modules;
}

export function getLessonsByModule(language, moduleId, version = 2) {
  const module = getModuleById(language, moduleId, version);
  if (!module) return [];
  return module.lessons;
}