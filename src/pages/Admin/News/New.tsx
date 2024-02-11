import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import api from "~/services/api";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { RichEditor } from "~/components/RichEditor/RichEditor";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "O título deve ter pelo menos 2 caracteres.",
  }),
});

const New = () => {
  const navigate = useNavigate();
  const [editorValue, setEditorValue] = useState("");

  console.log(editorValue);

  const handleEditorChange = (newContent: any) => {
    setEditorValue(newContent);
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof FormSchema>) => {
    api
      .post("news", {
        title: values.title,
        content: editorValue,
        category_id: 1,
      })
      .then(() => {
        navigate("/")
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título:</FormLabel>
              <FormControl>
                <Input placeholder="Título" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <RichEditor onContentChange={handleEditorChange} />
        <Button type="submit">Salvar</Button>
      </form>
    </Form>
  );
};

export default New;
