import styles from "./Formulario.module.css";
export default function Formulario() {
  return (
    <>
      <div className={styles.div}>
        <h1 className={styles.h1}>NUEVO VIDEO</h1>
        <h2 className={styles.h2}>
          COMPLETE EL FORMULARIO PARA CREAR UN NUEVO VIDEO
        </h2>
        <form className={styles.form} action="">
          <label htmlFor="">Titulo</label>
          <input type="text" />
          <label htmlFor="">Categoria</label>
          <select name="" id="">
            <option value="">Seleccione una categoria</option>
            <option value="">Categoria 1</option>
            <option value="">Categoria 2</option>
            <option value="">Categoria 3</option>
          </select>
          <label htmlFor="">Imagen</label>
          <input type="text" />
          <label htmlFor="">Video</label>
          <input type="text" />
          <label htmlFor="">Descripción</label>
          <input type="text" />
        </form>
      </div>
    </>
  );
}
