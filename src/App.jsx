
import { useState } from "react";
import { BrowserRouter, HashRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import "./App.css";

const Router = import.meta.env.MODE === "github-pages" ? HashRouter : BrowserRouter;

// PAGINA DE INICIO
function Inicio() {
  const navigate = useNavigate();

  return (
    <section>
      <h1>Bienvenido a mi proyecto</h1>
      <p>Trabajo Práctico N°7 - Lenguaje IV</p>
      <p>Proyecto desarrollado con React, Blob y React Router.</p>
      <button onClick={() => navigate("/proyecto-blob")}>
        Conocer el proyecto
      </button>
    </section>
  );
}

// PROYECTO BLOB - TP6
function ProyectoBlob() {
  const [blob, setBlob] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [contenidoSlice, setContenidoSlice] = useState("");

  // Crear Blob de texto
  const crearBlob = () => {
    const texto =
      "Trabajo Practico N°6 - Lenguaje IV\n" +
      "Universidad Catolica de Salta\n" +
      "Este archivo fue creado utilizando Blob en React.";

    const nuevoBlob = new Blob([texto], {
      type: "text/plain;charset=utf-8",
    });

    setBlob(nuevoBlob);
    setContenidoSlice("");
    setMensaje("Blob creado correctamente.");
  };

  // Descargar archivo
  const descargarBlob = () => {
    if (blob === null) {
      setMensaje("Primero debes crear el Blob.");
      return;
    }

    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");

    enlace.href = url;
    enlace.download = "trabajo_practico_6.txt";

    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);

    URL.revokeObjectURL(url);

    setMensaje("Descarga iniciada correctamente.");
  };

  // Utilizar slice()
  const usarSlice = async () => {
    if (blob === null) {
      setMensaje("Primero debes crear el Blob.");
      return;
    }

    const fragmento = blob.slice(0, 30);
    const texto = await fragmento.text();

    setContenidoSlice(texto);
    setMensaje("Slice realizado correctamente.");
  };

  return (
    <section>
      <h1>Ejemplo de uso de Blobs</h1>
      <p>Trabajo Práctico N°6 - Lenguaje IV</p>

      <div className="botones">
        <button onClick={crearBlob}>
          Crear Blob de texto
        </button>

        <button onClick={descargarBlob}>
          Descargar Blob
        </button>

        <button onClick={usarSlice}>
          Usar slice()
        </button>
      </div>

      {mensaje && <p className="mensaje">{mensaje}</p>}

      {contenidoSlice && (
        <div className="resultado">
          <h3>Resultado de slice()</h3>
          <p>{contenidoSlice}</p>
        </div>
      )}
    </section>
  );
}

// ACERCA DE NOSOTROS
function Acerca() {
  return (
    <section>
      <h1>Acerca de nosotros</h1>
      <p>
        Somos estudiantes de Ingeniería en Informática
        de la Universidad Católica de Salta.
      </p>
      <p>
        Este proyecto fue realizado para la materia
        Lenguaje IV, utilizando React y JavaScript.
      </p>
    </section>
  );
}

// CONTACTO
function Contacto() {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  function enviarFormulario(e) {
    e.preventDefault();
    setMensajeEnviado(true);
  }

  return (
    <section>
      <h1>Contacto</h1>

      <form onSubmit={enviarFormulario}>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea placeholder="Tu mensaje" required />
        <button type="submit">Enviar mensaje</button>
      </form>

      {mensajeEnviado && (
        <p>Formulario completado correctamente.</p>
      )}
    </section>
  );
}

// INFORMACION DEL PROYECTO
function Informacion() {
  return (
    <section>
      <h1>Información del proyecto</h1>
      <p>Universidad Católica de Salta</p>
      <p>Materia: Lenguaje IV</p>
      <p>Tecnologías: React, HTML, CSS y JavaScript.</p>
      <p>
        Objetivo: implementar el uso de Blobs y rutas
        de navegación mediante React Router.
      </p>
    </section>
  );
}

// APLICACION PRINCIPAL
function App() {
  return (
    <Router>
      <header className="header">
        <h2>Mi Proyecto React</h2>

        <nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/proyecto-blob">Proyecto Blob</NavLink>
          <NavLink to="/acerca">Acerca de nosotros</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
          <NavLink to="/informacion">Información</NavLink>
        </nav>
      </header>

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyecto-blob" element={<ProyectoBlob />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/informacion" element={<Informacion />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>Universidad Católica de Salta - 2026</p>
        <p>Ingeniería en Informática - Lenguaje IV</p>
      </footer>
    </Router>
  );
}

export default App;
