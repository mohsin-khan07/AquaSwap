import styles from "./SelectButton.module.css";

function SelectButton() {
  return (
    <div className={styles.select}>
      <img className={styles.icon} src="ethIcon.svg" alt="icon"></img>
      <div className={styles.symbol}>ETH</div>
      <img className={styles.arrow} src="openCloseArrow.svg" alt="arrow"></img>
    </div>
  );
}

export default SelectButton;
