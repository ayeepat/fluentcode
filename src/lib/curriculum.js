// src/lib/curriculum.js
import { pythonCurriculum } from './curriculum-python.js';
import { javaCurriculum } from './curriculum-java.js';
import { javascriptCurriculum } from './curriculum-javascript.js';
import { rubyCurriculum } from './curriculum-ruby.js';

export const curriculum = {
  python: pythonCurriculum,
  java: javaCurriculum,
  javascript: javascriptCurriculum,
  ruby: rubyCurriculum
};

// --- Export Functions ---
export const getLessonById = (language, lessonId) => {
  const lang = curriculum[language];
  if (!lang) return null;
  for (const module of lang.modules) {
    for (const lesson of module.lessons) {
      if (lesson.id === lessonId) return { lesson, module };
    }
  }
  return null;
};

export const getAllLessons = (language) => {
  const lang = curriculum[language];
  if (!lang) return [];
  return lang.modules.flatMap(m => m.lessons.map(l => ({ ...l, moduleTitle: m.title, moduleId: m.id })));
};

export const getModuleById = (language, moduleId) => {
  const lang = curriculum[language];
  if (!lang) return null;
  return lang.modules.find(m => m.id === moduleId);
};

export const getModulesByLanguage = (language) => {
  const lang = curriculum[language];
  if (!lang) return [];
  return lang.modules;
};

export const getLessonsByModule = (language, moduleId) => {
  const module = getModuleById(language, moduleId);
  if (!module) return [];
  return module.lessons;
};