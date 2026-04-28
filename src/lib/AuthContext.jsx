// src/lib/AuthContext.jsx
import { createContext, useContext, useCallback } from "react";
import { useUser, useAuth as useClerkAuth, useSession } from "@clerk/clerk-react";
import { createClerkSupabaseClient } from "./supabaseClient";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  getSupabaseClient: () => null,
});

export function AuthProvider({ children }) {
  const { user, isLoaded: isUserLoaded, isSignedIn } = useUser();
  const { isLoaded: isAuthLoaded } = useClerkAuth();
  const { session } = useSession();

  const isLoading = !isUserLoaded || !isAuthLoaded;

  const getSupabaseClient = useCallback(async () => {
    if (!session) return null;
    try {
      // We changed this to 'supabase_prod' to match the new template name
      const token = await session.getToken({ template: "supabase_prod" });
      return createClerkSupabaseClient(token);
    } catch (error) {
      console.error("Auth Handshake Error:", error);
      return null;
    }
  }, [session]);

  const value = {
    user,
    setUser: () => {},
    isAuthenticated: !!isSignedIn,
    isLoading,
    getSupabaseClient,
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