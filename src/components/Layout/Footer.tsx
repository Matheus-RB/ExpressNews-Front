const Footer = () => {
  const anoAtual = new Date().getFullYear();
  return (
    <footer className="bg-backgroundOne text-primaryOne text-center p-2 font-bold">
      <div>
        <p>
          &copy; Copyright {anoAtual} ExpressNews. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
