import styles from "./SwapDetails.module.css";
import Button from "./swap/Button";
import DetailsList from "./swap/DetailsList";

function SwapDetails() {
  return (
    <div className={styles.card}>
      <DetailsList />
      <Button />
    </div>
  );
}

export default SwapDetails;
