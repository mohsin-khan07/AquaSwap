/* eslint-disable react/prop-types */
import styles from "../../styles/swap/Balance.module.css";

function Balance({ balance }) {
  return (
    <div className={styles.container}>
      <div>Balance: {balance}</div>
    </div>
  );
}

export default Balance;
