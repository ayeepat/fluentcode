import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem("site-language") === "en" ? "en" : "ru"; }
    catch { return "ru"; }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    try { localStorage.setItem("site-language", language); } catch { /* Storage may be unavailable. */ }
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
