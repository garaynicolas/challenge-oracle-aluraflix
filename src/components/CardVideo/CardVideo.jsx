import hexToRgba from "hex-to-rgba";
import styles from "./CardVideo.module.css"
export default function CardVideo({imagen,colorPrimario}) {
  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6),
    borderColor: hexToRgba(colorPrimario, 1),
  };
  return (
    <>
        <div className={styles.card} style={obj}>
          <img className={styles.imagen} src={imagen} alt="" />
          <div className={styles.botones}>
            <button className={styles.boton}>Borrar</button>
            <button className={styles.boton}>Editar</button>
          </div>
        </div>
    </>
  )
}
