import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Dashboard = lazy(() => import("~/pages/Admin/Dashboard/Dashboard"));

const News = lazy(() => import("~/pages/Admin/News/News"));
const NewNews = lazy(() => import("~/pages/Admin/News/New"));
const EditNews = lazy(() => import("~/pages/Admin/News/Edit"));

const Categories = lazy(() => import("~/pages/Admin/Categories/Categories"));
const NewCategory = lazy(() => import("~/pages/Admin/Categories/New"));
const EditCategory = lazy(() => import("~/pages/Admin/Categories/Edit"));

const Users = lazy(() => import("~/pages/Admin/Users/Users"));
const NewUser = lazy(() => import("~/pages/Admin/Users/New"));
const EditUser = lazy(() => import("~/pages/Admin/Users/Edit"));

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
  {
    path: "/admin/categorias",
    element: <Categories />,
  },
  {
    path: "/admin/categorias/novo",
    element: <NewCategory />
  },
  {
    path: "/admin/categorias/editar/:id",
    element: <EditCategory />
  },
  {
    path: "/admin/usuarios",
    element: <Users />,
  },
  {
    path: "/admin/usuarios/novo",
    element: <NewUser />,
  },
  {
    path: "/admin/usuarios/editar/:id",
    element: <EditUser />,
  },
];
