import { Link } from "react-router-dom";
import Logo from "~/assets/images/logo.png";
import { ButtonTheme } from "../ButtonTheme/ButtonTheme";
import { MenuIcon } from "lucide-react";
import { MenuUser } from "..";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-50 flex w-full bg-backgroundOne drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none h-20 lg:h-16">
      <div className="flex flex-grow items-center justify-between px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-[99999] block rounded-sm border border-stroke bg-red-700 p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <MenuIcon />
          </button>

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-3 sm:gap-4 w-full h-20">
          <ButtonTheme />
          <MenuUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
