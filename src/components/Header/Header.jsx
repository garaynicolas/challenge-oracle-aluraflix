import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div>
        <header className={styles.header}>
          <img src="/img/LogoMain.png" alt="logo" />
          <div className={styles.div}>
            <button className={styles.button}>HOME</button>
            <button className={styles.button}>NUEVO VIDEO</button>
          </div>
        </header>
        <img className={styles.banner} src="/img/BannerMain.png" alt="" />
      </div>
    </>
  );
}
