import { createRemoteJWKSet, jwtVerify } from "npm:jose@5.10.0";

const ALLOWED_ORIGINS = new Set([
  "https://fluentlycode.xyz",
  "https://www.fluentlycode.xyz",
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:8000",
]);

const RATE_WINDOW_MS = 60 * 1000;
const MAX_RATE_LIMIT_ENTRIES = 10_000;
const requestCounts = new Map<string, { count: number; resetAt: number }>();
let clerkJwks: ReturnType<typeof createRemoteJWKSet> | null = null;
let clerkIssuer: string | null = null;

export function corsHeaders(origin: string | null): Record<string, string> {
  const headers: Record<string, string> = {
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
  };

  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
}

export function jsonResponse(
  body: unknown,
  status: number,
  cors: Record<string, string>,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...cors,
      "Cache-Control": "no-store",
      "Content-Type": "application/json",
    },
  });
}

export async function authenticateClerkRequest(req: Request): Promise<string | null> {
  const issuer = Deno.env.get("CLERK_JWT_ISSUER");
  if (!issuer) {
    console.error("CLERK_JWT_ISSUER is not configured");
    return null;
  }

  const authorization = req.headers.get("authorization");
  const token = authorization?.match(/^Bearer\s+(.+)$/i)?.[1];
  if (!token) return null;

  try {
    if (issuer !== clerkIssuer || !clerkJwks) {
      clerkIssuer = issuer;
      clerkJwks = createRemoteJWKSet(
        new URL(`${issuer.replace(/\/$/, "")}/.well-known/jwks.json`),
      );
    }

    const audience = Deno.env.get("CLERK_JWT_AUDIENCE");
    const { payload } = await jwtVerify(token, clerkJwks, {
      issuer,
      ...(audience ? { audience } : {}),
    });
    return typeof payload.sub === "string" && payload.sub ? payload.sub : null;
  } catch (error) {
    console.warn("Rejected invalid Clerk token:", error instanceof Error ? error.message : error);
    return null;
  }
}

export function isRateLimited(subject: string, limit: number): boolean {
  const now = Date.now();
  const record = requestCounts.get(subject);

  if (!record || now >= record.resetAt) {
    if (requestCounts.size >= MAX_RATE_LIMIT_ENTRIES) {
      for (const [key, value] of requestCounts) {
        if (now >= value.resetAt) requestCounts.delete(key);
      }
      if (requestCounts.size >= MAX_RATE_LIMIT_ENTRIES) {
        const oldestKey = requestCounts.keys().next().value;
        if (oldestKey) requestCounts.delete(oldestKey);
      }
    }
    requestCounts.set(subject, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (record.count >= limit) return true;
  record.count += 1;
  return false;
}

export async function consumeAiQuota(clerkUserId: string): Promise<
  { allowed: boolean; remaining: number | null } | null
> {
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) {
    console.error("SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not configured");
    return null;
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/consume_ai_request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
      body: JSON.stringify({ p_clerk_user_id: clerkUserId, p_daily_limit: 10 }),
    });
    if (!response.ok) {
      console.error("AI quota RPC failed:", response.status);
      return null;
    }

    const data = await response.json();
    const result = Array.isArray(data) ? data[0] : data;
    if (typeof result?.allowed !== "boolean") return null;
    return {
      allowed: result.allowed,
      remaining: typeof result.remaining === "number" ? result.remaining : null,
    };
  } catch (error) {
    console.error("AI quota RPC error:", error);
    return null;
  }
}
