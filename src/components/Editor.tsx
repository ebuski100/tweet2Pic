import { useRef, useState } from "react";

const Editor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState("");

  const handleInput = () => {
    setContent(editorRef.current?.innerHTML || "");
  };

  const format = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  return (
    <>
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        suppressContentEditableWarning
        className="min-h-[150px] border p-3 text-white"
      />

      {/* Debug */}
      <pre className="text-xs text-gray-400 mt-2">{content}</pre>

      <div className="flex gap-2 mb-2">
        <button onClick={() => format("bold")}>B</button>
        <button onClick={() => format("italic")}>I</button>
        <button onClick={() => format("underline")}>U</button>
      </div>
    </>
  );
};

export default Editor;
