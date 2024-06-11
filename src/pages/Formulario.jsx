import { useContext } from "react";
import styles from "./Formulario.module.css";
import { AluraContext } from "../context/useAlura";



export default function Formulario() {
  const { registro,onInputChange,handleSubmit,handleClear } = useContext(AluraContext);
  
  const { titulo, categoria, imagen, video, descripcion } = registro;

  

  return (
    <>
      <div className={styles.div}>
        <h1 className={styles.h1}>NUEVO VIDEO</h1>
        <h2 className={styles.h2}>
          COMPLETE EL FORMULARIO PARA CREAR UN NUEVO VIDEO
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="titulo">Titulo</label>
          <input
            id="titulo"
            name="titulo"
            value={titulo}
            onChange={onInputChange}
            type="text"
          />
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={onInputChange}
          >
            <option value="">Seleccione una categoria</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="gestion">Gestion</option>
          </select>
          <label htmlFor="imagen">Imagen</label>
          <input
            id="imagen"
            type="text"
            name="imagen"
            value={imagen}
            onChange={onInputChange}
          />
          <label htmlFor="video">Video</label>
          <input
            id="video"
            type="text"
            name="video"
            value={video}
            onChange={onInputChange}
          />
          <label htmlFor="descripcion">Descripción</label>
          <input
            id="descripcion"
            type="text"
            name="descripcion"
            value={descripcion}
            onChange={onInputChange}
          />
          <div className={styles.botones}>
            <button className={styles.button} type="submit">
              GUARDAR
            </button>
            <button className={styles.button} type="button" onClick={handleClear}>LIMPIAR</button>
          </div>
        </form>
      </div>
    </>
  );
}
