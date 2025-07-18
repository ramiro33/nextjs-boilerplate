import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/icons/fondo.jpg')`, // Cambié a .jpg para un fondo estático como en la imagen
        backgroundColor: '#2a2a2a', // Fondo oscuro similar al de la imagen
      }}
    >
      <div className="relative w-full max-w-4xl h-screen flex flex-row text-white p-4">
        {/* Menú Vertical Izquierdo */}
        <div className="w-1/4 bg-gray-800 p-4 rounded-lg shadow-lg h-full flex flex-col justify-start gap-4">
          <a href="#informacion" className="text-lg font-pixel hover:text-cyan-400">Información</a>
          <a href="#ayuda" className="text-lg font-pixel hover:text-cyan-400">Ayuda</a>
          <a href="#soporte" className="text-lg font-pixel hover:text-cyan-400">Soporte</a>
          <a href="#sugerencias" className="text-lg font-pixel hover:text-cyan-400">Sugerencias</a>
        </div>

        {/* Contenido Central */}
        <div className="w-3/4 p-6 flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="absolute top-4 left-4 w-20 h-20 filter drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] animate-pulse">
            <Image
              src="/icons/logo.png"
              alt="LunaticMc Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          {/* Título */}
          <h1 className="text-6xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 filter drop-shadow-[0_0_5px_rgba(255,255,0,0.7)] mb-8">
            LunaticMc
          </h1>

          {/* Redes Sociales */}
          <div className="text-2xl font-pixel text-gray-300 mt-4 flex flex-col items-center">
            <h2 className="text-3xl mb-4">Redes sociales</h2>
            <div className="flex space-x-8">
              <a href="https://www.youtube.com/@Lunaticminecraftsv" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
                YouTube
              </a>
              <span className="cursor-default">Tienda</span>
              <a href="https://discord.gg/Bj9uVBuW" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                Discord
              </a>
              <a href="https://twitter.com/LunaticMc" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                Twitter
              </a>
            </div>
          </div>
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
