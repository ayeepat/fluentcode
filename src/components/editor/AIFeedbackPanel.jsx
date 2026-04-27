// src/components/editor/AIFeedbackPanel.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Lightbulb, Sparkles, ArrowUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { progressDb } from "@/lib/progressDb";

const QUICK_PROMPTS = ["Give me a hint", "Why is this wrong?", "Explain the concept"];
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function AIFeedbackPanel({ lesson, userCode, feedback, language, userId, isPro }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [limitReached, setLimitReached] = useState(false);
  const [remaining, setRemaining] = useState(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (!userId) return;
    const checkRemaining = async () => {
      const r = await progressDb.getAiRequestsRemaining(userId, isPro);
      setRemaining(r);
      setLimitReached(r === 0);
    };
    checkRemaining();
  }, [userId, isPro]);

  const sendMessage = async (text) => {
    const q = text || input;
    if (!q.trim()) return;

    // Check limit before sending
    if (userId) {
      const check = await progressDb.checkAndIncrementAiCount(userId, isPro);
      if (!check.allowed) {
        setLimitReached(true);
        setRemaining(0);
        setMessages((prev) => [
          ...prev,
          { role: "user", content: q },
          {
            role: "assistant",
            content: "You've used all 10 free AI requests for today. Come back tomorrow or support the project for unlimited access!",
            isLimit: true,
          },
        ]);
        setInput("");
        return;
      }
      setRemaining(check.remaining);
      if (check.remaining === 0) setLimitReached(true);
    }

    setMessages((prev) => [...prev, { role: "user", content: q }]);
    setInput("");
    setLoading(true);

    try {
      const prompt = `You are a calm, precise coding assistant helping a student learn ${language}.

Current lesson: "${lesson.title}"
Lesson explanation: "${lesson.explanation}"
Exercise: "${lesson.exercise.prompt}"
Student's current code:
\`\`\`
${userCode || "(no code yet)"}
\`\`\`

Student's question: "${q}"

Be concise, warm, and clear. Never reveal the full solution — guide instead. 2–4 sentences max unless the concept truly requires more.`;

      const res = await fetch(
        `${SUPABASE_URL}/functions/v1/ai-chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ prompt }),
        }
      );

      const data = await res.json();
      const reply = data?.reply || "Sorry, I'm having trouble right now. Please try again.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("AI Assistant error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't process that. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const EmptyState = () => (
    <>
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 p-6">
        <Sparkles size={18} className="text-zinc-200" />
        <p className="text-xs text-zinc-300 max-w-[160px] leading-relaxed">
          Ask anything about this lesson or your code
        </p>
        {remaining !== null && !isPro && (
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            remaining <= 2 ? "bg-amber-50 text-amber-500" : "bg-zinc-100 text-zinc-400"
          }`}>
            {remaining} requests left today
          </span>
        )}
      </div>
      <div className="px-4 pb-3 flex flex-col gap-1.5 shrink-0">
        {QUICK_PROMPTS.map((p) => (
          <button
            key={p}
            onClick={() => sendMessage(p)}
            disabled={limitReached}
            className="text-left text-xs text-zinc-500 hover:text-zinc-900 px-3 py-2 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {p}
          </button>
        ))}
      </div>
    </>
  );

  return (
    <div className="flex flex-col h-full bg-white border-l border-zinc-100">
      {/* Header */}
      <div className="px-5 py-4 border-b border-zinc-100 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <Sparkles size={13} className="text-zinc-400" />
          <span className="text-sm font-semibold tracking-tight text-zinc-900">
            AI Assistant
          </span>
        </div>
        {remaining !== null && !isPro && (
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            remaining <= 2 ? "bg-amber-50 text-amber-500" : "bg-zinc-100 text-zinc-400"
          }`}>
            {remaining} left
          </span>
        )}
      </div>

      {/* Limit reached banner */}
      {limitReached && (
        <div className="mx-4 mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-4 shrink-0">
          <p className="text-xs text-amber-700 mb-2 leading-relaxed">
            You've used all 10 free AI requests for today. Support the project for unlimited access.
          </p>
          <Link
            to="/upgrade"
            className="inline-flex items-center gap-1.5 text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-full hover:bg-zinc-700 transition-all"
          >
            <Heart size={11} /> Support us
          </Link>
        </div>
      )}

      {/* Feedback card */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-4 rounded-2xl border border-zinc-100 overflow-hidden shrink-0"
          >
            <div
              className={`px-4 py-3 text-xs font-medium tracking-wide flex items-center gap-2 ${
                feedback.isCorrect
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {feedback.isCorrect ? (
                <CheckCircle size={13} />
              ) : (
                <XCircle size={13} />
              )}
              {feedback.isCorrect ? "Looks good" : "Not quite yet"}
            </div>
            <div className="px-4 py-3 bg-zinc-50">
              <p className="text-sm text-zinc-700 leading-relaxed">{feedback.feedback}</p>
              {feedback.suggestions?.[0] && !feedback.isLimit && (
                <div className="flex items-start gap-2 mt-3 pt-2 border-t border-zinc-200">
                  <Lightbulb size={12} className="text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {feedback.suggestions[0]}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages or empty state */}
      {!feedback && messages.length === 0 && !loading ? (
        <EmptyState />
      ) : (
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="flex gap-2.5 max-w-[90%]">
                    <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles size={9} className="text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-700 leading-relaxed">{msg.content}</p>
                      {msg.isLimit && (
                        <Link
                          to="/upgrade"
                          className="inline-flex items-center gap-1.5 text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-full hover:bg-zinc-700 transition-all mt-2"
                        >
                          <Heart size={11} /> Support us
                        </Link>
                      )}
                    </div>
                  </div>
                )}
                {msg.role === "user" && (
                  <div className="bg-zinc-900 text-white text-sm px-3.5 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] leading-relaxed">
                    {msg.content}
                  </div>
                )}
              </motion.div>
            ))}

            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-2.5"
              >
                <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                  <Sparkles size={9} className="text-zinc-400" />
                </div>
                <div className="flex items-center gap-1.5 pt-1">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-bounce"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={bottomRef} />
        </div>
      )}

      {/* Quick prompts */}
      {feedback && messages.length === 0 && (
        <div className="px-4 pb-3 flex flex-col gap-1.5 shrink-0">
          {QUICK_PROMPTS.map((p) => (
            <button
              key={p}
              onClick={() => sendMessage(p)}
              disabled={limitReached}
              className="text-left text-xs text-zinc-500 hover:text-zinc-900 px-3 py-2 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {p}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-4 pb-4 pt-2 shrink-0">
        {limitReached ? (
          <div className="text-center text-xs text-zinc-400 py-2">
            Come back tomorrow for more free requests.
          </div>
        ) : (
          <div className="flex items-center gap-2 border border-zinc-200 rounded-2xl px-3.5 py-2.5 focus-within:border-zinc-400 transition-colors duration-200">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              placeholder="Ask the AI assistant…"
              className="flex-1 text-sm outline-none bg-transparent text-zinc-800 placeholder-zinc-300"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center shrink-0 hover:bg-zinc-700 transition-colors disabled:opacity-20"
            >
              <ArrowUp size={12} className="text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}