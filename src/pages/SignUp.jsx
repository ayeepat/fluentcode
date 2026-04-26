// src/pages/SignUp.jsx
import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <SignUp routing="path" path="/sign-up" afterSignUpUrl="/dashboard" />
    </div>
  );
}