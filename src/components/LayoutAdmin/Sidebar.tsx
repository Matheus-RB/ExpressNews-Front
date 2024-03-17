import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Grid2X2Icon, Layers3Icon, NewspaperIcon, UsersIcon } from "lucide-react";

import Logo from "~/assets/images/logo.png";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-52 flex-col overflow-y-hidden bg-backgroundOne duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-2 py-2 h-16 border-b">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className=" py-2 px-2">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/admin"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("/admin") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <Grid2X2Icon />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/categorias"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("/admin/categorias") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <Layers3Icon />
                  Categorias
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/noticias"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("/admin/noticias") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <NewspaperIcon />
                  Noticias
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/usuarios"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("/admin/usuarios") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <UsersIcon />
                  Usuários
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
