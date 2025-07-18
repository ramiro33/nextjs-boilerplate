<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>LunaticaMC</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      color: #ffffff;
      background: url('public/icons/fondo.gif') no-repeat center center fixed;
      background-size: cover;
      scroll-behavior: smooth;
      height: 100vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    header {
      background: rgba(0, 0, 0, 0.6);
      padding: 20px;
      text-align: center;
      box-shadow: 0 0 10px #000;
      flex-shrink: 0;
    }

    h1 {
      font-size: 3em;
      color: #00d4ff;
      text-shadow: 0 0 15px #00d4ff;
      animation: glow 2s infinite alternate;
    }

    @keyframes glow {
      from { text-shadow: 0 0 10px #00d4ff; }
      to { text-shadow: 0 0 25px #00d4ff, 0 0 50px #00bfff; }
    }

    nav {
      margin-top: 15px;
    }

    nav a {
      color: #fff;
      text-decoration: none;
      margin: 0 15px;
      padding: 10px 18px;
      border-radius: 10px;
      transition: all 0.3s ease;
      font-weight: bold;
      display: inline-block;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    /* Animación al hover */
    nav a::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: #00d4ff;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.4s ease, height 0.4s ease;
      z-index: -1;
      opacity: 0.6;
    }

    nav a:hover::before {
      width: 200%;
      height: 500%;
    }

    nav a:hover {
      color: #000;
      box-shadow: 0 0 10px #00d4ff;
      z-index: 1;
    }

    main {
      flex-grow: 1;
      overflow-y: auto;
      padding: 30px 20px;
      max-width: 800px;
      margin: 0 auto 30px auto;
      width: 100%;
    }

    section {
      display: none;
      padding: 40px 20px;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 15px;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
      animation: fadeInSection 0.5s ease forwards;
    }

    section.active {
      display: block;
    }

    @keyframes fadeInSection {
      from {opacity: 0; transform: translateY(20px);}
      to {opacity: 1; transform: translateY(0);}
    }

    h2 {
      font-size: 2em;
      margin-bottom: 20px;
      color: #00bfff;
    }

    p {
      font-size: 1.1em;
      line-height: 1.6;
    }

    /* Chat efecto */
    .chat {
      margin-top: 40px;
      font-family: 'Courier New', monospace;
      background: rgba(255, 255, 255, 0.1);
      border-left: 5px solid #00bfff;
      padding: 15px;
      border-radius: 10px;
      animation: fadeIn 1s ease-in;
    }

    .chat span {
      display: block;
      margin-bottom: 10px;
      animation: type 2s steps(30) 1;
      white-space: nowrap;
      overflow: hidden;
      border-right: 2px solid #00d4ff;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes type {
      from { width: 0 }
      to { width: 100% }
    }

    /* Botón donar */
    .btn-donar {
      display: inline-block;
      padding: 15px 35px;
      background: #00d4ff;
      color: #000;
      font-weight: bold;
      border-radius: 25px;
      text-decoration: none;
      box-shadow: 0 0 15px #00d4ff;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }
    .btn-donar:hover {
      transform: scale(1.1);
      box-shadow: 0 0 25px #00bfff, 0 0 40px #00d4ff;
    }

    footer {
      text-align: center;
      padding: 20px;
      font-size: 0.9em;
      background: rgba(0, 0, 0, 0.7);
      flex-shrink: 0;
      color: #ccc;
    }
  </style>
</head>
<body>

  <header>
    <h1>LunaticaMC</h1>
    <nav>
      <a href="#" data-target="inicio" class="nav-link">Inicio</a>
      <a href="#" data-target="info" class="nav-link">Información</a>
      <a href="#" data-target="donar" class="nav-link">Donar</a>
      <a href="#" data-target="destacadas" class="nav-link">Destacadas</a>
    </nav>
  </header>

  <main>
    <section id="inicio" class="active">
      <h2>Bienvenido a LunaticaMC</h2>
      <p>¡Un servidor donde la locura y la diversión se mezclan! 🎮</p>
      <div class="chat">
        <span>[Server] ¡Bienvenido al mundo de Lunatica!</span>
        <span>[Tips] Usa /ayuda para comenzar tu aventura</span>
        <span>[Info] Versión compatible: 1.16 - 1.21+</span>
      </div>
    </section>

    <section id="info">
      <h2>Información</h2>
      <p>
        LunaticaMC es un servidor de Minecraft con modos únicos, economía, y eventos.  
        <br>Staff activo, protección anti-grief, clanes, y mucho más.
      </p>
    </section>

    <section id="donar">
      <h2>Donar</h2>
      <p>Ayuda a mantener el servidor activo y recibe recompensas exclusivas.</p>
      <a href="#" class="btn-donar" onclick="alert('Pronto habilitaremos métodos de donación. ¡Gracias por tu apoyo!'); return false;">Donar</a>
    </section>

    <section id="destacadas">
      <h2>Destacadas</h2>
      <p>
        Próximamente eventos semanales, clanes en competencia y nuevas mazmorras.
        <br>¡Estén atentos a nuestras redes!
      </p>
    </section>
  </main>

  <footer>
    &copy; 2025 LunaticaMC | Todos los derechos reservados
  </footer>

  <script>
    // Controlar la visibilidad de secciones
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('data-target');

        sections.forEach(sec => {
          if (sec.id === target) {
            sec.classList.add('active');
            sec.scrollTop = 0;
          } else {
            sec.classList.remove('active');
          }
        });
      });
    });
  </script>

</body>
</html>
