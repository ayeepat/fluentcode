// src/pages/Landing.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,
  Menu,
  X,
  Mail,
  Code2,
  HelpCircle,
  Sparkles,
  Zap,
  Terminal,
} from "lucide-react";
import { getGuestLessonIds } from "@/lib/guestAccess";
import { useUser, SignUpButton, SignInButton, useClerk } from "@clerk/clerk-react";
import Wordmark from "@/components/Wordmark";

const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease },
});

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

// ---------------------------------------------------------------------------
// Static course display data — sourced from actual curriculum files.
// Update these numbers manually whenever lessons are added or removed.
// Never import curriculum files here — that causes the cache-miss crash.
// ---------------------------------------------------------------------------
const COURSE_CARDS = [
  {
    lang: "python",
    label: "Python",
    mono: "Py",
    tagline: "The friendliest place to start",
    modules: [
      { id: "l0",  title: "Level 0 — Your First Code",            lessons: 4  },
      { id: "l1",  title: "Level 1 — Talking and Listening",      lessons: 5  },
      { id: "l2",  title: "Level 2 — Working with Text",          lessons: 5  },
      { id: "l3",  title: "Level 3 — Numbers and Math",           lessons: 5  },
      { id: "l4",  title: "Level 4 — Making Decisions",           lessons: 6  },
      { id: "l5",  title: "Level 5 — Repeating Code",             lessons: 5  },
      { id: "l6",  title: "Level 6 — Lists",                      lessons: 5  },
      { id: "l7",  title: "Level 7 — Dictionaries",               lessons: 4  },
      { id: "l8",  title: "Level 8 — Reusable Code with Functions", lessons: 6 },
      { id: "l9",  title: "Level 9 — Handy Built-ins",            lessons: 5  },
      { id: "l10", title: "Level 10 — Advanced Topics",           lessons: 4  },
    ],
  },
  {
    lang: "java",
    label: "Java",
    mono: "Jv",
    tagline: "Industry classic, done gently",
    modules: [
      { id: "p0", title: "Phase 0 — Welcome to Java",             lessons: 1  },
      { id: "p1", title: "Phase 1 — Fundamentals",                lessons: 9  },
      { id: "p2", title: "Phase 2 — Control Flow",                lessons: 8  },
      { id: "p3", title: "Phase 3 — Methods and Collections",     lessons: 9  },
      { id: "p4", title: "Phase 4 — Object-Oriented Programming", lessons: 8  },
      { id: "p5", title: "Phase 5 — Intermediate Java",           lessons: 5  },
    ],
  },
  {
    lang: "javascript",
    label: "JavaScript",
    mono: "JS",
    tagline: "The language of the web",
    modules: [
      { id: "p0", title: "Phase 0 — Welcome to JavaScript",       lessons: 1  },
      { id: "p1", title: "Phase 1 — Fundamentals",                lessons: 8  },
      { id: "p2", title: "Phase 2 — Control Flow",                lessons: 5  },
      { id: "p3", title: "Phase 3 — Functions",                   lessons: 4  },
      { id: "p4", title: "Phase 4 — Arrays and Objects",          lessons: 4  },
      { id: "p5", title: "Phase 5 — Intermediate JavaScript",     lessons: 5  },
    ],
  },
  {
    lang: "typescript",
    label: "TypeScript",
    mono: "TS",
    tagline: "JavaScript with guardrails",
    modules: [
      { id: "p0", title: "Phase 0 — Welcome to TypeScript",       lessons: 1  },
      { id: "p1", title: "Phase 1 — Type Fundamentals",           lessons: 5  },
      { id: "p2", title: "Phase 2 — Functions in TypeScript",     lessons: 4  },
      { id: "p3", title: "Phase 3 — Objects and Interfaces",      lessons: 4  },
      { id: "p4", title: "Phase 4 — Arrays, Tuples, and Generics", lessons: 3 },
      { id: "p5", title: "Phase 5 — Classes and OOP",             lessons: 3  },
      { id: "p6", title: "Phase 6 — Advanced Types",              lessons: 4  },
    ],
  },
  {
    lang: "ruby",
    label: "Ruby",
    mono: "Rb",
    tagline: "Designed to make you smile",
    modules: [
      { id: "p0", title: "Phase 0 — Welcome to Ruby",             lessons: 1  },
      { id: "p1", title: "Phase 1 — Fundamentals",                lessons: 7  },
      { id: "p2", title: "Phase 2 — Control Flow",                lessons: 5  },
      { id: "p3", title: "Phase 3 — Methods",                     lessons: 2  },
      { id: "p4", title: "Phase 4 — Arrays and Hashes",           lessons: 2  },
      { id: "p5", title: "Phase 5 — Intermediate Ruby",           lessons: 2  },
    ],
  },
  {
    lang: "cpp",
    label: "C++",
    mono: "C+",
    tagline: "Close to the metal",
    modules: [
      { id: "p0", title: "Phase 0 — Welcome to C++",              lessons: 1  },
      { id: "p1", title: "Phase 1 — Fundamentals",                lessons: 4  },
      { id: "p2", title: "Phase 2 — Functions and Scope",         lessons: 2  },
      { id: "p3", title: "Phase 3 — Arrays, Vectors, and Strings", lessons: 2 },
      { id: "p4", title: "Phase 4 — Classes and Objects",         lessons: 1  },
    ],
  },
  {
    lang: "go",
    label: "Go",
    mono: "Go",
    tagline: "Simple, fast, concurrent",
    modules: [
      { id: "l0",  title: "Level 0 — Hello Go",                   lessons: 4  },
      { id: "l1",  title: "Level 1 — Variables & Data Types",     lessons: 5  },
      { id: "l2",  title: "Level 2 — Control Flow",               lessons: 5  },
      { id: "l3",  title: "Level 3 — Functions",                  lessons: 4  },
      { id: "l4",  title: "Level 4 — Pointers",                   lessons: 3  },
      { id: "l5",  title: "Level 5 — Arrays, Slices & Maps",      lessons: 5  },
      { id: "l6",  title: "Level 6 — Structs and Methods",        lessons: 4  },
      { id: "l7",  title: "Level 7 — Interfaces & Errors",        lessons: 3  },
      { id: "l8",  title: "Level 8 — Concurrency",                lessons: 5  },
      { id: "l9",  title: "Level 9 — Packages and Modules",       lessons: 4  },
      { id: "l10", title: "Level 10 — Advanced Error Handling",   lessons: 3  },
      { id: "l11", title: "Level 11 — File I/O and Text",         lessons: 3  },
      { id: "l12", title: "Level 12 — Testing and Benchmarking",  lessons: 3  },
      { id: "l13", title: "Level 13 — Generics",                  lessons: 3  },
      { id: "l14", title: "Level 14 — Building Web APIs",         lessons: 5  },
    ],
  },
  {
    lang: "rust",
    label: "Rust",
    mono: "Rs",
    tagline: "Fearless systems programming",
    modules: [
      { id: "m1", title: "Module 1 — Getting Started with Rust",       lessons: 5 },
      { id: "m2", title: "Module 2 — Ownership & Borrowing",           lessons: 5 },
      { id: "m3", title: "Module 3 — Structuring Your Data",           lessons: 5 },
      { id: "m4", title: "Module 4 — Error Handling & Collections",    lessons: 5 },
      { id: "m5", title: "Module 5 — Project Organization & Generics", lessons: 5 },
      { id: "m6", title: "Module 6 — Iterators, Closures & Concurrency", lessons: 5 },
      { id: "m7", title: "Module 7 — The Capstone Build (CLI Tool)",   lessons: 5 },
    ],
  },
];

