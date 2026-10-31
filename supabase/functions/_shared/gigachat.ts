// GigaChat authorization keys are server-side secrets; access tokens are short-lived.
export async function gigachatCompletion(
  authorizationKey: string, body: Record<string, unknown>, signal: AbortSignal,
): Promise<Response> {
  const auth = await fetch("https://ngw.devices.sberbank.ru:9443/api/v2/oauth", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json",
      "RqUID": crypto.randomUUID(),
      "Authorization": `Basic ${authorizationKey}`,
    },
    body: new URLSearchParams({ scope: Deno.env.get("GIGACHAT_SCOPE") || "GIGACHAT_API_PERS" }),
    signal,
  });
  if (!auth.ok) throw new Error(`GigaChat authorization failed (${auth.status})`);
  const data = await auth.json();
  if (typeof data.access_token !== "string" || !data.access_token) {
    throw new Error("GigaChat authorization returned no access token");
  }
  return fetch("https://api.giga.chat/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json",
      "Authorization": `Bearer ${data.access_token}` },
    body: JSON.stringify(body),
    signal,
  });
}
