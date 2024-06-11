import { createContext, useEffect, useState } from "react";
import db from "../data/db.json";
export const AluraContext = createContext();
import { v4 as uuid } from "uuid";

const initialRegistro = {
  titulo: "",
  categoria: "",
  imagen: "",
  video: "",
  descripcion: "",
};
export function useAlura() {
  const [categorias, setCategorias] = useState([]);
  const [registro, setRegistro] = useState(initialRegistro);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setCategorias(db.categorias);
  }, []);

  useEffect(() => {
    setVideos(db.videos);
  }, []);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setRegistro({
      ...registro,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRegistro = { ...registro, id: uuid() }; // Agregar id único
    setVideos([...videos, newRegistro]);
    console.log(registro);
    console.log(videos);
  };

  const handleDelete = (id) => {
    const newVideos = videos.filter((video) => video.id !== id);
    setVideos(newVideos);
  };

  const handleClear = () => {
    setRegistro(initialRegistro); // Limpiar el formulario manualmente
  };

  return {
    categorias,
    registro,
    setCategorias,
    videos,
    setVideos,
    onInputChange,
    handleSubmit,
    handleClear,
    handleDelete
  };
}

export function AluraProvider({ children }) {
  const {
    categorias,
    videos,
    registro,
    setVideos,
    setCategorias,
    onInputChange,
    handleSubmit,
    handleClear,
    handleDelete
  } = useAlura();
  return (
    <AluraContext.Provider
      value={{
        categorias,
        videos,
        registro,
        setVideos,
        setCategorias,
        onInputChange,
        handleSubmit,
        handleClear,
        handleDelete
      }}
    >
      {children}
    </AluraContext.Provider>
  );
}
