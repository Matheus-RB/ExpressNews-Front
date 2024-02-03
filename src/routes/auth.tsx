import { lazy } from "react";
import ProtectedLoginRoute from "~/pages/SingIn/ProtectedLoginRoute";

const SingIn = lazy(() => import("~/pages/SingIn/SingIn"));

export const auth = {
  path: "/singin",
  element: (
    <ProtectedLoginRoute>
      <SingIn />
    </ProtectedLoginRoute>
  ),
};
