import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { object, string } from "zod";

const schema = object({
  src: string().url(),
  alt: string(),
});

const PickImage = ({ open, handleClose, setThumbnail, inputs }) => {
  const [alert, setAlert] = useState(false);

  const { values, errors, touched, handleChange, handleSubmit } = useForm({
    schema,
    defaultValues: inputs || { src: "", alt: "" },
  });

  const handleSave = () => {
    handleSubmit({
      onSuccess: (values: any) => {
        setThumbnail(values);
        handleClose();
      },
      onError: () => {
        setAlert(true);
      },
    });
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Insert Image</DialogTitle>
      <DialogContent>
        <Input name="src" value={values.src} onChange={handleChange} />
        <Input name="alt" value={values.alt} onChange={handleChange} />
      </DialogContent>
      <DialogFooter>
        <Button onClick={handleSave}>Save</Button>
      </DialogFooter>
    </Dialog>
  );
}
export default PickImage
