// src/lib/groqClient.js

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export const evaluateCode = async (code, language, lesson, clerkToken) => {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/functions/v1/evaluate-code`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
          ...(clerkToken ? { Authorization: `Bearer ${clerkToken}` } : {}),
        },
        body: JSON.stringify({ code, language, lesson }),
      }
    );

    if (!res.ok) {
      if (res.status === 429) {
        return {
          ok: false,
          quotaExceeded: true,
          isCorrect: false,
          feedback: "You've used all your AI reviews for today. Come back tomorrow for more.",
          mistakePatterns: [],
          suggestions: [],
        };
      }
      const errorText = await res.text();
      console.error("Edge function error:", res.status, errorText);
      return {
        ok: false,
        isCorrect: false,
        feedback: "The AI evaluator had trouble responding. Please try again.",
        mistakePatterns: [],
        suggestions: ["Try submitting once more in a moment."],
      };
    }

    const data = await res.json();

    return {
      ok: true,
      remaining: typeof data.remaining === "number" ? data.remaining : null,
      isCorrect: Boolean(data.isCorrect),
      feedback:
        typeof data.feedback === "string" && data.feedback.trim()
          ? data.feedback
          : "Nice effort — keep going.",
      mistakePatterns: Array.isArray(data.mistakePatterns)
        ? data.mistakePatterns.slice(0, 3)
        : [],
      suggestions: Array.isArray(data.suggestions)
        ? data.suggestions.slice(0, 2)
        : [],
    };
  } catch (error) {
    console.error("evaluateCode error:", error);
    return {
      ok: false,
      isCorrect: false,
      feedback: "Couldn't reach the AI right now. Please try again in a moment.",
      mistakePatterns: [],
      suggestions: ["Check your internet connection and try again."],
    };
  }
};
