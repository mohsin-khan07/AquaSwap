import { useSwapContext } from "../../contexts/SwapContext";
import styles from "../../styles/swap/From.module.css";
import SelectButton from "./SelectButton";

function From() {
  const { tokenIn, setTokenIn, setAmountIn } = useSwapContext();

  return (
    <div className={styles.from}>
      <SelectButton
        setToken={setTokenIn}
        selectedToken={tokenIn ? tokenIn.symbol : ""}
      />
      <input
        onChange={(e) => setAmountIn(parseFloat(e.target.value))}
        type="text"
        placeholder="0"
      ></input>
    </div>
  );
}

export default From;
