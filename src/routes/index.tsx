import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "~/erros";
import { app } from "./app";
import ProtectedLoginRoute from "~/pages/SingIn/ProtectedLoginRoute";
import SingIn from "~/pages/SingIn/SingIn";
import { Layout } from "~/components";

const router = createBrowserRouter([
  {
    path: "singin",
    element: (
      <ProtectedLoginRoute>
        <SingIn />
      </ProtectedLoginRoute>
    ),
  },
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: app,
  },
]);
export default router
