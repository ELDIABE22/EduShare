const Header = () => {
  return (
    <header className="relative flex justify-center items-center text-[#d90429]">
      <img
        src="https://manybooks.net/sites/default/files/2018-07/bookstackssmall.jpg"
        alt="bookstackssmall.jpg"
        className="min-h-screen object-cover"
      />
      <div className="absolute">
        <h1 className="text-8xl font-medium flex justify-center mb-5">
          <p className="text-white">Edu</p>
          <p>Share</p>
        </h1>
        <p className="text-white text-center px-20">
          Nuestra plataforma{" "}
          <span className="text-[#d90429] font-bold">EduShare</span> une todos
          los niveles de educación en un solo lugar. De la primaria a la
          superior, miles de documentos educativos esperan ser descubiertos.
          Buscas material para tu clase o quieres compartir conocimientos? Todo
          es posible aquí. Únete y comienza a explorar, aprender y contribuir
          ahora.
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        color={"#ffffff"}
        fill={"none"}
        className="absolute bottom-4"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 10.5C16 10.5 13.054 13.5 12 13.5C10.9459 13.5 8 10.5 8 10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </header>
  );
};

export default Header;
