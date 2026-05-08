import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { MessageCircle, X, Send } from "lucide-react";
import { useFeedbackWidget } from "@/lib/FeedbackContext";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdojbzn";

export default function FeedbackWidget() {
  const { isOpen, shouldAutoOpen, closeFeedbackWidget } = useFeedbackWidget();
  const [feedbackType, setFeedbackType] = useState("feature"); // "feature" or "bug"
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      feedbackType: "feature",
      message: "",
    },
  });

  const message = watch("message");

  const onSubmit = async (data) => {
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email || "anonymous@feedback.local",
          type: feedbackType,
          message: data.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      setSubmitted(true);
      reset();

      // Close widget and mark as dismissed
      setTimeout(() => {
        closeFeedbackWidget(true);
      }, 2000);
    } catch (err) {
      console.error("Feedback submission error:", err);
      setError("Failed to submit feedback. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    closeFeedbackWidget(true);
  };

  const handleCancel = () => {
    closeFeedbackWidget(true);
    reset();
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (isOpen) {
            handleCancel();
          } else {
            // Allow manual opening even if auto-dismissed
            const isDismissed = localStorage.getItem("feedbackWidget_dismissed");
            if (isDismissed) {
              localStorage.removeItem("feedbackWidget_dismissed");
            }
            closeFeedbackWidget(false);
          }
        }}
        className="fixed bottom-4 right-4 z-40 w-14 h-14 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleCancel}
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            />

            {/* Dialog */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-gradient-to-r from-zinc-50 to-white">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900">
                    Send us feedback
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    Help us improve your learning experience
                  </p>
                </div>
                <button
                  onClick={handleCancel}
                  className="text-zinc-400 hover:text-zinc-600 transition-colors p-1"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-900 mb-1">
                      Thank you!
                    </h3>
                    <p className="text-xs text-zinc-500">
                      We've received your feedback and will use it to improve
                      FluentCode.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Feedback Type */}
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 block mb-2">
                        Feedback Type
                      </label>
                      <div className="flex gap-2">
                        {[
                          { value: "feature", label: "✨ Feature Suggestion" },
                          { value: "bug", label: "🐛 Bug Report" },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setFeedbackType(option.value)}
                            className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 border ${
                              feedbackType === option.value
                                ? "bg-zinc-900 text-white border-zinc-900"
                                : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-300"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 block mb-2">
                        Email (optional)
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        {...register("email", {
                          pattern: {
                            value: /^[A-Z0-9._%+-]*@?[A-Z0-9.-]*$/i,
                            message: "Invalid email",
                          },
                        })}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm bg-white hover:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-all duration-200"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 block mb-2">
                        Message
                      </label>
                      <textarea
                        placeholder={
                          feedbackType === "feature"
                            ? "Tell us about a feature you'd love to see..."
                            : "Describe the issue you encountered..."
                        }
                        {...register("message", {
                          required: "Please enter your feedback",
                          minLength: {
                            value: 10,
                            message: "Feedback must be at least 10 characters",
                          },
                        })}
                        className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm bg-white resize-none hover:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition-all duration-200"
                        rows={4}
                      />
                      <div className="flex items-center justify-between mt-1">
                        {errors.message && (
                          <p className="text-xs text-red-500">
                            {errors.message.message}
                          </p>
                        )}
                        <span className="text-xs text-zinc-400 ml-auto">
                          {message.length}/500
                        </span>
                      </div>
                    </div>

                    {/* Error */}
                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
                        {error}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-zinc-700 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 transition-all duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={submitting || !message.trim()}
                        className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        {submitting ? (
                          <>
                            <span className="w-3 h-3 rounded-full border border-white/30 border-t-white animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            Send
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
