import { useEffect, useState } from "react";
import Categoria from "./components/Equipo/Categoria";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import db from "./data/db.json";

function App() {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setCategorias(db.categorias);
  }, []);

  useEffect(() => {
    setVideos(db.videos);
  }, []);

  return (
    <>
      <Header />
      {categorias.map((categoria) => (
        <Categoria
          key={categoria.id}
          nombre={categoria.nombre}
          categorias={categorias}
          colorPrimario={categoria.colorPrimario}
          videos={videos.filter(
            (video) => categoria.nombre === video.categoria
          )}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;