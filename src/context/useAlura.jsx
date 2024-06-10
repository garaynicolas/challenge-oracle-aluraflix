import { createContext, useEffect, useState } from "react";
import db from "../data/db.json";
export const AluraContext = createContext();

export function useAlura() {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setCategorias(db.categorias);
  }, []);

  useEffect(() => {
    setVideos(db.videos);
  }, []);

  
  return { categorias, setCategorias, videos, setVideos };
}

export function AluraProvider({ children }) {
  const {categorias, videos, setVideos, setCategorias} = useAlura();
  return (
    <AluraContext.Provider
      value={{ categorias, videos, setVideos, setCategorias }}
    >
      {children}
    </AluraContext.Provider>
  );
}
