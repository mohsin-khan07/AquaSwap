import styles from "../../styles/swap/To.module.css";
import SelectButton from "./SelectButton";
import { useSwapContext } from "../../contexts/SwapContext";

function To() {
  const { tokenOut, outputAmount, setTokenOut } = useSwapContext();

  return (
    <div className={styles.to}>
      <SelectButton
        setToken={setTokenOut}
        selectedToken={tokenOut ? tokenOut.symbol : ""}
      />
      <div className={styles.value}>{outputAmount}</div>
    </div>
  );
}

export default To;
