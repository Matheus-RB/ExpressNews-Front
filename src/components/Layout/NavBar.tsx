import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

import Logo from "~/assets/images/logo.png";

const NavBar = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  return (
    <header className="bg-background flex flex-col items-center justify-center p-4">
      <div className="w-10/12">
        <div className="flex items-center justify-center">
          <Link to="/">
            <img src={Logo} alt="Logo-ExpressNews" />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center justify-around font-medium text-primary uppercase">
            <li>
              <a className="hover:text-secondary" href="#">
                Política
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="#">
                Economia
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="#">
                Internacional
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="#">
                Esportes
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="#">
                Ciência
              </a>
            </li>
            <li>
              <a className="hover:text-secondary" href="#">
                Sobre
              </a>
            </li>
            <li>
              {!token && (
                <Link to="singin">
                  <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-80 focus:outline-none focus:shadow-outline">
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
