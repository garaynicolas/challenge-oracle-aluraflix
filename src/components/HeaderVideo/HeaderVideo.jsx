import { useContext } from "react";
import styles from "./HeaderVideo.module.css";
import { AluraContext } from "../../context/useAlura";

export default function HeaderVideo() {
  const { videoHeader } = useContext(AluraContext);

  // Obtener el ID del video de YouTube desde la URL completa
  const videoId = videoHeader.video.split('v=')[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <section id="header" className={styles.section}>
        <div className={styles.caja}>
          <h3 className={styles.titulo}>{videoHeader.titulo}</h3>
          <h3 className={styles.descripcion}>{videoHeader.descripcion}</h3>
        </div>
        <iframe
        className={styles.video}
          width="550"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
