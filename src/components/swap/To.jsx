import styles from "./To.module.css";
import SelectButton from "./SelectButton";

function To() {
  return (
    <div className={styles.to}>
      <SelectButton />
      <div className={styles.value}>22333.4444</div>
    </div>
  );
}

export default To;
