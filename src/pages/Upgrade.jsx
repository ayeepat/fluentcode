import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitch from "@/components/LanguageSwitch";
import LocalizedText from "@/components/LocalizedText";
// src/pages/Upgrade.jsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, ExternalLink } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export default function Upgrade() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{language === "ru" ? "Поддержать FluentlyCode" : "Support FluentlyCode | Free Learning, Donations Welcome"}</title>
        <meta name="description" content={language === "ru" ? "Помогите развивать бесплатные уроки программирования." : "FluentlyCode is 100% free with no paywalls. Support our mission by donating. Every contribution helps us expand our curriculum."} />
        <meta property="og:title" content={language === "ru" ? "Поддержать FluentlyCode" : "Support FluentlyCode"} />
        <meta property="og:description" content={language === "ru" ? "Помогите развивать бесплатные уроки программирования." : "Help us grow. FluentlyCode is free and always will be."} />
      </Helmet>
      <nav className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <Link
          to="/dashboard"
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft size={14} />{<LocalizedText text="Dashboard" />}</Link>
        <Link to="/" className="text-sm font-semibold tracking-tight text-zinc-900">
          fluentlycode
        </Link>
        <LanguageSwitch />
      </nav>

      <div className="max-w-lg mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart size={32} fill="currentColor" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight mb-4">{<LocalizedText text="FluentlyCode is completely free." />}</h1>

          <p className="text-zinc-500 text-sm leading-relaxed mb-4">{<LocalizedText text="No subscriptions. No paywalls. No hidden fees. Every feature is available to every user." />}</p>

          <p className="text-zinc-400 text-sm leading-relaxed mb-10">{<LocalizedText text="This project is built and maintained by a solo developer. If you find it useful and want to help keep it running, you can leave a small donation. 100% goes toward server costs and development. No pressure." />}</p>

          <a
            href="https://boosty.to/fluentcode/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-200"
          >
            <Heart size={14} />
            <LocalizedText text="Support on Boosty" />
            <ExternalLink size={12} />
          </a>

          <p className="text-xs text-zinc-300 mt-6">{<LocalizedText text="Thank you. It means a lot. ❤️" />}</p>

          <div className="mt-12">
            <Link
              to="/dashboard"
              className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors"
            >{<LocalizedText text="← Back to Dashboard" />}</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}