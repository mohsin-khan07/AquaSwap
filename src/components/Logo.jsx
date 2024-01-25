import styles from "../styles/Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src="logo.svg" alt="logo"></img>
    </div>
  );
}

export default Logo;