const TOTAL_LESSONS = COURSE_CARDS.reduce(
  (total, course) => total + course.modules.reduce((t, m) => t + m.lessons, 0),
  0
);

// ---------------------------------------------------------------------------
// Hero editor mockup
// ---------------------------------------------------------------------------
function EditorMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Editor window */}
      <div className="rounded-2xl bg-zinc-950 border border-zinc-800 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.4)] overflow-hidden text-left">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/80">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="ml-3 text-xs font-mono text-zinc-500">exercise.py</span>
          <span className="ml-auto text-[10px] font-medium uppercase tracking-widest text-zinc-600">
            Lesson 1 · Python
          </span>
        </div>

        {/* Code */}
        <div className="px-5 py-4 font-mono text-[13px] leading-6">
          <div className="flex gap-4">
            <span className="text-zinc-700 select-none">1</span>
            <span className="text-zinc-500"># Make Python talk</span>
          </div>
          <div className="flex gap-4">
            <span className="text-zinc-700 select-none">2</span>
            <span>
              <span className="text-sky-300">print</span>
              <span className="text-zinc-300">(</span>
              <span className="text-emerald-300">"I am ready to code!"</span>
              <span className="text-zinc-300">)</span>
            </span>
          </div>
        </div>

        {/* Output */}
        <div className="border-t border-zinc-800/80 px-5 py-3.5 font-mono text-[12px]">
          <p className="text-zinc-600 mb-1.5 uppercase tracking-widest text-[10px]">Output</p>
          <p className="text-zinc-200">I am ready to code!</p>
        </div>
      </div>

      {/* Floating feedback chip */}
      <motion.div
        initial={{ opacity: 0, y: 10, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.9, ease }}
        className="absolute -bottom-5 right-4 sm:-right-6 flex items-center gap-2.5 bg-white border border-zinc-200 rounded-2xl pl-3 pr-4 py-2.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)]"
      >
        <span className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
          <Check size={14} strokeWidth={3} />
        </span>
        <div className="text-left">
          <p className="text-xs font-semibold text-zinc-900 leading-tight">Correct — nice work!</p>
          <p className="text-[11px] text-zinc-400 leading-tight">AI review · exact output match</p>
        </div>
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function Landing() {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignOut = () => {
    signOut();
    setMobileMenuOpen(false);
  };

  const handleStartLearning = () => {
    if (isSignedIn) {
      navigate("/dashboard");
      return;
    }
    const guestLessonIds = getGuestLessonIds("python");
    if (guestLessonIds.length === 0) {
      navigate("/courses");
      return;
    }
    const firstLessonId = guestLessonIds[0];
    if (isMobile) {
      navigate(`/quiz/python/${firstLessonId}`);
    } else {
      navigate(`/lesson/python/${firstLessonId}`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-clip">
      <Helmet>
        <title>FluentlyCode | Learn to Code with AI-Powered Interactive Lessons</title>
        <meta name="description" content="Learn to code with FluentlyCode: interactive Python lessons, AI-powered feedback, quizzes, and instant code evaluation. Free and no signup required." />
        <meta property="og:title" content="FluentlyCode | Learn to Code with AI-Powered Feedback" />
        <meta property="og:description" content="Interactive Python lessons with instant AI feedback. Start coding in seconds. No signup required. Completely free." />
      </Helmet>

      {/* ── Navigation ── */}
      <nav
        className={`sticky top-0 z-40 flex items-center justify-between px-6 py-3.5 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-zinc-200/70 shadow-[0_1px_0_0_rgba(0,0,0,0.03)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <Link to="/" className="z-10" onClick={() => setMobileMenuOpen(false)}>
          <Wordmark />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#how">How it works</NavLink>
          <NavLink href="#courses">Curriculum</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          {isSignedIn && (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/upgrade" icon={<Heart size={12} className="text-rose-500" />}>
                Support
              </NavLink>
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
                <button className="text-sm font-medium text-zinc-700 px-4 py-1.5 rounded-full hover:bg-zinc-100 transition-all duration-200">
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

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center text-center px-6 pt-20 pb-28 sm:pt-24">
        {/* Dot-grid backdrop */}
        <div className="absolute inset-0 bg-dots mask-fade-edges pointer-events-none" aria-hidden="true" />

        <motion.div {...fadeUp(0.05)} className="relative">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 bg-white border border-zinc-200 px-3.5 py-1.5 rounded-full mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            No signup required · Start coding in 10 seconds
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="relative text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-6 max-w-4xl"
        >
          Learn to code.
          <br />
          <span className="text-zinc-400 font-semibold">Actually learn it.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.18)}
          className="relative text-base text-zinc-500 mb-10 max-w-md leading-relaxed"
        >
          Write real code, get instant feedback, and build skills that stick.
          No account needed to start — just jump in.
        </motion.p>

        <motion.div
          {...fadeUp(0.24)}
          className="relative flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <button
            onClick={handleStartLearning}
            className="group inline-flex items-center gap-2 bg-zinc-900 text-white pl-6 pr-5 py-3 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-all duration-200 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.35)]"
          >
            {isSignedIn ? (
              <>Go to Dashboard <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" /></>
            ) : isMobile ? (
              <>Start first quiz <HelpCircle size={14} /></>
            ) : (
              <>Write your first code <Code2 size={14} /></>
            )}
          </button>
          <Link
            to="/courses"
            className="group inline-flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-zinc-900 px-5 py-3 rounded-full border border-zinc-200 hover:border-zinc-300 bg-white transition-all duration-200"
          >
            Browse all courses
            <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </motion.div>

        {/* Editor mockup */}
        <motion.div {...fadeUp(0.32)} className="relative w-full">
          <EditorMockup />
        </motion.div>

        {/* Social proof */}
        <motion.div
          {...fadeUp(0.4)}
          className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-16"
        >
          {[
            `${TOTAL_LESSONS} free lessons`,
            `${COURSE_CARDS.length} languages`,
            "10 AI reviews/day",
            "No signup needed",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Check size={12} strokeWidth={3} className="text-emerald-500" />
              {item}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── How It Works ── */}
      <section id="how" className="px-6 py-24 max-w-5xl mx-auto w-full scroll-mt-16">
        <motion.div {...inView()} className="mb-14 text-center">
          <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-4">
            Process
          </p>
          <h2 className="text-4xl font-bold tracking-tight">How it works</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              step: "01",
              icon: <Zap size={16} />,
              title: "Jump straight in",
              desc: "No signup, no setup. Click the button and start your first coding exercise in seconds.",
            },
            {
              step: "02",
              icon: <Terminal size={16} />,
              title: "Write real code",
              desc: "Every lesson ends with an exercise. No multiple choice — you write and run actual code.",
            },
            {
              step: "03",
              icon: <Sparkles size={16} />,
              title: "Get AI feedback",
              desc: "Your AI tutor reviews your code and gives targeted guidance. Create a free account for 10 reviews per day.",
            },
          ].map(({ step, icon, title, desc }, i) => (
            <motion.div
              key={step}
              {...inView(i * 0.08)}
              className="group relative border border-zinc-200 rounded-3xl p-7 bg-white hover:border-zinc-300 hover:shadow-[0_16px_48px_-20px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="w-9 h-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {icon}
                </span>
                <p className="text-xs font-semibold text-zinc-300 tracking-widest font-mono">
                  {step}
                </p>
              </div>
              <h3 className="text-base font-semibold mb-2 text-zinc-900">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Courses ── */}
      <section
        id="courses"
        className="px-6 py-24 max-w-5xl mx-auto w-full border-t border-zinc-100 scroll-mt-16"
      >
        <motion.div {...inView()} className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-4">
              Curriculum
            </p>
            <h2 className="text-4xl font-bold tracking-tight">
              Eight languages.
              <br />
              Optimised for learning.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 md:text-right md:pb-1">
            {TOTAL_LESSONS} lessons across {COURSE_CARDS.length} languages
            <br className="hidden md:block" /> — all free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COURSE_CARDS.map((course, idx) => {
            const totalLessons = course.modules.reduce((t, m) => t + m.lessons, 0);
            const shownModules = course.modules.slice(0, 4);
            const moreCount = course.modules.length - shownModules.length;
            return (
              <motion.div key={course.lang} {...inView((idx % 2) * 0.08)}>
                <Link
                  to="/courses"
                  className="group flex flex-col h-full border border-zinc-200 rounded-3xl p-6 bg-white hover:border-zinc-300 hover:shadow-[0_16px_48px_-20px_rgba(0,0,0,0.15)] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <span className="w-11 h-11 rounded-2xl bg-zinc-900 text-white flex items-center justify-center text-sm font-bold font-mono group-hover:scale-105 transition-transform duration-300">
                        {course.mono}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 leading-tight">
                          {course.label}
                        </h3>
                        <p className="text-xs text-zinc-400 mt-0.5">{course.tagline}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-1 shrink-0"
                    />
                  </div>

                  <div className="flex-1">
                    {shownModules.map((mod) => (
                      <div
                        key={mod.id}
                        className="flex items-center justify-between py-2 border-t border-zinc-100"
                      >
                        <span className="text-[13px] text-zinc-600 truncate pr-4">{mod.title}</span>
                        <span className="text-xs text-zinc-400 tabular-nums shrink-0">
                          {mod.lessons}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-zinc-100 mt-auto">
                    <span className="text-xs text-zinc-400">
                      {moreCount > 0 ? `+ ${moreCount} more modules` : `${course.modules.length} modules`}
                    </span>
                    <span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full tabular-nums">
                      {totalLessons} lessons
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CTA panel ── */}
      <section className="px-6 pb-24 max-w-5xl mx-auto w-full">
        <motion.div
          {...inView()}
          className="relative bg-zinc-950 rounded-[2rem] px-8 py-16 sm:px-16 sm:py-20 text-center overflow-hidden"
        >
          {/* faint dot grid inside the panel */}
          <div
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Ready to start?
            </h2>
            <p className="text-zinc-400 mb-9 text-sm">
              No account needed. No commitments. Just code.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleStartLearning}
                className="group inline-flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-all duration-200"
              >
                {isSignedIn ? (
                  <>Go to Dashboard <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" /></>
                ) : (
                  <>Start coding now <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" /></>
                )}
              </button>
              {!isSignedIn && (
                <SignInButton mode="modal">
                  <button className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                    Already have an account? →
                  </button>
                </SignInButton>
              )}
            </div>

            {/* Support link folded into the panel */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center gap-3">
              <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
                FluentlyCode is free forever. If it helps you, consider supporting
                us to keep the servers running.
              </p>
              <a
                href="https://boosty.to/fluentcode/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white border border-white/15 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-200"
              >
                <Heart size={13} className="text-rose-400" fill="currentColor" />
                Support on Boosty
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-100 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="mb-3">
                <Wordmark />
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
                Learn to code with real exercises and AI-powered feedback. Free
                forever, built for people who actually want to learn.
              </p>
            </div>

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

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                Get in touch
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:fluentcodesupport@gmail.com?subject=FluentlyCode Support"
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
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
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

          <div className="border-t border-zinc-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} fluentlycode — learn to code, personally.
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

/** @type {(props: { to?: string, href?: string, icon?: any, children: any }) => any} */
function NavLink({ to, href, icon, children }) {
  const cls =
    "flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-all duration-150";
  if (href) return <a href={href} className={cls}>{icon}{children}</a>;
  return <Link to={to} className={cls}>{icon}{children}</Link>;
}

/** @type {(props: { to?: string, href?: string, onClick?: () => void, children: any }) => any} */
function MobileNavLink({ to, href, onClick, children }) {
  const cls =
    "text-sm text-zinc-600 hover:text-zinc-900 py-2 transition-colors duration-150 block";
  if (href) return <a href={href} onClick={onClick} className={cls}>{children}</a>;
  return <Link to={to} onClick={onClick} className={cls}>{children}</Link>;
}
