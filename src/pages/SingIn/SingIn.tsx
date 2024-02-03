import { Form, Formik } from "formik";
import { EmailInput, PasswordInput } from "~/components";
import api from "~/services/api";
import { object, string } from "yup";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

const SingIn = () => {
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: "/" });
  const expirationTime = 24 * 60 * 60 * 1000;

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const validationSchema = object().shape({
    email: string().email().required(),
    password: string().required("e um campo obrigatorio"),
  });

  const handleSubmit = async (values: FormValues) => {
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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-3xl font-semibold text-primaryOne mb-6">Login</h2>
          <Form>
            <div className="mb-4">
              <EmailInput
                label="Email"
                name="email"
                placeholder="Digite o email"
              />
            </div>
            <div className="mb-4">
              <PasswordInput
                label="Senha"
                name="password"
                placeholder="Digite a senha"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-secondaryOne text-white px-4 py-2 rounded hover:bg-opacity-80 focus:outline-none focus:shadow-outline"
              >
                Log In
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};
export default SingIn;
