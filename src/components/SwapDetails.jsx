import styles from "../styles/SwapDetails.module.css";

function SwapDetails() {
  return (
    <div className={styles.container}>
      <DetailsList />
    </div>
  );
}

function DetailsList() {
  return (
    <div className={styles.list}>
      <Details />
      <Details />
    </div>
  );
}

function Details() {
  return (
    <div className={styles.details}>
      <div>Rate</div>
      <div className={styles.value}>1 ETH = 2237.2286 USDT</div>
    </div>
  );
}

export default SwapDetails;
