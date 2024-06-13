import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-2xl text-secondary mb-4 text-secondaryOne">
          Página não encontrada
        </p>
        <Link to="/" className="bg-primary text-white py-2 px-4 rounded-full">
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};
