import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useParams } from "react-router-dom";
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
import { Textarea } from "~/components/ui/textarea";
import { toast } from "~/components/ui/use-toast";

interface Category {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

interface Data {
  id: number;
  title: string;
  image_description: string;
  introductory_paragraph: string;
  main_image: string;
  content: string;
  category_id: number;
  image_data: string;
}

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: categories } = useSWR<Category[]>("categories");
  const { data } = useSWR<Data>(`news/${id}/id`, { suspense: true });
  const [imagem, setImage] = useState<string>();

  const [editorValue, setEditorValue] = useState(data?.content);

  const ImageSchema = z.string().nonempty();

  const handleImageSelect = (base64Image: string) => {
    try {
      ImageSchema.parse(base64Image);
      setImage(base64Image);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro.",
        description: error,
      });
    }
  };

  const handleEditorChange = (newContent: string) => {
    setEditorValue(newContent);
  };

  const FormSchema = z.object({
    title: z.string().min(2, {
      message: "O título deve ter pelo menos 2 caracteres.",
    }),
    category_id: z.string(),
    image_description: z
      .string()
      .min(10, {
        message: "A descrição tem que ter pelo menos 10 caracteres.",
      })
      .max(100, {
        message: "O parágrafo não pode ter mais de 100 caracteres.",
      }),
    introductory_paragraph: z
      .string()
      .min(100, {
        message: "O parágrafo deve ter pelo menos 100 caracteres.",
      })
      .max(400, {
        message: "O parágrafo não pode ter mais de 400 caracteres.",
      }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: data?.title,
      category_id: String(data?.category_id),
      image_description: data?.image_description,
      introductory_paragraph: data?.introductory_paragraph,
    },
  });

  const handleSubmit = async (values: z.infer<typeof FormSchema>) => {
    api
      .put(`news/${id}`, {
        category_id: Number(values.category_id),
        content: editorValue,
        introductory_paragraph: values.introductory_paragraph,
        image_description: values.image_description,
        main_image: imagem,
        title: values.title,
      })
      .then(() => {
        navigate("/admin/noticias");
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

        <FormField
          control={form.control}
          name="category_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria:</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={String(data?.category_id)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories?.map((category) => (
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

        <div className="font-semibold text-sm">
          OBS: Use imagem com 1200x675px; caso seja maior, será redimensionada.
          <InputImage
            onImageSelect={handleImageSelect}
            value={`data:image/jpeg;base64,${data?.image_data}`}
          />
        </div>

        <FormField
          control={form.control}
          name="image_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição da imagem:</FormLabel>
              <FormControl>
                <Input placeholder="Descrição da imagem" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="introductory_paragraph"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parágrafo de introdução:</FormLabel>
              <FormControl>
                <Textarea placeholder="Parágrafo de introdução" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <RichEditor onContentChange={handleEditorChange} value={editorValue} />

        <div className="flex w-full justify-end gap-4">
          <Button variant="outline" onClick={() => navigate("/admin/noticias")}>
            Voltar
          </Button>
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </Form>
  );
};
export default Edit;
