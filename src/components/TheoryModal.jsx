// src/components/TheoryModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export default function TheoryModal({ lesson, show, onClose, onNext, isCorrect, nextLesson }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-0 sm:px-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease }}
            className="relative bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[85vh] flex flex-col"
          >
            {/* Header */}
            <div className={`px-6 py-5 flex items-center justify-between shrink-0 ${
              isCorrect
                ? "bg-emerald-50 border-b border-emerald-100"
                : "bg-amber-50 border-b border-amber-100"
            }`}>
              <div className="flex items-center gap-3">
                {isCorrect && (
                  <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                )}
                <div>
                  <p className={`text-sm font-bold ${
                    isCorrect ? "text-emerald-700" : "text-amber-700"
                  }`}>
                    {isCorrect ? "🎉 Correct! Here's why it works" : "Here's what you need to know"}
                  </p>
                  <p className={`text-xs mt-0.5 ${
                    isCorrect ? "text-emerald-600" : "text-amber-600"
                  }`}>
                    {lesson.title}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full bg-white/60 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors shrink-0"
              >
                <X size={14} />
              </button>
            </div>

            {/* Content — scrollable */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {/* Key concept */}
              {lesson.concept && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
                    Key concept
                  </p>
                  <p className="text-sm text-zinc-700 leading-relaxed font-medium">
                    {lesson.concept}
                  </p>
                </div>
              )}

              {/* Example */}
              {lesson.example && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
                    Example
                  </p>
                  <div className="bg-zinc-950 rounded-xl p-4 overflow-x-auto">
                    <pre className="text-xs text-zinc-100 font-mono leading-relaxed whitespace-pre-wrap">
                      {lesson.example}
                    </pre>
                  </div>
                </div>
              )}

              {/* Explanation — short version */}
              {lesson.explanation && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
                    Explanation
                  </p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {lesson.explanation.length > 300
                      ? lesson.explanation.slice(0, 300) + "…"
                      : lesson.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-zinc-100 shrink-0 flex gap-3">
              {isCorrect && nextLesson ? (
                <button
                  onClick={onNext}
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 text-white py-3 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-all"
                >
                  Next lesson <ArrowRight size={14} />
                </button>
              ) : isCorrect && !nextLesson ? (
                <button
                  onClick={onClose}
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 text-white py-3 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-all"
                >
                  Finish course 🎓
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 text-white py-3 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-all"
                >
                  Got it — let me try again
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}