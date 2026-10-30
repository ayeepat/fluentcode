import LanguageSwitch from "@/components/LanguageSwitch";
import { useLanguage } from "@/lib/LanguageContext";
// src/pages/SignIn.jsx
import { SignIn } from "@clerk/clerk-react";
import { Helmet } from "react-helmet-async";

export default function SignInPage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="absolute top-4 right-4"><LanguageSwitch /></div>
      <Helmet>
        <title>{language === "ru" ? "Вход | FluentlyCode" : "Sign In | FluentlyCode"}</title>
        <meta name="description" content={language === "ru" ? "Войдите в аккаунт, чтобы продолжить обучение." : "Sign in to your FluentlyCode account to continue learning and track your progress."} />
        <meta property="og:title" content={language === "ru" ? "Вход | FluentlyCode" : "Sign In - FluentlyCode"} />
        <meta property="og:description" content={language === "ru" ? "Войдите в аккаунт, чтобы продолжить обучение." : "Access your FluentlyCode account."} />
      </Helmet>
      <SignIn routing="path" path="/sign-in" afterSignInUrl="/dashboard" />
    </div>
  );
}