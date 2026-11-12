// Groq exposes an OpenAI-compatible chat completions API.
export const GROQ_MODEL = Deno.env.get("GROQ_MODEL") || "openai/gpt-oss-120b";

export function groqCompletion(
  apiKey: string, body: Record<string, unknown>, signal: AbortSignal,
): Promise<Response> {
  return fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    // gpt-oss is a reasoning model; keep reasoning short so max_tokens is left for the reply.
    body: JSON.stringify({ reasoning_effort: "low", ...body }),
    signal,
  });
}
