import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import { NotFound } from "./erros";
import routes from "./routes";
import SingIn from "./pages/SingIn/SingIn";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "singin",
      element: <SingIn />
    },
    {
      element: <Layout />,
      errorElement: <NotFound />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
