import styles from "../../styles/swap/To.module.css";
import SelectButton from "./SelectButton";
import { useSwapContext } from "../../contexts/SwapContext";

function To() {
  const { tokenIn, tokenOut, outputAmount, setTokenOut, setTokenIn } =
    useSwapContext();

  return (
    <div className={styles.to}>
      <SelectButton
        setToken={setTokenOut}
        selectedToken={tokenOut ? tokenOut.symbol : ""}
        setOtherToken={setTokenIn}
        otherToken={tokenIn}
      />
      <div className={styles.value}>{outputAmount}</div>
    </div>
  );
}

export default To;
