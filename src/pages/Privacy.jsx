import { useLanguage } from "@/lib/LanguageContext";
import LocalizedText from "@/components/LocalizedText";
import LanguageSwitch from "@/components/LanguageSwitch";
// src/pages/Privacy.jsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  const { language } = useLanguage();
  const ru = language === "ru";
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{ru ? "Политика конфиденциальности | FluentlyCode" : "Privacy Policy | FluentlyCode"}</title>
        <meta name="description" content={language === "ru" ? "Узнайте, как FluentlyCode обрабатывает и защищает данные." : "Read our Privacy Policy to understand how we collect, use, and protect your data on FluentlyCode."} />
        <meta property="og:title" content={language === "ru" ? "Политика конфиденциальности | FluentlyCode" : "Privacy Policy - FluentlyCode"} />
        <meta property="og:description" content={language === "ru" ? "Узнайте, как FluentlyCode обрабатывает и защищает данные." : "Our privacy policy and data protection practices."} />
      </Helmet>
      <nav className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-zinc-100\">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft size={14} />{<LocalizedText text={"Home"} />}</Link>
        <Link to="/" className="text-sm font-semibold tracking-tight text-zinc-900">
          fluentlycode
        </Link>
        <LanguageSwitch />
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{ru ? "Политика конфиденциальности" : "Privacy Policy"}</h1>
        <p className="text-sm text-zinc-400 mb-10">{<LocalizedText text={"Last updated: "} />}{new Date().toLocaleDateString(ru ? "ru-RU" : "en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <div className="prose-sm text-zinc-600 leading-relaxed space-y-6">
          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">{<LocalizedText text={"1. Introduction"} />}</h2>
            <p>{<LocalizedText text={"FluentlyCode (\"we\", \"us\", \"our\") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and services (\"the Service\"). This policy is designed to comply with the General Data Protection Regulation (GDPR) for European Union users and the California Consumer Privacy Act (CCPA) for California residents."} />}</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">{<LocalizedText text={"2. Data We Collect"} />}</h2>
            <p>{<LocalizedText text={"We collect the following types of information:"} />}</p>

            <h3 className="text-sm font-semibold text-zinc-800 mt-4 mb-1">{<LocalizedText text={"2.1 Information You Provide"} />}</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>{<LocalizedText text={"Account information:"} />}</strong>{<LocalizedText text={" Name, email address when you create an account via Clerk authentication."} />}</li>
              <li><strong>{<LocalizedText text={"Payment information:"} />}</strong>{<LocalizedText text={" Payment details are processed directly by Stripe, Inc. We do not store credit card numbers on our servers. We store your Stripe customer ID and subscription status."} />}</li>
              <li><strong>{<LocalizedText text={"Code submissions:"} />}</strong>{<LocalizedText text={" Code you write and submit during exercises for the purpose of providing AI feedback."} />}</li>
            </ul>

            <h3 className="text-sm font-semibold text-zinc-800 mt-4 mb-1">{<LocalizedText text={"2.2 Information Collected Automatically"} />}</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>{<LocalizedText text={"Usage data:"} />}</strong>{<LocalizedText text={" Lessons completed, exercise attempts, accuracy rates, streak information, and learning progress."} />}</li>
              <li><strong>{<LocalizedText text={"Technical data:"} />}</strong>{<LocalizedText text={" Browser type, device type, IP address, and general location (country/region level only)."} />}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">{<LocalizedText text={"3. How We Use Your Data"} />}</h2>
            <p>{<LocalizedText text={"We use your data for the following purposes:"} />}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>{<LocalizedText text={"Provide the Service:"} />}</strong>{<LocalizedText text={" Track your learning progress, deliver AI-powered feedback, and manage your account."} />}</li>
              <li><strong>{<LocalizedText text={"Process payments:"} />}</strong>{<LocalizedText text={" Manage subscriptions, billing, and refund requests through Stripe."} />}</li>
              <li><strong>{<LocalizedText text={"Improve the Service:"} />}</strong>{<LocalizedText text={" Analyze usage patterns to improve our curriculum, exercises, and AI tutoring quality."} />}</li>
              <li><strong>{<LocalizedText text={"Communicate with you:"} />}</strong>{<LocalizedText text={" Send important account notifications, respond to support requests, and provide service updates."} />}</li>
              <li><strong>{<LocalizedText text={"Ensure security:"} />}</strong>{<LocalizedText text={" Detect and prevent fraud, abuse, and unauthorized access."} />}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">{<LocalizedText text={"4. Legal Basis for Processing (GDPR)"} />}</h2>
            <p>{<LocalizedText text={"For users in the European Economic Area (EEA), we process your data based on:"} />}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>{<LocalizedText text={"Contract performance:"} />}</strong>{<LocalizedText text={" Processing necessary to provide the Service you signed up for."} />}</li>
              <li><strong>{<LocalizedText text={"Legitimate interest:"} />}</strong>{<LocalizedText text={" Improving our Service, preventing fraud, and ensuring security."} />}</li>
              <li><strong>{<LocalizedText text={"Consent:"} />}</strong>{<LocalizedText text={" Where you have given explicit consent, such as subscribing to communications."} />}</li>
              <li><strong>{<LocalizedText text={"Legal obligation:"} />}</strong>{<LocalizedText text={" Where we are required to process data by law."} />}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">{<LocalizedText text={"5. Data Sharing"} />}</h2>
            <p>{<LocalizedText text={"We do not sell your personal data. We share your data only with the following categories of third parties, solely for the purpose of providing the Service:"} />}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>{<LocalizedText text={"Clerk:"} />}</strong>{<LocalizedText text={" Authentication and user account management."} />}</li>
              <li><strong>{<LocalizedText text={"Supabase:"} />}</strong>{<LocalizedText text={" Database hosting and backend services."} />}</li>
              <li><strong>{<LocalizedText text={"Stripe:"} />}</strong>{<LocalizedText text={" Payment processing and subscription management."} />}</li>
              <li><strong>{<LocalizedText text={"Groq:"} />}</strong>{<LocalizedText text={" AI model provider for code evaluation and tutoring feedback. Code you submit may be sent to Groq's API for processing. Groq's privacy policy applies to their handling of this data."} />}</li>
            </ul>
            <p className="mt-2">{<LocalizedText text={"Each third-party provider operates under their own privacy policies and data processing agreements. We encourage you to review their respective privacy policies."} />}</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">{<LocalizedText text={"6. Data Retention"} />}</h2>
            <p>{<LocalizedText text={"We retain your personal data for as long as your account is active or as needed to provide the Service. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal, accounting, or security purposes. Anonymized and aggregated data that cannot identify you may be retained indefinitely for analytical purposes."} />}</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">{<LocalizedText text={"7. Your Rights"} />}</h2>
            <p>{<LocalizedText text={"Depending on your location, you may have the following rights:"} />}</p>

            <h3 className="text-sm font-semibold text-zinc-800 mt-4 mb-1">{<LocalizedText text={"For EU/EEA Users (GDPR)"} />}</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>{<LocalizedText text={"Right of access:"} />}</strong>{<LocalizedText text={" Request a copy of your personal data."} />}</li>
              <li><strong>{<LocalizedText text={"Right to rectification:"} />}</strong>{<LocalizedText text={" Request correction of inaccurate data."} />}</li>
              <li><strong>{<LocalizedText text={"Right to erasure:"} />}</strong>{<LocalizedText text={" Request deletion of your personal data (\"right to be forgotten\")."} />}</li>
              <li><strong>{<LocalizedText text={"Right to restrict processing:"} />}</strong>{<LocalizedText text={" Request limitation of processing of your data."} />}</li>
              <li><strong>{<LocalizedText text={"Right to data portability:"} />}</strong>{<LocalizedText text={" Request your data in a portable, machine-readable format."} />}</li>
              <li><strong>{<LocalizedText text={"Right to object:"} />}</strong>{<LocalizedText text={" Object to processing based on legitimate interests."} />}</li>
              <li><strong>{<LocalizedText text={"Right to withdraw consent:"} />}</strong>{<LocalizedText text={" Withdraw previously given consent at any time."} />}</li>
            </ul>

            <h3 className="text-sm font-semibold text-zinc-800 mt-4 mb-1">{<LocalizedText text={"For California Residents (CCPA)"} />}</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>{<LocalizedText text={"Right to know:"} />}</strong>{<LocalizedText text={" Request disclosure of what personal data we collect and how it is used."} />}</li>
              <li><strong>{<LocalizedText text={"Right to delete:"} />}</strong>{<LocalizedText text={" Request deletion of your personal data."} />}</li>
              <li><strong>{<LocalizedText text={"Right to opt-out:"} />}</strong>{<LocalizedText text={" Opt out of the sale of personal data. Note: we do not sell personal data."} />}</li>
              <li><strong>{<LocalizedText text={"Right to non-discrimination:"} />}</strong>{<LocalizedText text={" We will not discriminate against you for exercising your rights."} />}</li>
            </ul>

            <p className="mt-3">{<LocalizedText text={"To exercise any of these rights, contact us at"} />}{" "}
              <a
                href="mailto:fluentcodesupport@gmail.com"
                className="text-zinc-900 underline underline-offset-2 hover:text-zinc-600 transition-colors"
              >
                fluentcodesupport@gmail.com
              </a>{<LocalizedText text={". We will respond within 30 days."} />}</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">{<LocalizedText text={"8. Data Security"} />}</h2>
            <p>{<LocalizedText text={"We implement appropriate technical and organizational measures to protect your personal data, including:"} />}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>{<LocalizedText text={"Encryption of data in transit (HTTPS/TLS)."} />}</li>
              <li>{<LocalizedText text={"Secure authentication via Clerk with industry-standard protocols."} />}</li>
              <li>{<LocalizedText text={"Row-level security policies in our database."} />}</li>
              <li>{<LocalizedText text={"API keys and secrets stored securely on the server, never exposed to the browser."} />}</li>
              <li>{<LocalizedText text={"Regular review of our security practices."} />}</li>
            </ul>
            <p className="mt-2">{<LocalizedText text={"However, no method of transmission over the Internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security."} />}</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">{<LocalizedText text={"9. International Data Transfers"} />}</h2>
            <p>{<LocalizedText text={"Your data may be transferred to and processed in countries outside your country of residence, including the United States. Our service providers (Clerk, Supabase, Stripe, Groq) may process data in various jurisdictions. Where data is transferred outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or the service provider's certification under recognized data protection frameworks."} />}</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">{<LocalizedText text={"10. Children's Privacy"} />}</h2>
            <p>{<LocalizedText text={"The Service is not intended for children under 13 years of age. We do not knowingly collect personal data from children under 13. If we become aware that we have collected data from a child under 13, we will take steps to delete that information promptly. If you are a parent or guardian and believe your child has provided us with personal data, please contact us."} />}</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">{<LocalizedText text={"11. Cookies and Tracking"} />}</h2>
            <p>{<LocalizedText text={"FluentlyCode uses essential cookies required for the Service to function properly, including authentication cookies managed by Clerk. We do not use advertising cookies or third-party tracking cookies. We do not engage in cross-site tracking."} />}</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">{<LocalizedText text={"12. Changes to This Policy"} />}</h2>
            <p>{<LocalizedText text={"We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the \"Last updated\" date. Your continued use of the Service after changes are posted constitutes your acceptance of the revised policy."} />}</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">{<LocalizedText text={"13. Contact"} />}</h2>
            <p>{<LocalizedText text={"For privacy-related inquiries, data requests, or concerns, please contact us at:"} />}</p>
            <p className="mt-2">
              <strong>{<LocalizedText text={"Email:"} />}</strong>{" "}
              <a
                href="mailto:fluentcodesupport@gmail.com"
                className="text-zinc-900 underline underline-offset-2 hover:text-zinc-600 transition-colors"
              >
                fluentcodesupport@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}