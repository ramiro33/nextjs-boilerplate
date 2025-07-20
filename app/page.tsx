import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-4 py-10 sm:py-20 flex flex-col items-center gap-12 scroll-smooth">
      {/* Logo y Título */}
      <section className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl">
        <div className="w-40 h-40 sm:w-52 sm:h-52 relative">
          <Image
            src="/logo.png"
            alt="Lustrados Artigas Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold">Lustrados Artigas</h1>
      </section>

      {/* Sección de Contenido */}
      <section className="flex flex-col sm:flex-row w-full max-w-4xl justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Servicios</h2>
          <h2 className="text-2xl font-bold">Valoraciones</h2>
          <h2 className="text-2xl font-bold">Trabajos</h2>
        </div>
        <div className="flex flex-col gap-4 items-end">
          <h2 className="text-2xl font-bold">Redes Sociales</h2>
          <div className="flex gap-2">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <Image src="/play.png" alt="YouTube" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com/lustradosartigas" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
            </a>
          </div>
          <a href="tel:+59892669143" className="text-xl font-semibold">TEL</a>
        </div>
      </section>
    </main>
  );
}
