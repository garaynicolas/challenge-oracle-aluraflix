import React, { useContext, useState, useEffect } from "react";
import hexToRgba from "hex-to-rgba";
import styles from "./CardVideo.module.css";
import { AluraContext } from "../../context/useAlura";
import { conexionAPI } from "../../services/conexionAPI";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export default function CardVideo({ video, colorPrimario }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    titulo: "",
    categoria: "",
    imagen: "",
    descripcion: "",
    video: "",
  });

  const { videos, setVideos, handleVideo, handleClear, handleDelete } =
    useContext(AluraContext);

  const { id, titulo, categoria, imagen, descripcion } = video;
  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6),
    borderColor: hexToRgba(colorPrimario, 1),
  };

  useEffect(() => {
    if (isModalOpen) {
      setFormValues({
        id: video.id,
        titulo: video.titulo,
        categoria: video.categoria,
        imagen: video.imagen,
        descripcion: video.descripcion,
        video: video.video,
      });
    }
  }, [isModalOpen, video]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Llama a la función para actualizar el video en el servidor
      await conexionAPI.actualizarVideo(formValues);

      // Actualiza el estado local con los datos actualizados
      const updatedVideos = videos.map((v) => {
        if (v.id === formValues.id) {
          return { ...v, ...formValues };
        }
        return v;
      });
      setVideos(updatedVideos);

      // Cierra el modal
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error al actualizar el video:", error);
      // Aquí puedes manejar el error de acuerdo a tus necesidades, por ejemplo, mostrar un mensaje al usuario
    }
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
        <img
          className={styles.imagen}
          src={video.imagen}
          onClick={() => handleVideo(video.id)}
        />
        <div className={styles.botones}>
          <button
            className={styles.boton}
            type="button"
            onClick={() => handleDelete(id)}
          >
            <MdDelete /> Borrar
          </button>
          <button className={styles.boton} type="button" onClick={openModal}>
          <MdEdit /> Editar
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <div className={styles.div}>
              <h1 className={styles.h1}>EDITAR TARJETA VIDEO</h1>
              <form className={styles.form} onSubmit={handleUpdate}>
                <label htmlFor="titulo">Titulo</label>
                <input
                  id="titulo"
                  name="titulo"
                  value={formValues.titulo}
                  onChange={handleInputChange}
                  type="text"
                />
                <label htmlFor="categoria">Categoria</label>
                <select
                  id="categoria"
                  name="categoria"
                  value={formValues.categoria}
                  onChange={handleInputChange}
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
                  value={formValues.imagen}
                  onChange={handleInputChange}
                />
                <label htmlFor="video">Video</label>
                <input
                  id="video"
                  type="text"
                  name="video"
                  value={formValues.video}
                  onChange={handleInputChange}
                />
                <label htmlFor="descripcion">Descripción</label>
                <textarea
                  className={styles.textarea}
                  id="descripcion"
                  name="descripcion"
                  rows="6"
                  value={formValues.descripcion}
                  onChange={handleInputChange}
                />
                <div className={styles.botonescard}>
                  <button className={styles.button} type="submit">
                    GUARDAR
                  </button>
                  <button
                    className={styles.button}
                    type="button"
                    onClick={() => {
                      handleClear();
                      setFormValues({
                        titulo: "",
                        categoria: "",
                        imagen: "",
                        descripcion: "",
                        video: "",
                      });
                    }}
                  >
                    LIMPIAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
