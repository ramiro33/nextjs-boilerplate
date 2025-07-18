import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/icons/fondo.gif')`, // Mantén tu fondo animado
        backgroundColor: '#1a1a1a', // Fondo oscuro similar a HydraCraft
      }}
    >
      <div className="relative w-full max-w-4xl flex flex-col items-center text-center text-white p-4">
        {/* Logo y Título */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-4">
          <Image
            src="/icons/logo.png" // Reemplaza el dragón blanco por tu logo
            alt="LunaticMc Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          LunaticMc NETWORK <span className="text-cyan-400">1.20+ → 1.21</span>
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-yellow-300 mb-4">
          Magia, Aventuras, Locura Personalizada
        </p>

        {/* Versiones e IP */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Image src="/icons/java.png" alt="Java" width={32} height={32} />
            <span className="text-lg">Java 1.20+</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/bedrock.png" alt="Bedrock" width={32} height={32} />
            <span className="text-lg">Bedrock iFront!</span>
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
            @marzy_yt
          </a>
          <a
            href="https://www.youtube.com/@Lunaticminecraftsv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors"
          >
            <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
            @TheMarZy
          </a>
        </div>

        {/* Botón Principal */}
        <a
          href="https://tudirecciondetienda.com" // Reemplaza con la URL real
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg text-xl sm:text-2xl transition-colors mt-6"
        >
          JUGAR
        </a>

        {/* Soporte */}
        <div className="flex items-center gap-2 mt-4">
          <Image src="/icons/support.png" alt="Soporte" width={32} height={32} />
          <span className="text-lg">Soporte</span>
        </div>
      </div>
    </main>
  );
}
