// src/pages/Upgrade.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, CheckCircle, ExternalLink, Sparkles, Zap } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export default function Upgrade() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <Link
          to="/dashboard"
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft size={14} />
          Dashboard
        </Link>
        <Link to="/" className="text-sm font-semibold tracking-tight text-zinc-900">
          fluentcode
        </Link>
        <div className="w-24" />
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart size={32} fill="currentColor" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            FluentCode is free for everyone.
          </h1>
          <p className="text-zinc-500 text-base mb-2 leading-relaxed max-w-xl mx-auto">
            I'm building this project to make coding education accessible.
            All core features are free — no subscriptions, no paywalls.
          </p>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto">
            If the app helps you, consider supporting the project. Your donation
            keeps the servers running and helps me add new features.
          </p>
        </motion.div>

        {/* Comparison cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="grid md:grid-cols-2 gap-4 mb-12"
        >
          {/* Free tier */}
          <div className="border border-zinc-200 rounded-2xl p-7">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles size={16} className="text-zinc-400" />
              <h2 className="text-base font-semibold text-zinc-900">Free</h2>
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-3xl font-bold tracking-tight">$0</span>
              <span className="text-sm text-zinc-400">/ forever</span>
            </div>
            <p className="text-xs text-zinc-400 mb-6">Everything you need to learn</p>

            <ul className="space-y-2.5 mb-6">
              {[
                "Full Python & Java curriculum",
                "AI feedback — 10 reviews/day",
                "Progress tracking & streaks",
                "Exercise solutions",
                "All lessons unlocked",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-600">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="text-center py-2.5 px-6 rounded-full text-sm font-medium bg-zinc-100 text-zinc-400">
              Current plan
            </div>
          </div>

          {/* Supporter tier */}
          <div className="border border-zinc-900 rounded-2xl p-7 relative shadow-[0_4px_32px_rgba(0,0,0,0.1)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <Heart size={11} />
              Supporter
            </div>

            <div className="flex items-center gap-2 mb-5">
              <Zap size={16} className="text-amber-500" />
              <h2 className="text-base font-semibold text-zinc-900">Support Us</h2>
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-3xl font-bold tracking-tight">Any amount</span>
            </div>
            <p className="text-xs text-zinc-400 mb-6">Help keep FluentCode alive</p>

            <ul className="space-y-2.5 mb-6">
              {[
                "Everything in Free",
                "Unlimited AI feedback",
                "Support an indie developer",
                "Priority feature requests",
                "Early access to new courses",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-600">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://boosty.to/fluentcode/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-zinc-900 text-white py-2.5 px-6 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-200"
            >
              Support on Boosty <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="border border-zinc-100 rounded-2xl p-7 mb-8"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-5">
            How supporting works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Donate on Boosty",
                desc: "Choose any amount that feels right. Even $1 makes a difference.",
              },
              {
                step: "02",
                title: "Email us your username",
                desc: "Send your FluentCode email to fluentcodesupport@gmail.com",
              },
              {
                step: "03",
                title: "Get unlimited access",
                desc: "We'll unlock unlimited AI feedback on your account within 24 hours.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step}>
                <p className="text-xs font-semibold text-zinc-300 tracking-widest mb-2 uppercase">
                  {step}
                </p>
                <h4 className="text-sm font-semibold text-zinc-900 mb-1">{title}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="text-center text-zinc-400 text-xs"
        >
          100% of donations go toward server costs and development. Thank you for supporting us. ❤️
        </motion.p>
      </div>
    </div>
  );
}