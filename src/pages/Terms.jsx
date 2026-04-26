// src/pages/Terms.jsx
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft size={14} />
          Home
        </Link>
        <Link to="/" className="text-sm font-semibold tracking-tight text-zinc-900">
          fluentcode
        </Link>
        <div className="w-16" />
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-zinc-400 mb-10">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <div className="prose-sm text-zinc-600 leading-relaxed space-y-6">
          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing or using FluentCode ("the Service"), available at fluentcode.com and related domains,
              you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms,
              you may not access or use the Service. These Terms constitute a legally binding agreement between
              you ("User", "you") and FluentCode ("we", "us", "our").
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">2. Description of Service</h2>
            <p>
              FluentCode is an online platform that provides interactive programming education through
              structured lessons, coding exercises, and AI-powered feedback. The Service includes both
              free and paid subscription tiers. We reserve the right to modify, suspend, or discontinue
              any part of the Service at any time, with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">3. User Accounts</h2>
            <p>
              To access certain features, you must create an account. You agree to provide accurate,
              current, and complete information during registration and to keep your account information
              updated. You are responsible for maintaining the confidentiality of your account credentials
              and for all activities that occur under your account. You must notify us immediately of any
              unauthorized use of your account.
            </p>
            <p className="mt-2">
              You must be at least 13 years of age to create an account. If you are under 18, you
              represent that you have your parent or guardian's consent to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">4. Subscriptions and Payments</h2>
            <p>
              FluentCode offers a free tier and a paid "Pro" subscription. By subscribing to the Pro plan,
              you agree to pay the applicable fees as displayed at the time of purchase. All payments are
              processed securely through Stripe, Inc.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Subscriptions are billed on a monthly recurring basis.</li>
              <li>You authorize us to charge your payment method automatically each billing cycle.</li>
              <li>All fees are stated in US Dollars (USD) unless otherwise specified.</li>
              <li>Prices may change with 30 days' prior notice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">5. Cancellation and Refunds</h2>
            <p>
              You may cancel your Pro subscription at any time through the Subscription management page.
              Upon cancellation:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your Pro access will continue until the end of the current billing period.</li>
              <li>No further charges will be made after cancellation.</li>
              <li>Your account will revert to the free tier at the end of the paid period.</li>
              <li>We do not provide refunds for partial billing periods. If you believe you were charged in error, contact us at fluentcodesupport@gmail.com.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Use the Service for any unlawful purpose or in violation of any applicable laws.</li>
              <li>Attempt to gain unauthorized access to any part of the Service, other accounts, or computer systems.</li>
              <li>Interfere with or disrupt the integrity or performance of the Service.</li>
              <li>Upload or transmit viruses, malware, or any harmful code.</li>
              <li>Use automated means (bots, scrapers) to access the Service without our written consent.</li>
              <li>Reproduce, distribute, or create derivative works from our content without permission.</li>
              <li>Share your account credentials with third parties or allow others to use your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">7. Intellectual Property</h2>
            <p>
              All content on FluentCode — including but not limited to lessons, exercises, code examples,
              design, logos, and text — is the intellectual property of FluentCode and is protected by
              copyright, trademark, and other intellectual property laws. You may not copy, modify,
              distribute, sell, or lease any part of our Service or content without our explicit
              written permission.
            </p>
            <p className="mt-2">
              Code you write in exercises remains yours. However, by submitting code through the
              Service, you grant us a non-exclusive, worldwide, royalty-free license to use your
              submissions for the purpose of providing and improving the Service (such as AI
              feedback analysis).
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">8. AI-Powered Features</h2>
            <p>
              FluentCode uses artificial intelligence to provide code feedback and tutoring assistance.
              While we strive for accuracy, AI-generated feedback may occasionally contain errors or
              inaccuracies. AI responses are provided for educational purposes only and should not be
              relied upon as professional advice. We are not liable for any consequences arising from
              reliance on AI-generated content.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">9. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
              WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
              WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. YOUR USE OF
              THE SERVICE IS AT YOUR OWN RISK.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, FLUENTCODE AND ITS AFFILIATES,
              OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
              PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF
              THE SERVICE, REGARDLESS OF THE THEORY OF LIABILITY. OUR TOTAL LIABILITY SHALL NOT
              EXCEED THE AMOUNT YOU HAVE PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless FluentCode and its affiliates from
              any claims, damages, losses, liabilities, and expenses (including reasonable legal fees)
              arising out of your use of the Service, your violation of these Terms, or your violation
              of any rights of a third party.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">12. Account Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time, with or without
              cause and with or without notice, if we believe you have violated these Terms. Upon
              termination, your right to access the Service will immediately cease. Any provisions of
              these Terms that by their nature should survive termination shall survive, including
              ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              European Union, without regard to its conflict of law principles. For users in the
              United States, any disputes shall be resolved in accordance with the laws of the
              State of Delaware. You agree to submit to the exclusive jurisdiction of the courts
              in the applicable jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">14. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes
              by posting the new Terms on this page and updating the "Last updated" date. Your
              continued use of the Service after changes are posted constitutes your acceptance of
              the revised Terms. We encourage you to review these Terms periodically.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">15. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision
              shall be limited or eliminated to the minimum extent necessary so that these Terms shall
              otherwise remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-zinc-900 mb-2">16. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at{" "}
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