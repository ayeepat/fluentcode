// src/lib/curriculum.js
import { pythonCurriculum } from './curriculum-python.js';
import { pythonCurriculumV2 } from './curriculum-python-v2.js';
import { javaCurriculum } from './curriculum-java.js';
import { javascriptCurriculum } from './curriculum-javascript.js';
import { rubyCurriculum } from './curriculum-ruby.js';
import { typescriptCurriculum } from './curriculum-typescript.js';

// Version 1 curricula (original)
const curriculumV1 = {
  python: pythonCurriculum,
  java: javaCurriculum,
  javascript: javascriptCurriculum,
  ruby: rubyCurriculum,
  typescript: typescriptCurriculum,
};

// Version 2 curricula (currently only Python updated)
const curriculumV2 = {
  python: pythonCurriculumV2,
  java: javaCurriculum,      // still v1 for now
  javascript: javascriptCurriculum,
  ruby: rubyCurriculum,
  typescript: typescriptCurriculum,
};

// Default export for backward compatibility (v1)
export const curriculum = curriculumV1;

// Helper to get curriculum by version
export function getCurriculumByVersion(version = 1, language) {
  const source = version === 2 ? curriculumV2 : curriculumV1;
  return source[language];
}

// Check if a language has a version 2 curriculum (currently only Python)
export function hasVersion2(language) {
  return language === "python";
}

// Updated getLessonById with version
export function getLessonById(language, lessonId, version = 1) {
  const lang = getCurriculumByVersion(version, language);
  if (!lang) return null;
  for (const module of lang.modules) {
    for (const lesson of module.lessons) {
      if (lesson.id === lessonId) return { lesson, module };
    }
  }
  return null;
}

// Updated getAllLessons with version
export function getAllLessons(language, version = 1) {
  const lang = getCurriculumByVersion(version, language);
  if (!lang) return [];
  return lang.modules.flatMap(m => m.lessons.map(l => ({ ...l, moduleTitle: m.title, moduleId: m.id })));
}

// Other helpers with version (unchanged logic but added version param)
export const getModuleById = (language, moduleId, version = 1) => {
  const lang = getCurriculumByVersion(version, language);
  if (!lang) return null;
  return lang.modules.find(m => m.id === moduleId);
};

export const getModulesByLanguage = (language, version = 1) => {
  const lang = getCurriculumByVersion(version, language);
  if (!lang) return [];
  return lang.modules;
};

export const getLessonsByModule = (language, moduleId, version = 1) => {
  const module = getModuleById(language, moduleId, version);
  if (!module) return [];
  return module.lessons;
};