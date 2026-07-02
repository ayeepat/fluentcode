// src/components/CodeExample.jsx
// Dark code block dressed as a tiny editor window — used for lesson examples.

const FILE_NAMES = {
  python: "example.py",
  javascript: "example.js",
  typescript: "example.ts",
  java: "Example.java",
  ruby: "example.rb",
  cpp: "example.cpp",
  go: "main.go",
  rust: "main.rs",
};

const LANG_LABELS = {
  python: "Python",
  javascript: "JavaScript",
  typescript: "TypeScript",
  java: "Java",
  ruby: "Ruby",
  cpp: "C++",
  go: "Go",
  rust: "Rust",
};

export default function CodeExample({ code, language }) {
  const lines = (code ?? "").replace(/\n$/, "").split("\n");
  return (
    <div className="rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800/80">
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        <span className="ml-3 text-xs font-mono text-zinc-500">
          {FILE_NAMES[language] ?? "example.txt"}
        </span>
        <span className="ml-auto text-[10px] font-medium uppercase tracking-widest text-zinc-600">
          {LANG_LABELS[language] ?? language}
        </span>
      </div>
      <div className="px-4 py-4 overflow-x-auto">
        <pre className="text-sm text-zinc-100 font-mono leading-relaxed">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-zinc-700 select-none text-right w-5 shrink-0">
                {i + 1}
              </span>
              <span className="whitespace-pre-wrap">{line || " "}</span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
