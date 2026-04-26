// src/components/editor/CodeEditor.jsx
import { useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({ value, onChange, language }) {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    // Ensure the editor is focused when mounted
    editor.focus();
  };

  const languageMap = {
    python: "python",
    java: "java",
  };

  return (
    <div className="h-full w-full border border-zinc-200 rounded-2xl overflow-hidden relative">
      <Editor
        height="100%"
        language={languageMap[language] || "python"}
        value={value}
        onChange={onChange}
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