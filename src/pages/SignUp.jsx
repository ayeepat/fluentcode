// src/pages/SignUp.jsx
import { SignUp } from "@clerk/clerk-react";
import { Helmet } from "react-helmet-async";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Helmet>
        <title>Sign Up | Start Learning with FluentlyCode</title>
        <meta name="description" content="Create a free FluentlyCode account to access all lessons, save your progress, and use AI code feedback." />
        <meta property="og:title" content="Sign Up - FluentlyCode" />
        <meta property="og:description" content="Create an account to save progress and continue your courses." />
      </Helmet>
      <SignUp routing="path" path="/sign-up" afterSignUpUrl="/dashboard" />
    </div>
  );
}