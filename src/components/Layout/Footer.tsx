const Footer = () => {
  const anoAtual = new Date().getFullYear();
  return (
    <footer className="bg-background text-primary text-center p-2">
      <div>
        <p>
          &copy; Copyright 2024 - {anoAtual} ExpressNews. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
