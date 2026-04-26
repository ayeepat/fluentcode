// src/pages/Upgrade.jsx
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X, ArrowLeft, Zap, Loader2 } from "lucide-react";
import { useUser, SignUpButton } from "@clerk/clerk-react";
import { progressDb } from "@/lib/progressDb";

const ease = [0.16, 1, 0.3, 1];
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function Upgrade() {
  const { user, isSignedIn, isLoaded } = useUser();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [checkingPro, setCheckingPro] = useState(true);

  const success = searchParams.get("success") === "true";
  const canceled = searchParams.get("canceled") === "true";

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) {
      setCheckingPro(false);
      return;
    }

    const checkPro = async () => {
      try {
        const data = await progressDb.getProgress(
          user.id,
          user.primaryEmailAddress?.emailAddress
        );
        setIsPro(data?.is_pro || false);
      } catch (err) {
        console.error("Failed to check pro status:", err);
      } finally {
        setCheckingPro(false);
      }
    };

    checkPro();
  }, [isLoaded, isSignedIn, user]);

  const handleUpgrade = async () => {
    if (!user) return;
    setLoading(true);

    try {
      const res = await fetch(
        `${SUPABASE_URL}/functions/v1/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            clerkUserId: user.id,
            email: user.primaryEmailAddress?.emailAddress,
          }),
        }
      );

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No checkout URL returned:", data);
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const tiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        { name: "Full Python & Java curriculum", included: true },
        { name: "AI-powered code feedback", included: true, limit: "7 prompts/day" },
        { name: "Progress tracking", included: true },
        { name: "Exercise solutions", included: true },
        { name: "Unlimited AI feedback", included: false },
        { name: "Priority support", included: false },
        { name: "Certificate of completion", included: false },
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$0.99",
      period: "per month",
      description: "Unlock your full potential",
      features: [
        { name: "Full Python & Java curriculum", included: true },
        { name: "AI-powered code feedback", included: true, limit: "Unlimited" },
        { name: "Progress tracking", included: true },
        { name: "Exercise solutions", included: true },
        { name: "Unlimited AI feedback", included: true },
        { name: "Priority support", included: true },
        { name: "Certificate of completion", included: true },
      ],
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
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
        {/* Success message */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center"
          >
            <p className="text-emerald-700 font-semibold mb-1">🎉 Welcome to Pro!</p>
            <p className="text-sm text-emerald-600">
              Your upgrade was successful. You now have unlimited access.
            </p>
          </motion.div>
        )}

        {/* Canceled message */}
        {canceled && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center"
          >
            <p className="text-amber-700 font-semibold mb-1">Payment canceled</p>
            <p className="text-sm text-amber-600">
              No worries — you can upgrade anytime.
            </p>
          </motion.div>
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-4">
            Pricing
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Simple, transparent pricing
          </h1>
          <p className="text-zinc-500 text-sm">Start for free. Upgrade anytime.</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease }}
              className={`relative rounded-2xl border p-8 ${
                tier.popular
                  ? "border-zinc-900 shadow-[0_4px_32px_rgba(0,0,0,0.1)]"
                  : "border-zinc-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Zap size={11} />
                  Most popular
                </div>
              )}

              {/* Tier header */}
              <div className="mb-7">
                <h2 className="text-base font-semibold text-zinc-900 mb-4">{tier.name}</h2>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                  <span className="text-sm text-zinc-400">/ {tier.period}</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">{tier.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    {feature.included ? (
                      <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    ) : (
                      <X size={14} className="text-zinc-300 shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? "text-zinc-700" : "text-zinc-400"}>
                      {feature.name}
                      {feature.limit && feature.included && (
                        <span className="text-zinc-400 ml-1 text-xs">({feature.limit})</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {tier.name === "Free" ? (
                isSignedIn ? (
                  <div className="block text-center py-2.5 px-6 rounded-full text-sm font-medium bg-zinc-100 text-zinc-400 cursor-default">
                    {isPro ? "Free plan" : "Current plan"}
                  </div>
                ) : (
                  <SignUpButton mode="modal">
                    <button className="w-full bg-zinc-900 text-white py-2.5 px-6 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-200">
                      Sign up free
                    </button>
                  </SignUpButton>
                )
              ) : isSignedIn ? (
                isPro ? (
                  <div className="block text-center py-2.5 px-6 rounded-full text-sm font-medium bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-default">
                    ✓ Current plan
                  </div>
                ) : (
                  <button
                    onClick={handleUpgrade}
                    disabled={loading || checkingPro}
                    className="w-full bg-zinc-900 text-white py-2.5 px-6 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Redirecting to Stripe...
                      </>
                    ) : (
                      "Upgrade to Pro"
                    )}
                  </button>
                )
              ) : (
                <SignUpButton mode="modal">
                  <button className="w-full bg-zinc-900 text-white py-2.5 px-6 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-200">
                    Start Pro
                  </button>
                </SignUpButton>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-center text-zinc-400 text-xs mt-10">
          All plans include full curriculum access. Upgrade to remove daily limits.
        </p>
      </div>
    </div>
  );
}