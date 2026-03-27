import { useState, useEffect } from "react";
import SocialIcons from "./components/SocialIcons";

// Logo
import logo from "./logo/logo.png";

// IMÁGENES
import pianoImg from "./imagenesinstrumentos/piano.jpg";
import guitarraImg from "./imagenesinstrumentos/guitarra.jpg";
import bajoImg from "./imagenesinstrumentos/bajo.jpg";
import bateriaImg from "./imagenesinstrumentos/bateria.jpg";
import bandaBg from "./imagenesinstrumentos/banda.jpg";

// GIFs
import gifBajista from "./gif/gif_bajista.gif";
import gifGuitarrista from "./gif/gif_guitarrista.gif";
import gifPianista from "./gif/gif_pianista.gif";
import gifBaterista from "./gif/guf_baterista.gif"; // revisa nombre

type Curso = "piano" | "batería" | "guitarra" | "bajo";

interface CursoItem {
  nombre: Curso;
  precio: number;
  desc: string;
  imagen: string;
}

export default function App() {
  const phone = "573218275703";

  const gifs = [gifPianista, gifGuitarrista, gifBajista, gifBaterista];
  const [gifIndex, setGifIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setGifIndex((prev) => (prev + 1) % gifs.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  // ✅ Mensajes de WhatsApp personalizados según el curso
  const whatsappLink = (curso: Curso) => {
    let mensaje = "";
    switch (curso) {
      case "piano":
        mensaje =
          "Hola! Estoy interesado en las clases de piano, quiero que me des más información.";
        break;
      case "batería":
        mensaje =
          "Hola! Estoy interesado en las clases de batería, quiero que me des más información.";
        break;
      case "guitarra":
        mensaje =
          "Hola! Estoy interesado en las clases de guitarra, quiero que me des más información.";
        break;
      case "bajo":
        mensaje =
          "Hola! Estoy interesado en las clases de bajo, quiero que me des más información.";
        break;
    }
    return `https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`;
  };

  const formatCOP = (value: number) =>
    value.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });

  const cursos: CursoItem[] = [
    { nombre: "piano", precio: 96000, desc: "Técnica, acordes...", imagen: pianoImg },
    { nombre: "batería", precio: 96000, desc: "Ritmo y grooves modernos...", imagen: bateriaImg },
    { nombre: "guitarra", precio: 80000, desc: "Técnica, acordes...", imagen: guitarraImg },
    { nombre: "bajo", precio: 80000, desc: "Groove y técnica...", imagen: bajoImg },
  ];

  // 🔥 FUNCIÓN DE SCROLL LENTO
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (!element) return;

    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY - 80;
    const duration = 800;

    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const time = currentTime - startTime;
      const ease = (t: number) => t * (2 - t);
      const progress = Math.min(time / duration, 1);
      const amount = start + (end - start) * ease(progress);
      window.scrollTo(0, amount);

      if (time < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-black/70 backdrop-blur-md p-4 flex items-center justify-between z-50">

        {/* LOGO */}
        <div className="flex items-center gap-3 ml-4">
          <img
            src={logo}
            alt="J-Music Logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
          />
          <span className="text-yellow-400 font-bold text-xl">J-Music</span>
        </div>

        {/* MENÚ */}
        <div className="flex justify-center gap-8 mr-4">
          <a
            href="#clases"
            onClick={(e) => { e.preventDefault(); scrollToSection("#clases"); }}
            className="hover:text-yellow-400"
          >
            Clases
          </a>

          <a
            href="#redes"
            onClick={(e) => { e.preventDefault(); scrollToSection("#redes"); }}
            className="hover:text-yellow-400"
          >
            Redes
          </a>
        </div>
      </nav>

      {/* HEADER */}
      <header
        className="relative w-full h-[75vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${gifs[gifIndex]})` }}
      >
        <div className="absolute inset-0 bg-black/87"></div>

        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400">
            Academia Musical J-Music
          </h1>

          <p className="mt-4 text-gray-200">
            Aprende rápido con un método personalizado, donde analizamos tu forma de aprender para que avances de manera clara y efectiva.
          </p>

          <p className="mt-2 text-gray-400 italic">
            Tu proceso es único 🎶
          </p>
        </div>
      </header>

      {/* CURSOS */}
      <section
        id="clases"
        className="scroll-mt-24 relative py-20 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${bandaBg})` }}
      >
        <div className="absolute inset-0 bg-black/90"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-yellow-300 mb-10">
            Clases Personalizadas (4h mensuales)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {cursos.map((curso) => (
              <div
                key={curso.nombre}
                className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition flex flex-col"
              >
                <img
                  src={curso.imagen}
                  alt={curso.nombre}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold capitalize mb-2">
                      {curso.nombre}
                    </h3>
                    <p className="text-gray-300 mb-3">{curso.desc}</p>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-yellow-300 mb-3">
                      {formatCOP(curso.precio)}
                    </p>

                    <div className="flex justify-center">
                      <a
                        href={whatsappLink(curso.nombre)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 px-4 py-2 text-sm rounded-lg font-bold hover:bg-green-600 transition"
                      >
                        Preguntar
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REDES */}
      <section id="redes" className="scroll-mt-24 py-20 text-center">
        <h2 className="text-3xl font-bold text-yellow-300 mb-6">
          Sígueme en redes
        </h2>
        <SocialIcons />
      </section>

      {/* FOOTER */}
      <footer className="pb-6 text-center text-gray-500">
        © {new Date().getFullYear()} J-Music Academy
      </footer>
    </div>
  );
}