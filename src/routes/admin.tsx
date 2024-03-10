import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Dashboard = lazy(() => import("~/pages/Admin/Dashboard/Dashboard"));
const News = lazy(() => import("~/pages/Admin/News/News"));
const NewNews = lazy(() => import("~/pages/Admin/News/New"));
const EditNews = lazy(() => import("~/pages/Admin/News/Edit"));

export const admin: RouteObject[] = [
  {
    path: "/admin",
    element: <Dashboard />,
  },
  {
    path: "/admin/noticias",
    element: <News />,
  },
  {
    path: "/admin/noticias/novo",
    element: <NewNews />,
  },
  {
    path: "/admin/noticias/editar/:id",
    element: <EditNews />,
  },
];
