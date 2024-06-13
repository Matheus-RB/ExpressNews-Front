import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { VideoIcon } from "lucide-react";
import ReactPlayer from "react-player/youtube";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

interface Props {
  active: boolean;
  setThumbnail: (value: { src: string; alt: string }) => void;
}

interface Inputs {
  src: string;
  alt: string;
}

const PickVideo = ({ setThumbnail, active }: Props) => {
  const [values, setValues] = useState<Inputs>({
    alt: "",
    src: "",
  });

  const handleSave = () => {
    setValues({ alt: "", src: "" });
    setThumbnail(values);
  };

  return (
    <Dialog>
      <DialogTrigger
        className={`btn-toobar ${active ? "bg-[#05407d]" : "bg-primary"}`}
      >
        <VideoIcon />
      </DialogTrigger>
      <DialogContent className="min-w-[700px]">
        <DialogHeader>
          <DialogTitle>Inserir Video</DialogTitle>
        </DialogHeader>

        {values.src.length > 0 && <ReactPlayer url={values.src} />}

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="src">Url:</Label>
          <Input
            onChange={(e) => setValues({ ...values, src: e.target.value })}
            type="src"
            id="src"
            placeholder="Url da imagem"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="alt">Descrição:</Label>
          <Input
            onChange={(e) => setValues({ ...values, alt: e.target.value })}
            type="alt"
            id="alt"
            placeholder="Descrição da imagem"
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={handleSave}>
              Salvar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PickVideo;
