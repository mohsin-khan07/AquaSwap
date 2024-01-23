import styles from "./Arrow.module.css";
// import DownArrow from "../../../../public/downArrow.svg";

function Arrow() {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <img className={styles.arrow} src="downArrow.svg" alt="arrow"></img>
      </div>
      <div className={styles.hLine}></div>
    </div>
  );
}

export default Arrow;
