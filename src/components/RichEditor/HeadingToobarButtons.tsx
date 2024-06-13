//import { Editor } from "@tiptap/react";

import { Button } from "../ui/button";

export const HeadingToolbarButtons = ({ editor }: { editor: any }) => {
  return (
    <div className="flex space-x-2">
      <Button
        className={`btn-toobar ${
          editor.isActive("heading", { level: 1 })
            ? "bg-[#05407d]"
            : "bg-primary"
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        aria-label="H1 Text"
        type="button"
      >
        <span className="font-semibold">H1</span>
      </Button>
      <Button
        className={`btn-toobar ${
          editor.isActive("heading", { level: 2 })
            ? "bg-[#05407d]"
            : "bg-primary"
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        aria-label="H2 Text"
        type="button"
      >
        <span className="font-semibold">H2</span>
      </Button>
      <Button
        className={`btn-toobar ${
          editor.isActive("heading", { level: 3 })
            ? "bg-[#05407d]"
            : "bg-primary"
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        aria-label="H3 Text"
        type="button"
      >
        <span className="font-semibold">H3</span>
      </Button>
      <Button
        className={`btn-toobar ${
          editor.isActive("heading", { level: 4 })
            ? "bg-[#05407d]"
            : "bg-primary"
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        aria-label="H4 Text"
        type="button"
      >
        <span className="font-semibold">H4</span>
      </Button>
      <Button
        className={`btn-toobar ${
          editor.isActive("heading", { level: 5 })
            ? "bg-[#05407d]"
            : "bg-primary"
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        aria-label="H5 Text"
        type="button"
      >
        <span className="font-semibold">H5</span>
      </Button>
      <Button
        className={`btn-toobar ${
          editor.isActive("heading", { level: 6 })
            ? "bg-[#05407d]"
            : "bg-primary"
        }`}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        aria-label="H6 Text"
        type="button"
      >
        <span className="font-semibold">H6</span>
      </Button>
    </div>
  );
};
