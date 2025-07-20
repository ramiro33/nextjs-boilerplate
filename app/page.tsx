import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-4 py-10 sm:py-20 flex flex-col items-center gap-12 scroll-smooth">
      {/* Logo */}
      <section className="text-center">
        <div className="w-40 h-40 sm:w-52 sm:h-52 relative mx-auto">
          <Image
            src="/logo.png"
            alt="Lustrados Artigas Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h1 className="mt-6 text-3xl sm:text-4xl font-bold">Lustrados Artigas</h1>
        <p className="mt-2 text-lg sm:text-xl max-w-xl mx-auto">
          Carpintería de calidad en Artigas, especializada en lustrados y muebles a medida.
        </p>
      </section>

      {/* Contacto y Redes */}
      <section className="text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+59892669143"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-transform duration-200"
          >
            Llamar: 092 669 143
          </a>
          <a
            href="https://wa.me/+59892669143"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-transform duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              <Image
                src="/wspp.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
              WhatsApp
            </div>
          </a>
          <a
            href="https://www.instagram.com/lustradosartigas"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-transform duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
