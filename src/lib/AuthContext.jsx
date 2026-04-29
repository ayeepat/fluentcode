// src/lib/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { useUser, useAuth as useClerkAuth, useSession } from "@clerk/clerk-react";
import { createClerkSupabaseClient } from "./supabaseClient";

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
    if (!session) {
      setSupabaseClient(null);
      return;
    }

    let cancelled = false;

    const buildClient = async () => {
      try {
        const token = await session.getToken({ template: "supabase" });
        if (!cancelled && token) {
          setSupabaseClient(createClerkSupabaseClient(token));
        }
      } catch (err) {
        console.error("Failed to get Clerk token:", err);
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