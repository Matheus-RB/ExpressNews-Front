import { Link } from "react-router-dom";

import Logo from "~/assets/images/logo.png";
import { MenuUser } from "..";
import { cookies } from "~/utils";
import useSWR from "swr";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { forwardRef } from "react";
import { cn } from "~/utils/utils";

interface Category {
  id: number;
  name: string;
  created_at: null;
  updated_at: null;
}

const ListItem = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          ref={ref}
          className={cn(
            "cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </div>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const NavBar = () => {
  const token = cookies.get("token");
  const { data } = useSWR<Category[]>("/categories");

  return (
    <header className="bg-backgroundOne p-4">
      <nav className="flex w-full relative justify-center items-center">
        <div className="flex items-center justify-center">
          <Link to="/">
            <img src={Logo} alt="Logo-ExpressNews" />
          </Link>
        </div>
        <ul className="flex items-center justify-end gap-4 absolute right-0 font-medium text-primaryOne uppercase">
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categoria</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul>
                      {data?.map((category) => (
                        <ListItem key={category.id} title={category.name} />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li>
            {token ? (
              <MenuUser />
            ) : (
              <Link to="/singin">
                <button className="bg-secondaryOne text-white px-4 py-2 rounded hover:bg-opacity-80 focus:outline-none focus:shadow-outline">
                  Entrar
                </button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
