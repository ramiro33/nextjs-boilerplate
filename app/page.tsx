import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen text-white px-4 py-10 sm:py-20 flex flex-col items-center gap-16 bg-fixed bg-cover bg-center scroll-smooth"
      style={{
        backgroundImage: `url('/icons/fondo.gif')`,
      }}
    >
      {/* Logo */}
      <section className="text-center">
        <div className="w-40 h-40 sm:w-52 sm:h-52 relative mx-auto drop-shadow-xl">
          <Image
            src="/icons/logo.png"
            alt="LunaticMC Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <p className="mt-6 text-lg sm:text-xl max-w-xl mx-auto text-white/90">
          Un servidor de Minecraft 1.20+ lleno de magia, aventuras y locura personalizada.
        </p>
        <div className="mt-6 bg-white/20 border border-white/40 backdrop-blur-md px-6 py-4 rounded-lg text-center shadow-lg">
          <p className="text-white text-xl font-mono">IP:</p>
          <p className="text-white font-bold text-2xl">play.lunaticmc.net</p>
        </div>
      </section>

      {/* Navegación rápida */}
      <nav className="flex flex-wrap gap-4 justify-center">
        <Link href="/info">
          <a className="nav-btn">Información</a>
        </Link>
        <Link href="/epico">
          <a className="nav-btn">Experiencias Épicas</a>
        </Link>
        <Link href="/donar">
          <a className="nav-btn">Donar</a>
        </Link>
        <Link href="/social">
          <a className="nav-btn">Redes</a>
        </Link>
      </nav>
    </main>
  );
}

