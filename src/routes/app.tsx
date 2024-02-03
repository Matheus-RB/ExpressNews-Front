import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Home = lazy(() => import("~/pages/Home/Home"));

export const app: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];
