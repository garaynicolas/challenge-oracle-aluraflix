import React, { useContext, useState } from "react";
import hexToRgba from "hex-to-rgba";
import styles from "./CardVideo.module.css";
import { AluraContext } from "../../context/useAlura";

export default function CardVideo({ video, colorPrimario }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { registro, onInputChange, handleSubmit, handleClear, handleDelete } =
    useContext(AluraContext);
  const { id, titulo, categoria, imagen, descripcion } = video;
  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6),
    borderColor: hexToRgba(colorPrimario, 1),
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.card} style={obj}>
        <img className={styles.imagen} src={video.imagen} alt="" />
        <div className={styles.botones}>
          <button
            className={styles.boton}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Borrar
          </button>
          <button className={styles.boton} type="button" onClick={openModal}>
            Editar
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            {
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
                    <button
                      className={styles.button}
                      type="button"
                      onClick={handleClear}
                    >
                      LIMPIAR
                    </button>
                  </div>
                </form>
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
}
