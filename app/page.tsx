import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [openCommunity, setOpenCommunity] = useState(false);
  const [openResources, setOpenResources] = useState(false);

  return (
    <main
      className="min-h-screen text-white px-4 py-10 sm:py-20 flex flex-col items-center gap-16 bg-fixed bg-cover bg-center scroll-smooth relative"
      style={{
        backgroundImage: `url('/icons/fondo.gif')`,
      }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

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
        <p className="mt-6 text-lg sm:text-xl max-w-xl mx-auto text-white/90 drop-shadow-md">
          Un servidor de Minecraft 1.20+ lleno de magia, aventuras y locura personalizada.
        </p>
        <div className="mt-6 bg-white/20 border border-white/40 backdrop-blur-md px-6 py-4 rounded-lg text-center shadow-lg max-w-xs mx-auto">
          <p className="text-white text-xl font-mono">IP:</p>
          <p className="text-white font-bold text-2xl">play.lunaticmc.net</p>
        </div>
      </section>

      {/* Navegación ampliada con dropdowns */}
      <nav className="relative z-10 flex flex-wrap justify-center gap-4 max-w-screen-xl mx-auto text-cyan-700 font-semibold select-none">
        <Link href="/">
          <a className="px-5 py-3 bg-white rounded-lg shadow-md hover:bg-cyan-300 hover:text-white hover:scale-105 transition transform duration-300 cursor-pointer">
            Inicio
          </a>
        </Link>

        <Link href="/info">
          <a className="px-5 py-3 bg-white rounded-lg shadow-md hover:bg-cyan-300 hover:text-white hover:scale-105 transition transform duration-300 cursor-pointer">
            Información
          </a>
        </Link>

        <Link href="/experiencias">
          <a className="px-5 py-3 bg-white rounded-lg shadow-md hover:bg-cyan-300 hover:text-white hover:scale-105 transition transform duration-300 cursor-pointer">
            Experiencias Épicas
          </a>
        </Link>

        <Link href="/donar">
          <a className="px-5 py-3 bg-white rounded-lg shadow-md hover:bg-cyan-300 hover:text-white hover:scale-105 transition transform duration-300 cursor-pointer">
            Donar
          </a>
        </Link>

        <Link href="/reglas">
          <a className="px-5 py-3 bg-white rounded-lg shadow-md hover:bg-cyan-300 hover:text-white hover:scale-105 transition transform duration-300 cursor-pointer">
            Reglas
          </a>
        </Link>

        {/* Dropdown Comunidad */}
        <div
          onMouseEnter={() => setOpenCommunity(true)}
          onMouseLeave={() => setOpenCommunity(false)}
          className="relative"
        >
          <button
            className="px-5 py-3 bg-white rounded-lg shadow-md hover:bg-cyan-300 hover:text-white hover:scale-105 transition transform duration-300 cursor-pointer flex items-center gap-2"
          >
            Comunidad
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                openCommunity ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openCommunity && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg text-cyan-700 min-w-[180px] py-2 z-20">
              <Link href="/foro">
                <a className="block px-4 py-2 hover:bg-cyan-200 hover:text-white transition cursor-pointer rounded">
                  Foro
                </a>
              </Link>
              <Link href="/eventos">
                <a className="block px-4 py-2 hover:bg-cyan-200 hover:text-white transition cursor-pointer rounded">
                  Eventos
                </a>
              </Link>
              <Link href="/comunidad">
                <a className="block px-4 py-2 hover:bg-cyan-200 hover:text-white transition cursor-pointer rounded">
                  Miembros
                </a>
              </Link>
            </div>
          )}
        </div>

        {/* Dropdown Recursos */}
        <div
          onMouseEnter={() => setOpenResources(true)}
          onMouseLeave={() => setOpenResources(false)}
          className="relative"
        >
          <button
            className="px-5 py-3 bg-white rounded-lg shadow-md hover:bg-cyan-300 hover:text-white hover:scale-105 transition transform duration-300 cursor-pointer flex items-center gap-2"
          >
            Recursos
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                openResources ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openResources && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg text-cyan-700 min-w-[180px] py-2 z-20">
              <Link href="/tienda">
                <a className="block px-4 py-2 hover:bg-cyan-200 hover:text-white transition cursor-pointer rounded">
                  Tienda
                </a>
              </Link>
              <Link href="/blog">
                <a className="block px-4 py-2 hover:bg-cyan-200 hover:text-white transition cursor-pointer rounded">
                  Blog
                </a>
              </Link>
              <Link href="/noticias">
                <a className="block px-4 py-2 hover:bg-cyan-200 hover:text-white transition cursor-pointer rounded">
                  Noticias
                </a>
              </Link>
              <Link href="/soporte">
                <a className="block px-4 py-2 hover:bg-cyan-200 hover:text-white transition cursor-pointer rounded">
                  Soporte
                </a>
              </Link>
            </div>
          )}
        </div>

        {/* Discord externo */}
        <a
          href="https://discord.gg/Bj9uVBuW"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-white rounded-lg shadow-md hover:bg-cyan-300 hover:text-white hover:scale-105 transition transform duration-300 cursor-pointer flex items-center gap-2"
        >
          <Image src="/icons/discord.svg" alt="Discord" width={20} height={20} />
          Discord
        </a>
      </nav>

      {/* Contenido principal */}
      <section className="max-w-4xl text-center space-y-8 relative z-10">
        <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
          Bienvenido a LunaticMc
        </h2>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Descubrí un mundo lleno de magia, aventuras y sistemas únicos pensados para que disfrutes cada momento.  
          Explorá paisajes únicos, dominá la magia, participá en eventos especiales y formá parte de una comunidad vibrante y creativa.  
          Construí, comerciá y hacé historia en un servidor que no para de crecer y sorprender.
        </p>

        {/* Botones animados destacados */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <Link href="/info">
            <a className="px-8 py-4 bg-cyan-600 rounded-full font-bold text-white shadow-lg hover:bg-cyan-500 hover:shadow-cyan-400 transition duration-300 transform hover:scale-110 cursor-pointer">
              Más sobre LunaticMc
            </a>
          </Link>

          <Link href="/experiencias">
            <a className="px-8 py-4 bg-purple-600 rounded-full font-bold text-white shadow-lg hover:bg-purple-500 hover:shadow-purple-400 transition duration-300 transform hover:scale-110 cursor-pointer">
              Experiencias Épicas
            </a>
          </Link>

          <Link href="/donar">
            <a className="px-8 py-4 bg-yellow-600 rounded-full font-bold text-white shadow-lg hover:bg-yellow-500 hover:shadow-yellow-400 transition duration-300 transform hover:scale-110 cursor-pointer">
              Apoyá al servidor
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}
