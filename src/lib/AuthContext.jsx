// src/lib/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { localDb } from "./localStorageDb";

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isLoading: true,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const me = await localDb.auth.me();
        setUser(me);
      } catch (error) {
        console.error("Failed to load user:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    loadUser();
  }, []);

  const value = {
    user,
    setUser,
    isAuthenticated: !!user,
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