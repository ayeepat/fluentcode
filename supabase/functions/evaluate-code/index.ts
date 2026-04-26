// supabase/functions/evaluate-code/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "llama-3.3-70b-versatile";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function extractJson(text: string) {
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {}

  const fencedJsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/i);
  if (fencedJsonMatch?.[1]) {
    try {
      return JSON.parse(fencedJsonMatch[1]);
    } catch {}
  }

  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    try {
      return JSON.parse(text.slice(firstBrace, lastBrace + 1));
    } catch {}
  }

  return null;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { code, language, lesson } = await req.json();

    const groqApiKey = Deno.env.get("GROQ_API_KEY");

    if (!groqApiKey) {
      return new Response(
        JSON.stringify({
          isCorrect: false,
          feedback: "AI is not configured on the server.",
          mistakePatterns: [],
          suggestions: [],
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const truncatedCode =
      code.length > 3000 ? code.slice(0, 3000) + "\n... (truncated)" : code;

    const prompt = `You are a kind, encouraging coding tutor for FluentCode.

Your task:
1. Read the lesson and exercise.
2. Evaluate whether the student's code solves the exercise.
3. Return ONLY valid JSON. No markdown, no explanation outside JSON.
4. Keep feedback short, warm, and specific.

Language: ${language}

Lesson title:
${lesson.title}

Exercise prompt:
${lesson.exercise.prompt}

Reference solution:
${lesson.exercise.solution}

Student code:
${truncatedCode}

Return exactly this JSON shape:
{
  "isCorrect": true,
  "feedback": "Short encouraging feedback here.",
  "mistakePatterns": ["short pattern"],
  "suggestions": ["one clear next step"]
}`;

    const groqRes = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${groqApiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: "system",
            content:
              "You are a precise coding evaluator. Always respond with valid JSON only. No markdown fences.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.2,
        max_tokens: 500,
      }),
    });

    const groqData = await groqRes.json();
    const content = groqData?.choices?.[0]?.message?.content || "";
    const parsed = extractJson(content);

    if (!parsed) {
      return new Response(
        JSON.stringify({
          isCorrect: false,
          feedback: "I could read your code but had trouble formatting the evaluation. Please try again.",
          mistakePatterns: [],
          suggestions: ["Try submitting again."],
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        isCorrect: Boolean(parsed.isCorrect),
        feedback:
          typeof parsed.feedback === "string" && parsed.feedback.trim()
            ? parsed.feedback
            : "Nice effort — keep going.",
        mistakePatterns: Array.isArray(parsed.mistakePatterns)
          ? parsed.mistakePatterns.slice(0, 3)
          : [],
        suggestions: Array.isArray(parsed.suggestions)
          ? parsed.suggestions.slice(0, 2)
          : [],
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Edge function error:", error);
    return new Response(
      JSON.stringify({
        isCorrect: false,
        feedback: "Something went wrong on the server. Please try again.",
        mistakePatterns: [],
        suggestions: [],
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});