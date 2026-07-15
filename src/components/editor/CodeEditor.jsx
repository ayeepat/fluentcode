// src/components/editor/CodeEditor.jsx
import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({ value, onChange, language }) {
  const editorRef = useRef(null);
  const [hasCleared, setHasCleared] = useState(false);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleChange = (newValue, event) => {
    // On the first edit, check if the user is typing over the starter code.
    // We only special-case this when Monaco gives us the change event so we can
    // recover exactly what was entered — otherwise fall through to a plain update.
    if (!hasCleared && newValue !== value && event?.changes?.length) {
      // If the starter code is just a comment/template structure, clear it
      const isStarterCode =
        value?.startsWith("# ") ||      // Python
        value?.startsWith("//") ||      // C++, C#, Java, JS, TS, Rust
        value?.startsWith("package main") ||  // Go
        value?.startsWith("fn main()") ||  // Rust
        value?.startsWith("-- ") ||  // SQL
        value?.startsWith("<!--");  // HTML & CSS
      if (isStarterCode) {
        // Keep exactly what the user just entered — a single keystroke or a
        // whole pasted solution — and drop the starter template. Truncating to
        // the last character silently deleted pastes and multi-char edits.
        const inserted = event.changes.map((c) => c.text).join("");
        setHasCleared(true);
        onChange(inserted);
        return;
      }
    }
    onChange(newValue);
  };

  const languageMap = {
    python: "python",
    java: "java",
    csharp: "csharp",
    javascript: "javascript",
    ruby: "ruby",
    typescript: "typescript",
    cpp: "cpp",
    go: "go",
    rust: "rust",
    sql: "sql",
    "html-css": "html",
  };

  return (
    <div className="h-full w-full border border-zinc-200 rounded-2xl overflow-hidden relative">
      {!value?.trim() && (
        <div className="absolute inset-0 pointer-events-none z-10 flex items-start justify-start pt-16 pl-[50px]">
          <span className="text-zinc-500 text-sm font-mono">Type your code here</span>
        </div>
      )}
      <Editor
        height="100%"
        language={languageMap[language] || "python"}
        value={value}
        onChange={handleChange}
        onMount={handleEditorDidMount}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 4,
          insertSpaces: true,
          fontFamily: "'JetBrains Mono', 'Fira Code', Menlo, Monaco, monospace",
          fontLigatures: true,
          renderLineHighlight: "gutter",
          padding: { top: 16, bottom: 16 },
          smoothScrolling: true,
          cursorSmoothCaretAnimation: "on",
          scrollbar: {
            verticalScrollbarSize: 4,
            horizontalScrollbarSize: 4,
          },
        }}
      />
    </div>
  );
}
