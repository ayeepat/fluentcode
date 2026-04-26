// src/components/editor/CodeEditor.jsx
import { useRef, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({ value, onChange, language }) {
  const editorRef = useRef(null);
  const [localValue, setLocalValue] = useState(value);

  // Sync local state with parent prop changes
  useEffect(() => {
    if (localValue !== value) {
      setLocalValue(value);
    }
  }, [value]);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    // Focus the editor when it mounts so you can type immediately
    editor.focus();
  };

  const handleChange = (newValue) => {
    setLocalValue(newValue);
    // Call the parent onChange with the updated value
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
        value={localValue}
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