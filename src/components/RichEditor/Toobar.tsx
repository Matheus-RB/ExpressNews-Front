//import { useState } from "react";

//import { Editor } from "@tiptap/react";

/* import PickImage from "./PickImage";
import PickVideo from "./PickVideo"; */

import { HeadingToolbarButtons } from "./HeadingToobarButtons";

import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  //ClapperboardIcon,
  CodeIcon,
  //ImageIcon,
  ItalicIcon,
  Link,
  ListIcon,
  ListOrderedIcon,
  MinusIcon,
  PenLineIcon,
  PilcrowIcon,
  QuoteIcon,
  RedoIcon,
  StrikethroughIcon,
  SubscriptIcon,
  SuperscriptIcon,
  UnderlineIcon,
  UndoIcon,
  X,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const Toolbar = ({ editor }: { editor: any }) => {
  //const [OpenPickImage, setOpenPickImage] = useState(false);
  //const [OpenPickVideo, setOpenPickVideo] = useState(false);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap sticky border mb-1 gap-1 p-1">
      <HeadingToolbarButtons editor={editor} />
      <Separator orientation="vertical" />

      <Button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        value="left"
        aria-label="left aligned"
        type="button"
      >
        <AlignLeftIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        value="center"
        aria-label="Center aligned"
        type="button"
      >
        <AlignCenterIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        value="right"
        aria-label="Right aligned"
        type="button"
      >
        <AlignRightIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        value="justify"
        aria-label="Justify aligned"
        type="button"
      >
        <AlignJustifyIcon />
      </Button>

      <Separator orientation="vertical" />

      <Button
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        value="superscript"
        aria-label="superscript"
        type="button"
      >
        <SuperscriptIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        value="subscript"
        aria-label="subscript"
        type="button"
      >
        <SubscriptIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        value="bold"
        aria-label="bold"
        type="button"
      >
        <BoldIcon />
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        value="italic"
        aria-label="italic"
        type="button"
      >
        <ItalicIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        value="strike"
        aria-label="strike"
        type="button"
      >
        <StrikethroughIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCode().run()}
        value="code"
        aria-label="code"
        type="button"
      >
        <CodeIcon />
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        value="highlight"
        aria-label="highlight"
        type="button"
      >
        <PenLineIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        value="blockQuote"
        aria-label="blockQuote"
        type="button"
      >
        <QuoteIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        value="HorizontalRule"
        aria-label="HorizontalRule"
        type="button"
      >
        <MinusIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        value="paragraph"
        aria-label="paragraph"
        type="button"
      >
        <PilcrowIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        value="underline"
        aria-label="underline"
        type="button"
      >
        <UnderlineIcon />
      </Button>
      {/*       <Button
        onClick={() => {
          setOpenPickImage(true);
        }}
        value="image-renderer"
        aria-label="image-renderer"
      >
        <ImageIcon />
      </Button>
      <PickImage
        open={OpenPickImage}
        handleClose={() => setOpenPickImage(false)}
        setThumbnail={(value: { src: string; alt?: string }) => {
          editor
            .chain()
            .focus()
            .setImage({ src: value.src, alt: value.alt })
            .run();
        }}
      /> */}
      {/*       <Button
        onClick={() => {
          console.log(editor.state);
          setOpenPickVideo(true);
        }}
        value="videoPlayer"
        aria-label="videoPlayer"
      >
        <ClapperboardIcon />
      </Button>
      <PickVideo
        open={OpenPickVideo}
        handleClose={() => setOpenPickVideo(false)}
        setThumbnail={(value: { src: string }) => {
          editor.chain().focus().setVideo({ src: value.src }).run();
        }}
      /> */}
      <Button
        onClick={() => {
          const previousUrl = editor.getAttributes("link").href;
          const url = window.prompt("URL", previousUrl);

          // cancelled
          if (url === null) {
            return;
          }

          // empty
          if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();

            return;
          }

          // update link
          editor
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({ href: url })
            .run();
        }}
        value="link"
        aria-label="link"
        type="button"
      >
        <Link />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        value="bullettList"
        aria-label="bullettList"
        type="button"
      >
        <ListIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        value="orderedList"
        aria-label="orderedList"
        type="button"
      >
        <ListOrderedIcon />
      </Button>
      <Separator orientation="vertical" />

      <Button
        onClick={() => editor.chain().focus().undo().run()}
        value="undo"
        aria-label="undo"
        type="button"
      >
        <UndoIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().redo().run()}
        value="redo"
        aria-label="redo"
        type="button"
      >
        <RedoIcon />
      </Button>

      <Separator orientation="vertical" />

      {/* <Button
            onClick={() => editor.chain().focus().unsetAllMarks().run()}
            value="clear-mark"
            aria-label="clear-mark"
          >
            <LayersClearIcon />
          </Button> */}
      <Button
        onClick={() => editor.chain().focus().clearNodes().run()}
        value="clear-node"
        aria-label="clear-node"
        type="button"
      >
        <X />
      </Button>
    </div>
  );
};

export default Toolbar;
