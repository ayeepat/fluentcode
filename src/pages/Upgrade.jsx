import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitch from "@/components/LanguageSwitch";
import LocalizedText from "@/components/LocalizedText";
// src/pages/Upgrade.jsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import { ArrowLeft, Heart, ExternalLink } from "lucide-react";

export default function Upgrade() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{language === "ru" ? "FluentlyCode Pro — скоро" : "FluentlyCode Pro — Coming Soon | Plans & Support"}</title>
        <meta name="description" content={language === "ru" ? "Подписка Pro: 69 ₽ в месяц или 599 ₽ в год. Скоро. Сейчас учитесь бесплатно." : "Pro plans: 69 ₽ monthly or 599 ₽ yearly. Coming soon. Keep learning for free today."} />
        <meta property="og:title" content={language === "ru" ? "FluentlyCode Pro — скоро" : "FluentlyCode Pro — Coming Soon"} />
        <meta property="og:description" content={language === "ru" ? "Подписка Pro: 69 ₽ в месяц или 599 ₽ в год. Скоро. Сейчас учитесь бесплатно." : "Pro plans: 69 ₽ monthly or 599 ₽ yearly. Coming soon."} />
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

      <main>
        <header className="max-w-5xl mx-auto px-6 pt-12">
          <h1 className="text-3xl font-bold tracking-tight">{language === "ru" ? "Подписка FluentlyCode Pro" : "FluentlyCode Pro plans"}</h1>
        </header>
        <SubscriptionPlans />
        <div className="max-w-lg mx-auto px-6 pb-24 text-center">
          <div>
            <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart size={32} fill="currentColor" />
            </div>

            <h2 className="text-2xl font-bold tracking-tight mb-4">{language === "ru" ? "Поддержите бесплатные уроки" : "Support free lessons"}</h2>

            <p className="text-zinc-500 text-sm leading-relaxed mb-4">{language === "ru" ? "Пока мы готовим Pro, вы можете поддержать разработку добровольным пожертвованием. Оно не оформляет подписку и не открывает возможности Pro." : "While we prepare Pro, you can support development with a voluntary donation. Donations do not activate a subscription or unlock Pro benefits."}</p>

            <p className="text-zinc-400 text-sm leading-relaxed mb-10">{<LocalizedText text="This project is built and maintained by one developer. If it is useful to you and you want to help keep it online, you can leave a donation. It goes toward hosting and development costs. There is no obligation." />}</p>

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

            <p className="text-xs text-zinc-300 mt-6">{<LocalizedText text="Thanks for supporting the project. ❤️" />}</p>

            <div className="mt-12">
              <Link
                to="/dashboard"
                className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors"
              >{<LocalizedText text="← Back to Dashboard" />}</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}