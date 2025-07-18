import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen text-white px-4 py-10 sm:py-20 flex flex-col items-center gap-16 bg-fixed bg-cover bg-center scroll-smooth relative"
      style={{
        backgroundImage: `url('/icons/fondo.gif')`,
      }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Header */}
      <section className="text-center relative z-10">
        <div className="w-40 h-40 sm:w-52 sm:h-52 relative mx-auto drop-shadow-2xl animate-pulse">
          <Image
            src="/icons/logo.png"
            alt="LunaticMc Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <p className="mt-6 text-lg sm:text-xl max-w-xl mx-auto text-white/90 drop-shadow-md animate-fadeIn">
          Un servidor de Minecraft 1.20+ lleno de magia, aventuras y locura personalizada.
        </p>
        <div className="mt-6 bg-white/20 border border-white/40 backdrop-blur-md px-6 py-4 rounded-lg text-center shadow-lg max-w-xs mx-auto animate-fadeIn delay-100">
          <p className="text-white text-xl font-mono">IP:</p>
          <p className="text-white font-bold text-2xl">play.lunaticmc.net</p>
        </div>
      </section>

      {/* Navegación rápida - MUCHO MÁS COMPLETA */}
      <nav className="relative z-10 flex flex-wrap justify-center gap-4 max-w-screen-xl mx-auto text-cyan-700 font-semibold select-none">
        {[
          "Inicio",
          "Información",
          "Experiencias Épicas",
          "Donar",
          "Reglas",
          "Foro",
          "Soporte",
          "Tienda",
          "Noticias",
          "Eventos",
          "Comunidad",
          "Blog",
          "Contacto",
        ].map((label, i) => (
          <button
            key={i}
            className="px-5 py-3 bg-white rounded-lg shadow-md cursor-pointer
            hover:bg-cyan-400 hover:text-white hover:scale-105
            transition-transform duration-300 font-semibold
            hover:shadow-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500
            active:scale-95"
          >
            {label}
          </button>
        ))}
        {/* Discord externo */}
        <a
          href="https://discord.gg/Bj9uVBuW"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-white rounded-lg shadow-md flex items-center gap-2
            hover:bg-cyan-400 hover:text-white hover:scale-105
            transition-transform duration-300 cursor-pointer"
        >
          <Image src="/icons/discord.svg" alt="Discord" width={20} height={20} />
          Discord
        </a>
      </nav>

      {/* Contenido principal */}
      <section className="max-w-4xl text-center space-y-10 relative z-10 px-4">
        <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg animate-bounce">
          Bienvenido a LunaticMc
        </h2>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-md animate-fadeIn">
          Descubrí un mundo lleno de magia, aventuras y sistemas únicos pensados para que disfrutes cada momento.
          Explorá paisajes únicos, dominá la magia, participá en eventos especiales y formá parte de una comunidad vibrante y creativa.
          Construí, comerciá y hacé historia en un servidor que no para de crecer y sorprender.
        </p>

        {/* Botones animados destacados */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {[
            { text: "Más sobre LunaticMc", color: "bg-cyan-600", href: "#info" },
            { text: "Experiencias Épicas", color: "bg-purple-600", href: "#destacados" },
            { text: "Apoyá al servidor", color: "bg-yellow-600", href: "#donar" },
          ].map(({ text, color, href }, i) => (
            <a
              key={i}
              href={href}
              className={`${color} px-10 py-4 rounded-full font-bold text-white shadow-lg
              hover:bg-opacity-90 hover:shadow-lg hover:shadow-opacity-50
              transition duration-300 transform hover:scale-110 cursor-pointer
              animate-pulse`}
              style={{ animationDuration: `${1 + i * 0.3}s` }}
            >
              {text}
            </a>
          ))}
        </div>

        {/* Secciones informativas con sombras y animaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          <section className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md hover:shadow-cyan-400 transition-shadow duration-500 cursor-default animate-fadeIn">
            <h3 className="text-2xl font-semibold mb-4 border-b border-cyan-400 pb-2">
              Información
            </h3>
            <p>
              LunaticMc ofrece un mundo totalmente único. Misiones, economía, magias, tridentes y un sistema de progresión como ningún otro. Ideal para jugadores que buscan algo distinto.
            </p>
          </section>

          <section className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md hover:shadow-purple-400 transition-shadow duration-500 cursor-default animate-fadeIn delay-150">
            <h3 className="text-2xl font-semibold mb-4 border-b border-purple-400 pb-2">
              Experiencias Épicas
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sistema de Magia y Hechizos</li>
              <li>Eventos especiales y misiones semanales</li>
              <li>Rachas, rangos y recompensas diarias</li>
              <li>Tienda y economía personalizada</li>
            </ul>
          </section>

          <section className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md hover:shadow-yellow-400 transition-shadow duration-500 cursor-default animate-fadeIn delay-300">
            <h3 className="text-2xl font-semibold mb-4 border-b border-yellow-400 pb-2">
              Donar
            </h3>
            <p>
              Apoyá al servidor y desbloqueá rangos exclusivos, efectos especiales y recompensas únicas.
            </p>
            <a
              href="https://tudirecciondetienda.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-white text-cyan-700 font-bold px-6 py-3 rounded-full hover:bg-gray-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Ir a la Tienda
            </a>
          </section>
        </div>

        {/* Redes Sociales con efectos */}
        <section id="social" className="text-center space-y-6 mt-20">
          <h2 className="text-3xl font-bold drop-shadow-lg animate-fadeIn">Nuestras redes</h2>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <a
              href="https://discord.gg/Bj9uVBuW"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-cyan-700 font-semibold px-5 py-3 rounded-lg hover:bg-gray-100 hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer"
            >
              <Image src="/icons/discord.svg" alt="Discord" width={24} height={24} />
              Discord
            </a>
            <a
              href="https://www.youtube.com/@Lunaticminecraftsv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-cyan-700 font-semibold px-5 py-3 rounded-lg hover:bg-gray-100 hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer"
            >
              <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
              YouTube
            </a>
          </div>
        </section>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </main>
  );
}

