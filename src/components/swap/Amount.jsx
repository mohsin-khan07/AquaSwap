/* eslint-disable react/prop-types */
import styles from "../../styles/swap/Amount.module.css";

function Amount({ amount, setAmount }) {
  return (
    <div className={styles.container}>
      <input
        value={amount ? amount : ""}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        type="text"
        placeholder="0.00"
      ></input>
    </div>
  );
}

export default Amount;
