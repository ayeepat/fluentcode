// src/components/SignupPrompt.jsx
import { motion } from "framer-motion";
import { SignUpButton, SignInButton } from "@clerk/clerk-react";
import { ArrowRight, Sparkles } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export default function SignupPrompt() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
      className="mt-10 border border-zinc-200 rounded-2xl p-8 text-center bg-zinc-50"
    >
      <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-4">
        <Sparkles size={20} className="text-emerald-500" />
      </div>
      <h3 className="text-lg font-bold tracking-tight mb-2">
        You're doing great!
      </h3>
      <p className="text-sm text-zinc-500 mb-6 max-w-sm mx-auto leading-relaxed">
        Create a free account to save your progress, unlock all lessons, and
        get AI feedback on your code.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <SignUpButton mode="modal">
          <button className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-200">
            Create free account <ArrowRight size={13} />
          </button>
        </SignUpButton>
        <SignInButton mode="modal">
          <button className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200">
            Already have an account →
          </button>
        </SignInButton>
      </div>
      <p className="text-xs text-zinc-400 mt-4">
        Your progress from these lessons will be saved automatically.
      </p>
    </motion.div>
  );
}