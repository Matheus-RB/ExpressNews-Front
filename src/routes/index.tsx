import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, NotFound } from "~/erros";
import { app } from "./app";
import ProtectedLoginRoute from "~/pages/SingIn/ProtectedLoginRoute";
import SingIn from "~/pages/SingIn/SingIn";
import { Layout, LayoutAdmin } from "~/components";
import { admin } from "./admin";

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
  {
    path: "admin",
    element: <LayoutAdmin />,
    errorElement: <ErrorPage />,
    children: admin,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
