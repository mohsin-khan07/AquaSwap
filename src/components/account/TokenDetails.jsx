/* eslint-disable react/prop-types */
import styles from "./TokenDetails.module.css";

function TokenDetails({ icon, symbol, tokenName }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.icon}
        src={icon ? icon : "ethIcon.svg"}
        alt="icon"
      ></img>
      <div className={styles.details}>
        <div className={styles.symbol}>{symbol}</div>
        <div className={styles.name}>{tokenName}</div>
      </div>
    </div>
  );
}

export default TokenDetails;
