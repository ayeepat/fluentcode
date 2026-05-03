// src/components/SignupPrompt.jsx
import { motion, AnimatePresence } from "framer-motion";
import { SignUpButton, SignInButton } from "@clerk/clerk-react";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1];

export default function SignupPrompt({ show = true, onClose = null }) {
  const [visible, setVisible] = useState(show);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease }}
            className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl z-10"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:bg-zinc-200 transition-all"
            >
              <X size={14} />
            </button>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-5">
                <Sparkles size={24} className="text-emerald-500" />
              </div>

              <h2 className="text-2xl font-bold tracking-tight mb-2">
                You're on a roll! 🎉
              </h2>
              <p className="text-sm text-zinc-500 mb-2 leading-relaxed">
                You've completed 3 lessons — that's more than most people ever do.
              </p>
              <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                Create a free account to unlock all lessons, get AI-powered feedback on your code, and track your progress across devices.
              </p>

              <div className="flex flex-col gap-3">
                <SignUpButton mode="modal">
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-all duration-200">
                    Create free account <ArrowRight size={13} />
                  </button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <button className="w-full text-sm text-zinc-500 hover:text-zinc-900 py-2 transition-colors duration-200">
                    Already have an account? Log in →
                  </button>
                </SignInButton>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-6">
                {["100% free", "No credit card", "Progress saved"].map((item) => (
                  <span key={item} className="text-xs text-zinc-400 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}