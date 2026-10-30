import LanguageSwitch from "@/components/LanguageSwitch";
import { useLanguage } from "@/lib/LanguageContext";
// src/pages/SignUp.jsx
import { SignUp } from "@clerk/clerk-react";
import { Helmet } from "react-helmet-async";

export default function SignUpPage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="absolute top-4 right-4"><LanguageSwitch /></div>
      <Helmet>
        <title>{language === "ru" ? "Регистрация | FluentlyCode" : "Sign Up | Start Learning with FluentlyCode"}</title>
        <meta name="description" content={language === "ru" ? "Создайте бесплатный аккаунт и отслеживайте прогресс." : "Create a free FluentlyCode account to unlock unlimited AI-powered coding lessons and track your progress."} />
        <meta property="og:title" content={language === "ru" ? "Регистрация | FluentlyCode" : "Sign Up - FluentlyCode"} />
        <meta property="og:description" content={language === "ru" ? "Создайте бесплатный аккаунт и отслеживайте прогресс." : "Join FluentlyCode and start learning to code."} />
      </Helmet>
      <SignUp routing="path" path="/sign-up" afterSignUpUrl="/dashboard" />
    </div>
  );
}