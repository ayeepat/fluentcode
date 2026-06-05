// src/lib/curriculum.js
// ---------------------------------------------------------------------------
// Lazy-loading curriculum registry
// ---------------------------------------------------------------------------

const loadedCurricula = {};
const pendingLoads = {};

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
  cpp: () =>
    import('./curriculum-cpp.js').then((m) => m.cppCurriculum),
};

function cacheKey(language, version) {
  return language === 'python' ? `python-v${version}` : language;
}

async function _load(language, version) {
  const key = cacheKey(language, version);
  if (loadedCurricula[key]) return loadedCurricula[key];
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

// Eager pre-load Python V2 — it's the default for every user.
// Errors are swallowed here; components handle their own loading states.
_load('python', 2).catch(() => {});

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function hasVersion2(language) {
  return language === 'python';
}

export async function loadCurriculum(language, version = 2) {
  return _load(language, version);
}

export function getCurriculumByVersion(version = 2, language) {
  return loadedCurricula[cacheKey(language, version)] ?? null;
}

/**
 * Lightweight language metadata — kept as a plain exported const.
 * Components that need the language list import this directly.
 * It is a simple object literal with no dependency on any async code,
 * so it is always defined when the module is evaluated.
 */
export const LANGUAGE_META = {
  python:     { label: 'Python',     versions: [1, 2] },
  java:       { label: 'Java',       versions: [1] },
  javascript: { label: 'JavaScript', versions: [1] },
  ruby:       { label: 'Ruby',       versions: [1] },
  typescript: { label: 'TypeScript', versions: [1] },
  cpp:        { label: 'C++',        versions: [1] },
};

/**
 * Legacy Proxy — supports curriculum[lang] and Object.entries(curriculum)
 * for components that haven't migrated yet.
 */
export const curriculum = new Proxy(
  {},
  {
    get(_, language) {
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
// Synchronous helpers (read from cache — call loadCurriculum first)
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