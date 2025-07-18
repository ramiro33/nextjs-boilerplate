import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-400 via-yellow-300 to-orange-500 text-white px-4 py-10 sm:py-20 flex flex-col items-center gap-16">
      {/* Header */}
      <section className="text-center">
        <Image
          src="/icons/logo.png"
          alt="LunaticMc Logo"
          width={200}
          height={200}
          className="mx-auto mb-4 drop-shadow-lg"
        />
        <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto text-white/90">
          Un servidor de Minecraft 1.20+ lleno de magia, aventuras y locura personalizada.
        </p>
        <div className="mt-6 bg-white/20 border border-white/40 backdrop-blur-md px-6 py-4 rounded-lg text-center shadow-lg">
          <p className="text-white text-xl font-mono">IP:</p>
          <p className="text-white font-bold text-2xl">play.lunaticmc.net</p>
        </div>
      </section>

      {/* Navegación rápida */}
      <nav className="flex flex-wrap gap-4 justify-center">
        <a href="#info" className="px-4 py-2 bg-white text-orange-700 font-semibold rounded hover:bg-gray-100 transition">Información</a>
        <a href="#destacados" className="px-4 py-2 bg-white text-orange-700 font-semibold rounded hover:bg-gray-100 transition">Destacados</a>
        <a href="#donar" className="px-4 py-2 bg-white text-orange-700 font-semibold rounded hover:bg-gray-100 transition">Donar</a>
        <a href="#social" className="px-4 py-2 bg-white text-orange-700 font-semibold rounded hover:bg-gray-100 transition">Redes</a>
      </nav>

      {/* Información */}
      <section id="info" className="max-w-3xl text-center space-y-4">
        <h2 className="text-3xl font-bold">Información</h2>
        <p>
          LunaticMc ofrece un mundo totalmente único. Misiones, economía, magias, tridentes y un sistema de progresión como ningún otro. Ideal para jugadores que buscan algo distinto.
        </p>
      </section>

      {/* Destacados */}
      <section id="destacados" className="max-w-3xl text-center space-y-4">
        <h2 className="text-3xl font-bold">Destacados</h2>
        <ul className="list-disc text-left mx-auto max-w-md space-y-2">
          <li>Sistema de Magia y Hechizos</li>
          <li>Eventos PvP/PvE cada semana</li>
          <li>Rachas, rangos y recompensas diarias</li>
          <li>Tienda y economía personalizada</li>
        </ul>
      </section>

      {/* Donar */}
      <section id="donar" className="max-w-3xl text-center space-y-4">
        <h2 className="text-3xl font-bold">Donar</h2>
        <p>
          Apoyá al servidor y desbloqueá rangos exclusivos, efectos especiales y recompensas únicas.
        </p>
        <a
          href="https://tudirecciondetienda.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-white text-orange-700 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Ir a la Tienda
        </a>
      </section>

      {/* Redes Sociales */}
      <section id="social" className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Nuestras redes</h2>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {/* Discord */}
          <a
            href="https://discord.gg/Bj9uVBuW"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-orange-700 font-semibold px-5 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            <Image
              src="/icons/discord.svg"
              alt="Discord"
              width={24}
              height={24}
            />
            Discord
          </a>
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@Lunaticminecraftsv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-orange-700 font-semibold px-5 py-3 rounded-lg hover:bg-gray-100 transition"
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

