// src/lib/AuthContext.jsx
import { createContext, useContext } from "react";
import { useUser, useAuth as useClerkAuth } from "@clerk/clerk-react";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isLoading: true,
});

export function AuthProvider({ children }) {
  const { user, isLoaded: isUserLoaded, isSignedIn } = useUser();
  const { isLoaded: isAuthLoaded } = useClerkAuth();

  const isLoading = !isUserLoaded || !isAuthLoaded;

  const value = {
    user,
    setUser: () => {
      console.warn("setUser is handled by Clerk. Use Clerk components to update user data.");
    },
    isAuthenticated: !!isSignedIn,
    isLoading,
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