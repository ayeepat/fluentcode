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

  const handleChange = (newValue) => {
    // On first keystroke, check if user is typing over the starter code
    if (!hasCleared && newValue !== value) {
      // If the starter code is just a comment + template, clear it
      const isStarterCode = value?.startsWith("# ") || value?.startsWith("//");
      if (isStarterCode) {
        // Get only the new character the user typed
        const lastChar = newValue.slice(-1);
        setHasCleared(true);
        onChange(lastChar);
        return;
      }
    }
    onChange(newValue);
  };

  const languageMap = {
    python: "python",
    java: "java",
  };

  return (
    <div className="h-full w-full border border-zinc-200 rounded-2xl overflow-hidden">
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