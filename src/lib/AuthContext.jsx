// src/lib/AuthContext.jsx
import { createContext, useContext, useState, useEffect, useCallback } from "react";
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

  // Refresh the token every 50 seconds (token expires at 60s)
  useEffect(() => {
    if (!session) {
      setSupabaseClient(supabase);
      return;
    }

    let cancelled = false;

    const buildClient = async () => {
      try {
        const token = await session.getToken({ template: "supabase" });
        if (!cancelled) {
          if (token) {
            setSupabaseClient(createClerkSupabaseClient(token));
          } else {
            setSupabaseClient(supabase);
          }
        }
      } catch (err) {
        console.error("Failed to get Clerk token:", err);
        if (!cancelled) {
          setSupabaseClient(supabase);
        }
      }
    };

    // Build immediately
    buildClient();

    // Refresh every 50 seconds to stay ahead of the 60s expiry
    const interval = setInterval(buildClient, 50000);

    return () => {
      cancelled = true;
      clearInterval(interval);
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