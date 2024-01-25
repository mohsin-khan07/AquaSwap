import styles from "../../styles/account/Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div>Getting account data!</div>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Spinner;
