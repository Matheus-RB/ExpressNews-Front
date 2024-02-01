import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Home = lazy(() => import("~/pages/Home/Home"))

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />
  },
]
export default routes
