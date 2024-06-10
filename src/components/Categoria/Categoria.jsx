import styles from "./Categoria.module.css";
import CardVideo from "../CardVideo/CardVideo";
import hexToRgba from "hex-to-rgba";

export default function Categoria({ nombre, colorPrimario, videos }) {
  // const {videos} = useContext(AluraContext);

  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6),
    borderColor: hexToRgba(colorPrimario, 1),
  };
  return (
    <>
      <section className={styles.equipo}>
        <h3 className={styles.titulo} style={obj}>
          {nombre.toUpperCase()}
        </h3>
        <div className={styles.cards}>
          {videos.map((video) => (
            <CardVideo
              key={video.id}
              colorPrimario={colorPrimario}
              imagen={video.imagen}
            />
          ))}
        </div>
      </section>
    </>
  );
}
