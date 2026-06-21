// src/pages/SignUp.jsx
import { SignUp } from "@clerk/clerk-react";
import { Helmet } from "react-helmet-async";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Helmet>
        <title>Sign Up | Start Learning with FluentlyCode</title>
        <meta name="description" content="Create a free FluentlyCode account to unlock unlimited AI-powered coding lessons and track your progress." />
        <meta property="og:title" content="Sign Up - FluentlyCode" />
        <meta property="og:description" content="Join FluentlyCode and start learning to code." />
      </Helmet>
      <SignUp routing="path" path="/sign-up" afterSignUpUrl="/dashboard" />
    </div>
  );
}