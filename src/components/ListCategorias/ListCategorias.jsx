import { useContext } from "react";
import Categoria from "../Categoria/Categoria";
import { AluraContext } from "../../context/useAlura.jsx";
import styles from "./ListCategorias.module.css";

export default function ListCategorias() {
  const { categorias, videos } = useContext(AluraContext);
  return (
    <div className={styles.container}>
      {categorias.map((categoria) => (
        <Categoria
          key={categoria.id}
          nombre={categoria.nombre}
          colorPrimario={categoria.colorPrimario}
          videos={videos.filter(
            (video) => categoria.nombre === video.categoria
          )}
        />
      ))}
    </div>
  );
}
