// src/lib/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { useUser, useAuth as useClerkAuth, useSession } from "@clerk/clerk-react";
import { createClerkSupabaseClient, supabase } from "./supabaseClient";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  supabaseClient: null,
});

export function AuthProvider({ children }) {
  const { user, isLoaded: isUserLoaded, isSignedIn } = useUser();
  const { isLoaded: isAuthLoaded } = useClerkAuth();
  const { session } = useSession();
  const [supabaseClient, setSupabaseClient] = useState(null);

  useEffect(() => {
    // If not signed in, use the default unauthenticated client
    if (!session) {
      console.log("No session — using default supabase client");
      setSupabaseClient(supabase);
      return;
    }

    let cancelled = false;

    const buildClient = async () => {
      try {
        console.log("Fetching Clerk token...");
        const token = await session.getToken({ template: "supabase" });
        console.log("Token received:", !!token);

        if (!cancelled) {
          if (token) {
            setSupabaseClient(createClerkSupabaseClient(token));
            console.log("Authenticated Supabase client created");
          } else {
            // Token failed — fall back to default client
            console.warn("No token returned — falling back to default client");
            setSupabaseClient(supabase);
          }
        }
      } catch (err) {
        console.error("Failed to get Clerk token:", err);
        if (!cancelled) {
          // Fall back to default client so the app doesn't hang
          setSupabaseClient(supabase);
        }
      }
    };

    buildClient();

    return () => {
      cancelled = true;
    };
  }, [session]);

  const isLoading = !isUserLoaded || !isAuthLoaded;

  const value = {
    user,
    isAuthenticated: !!isSignedIn,
    isLoading,
    supabaseClient,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};