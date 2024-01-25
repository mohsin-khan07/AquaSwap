/* eslint-disable react/prop-types */
import styles from "../../styles/swap/SwapButton.module.css";

function SwapButton({ onClick }) {
  return (
    <div onClick={onClick} className={styles.button}>
      Swap
    </div>
  );
}

export default SwapButton;
