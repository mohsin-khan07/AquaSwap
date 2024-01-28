/* eslint-disable react/prop-types */
import styles from "../../styles/swap/Amount.module.css";

function Amount({ setAmount }) {
  return (
    <div className={styles.container}>
      <input
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        type="text"
        placeholder="0"
      ></input>
    </div>
  );
}

export default Amount;
