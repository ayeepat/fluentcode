// src/pages/SignIn.jsx
import { SignIn } from "@clerk/clerk-react";
import { Helmet } from "react-helmet-async";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Helmet>
        <title>Sign In | FluentlyCode</title>
        <meta name="description" content="Sign in to your FluentlyCode account to continue learning and track your progress." />
        <meta property="og:title" content="Sign In - FluentlyCode" />
        <meta property="og:description" content="Access your FluentlyCode account." />
      </Helmet>
      <SignIn routing="path" path="/sign-in" afterSignInUrl="/dashboard" />
    </div>
  );
}