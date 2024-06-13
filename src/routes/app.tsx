import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Home = lazy(() => import("~/pages/Home/Home"));
const ArticlePage = lazy(() => import("~/pages/ArticlePage/ArticlePage"));

export const app: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "noticia/:slug",
    element: <ArticlePage />,
  },
];
