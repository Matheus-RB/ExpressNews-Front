import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TypographyExtension from "@tiptap/extension-typography";
import UnderlineExtension from "@tiptap/extension-underline";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Dropcursor from "@tiptap/extension-dropcursor";
import Link from "@tiptap/extension-link";
import Code from "@tiptap/extension-code";
import TextAlign from "@tiptap/extension-text-align";
import Focus from "@tiptap/extension-focus";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import Toolbar from "./Toobar";

interface Props {
  onContentChange: (value: string) => void;
  value: string;
}

export const RichEditor = ({ onContentChange, value }: Props) => {
  const [editorContent, setEditorContent] = useState(value); // Usando value como conteúdo inicial

  const editor = useEditor({
    extensions: [
      StarterKit,
      Subscript,
      Superscript,
      Highlight,
      TypographyExtension,
      UnderlineExtension,
      Document,
      Paragraph,
      Text,
      Dropcursor,
      Code,
      Link,
      //CodeBlockLowlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Focus.configure({
        className: "has-focus",
        mode: "all",
      }),
      /* SmilieReplacer,
      VideoPlayerExtension,
      Image, */
    ],
    content: editorContent, // Usando o conteúdo inicial aqui
    onUpdate({ editor }) {
      const newContent = editor.getHTML();
      setEditorContent(newContent);
      if (onContentChange) {
        onContentChange(newContent);
      }
    },
  });

  // Atualiza o conteúdo inicial quando o valor de "value" mudar
  useEffect(() => {
    setEditorContent(value);
  }, [value]);

  return (
    <div className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
      {editor && <Toolbar editor={editor} />}
      {editor && <EditorContent editor={editor} />}
    </div>
  );
};
