import { useEffect } from "react";
import styles from "./Equipo.module.css";
import { useState } from "react";
import CardVideo from "../CardVideo/CardVideo";

export default function Equipo() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {}, []);

  // const obj = {
  //     backgroundColor: hexToRgba(colorPrimario, 0.6),
  //   };
  return (
    <>
      <section className={styles.equipo}>
        <h3 className={styles.titulo}>FRONT END</h3>
        <div className={styles.cards}>
          <CardVideo />
        </div>
      </section>
    </>
  );
}
