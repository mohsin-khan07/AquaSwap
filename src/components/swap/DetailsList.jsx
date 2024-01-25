import styles from "../../styles/swap/DetailsList.module.css";
import Details from "./Details";

function DetailsList() {
  return (
    <div className={styles.list}>
      <Details />
      <Details />
    </div>
  );
}

export default DetailsList;
