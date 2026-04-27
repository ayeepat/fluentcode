// src/pages/Landing.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Heart, Menu, X, Mail } from "lucide-react";
import { curriculum } from "@/lib/curriculum";
import { useUser, SignUpButton, SignInButton, useClerk } from "@clerk/clerk-react";

const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

export default function Landing() {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignOut = () => {
    signOut();
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-40 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
            : "bg-white border-b border-zinc-100"
        }`}
      >
        <Link
          to="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 z-10"
          onClick={() => setMobileMenuOpen(false)}
        >
          fluentcode
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#how">How it works</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          {isSignedIn && (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/upgrade" icon={<Heart size={12} className="text-rose-500" />}>Support</NavLink>
            </>
          )}
          <div className="w-px h-4 bg-zinc-200 mx-2" />
          {isSignedIn ? (
            <button
              onClick={handleSignOut}
              className="text-sm font-medium text-zinc-600 px-4 py-1.5 rounded-full border border-zinc-200 hover:border-red-300 hover:text-red-500 transition-all duration-200"
            >
              Log out
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-zinc-700 px-4 py-1.5 rounded-full border border-zinc-200 hover:border-zinc-400 hover:text-zinc-900 transition-all duration-200">
                  Log in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="text-sm font-medium bg-zinc-900 text-white px-4 py-1.5 rounded-full hover:bg-zinc-700 transition-all duration-200">
                  Sign up
                </button>
              </SignUpButton>
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden z-10 p-2 rounded-full hover:bg-zinc-100 transition-colors duration-200"
          onClick={() => setMobileMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={
            mobileMenuOpen
              ? { opacity: 1, y: 0, pointerEvents: "auto" }
              : { opacity: 0, y: -8, pointerEvents: "none" }
          }
          transition={{ duration: 0.2, ease }}
          className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 shadow-sm z-50 flex flex-col px-6 py-4 gap-1 md:hidden"
        >
          <MobileNavLink href="#how" onClick={() => setMobileMenuOpen(false)}>
            How it works
          </MobileNavLink>
          <MobileNavLink to="/courses" onClick={() => setMobileMenuOpen(false)}>
            Courses
          </MobileNavLink>
          {isSignedIn && (
            <>
              <MobileNavLink to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                Dashboard
              </MobileNavLink>
              <MobileNavLink to="/upgrade" onClick={() => setMobileMenuOpen(false)}>
                Support us
              </MobileNavLink>
            </>
          )}
          <div className="w-full h-px bg-zinc-100 my-2" />
          {isSignedIn ? (
            <button
              onClick={handleSignOut}
              className="text-sm font-medium text-left text-red-500 py-2"
            >
              Log out
            </button>
          ) : (
            <div className="flex flex-col gap-2 pt-1">
              <SignInButton mode="modal">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-sm font-medium text-zinc-700 px-4 py-2.5 rounded-full border border-zinc-200"
                >
                  Log in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-sm font-medium bg-zinc-900 text-white px-4 py-2.5 rounded-full"
                >
                  Sign up
                </button>
              </SignUpButton>
            </div>
          )}
        </motion.div>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-28 pb-36">
        <motion.div {...fadeUp(0.05)}>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            100% free · No credit card · No limits
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tight mb-6 max-w-4xl"
        >
          Learn to code.
          <br />
          <span className="text-zinc-400 font-semibold">Actually learn it.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.18)}
          className="text-base text-zinc-500 mb-10 max-w-md leading-relaxed"
        >
          Real exercises, an AI tutor that helps you improve, and a curriculum
          designed to actually stick. Completely free.
        </motion.p>

        <motion.div
          {...fadeUp(0.24)}
          className="flex items-center justify-center gap-3"
        >
          {isSignedIn ? (
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-200"
            >
              Go to Dashboard <ArrowRight size={13} />
            </Link>
          ) : (
            <SignUpButton mode="modal">
              <button className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-200">
                Start learning free <ArrowRight size={13} />
              </button>
            </SignUpButton>
          )}
          <Link
            to="/courses"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
          >
            Browse courses →
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div
          {...fadeUp(0.32)}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-14"
        >
          {["100% free forever", "10 AI reviews per day", "No credit card needed"].map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-xs text-zinc-400">
              <Check size={12} className="text-zinc-300" />
              {item}
            </span>
          ))}
        </motion.div>
      </section>

      {/* How It Works */}
      <section id="how" className="px-6 py-24 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-4">
            Process
          </p>
          <h2 className="text-4xl font-bold tracking-tight">How it works</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              step: "01",
              title: "Pick a lesson",
              desc: "Structured curriculum for Python and Java, broken into focused, bite-sized lessons.",
            },
            {
              step: "02",
              title: "Write real code",
              desc: "Every lesson ends with an exercise. No multiple choice — you write and run actual code.",
            },
            {
              step: "03",
              title: "Get AI feedback",
              desc: "Your AI tutor reviews every submission and gives targeted, encouraging guidance. 10 free reviews per day.",
            },
          ].map(({ step, title, desc }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="flex flex-col"
            >
              <p className="text-xs font-semibold text-zinc-300 tracking-widest mb-4 uppercase">
                {step}
              </p>
              <h3 className="text-base font-semibold mb-2 text-zinc-900">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section
        id="courses"
        className="px-6 py-24 max-w-4xl mx-auto w-full border-t border-zinc-100"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-4">
            Curriculum
          </p>
          <h2 className="text-4xl font-bold tracking-tight">
            Two languages.
            <br />
            Zero fluff.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(curriculum).map(([lang, data], idx) => (
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease }}
            >
              <Link
                to="/courses"
                className="block border border-zinc-200 rounded-2xl p-7 hover:border-zinc-400 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-7">
                  <div>
                    <h3 className="text-xl font-semibold mb-1.5 text-zinc-900">{data.label}</h3>
                    <p className="text-xs text-zinc-400">
                      {data.modules.length} modules ·{" "}
                      {data.modules.reduce((a, m) => a + m.lessons.length, 0)} lessons
                    </p>
                  </div>
                  <ArrowRight
                    size={15}
                    className="text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-0.5 transition-all duration-200 mt-0.5 shrink-0"
                  />
                </div>
                <div>
                  {data.modules.map((mod) => (
                    <div
                      key={mod.id}
                      className="flex items-center justify-between py-2.5 border-t border-zinc-100"
                    >
                      <span className="text-sm text-zinc-600">{mod.title}</span>
                      <span className="text-xs text-zinc-400 tabular-nums">
                        {mod.lessons.length}
                      </span>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      {!isSignedIn && (
        <section className="px-6 py-24 max-w-2xl mx-auto w-full text-center border-t border-zinc-100">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-5xl font-bold tracking-tight mb-4">Ready to start?</h2>
            <p className="text-zinc-500 mb-8 text-sm">
              No credit card. No commitments. Just code.
            </p>
            <div className="flex items-center justify-center gap-4">
              <SignUpButton mode="modal">
                <button className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-200">
                  Start learning free <ArrowRight size={13} />
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200">
                  Already have an account →
                </button>
              </SignInButton>
            </div>
          </motion.div>
        </section>
      )}

      {/* Support banner */}
      <section className="px-6 py-16 border-t border-zinc-100">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart size={20} fill="currentColor" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-2">
            Support the project
          </h3>
          <p className="text-sm text-zinc-400 mb-5 max-w-sm mx-auto leading-relaxed">
            If the app helps you, consider supporting the project to keep the servers running.
          </p>
          <a
            href="https://boosty.to/fluentcode/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-200"
          >
            <Heart size={13} />
            Support on Boosty
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <p className="text-sm font-semibold text-zinc-900 mb-3">fluentcode</p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Learn to code with real exercises and AI-powered feedback. 100% free, built for people who actually want to learn.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                Links
              </p>
              <div className="flex flex-col gap-2">
                <Link to="/courses" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Courses
                </Link>
                <Link to="/upgrade" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Support us
                </Link>
                <Link to="/terms" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/privacy" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Contact + Social */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                Get in touch
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:fluentcodesupport@gmail.com?subject=FluentCode Support"
                  className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  <Mail size={14} />
                  Email us
                </a>
                <a
                  href="https://www.tiktok.com/@fluentcodeweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                  TikTok
                </a>
                <p className="text-xs text-zinc-300 mt-1">
                  fluentcodesupport@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-zinc-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} fluentcode — learn to code, personally.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, href, icon, children }) {
  const cls =
    "flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-all duration-150";
  if (href) {
    return (
      <a href={href} className={cls}>
        {icon}
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {icon}
      {children}
    </Link>
  );
}

function MobileNavLink({ to, href, onClick, children }) {
  const cls =
    "text-sm text-zinc-600 hover:text-zinc-900 py-2 transition-colors duration-150 block";
  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} onClick={onClick} className={cls}>
      {children}
    </Link>
  );
}