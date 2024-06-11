import { createContext, useEffect, useState } from "react";
import db from "../../db.json";
export const AluraContext = createContext();
import { v4 as uuid } from "uuid";
import { conexionAPI } from "../services/conexionAPI";

const initialRegistro = {
  titulo: "",
  categoria: "",
  imagen: "",
  video: "",
  descripcion: "",
};

const initiVideoHeader = {
  id: "d58f84a5-68e5-4d9b-bad6-b8b1a14c8b18",
  titulo: "ChatGpt para practicar Ingles",
  categoria: "gestion",
  imagen: "/img/1.jpg",
  video: "https://www.youtube.com/watch?v=Yz-6uHdwBPE",
  descripcion:
    "Ya no es novedad que las inteligencias artificiales existen para ayudarnos con nuestras tareas laborales y del día a día, pero ¿sabías que puedes aprender y practicar inglés utilizando una IA? En este video, Christian Velasco, nos enseña como podemos utilizar el ChatGPT para practicar inglés.",
};
export function useAlura() {
  const [categorias, setCategorias] = useState([]);
  const [registro, setRegistro] = useState(initialRegistro);
  const [videos, setVideos] = useState([]);
  const [videoHeader, setVideoHeader] = useState(initiVideoHeader);

  useEffect(() => {
    setCategorias(db.categorias);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const listVideos = await conexionAPI.listarVideos();
        setVideos(listVideos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setRegistro({
      ...registro,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newRegistro = { ...registro, id: uuid() }; // Agregar id único
    try {
      await conexionAPI.enviarVideo(newRegistro);
    } catch (e) {
      alert(e);
    }
    // setVideos([...videos, newRegistro]);
  };

  const handleVideo = (id) => {
    const videoH = videos.find((v) => v.id === id);
    setVideoHeader(videoH);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  const handleDelete = async (id) => {
    // const newVideos = videos.filter((video) => video.id !== id);
    // setVideos(newVideos);
    try {
      await conexionAPI.eliminarVideo(id);
    } catch (e) {
      alert(e);
    }
  };

  const handleClear = () => {
    setRegistro(initialRegistro); // Limpiar el formulario manualmente
  };

  return {
    categorias,
    registro,
    videos,
    videoHeader,
    setCategorias,
    setVideos,
    onInputChange,
    handleSubmit,
    handleClear,
    handleDelete,
    setVideoHeader,
    handleVideo,
  };
}

export function AluraProvider({ children }) {
  const {
    categorias,
    videos,
    registro,
    videoHeader,
    setVideos,
    setCategorias,
    onInputChange,
    handleSubmit,
    handleClear,
    handleDelete,
    setVideoHeader,
    handleVideo,
  } = useAlura();
  return (
    <AluraContext.Provider
      value={{
        categorias,
        videos,
        registro,
        videoHeader,
        setVideos,
        setCategorias,
        onInputChange,
        handleSubmit,
        handleClear,
        handleDelete,
        setVideoHeader,
        handleVideo,
      }}
    >
      {children}
    </AluraContext.Provider>
  );
}
