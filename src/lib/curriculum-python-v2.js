export const pythonCurriculumV2 = {
  label: "Python",
  version: 2,
  modules: [
    {
      id: "test-module",
      title: "Test Module",
      duration: "1 min",
      lessons: [
        {
          id: "test-lesson",
          title: "Test Lesson",
          explanation: "This is a test.",
          concept: "Test concept.",
          example: "print('hello')",
          exercise: {
            prompt: "Write print('hello')",
            starterCode: "# write code",
            solution: "print('hello')",
            tests: [],
            debuggingTip: "Test tip"
          }
        }
      ]
    }
  ]
};