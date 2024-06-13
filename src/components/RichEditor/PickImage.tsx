import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ImageIcon } from "lucide-react";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";

interface Props {
  active: boolean;
  setThumbnail: (value: { src: string; alt?: string }) => void;
}

interface Inputs {
  src: string;
  alt: string;
}

const PickImage = ({ active, setThumbnail }: Props) => {
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
      <DialogTrigger asChild>
        <Button
          className={`btn-toobar ${active ? "bg-[#05407d]" : "bg-primary"}`}
        >
          <ImageIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Inserir imagem</DialogTitle>
        </DialogHeader>

        {values.src.length > 0 && <img src={values.src} alt={values.alt} />}
        
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
            <Button onClick={handleSave} type="button">
              Salvar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default PickImage;
