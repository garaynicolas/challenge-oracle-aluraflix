async function listarVideos() {
  const conexion = await fetch("https://my-json-server.typicode.com/garaynicolas/aluraflix-api/videos");
  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

async function enviarVideo({id,titulo,categoria,video,imagen,descripcion}) {
    const conexion = await fetch("http://localhost:3001/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id:id,
            titulo: titulo,
            categoria: categoria,
            imagen: imagen,
            video: video,
            descripcion: descripcion

        })
    });
    const conexionConvertida = conexion.json();
    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el articulo");
    }
    return conexionConvertida;
}

async function actualizarVideo({ id, titulo, categoria, video, imagen, descripcion }) {
    try {
      const conexion = await fetch(`http://localhost:3001/videos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          titulo: titulo,
          categoria: categoria,
          imagen: imagen,
          video: video,
          descripcion: descripcion
        })
      });
  
      if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al actualizar el video");
      }
  
      const videoActualizado = await conexion.json();
      return videoActualizado;
    } catch (error) {
      console.error("Error al actualizar el video:", error);
      throw error; // Propaga el error para que sea manejado por el código que llama a esta función
    }
  }

async function eliminarVideo(id) {
    try {
      const response = await fetch(`http://localhost:3001/videos/${id}`, {
        method: "DELETE"
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Error al eliminar el video");
      }
      const data = await response.json();
      return data;
    } catch (error) {
     console.error(error);
    }
  }

export const conexionAPI = {
  listarVideos,enviarVideo,eliminarVideo,actualizarVideo
};
