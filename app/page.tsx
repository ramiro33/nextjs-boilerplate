import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen text-white px-4 py-10 sm:py-20 flex flex-col items-center gap-16 bg-fixed bg-cover bg-center scroll-smooth"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/icons/fondo.gif')`,
      }}
    >
      {/* Header */}
      <section className="text-center space-y-6">
        <div className="w-48 h-48 sm:w-64 sm:h-64 relative mx-auto drop-shadow-2xl">
          <Image
            src="/icons/logo.png"
            alt="LunaticMc Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          LunaticMc Network
        </h1>
        <p className="text-lg sm:text-xl max-w-xl mx-auto text-white/90">
          Un servidor de Minecraft 1.20+ lleno de magia, aventuras y locura personalizada.
        </p>
        <div className="mt-6 bg-white/10 border border-white/30 backdrop-blur-lg px-8 py-4 rounded-xl text-center shadow-xl">
          <p className="text-white text-xl font-mono">IP:</p>
          <p className="text-white font-bold text-2xl sm:text-3xl">play.lunaticmc.net</p>
        </div>
      </section>

      {/* Carrusel Estático (inspirado en HydraCraft) */}
      <section className="w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/screenshot1.jpg"
              alt="Gameplay 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/screenshot2.jpg"
              alt="Gameplay 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/screenshot3.jpg"
              alt="Gameplay 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Navegación rápida */}
      <nav className="flex flex-wrap gap-4 justify-center">
        <a
          href="#info"
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 hover:scale-105 transition-transform duration-300"
        >
          Información
        </a>
        <a
          href="#destacados"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-transform duration-300"
        >
          Experiencias Épicas
        </a>
        <a
          href="#donar"
          className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-orange-600 hover:scale-105 transition-transform duration-300"
        >
          Donar
        </a>
        <a
          href="#social"
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-teal-600 hover:scale-105 transition-transform duration-300"
        >
          Redes
        </a>
      </nav>

      {/* Información */}
      <section id="info" className="max-w-4xl text-center space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold">📜 Información</h2>
        <p className="text-lg sm:text-xl text-white/90">
          LunaticMc ofrece un mundo totalmente único. Misiones, economía,
          magias, tridentes y un sistema de progresión como ningún otro. Ideal
          para jugadores que buscan algo distinto.
        </p>
      </section>

      {/* Experiencias Épicas */}
      <section id="destacados" className="max-w-4xl text-center space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold">⚡ Experiencias Épicas</h2>
        <ul className="list-disc text-left mx-auto max-w-md space-y-3 text-lg sm:text-xl text-white/90">
          <li>🔮 Sistema de Magia y Hechizos</li>
          <li>⚔️ Eventos PvP/PvE cada semana</li>
          <li>🎯 Rachas, rangos y recompensas diarias</li>
          <li>🛒 Tienda y economía personalizada</li>
        </ul>
      </section>

      {/* Donar */}
      <section id="donar" className="max-w-4xl text-center space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold">💰 Donar</h2>
        <p className="text-lg sm:text-xl text-white/90">
          Apoyá al servidor y desbloqueá rangos exclusivos, efectos especiales
          y recompensas únicas.
        </p>
        <a
          href="https://tudirecciondetienda.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-8 py-4 rounded-full hover:from-yellow-600 hover:to-orange-600 hover:scale-105 transition-transform duration-300"
        >
          Ir a la Tienda
        </a>
      </section>

      {/* Redes Sociales */}
      <section id="social" className="text-center space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold">📢 Nuestras redes</h2>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <a
            href="https://discord.gg/Bj9uVBuW"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:from-indigo-600 hover:to-blue-600 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/icons/discord.svg"
              alt="Discord"
              width={24}
              height={24}
            />
            Discord
          </a>
          <a
            href="https://www.youtube.com/@Lunaticminecraftsv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full hover:from-red-600 hover:to-pink-600 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/icons/youtube.svg"
              alt="YouTube"
              width={24}
              height={24}
            />
            YouTube
          </a>
        </div>
      </section>
    </main>
  );
}
