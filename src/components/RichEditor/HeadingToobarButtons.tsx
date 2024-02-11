//import { Editor } from "@tiptap/react";

export const HeadingToolbarButtons = ({ editor }: { editor: any }) => {
  return (
    <div className="flex space-x-2">
      <button
        className={`p-2 rounded-md ${
          editor.isActive("heading", { level: 1 })
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-500"
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        aria-label="H1 Text"
        type="button"
      >
        <span className="font-semibold">H1</span>
      </button>
      <button
        className={`p-2 rounded-md ${
          editor.isActive("heading", { level: 2 })
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-500"
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        aria-label="H2 Text"
        type="button"
      >
        <span className="font-semibold">H2</span>
      </button>
      <button
        className={`p-2 rounded-md ${
          editor.isActive("heading", { level: 3 })
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-500"
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        aria-label="H3 Text"
        type="button"
      >
        <span className="font-semibold">H3</span>
      </button>
      <button
        className={`p-2 rounded-md ${
          editor.isActive("heading", { level: 4 })
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-500"
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        aria-label="H4 Text"
        type="button"
      >
        <span className="font-semibold">H4</span>
      </button>
      <button
        className={`p-2 rounded-md ${
          editor.isActive("heading", { level: 5 })
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-500"
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        aria-label="H5 Text"
        type="button"
      >
        <span className="font-semibold">H5</span>
      </button>
      <button
        className={`p-2 rounded-md ${
          editor.isActive("heading", { level: 6 })
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-500"
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        aria-label="H6 Text"
        type="button"
      >
        <span className="font-semibold">H6</span>
      </button>
    </div>
  );
}
