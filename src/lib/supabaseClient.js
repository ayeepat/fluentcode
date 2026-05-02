// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Default unauthenticated client (for public data only)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Single authenticated client instance — reused and updated with new tokens
let authenticatedClient = null;
let currentToken = null;

export const createClerkSupabaseClient = (clerkToken) => {
  // If token hasn't changed, return existing client
  if (authenticatedClient && currentToken === clerkToken) {
    return authenticatedClient;
  }

  // If we already have a client but token changed, we need a new one
  // But we'll reuse if possible by checking if token is just refreshed
  if (!authenticatedClient || currentToken !== clerkToken) {
    currentToken = clerkToken;
    authenticatedClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: {
        headers: {
          Authorization: `Bearer ${clerkToken}`,
        },
      },
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    });
  }

  return authenticatedClient;
};