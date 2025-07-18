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
      background: url('https://i.pinimg.com/originals/88/56/bd/8856bdba27c78cd3de46b02c4e10cf96.jpg') no-repeat center center fixed;
      background-size: cover;
      scroll-behavior: smooth;
    }

    header {
      background: rgba(0, 0, 0, 0.6);
      padding: 20px;
      text-align: center;
      box-shadow: 0 0 10px #000;
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
      padding: 5px 10px;
      border-radius: 10px;
      transition: all 0.3s;
      font-weight: bold;
    }

    nav a:hover {
      background: #00d4ff;
      color: #000;
      box-shadow: 0 0 10px #00d4ff;
    }

    section {
      padding: 80px 20px;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      margin: 30px auto;
      max-width: 800px;
      border-radius: 15px;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
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

    footer {
      text-align: center;
      padding: 20px;
      font-size: 0.9em;
      background: rgba(0, 0, 0, 0.7);
    }
  </style>
</head>
<body>

  <header>
    <h1>LunaticaMC</h1>
    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#info">Información</a>
      <a href="#donar">Donar</a>
      <a href="#destacadas">Destacadas</a>
    </nav>
  </header>

  <section id="inicio">
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
    <p>Ayuda a mantener el servidor activo y recibe recompensas exclusivas.  
    <br>Pronto habilitaremos nuestra tienda online.</p>
  </section>

  <section id="destacadas">
    <h2>Destacadas</h2>
    <p>
      Próximamente eventos semanales, clanes en competencia y nuevas mazmorras.
      <br>¡Estén atentos a nuestras redes!
    </p>
  </section>

  <footer>
    &copy; 2025 LunaticaMC | Todos los derechos reservados
  </footer>
</body>
</html>
