import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useSWR from "swr";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { InputImage } from "~/components";
import { useToast } from "~/components/ui/use-toast";

interface Category {
  id: number;
  name: string;
  created_at: null;
  updated_at: null;
}

const New = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [editorValue, setEditorValue] = useState("");
  const { data } = useSWR<Category[]>("/categories");
  const [imagem, setImage] = useState<string>();

  const ImageSchema = z.string().nonempty();

  const handleImageSelect = (base64Image: string) => {
    try {
      ImageSchema.parse(base64Image);
      setImage(base64Image)
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro.",
        description: error,
      });
    }
  };

  const handleEditorChange = (newContent: any) => {
    setEditorValue(newContent);
  };

  const FormSchema = z.object({
    title: z.string().min(2, {
      message: "O título deve ter pelo menos 2 caracteres.",
    }),
    category_id: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      category_id: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof FormSchema>) => {    
    api
      .post("news", {
        category_id: Number(values.category_id),
        content: editorValue,
        main_image: imagem,
        title: values.title,
      })
      .then(() => {
        navigate("/admin/noticias");
      })
      .catch((error) =>
        toast({
          variant: "destructive",
          description: error.message,
        }),
      );
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

        <FormField
          control={form.control}
          name="category_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {data?.map((category) => (
                    <SelectItem key={category.id} value={String(category.id)}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <InputImage onImageSelect={handleImageSelect} />

        <RichEditor onContentChange={handleEditorChange} />

        <div className="flex w-full justify-end">
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </Form>
  );
};

export default New;
