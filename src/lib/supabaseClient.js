// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * Creates a Supabase client that can inject the Clerk JWT
 * @param {string} clerkToken - The JWT from Clerk (window.Clerk.session.getToken())
 */
export const createClerkSupabaseClient = (clerkToken) => {
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${clerkToken}`,
      },
    },
  });
};

// This is the default client for public/unauthenticated data
export const supabase = createClient(supabaseUrl, supabaseAnonKey);