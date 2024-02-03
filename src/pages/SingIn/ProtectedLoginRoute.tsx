import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

interface Props {
  children: React.ReactElement;
}

const ProtectedLoginRoute = ({ children }: Props) => {
  const cookies = new Cookies();
  const token = cookies.get("token");

  return <>{token ? <Navigate to="/" /> : children}</>;
};

export default ProtectedLoginRoute;
