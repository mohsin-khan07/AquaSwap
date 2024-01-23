import { useAccountContext } from "../../contexts/AccountContext";
import styles from "./ZeroBalanceButton.module.css";

function ZeroBalanceButton() {
  const { hideZeroBal, setHideZeroBal } = useAccountContext();

  return (
    <div className={styles.container}>
      <div className={styles.title}>Hide zero balances</div>
      <input
        type="checkbox"
        checked={hideZeroBal}
        onChange={() => setHideZeroBal(!hideZeroBal)}
      ></input>
    </div>
  );
}

export default ZeroBalanceButton;
