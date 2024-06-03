import { useEffect } from "react";
import styles from "./Equipo.module.css";
import { useState } from "react";

export default function Equipo() {
    const[videos,setVideos] = useState([]);
    
    useEffect(() => {
      
    }, [])
    
    // const obj = {
    //     backgroundColor: hexToRgba(colorPrimario, 0.6),
    //   };
  return (
    <>
      <section className={styles.equipo}>
        <h3 className={styles.titulo}>FRONT END</h3>
        <div>
          <img src="/img/1.jpg" alt="" />
          <div>
            <button>Borrar</button>
            <button>Editar</button>
          </div>
        </div>
      </section>
    </>
  );
}
