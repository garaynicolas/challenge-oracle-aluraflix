import { useEffect } from "react";
import styles from "./Categoria.module.css";
import { useState } from "react";
import CardVideo from "../CardVideo/CardVideo";
import db from "../../data/db.json";

export default function Categoria({videos,categoria,nombre}) {
  
  
  // const obj = {
  //     backgroundColor: hexToRgba(colorPrimario, 0.6),
  //   };
  return (
    <>
      <section className={styles.equipo}>
        <h3 className={styles.titulo}>{nombre}</h3>
        <div className={styles.cards}>
          {videos.map( video => <CardVideo key={video.id}/>)}   
        </div>
      </section>
    </>
  );
}
