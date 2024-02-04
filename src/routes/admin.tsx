import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Dashboard = lazy(() => import("~/pages/Admin/Dashboard/Dashboard"));
const News = lazy(() => import("~/pages/Admin/News/News"));

export const admin: RouteObject[] = [
  {
    path: "/admin",
    element: <Dashboard />,
  },
  {
    path: "/admin/noticias",
    element: <News />,
  },
];
