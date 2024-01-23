import styles from "./From.module.css";
import SelectButton from "./SelectButton";

function From() {
  return (
    <div className={styles.from}>
      <SelectButton />
      <input type="text" placeholder="0"></input>
    </div>
  );
}

export default From;
