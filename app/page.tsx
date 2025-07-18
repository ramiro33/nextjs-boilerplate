import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // Estado para controlar qué sección mostrar
  const [seccionActiva, setSeccionActiva] = useState("info");

  // Función para cambiar sección con animación
  function cambiarSeccion(nombre: string) {
    setSeccionActiva(nombre);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Clases comunes para botones
  const btnClass =
    "px-5 py-3 bg-white rounded-lg shadow-md cursor-pointer text-cyan-700 font-semibold hover:bg-gray-100 hover:scale-105 transition-transform duration-300 active:scale-95";

  return (
    <main
      className="min-h-screen text-white px-4 py-10 sm:py-20 flex flex-col items-center gap-16 bg-fixed bg-cover bg-center scroll-smooth relative"
      style={{
        backgroundImage: `url('/icons/fondo.gif')`,
      }}
    >
      {/* Overlay para contraste */}
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
        <p className="mt-6 text-lg sm:text-xl max-w-xl mx-auto text-white/90 drop-shadow-md">
          Un servidor de Minecraft 1.20+ lleno de magia, aventuras y locura personalizada.
        </p>
        <div className="mt-6 bg-white/20 border border-white/40 backdrop-blur-md px-6 py-4 rounded-lg text-center shadow-lg max-w-xs mx-auto">
          <p className="text-white text-xl font-mono">IP:</p>
          <p className="text-white font-bold text-2xl">play.lunaticmc.net</p>
        </div>
      </section>

      {/* Navegación */}
      <nav className="relative z-10 flex flex-wrap justify-center gap-4 max-w-screen-xl mx-auto select-none">
        <button
          className={`${btnClass} ${seccionActiva === "info" ? "bg-cyan-400 text-white" : ""}`}
          onClick={() => cambiarSeccion("info")}
        >
          Información
        </button>
        <button
          className={`${btnClass} ${seccionActiva === "experiencias" ? "bg-purple-400 text-white" : ""}`}
          onClick={() => cambiarSeccion("experiencias")}
        >
          Experiencias Épicas
        </button>
        <button
          className={`${btnClass} ${seccionActiva === "donar" ? "bg-yellow-400 text-white" : ""}`}
          onClick={() => cambiarSeccion("donar")}
        >
          Donar
        </button>
        <button
          className={`${btnClass} ${seccionActiva === "redes" ? "bg-gray-400 text-white" : ""}`}
          onClick={() => cambiarSeccion("redes")}
        >
          Redes
        </button>
      </nav>

      {/* Contenido: solo muestra la sección activa */}
      <section className="max-w-4xl text-center space-y-10 relative z-10 px-4">
        {/* Información */}
        {seccionActiva === "info" && (
          <>
            <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg animate-bounce">
              Información
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              LunaticMc ofrece un mundo totalmente único. Misiones, economía, magias, tridentes y un sistema de progresión como ningún otro. Ideal para jugadores que buscan algo distinto.
            </p>
          </>
        )}

        {/* Experiencias Épicas */}
        {seccionActiva === "experiencias" && (
          <>
            <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg animate-bounce">
              Experiencias Épicas
            </h2>
            <ul className="list-disc text-left max-w-md mx-auto space-y-3 text-lg">
              <li>Sistema de Magia y Hechizos</li>
              <li>Eventos especiales y misiones semanales</li>
              <li>Rachas, rangos y recompensas diarias</li>
              <li>Tienda y economía personalizada</li>
            </ul>
          </>
        )}

        {/* Donar */}
        {seccionActiva === "donar" && (
          <>
            <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg animate-bounce">
              Donar
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Apoyá al servidor y desbloqueá rangos exclusivos, efectos especiales y recompensas únicas.
            </p>
            <a
              href="https://tudirecciondetienda.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-white text-cyan-700 font-bold px-8 py-4 rounded-full hover:bg-gray-100 hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              Ir a la Tienda
            </a>
          </>
        )}

        {/* Redes */}
        {seccionActiva === "redes" && (
          <>
            <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg animate-bounce">
              Nuestras redes
            </h2>
            <div className="flex flex-wrap gap-6 justify-center items-center mt-6">
              <a
                href="https://discord.gg/Bj9uVBuW"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-cyan-700 font-semibold px-6 py-4 rounded-lg hover:bg-gray-100 hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer"
              >
                <Image src="/icons/discord.svg" alt="Discord" width={24} height={24} />
                Discord
              </a>
              <a
                href="https://www.youtube.com/@Lunaticminecraftsv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-cyan-700 font-semibold px-6 py-4 rounded-lg hover:bg-gray-100 hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer"
              >
                <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
                YouTube
              </a>
            </div>
          </>
        )}
      </section>
    </main>
  );
}


