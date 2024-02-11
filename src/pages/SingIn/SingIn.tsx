import api from "~/services/api";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "~/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "~/components/ui/input";

const SingIn = () => {
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: "/" });
  const expirationTime = 24 * 60 * 60 * 1000;

  const FormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: any) => {
    try {
      const response = await api.post("login", {
        email: values.email,
        password: values.password,
      });

      if (response) {
        cookies.set("token", response.data.token, { maxAge: expirationTime });
        cookies.set("user", response.data.user);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-backgroundOne">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-semibold text-primaryOne mb-6">Login</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <FormField
            name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input placeholder="Título" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha:</FormLabel>
                  <FormControl>
                    <Input placeholder="Senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-secondaryOne text-white px-4 py-2 rounded hover:bg-opacity-80 focus:outline-none focus:shadow-outline"
              >
                Log In
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default SingIn;
