// src/pages/Subscription.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, Calendar, AlertCircle, CheckCircle, Loader2, CreditCard } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { progressDb } from "@/lib/progressDb";

const ease = [0.16, 1, 0.3, 1];
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

function getDaysUntil(dateString) {
  if (!dateString) return null;
  const now = new Date();
  const end = new Date(dateString);
  const diff = end - now;
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function formatDate(dateString) {
  if (!dateString) return "—";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Subscription() {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [canceling, setCanceling] = useState(false);
  const [canceled, setCanceled] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const success = searchParams.get("success") === "true";

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn || !user) {
      navigate("/");
      return;
    }

    const loadSubscription = async () => {
      try {
        // First try the sync function
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/sync-subscription`,
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

        if (data.progress) {
          setProgress(data.progress);
        } else {
          // Fallback to direct database read
          console.warn("Sync failed, falling back to direct read:", data);
          const directData = await progressDb.getProgress(
            user.id,
            user.primaryEmailAddress?.emailAddress
          );
          setProgress(directData);
        }
      } catch (err) {
        console.error("Failed to sync subscription:", err);
        // Fallback to direct database read
        try {
          const directData = await progressDb.getProgress(
            user.id,
            user.primaryEmailAddress?.emailAddress
          );
          setProgress(directData);
        } catch (fallbackErr) {
          console.error("Fallback also failed:", fallbackErr);
        }
      } finally {
        setLoading(false);
      }
    };

    loadSubscription();
  }, [isLoaded, isSignedIn, user, navigate]);

  const handleCancel = async () => {
    if (!user) return;
    setCanceling(true);

    try {
      const res = await fetch(
        `${SUPABASE_URL}/functions/v1/cancel-subscription`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ clerkUserId: user.id }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setCanceled(true);
        setShowConfirm(false);
        const directData = await progressDb.getProgress(
          user.id,
          user.primaryEmailAddress?.emailAddress
        );
        setProgress(directData);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Cancel error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setCanceling(false);
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-5 h-5 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
      </div>
    );
  }

  const isPro = progress?.is_pro;
  const status = progress?.subscription_status;
  const periodEnd = progress?.current_period_end;
  const daysLeft = getDaysUntil(periodEnd);
  const isCanceling = status === "canceling";

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

      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          {/* Success banner */}
          {success && isPro && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle size={15} className="text-emerald-600" />
                <p className="text-emerald-700 font-semibold text-sm">Welcome to Pro</p>
              </div>
              <p className="text-sm text-emerald-600">
                Your subscription is active and ready to use.
              </p>
            </motion.div>
          )}

          {/* Canceled banner */}
          {canceled && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle size={15} className="text-emerald-600" />
                <p className="text-emerald-700 font-semibold text-sm">Cancellation confirmed</p>
              </div>
              <p className="text-sm text-emerald-600">
                Your Pro access continues until {formatDate(periodEnd)}. No further charges.
              </p>
            </motion.div>
          )}

          <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-4">
            Subscription
          </p>
          <h1 className="text-3xl font-bold tracking-tight mb-10">
            Manage your plan
          </h1>

          {isPro ? (
            <div className="space-y-6">
              {/* Top row — Plan details + Billing side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Plan card */}
                <div className="border border-zinc-200 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center">
                      <Zap size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-zinc-900">FluentCode Pro</p>
                      <p className="text-xs text-zinc-400">$0.99 / month</p>
                    </div>
                  </div>
                  <span
                    className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${
                      isCanceling
                        ? "bg-amber-50 text-amber-600 border border-amber-200"
                        : "bg-emerald-50 text-emerald-600 border border-emerald-200"
                    }`}
                  >
                    {isCanceling ? "Canceling" : "Active"}
                  </span>
                </div>

                {/* Billing card */}
                <div className="border border-zinc-200 rounded-2xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                    Billing
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-zinc-500">
                        <Calendar size={13} />
                        {isCanceling ? "Access ends" : "Next billing"}
                      </div>
                      <span className="text-sm font-medium text-zinc-900">
                        {formatDate(periodEnd)}
                      </span>
                    </div>

                    {daysLeft !== null && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-zinc-500">
                          {isCanceling ? "Days remaining" : "Renews in"}
                        </span>
                        <span
                          className={`text-sm font-semibold ${
                            daysLeft <= 3 ? "text-amber-600" : "text-zinc-900"
                          }`}
                        >
                          {daysLeft} {daysLeft === 1 ? "day" : "days"}
                        </span>
                      </div>
                    )}

                    {daysLeft !== null && (
                      <div className="h-1 bg-zinc-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            daysLeft <= 3 ? "bg-amber-400" : "bg-emerald-500"
                          }`}
                          style={{ width: `${Math.min(100, (daysLeft / 30) * 100)}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom row — Features + Cancel side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Features */}
                <div className="border border-zinc-100 rounded-2xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                    What's included
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Full Python & Java curriculum",
                      "Unlimited AI-powered feedback",
                      "Progress tracking",
                      "Exercise solutions",
                      "Priority support",
                      "Certificate of completion",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-zinc-600">
                        <CheckCircle size={13} className="text-emerald-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cancel section */}
                <div className="border border-zinc-100 rounded-2xl p-6">
                  {!isCanceling && !canceled ? (
                    <>
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
                        Cancel subscription
                      </p>
                      <p className="text-sm text-zinc-500 mb-5 leading-relaxed">
                        You'll keep Pro access until {formatDate(periodEnd)}. After that, your account reverts to the free plan. No further charges.
                      </p>

                      {!showConfirm ? (
                        <button
                          onClick={() => setShowConfirm(true)}
                          className="text-sm text-zinc-400 hover:text-red-500 transition-colors duration-200 underline underline-offset-2"
                        >
                          Cancel subscription
                        </button>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-50 border border-red-200 rounded-xl p-4"
                        >
                          <div className="flex items-start gap-2 mb-3">
                            <AlertCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
                            <p className="text-sm text-red-600">
                              Are you sure? You'll keep access until {formatDate(periodEnd)}, but it will not renew.
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={handleCancel}
                              disabled={canceling}
                              className="flex items-center gap-1.5 text-sm font-medium text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-colors disabled:opacity-50"
                            >
                              {canceling ? (
                                <>
                                  <Loader2 size={12} className="animate-spin" />
                                  Canceling...
                                </>
                              ) : (
                                "Yes, cancel"
                              )}
                            </button>
                            <button
                              onClick={() => setShowConfirm(false)}
                              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                            >
                              Keep Pro
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </>
                  ) : isCanceling && !canceled ? (
                    <>
                      <div className="flex items-start gap-2">
                        <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-amber-700 mb-1">
                            Subscription canceling
                          </p>
                          <p className="text-sm text-amber-600">
                            Your Pro access continues until {formatDate(periodEnd)}. No further charges will be made.
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <CheckCircle size={13} className="text-emerald-500" />
                      Cancellation confirmed
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Not Pro */
            <div className="max-w-md mx-auto border border-zinc-200 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={20} className="text-zinc-400" />
              </div>
              <h2 className="text-lg font-semibold mb-2">You're on the Free plan</h2>
              <p className="text-sm text-zinc-500 mb-6">
                Upgrade to Pro for unlimited AI feedback and more.
              </p>
              <Link
                to="/upgrade"
                className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-200"
              >
                <Zap size={13} />
                Upgrade to Pro
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}