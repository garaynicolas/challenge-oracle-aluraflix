import styles from "./CardVideo.module.css"
export default function CardVideo({imagen}) {
  return (
    <>
        <div className={styles.card}>
          <img className={styles.imagen} src={imagen} alt="" />
          <div className={styles.botones}>
            <button className={styles.boton}>Borrar</button>
            <button className={styles.boton}>Editar</button>
          </div>
        </div>
    </>
  )
}
