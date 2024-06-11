import { Link } from "react-router-dom";
import styles from "./Header.module.css";


export default function Header() {
  return (
    <>
      <div>
        <header className={styles.header}>
          <img className={styles.imagen} src="/img/LogoMain.png" alt="logo" />
          <div className={styles.div}>
            <Link to="/">
              <button className={styles.button}>HOME</button>
            </Link>
            <Link to="/crear-video">
              <button className={styles.button}>NUEVO VIDEO</button>
            </Link>
          </div>
        </header>
      </div>
    
    </>
  );
}
