import styles from "./Details.module.css";

function Details() {
  return (
    <div className={styles.details}>
      <div>Rate</div>
      <div className={styles.value}>1 ETH = 2237.2286 USDT</div>
    </div>
  );
}

export default Details;
