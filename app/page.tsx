import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/icons/fondo.gif')`,
        backgroundColor: '#1a1a1a',
      }}
    >
      <div className="relative w-full max-w-4xl flex flex-col items-center text-center text-white p-4">
        {/* Logo con Brillo Mágico */}
        <div className="relative w-64 h-64 mb-4 filter drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] animate-pulse">
          <Image
            src="/icons/logo.png"
            alt="LunaticMc Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Título con Brillo Mágico */}
        <h1 className="text-5xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 filter drop-shadow-[0_0_5px_rgba(255,255,0,0.7)] mb-2">
          LunaticMc NETWORK <span className="text-cyan-400">1.20+ → 1.21</span>
        </h1>
        <p className="text-xl font-pixel text-yellow-300 filter drop-shadow-[0_0_3px_rgba(255,255,0,0.5)] mb-4">
          Magia, Aventuras, Locura Personalizada
        </p>

        {/* Menú Desplegable */}
        <div className="mb-6">
          <div className="relative inline-block text-left">
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Menú
            </button>
            <div className="absolute hidden bg-gray-800 text-white rounded shadow-lg z-10">
              <a href="#informacion" className="block px-4 py-2 hover:bg-gray-700">Información</a>
              <a href="#donaciones" className="block px-4 py-2 hover:bg-gray-700">Donaciones</a>
              <a href="#novedades" className="block px-4 py-2 hover:bg-gray-700">Novedades</a>
              <a href="#votar" className="block px-4 py-2 hover:bg-gray-700">Votar</a>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href="https://discord.gg/Bj9uVBuW"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
          >
            <Image src="/icons/discord.svg" alt="Discord" width={24} height={24} />
            Discord
          </a>
          <a
            href="https://www.youtube.com/@Lunaticminecraftsv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors"
          >
            <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
            YouTube
          </a>
          <button
            className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-full cursor-default"
            disabled
          >
            <Image src="/icons/store.svg" alt="Tienda" width={24} height={24} />
            Tienda
          </button>
        </div>

        {/* Soporte */}
        <div className="flex items-center gap-2 mt-4">
          <Image src="/icons/support.png" alt="Soporte" width={32} height={32} />
          <span className="text-lg font-pixel">Soporte</span>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .font-pixel {
          font-family: 'Press Start 2P', cursive;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </main>
  );
}
