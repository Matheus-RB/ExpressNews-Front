import { Link } from "react-router-dom";

import Logo from "~/assets/images/logo.png";
import { MenuUser } from "..";
import { cookies } from "~/utils";
import useSWR from "swr";

interface Category {
  id: number;
  name: string;
  created_at: null;
  updated_at: null;
}

const NavBar = () => {
  const token = cookies.get("token");
  const { data } = useSWR<Category[]>("/categories");
  return (
    <header className="bg-backgroundOne flex flex-col items-center justify-center p-4">
      <div className="w-10/12">
        <div className="flex items-center justify-center">
          <Link to="/">
            <img src={Logo} alt="Logo-ExpressNews" />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center justify-around font-medium text-primaryOne uppercase">
            {data?.map((category) => (
              <li key={category.id}>
                <a className="hover:text-secondaryOne" href="#">
                  {category.name}
                </a>
              </li>
            ))}       
            <li>
              <a className="hover:text-secondaryOne" href="#">
                Sobre
              </a>
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
      </div>
    </header>
  );
};

export default NavBar;
