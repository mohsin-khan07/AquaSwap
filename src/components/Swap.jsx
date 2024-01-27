import styles from "../styles/Swap.module.css";
import SwapCard from "./swap/SwapCard";
import SwapDetails from "./swap/SwapDetails";
import { useSwapContext } from "../contexts/SwapContext";

function Swap() {
  const { tokenIn, tokenOut, amountIn, isLoading } = useSwapContext();

  return (
    <div className={styles.container}>
      <SwapCard />
      {tokenIn && tokenOut && amountIn ? (
        !isLoading ? (
          <SwapDetails />
        ) : (
          "Fetching best price..."
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default Swap;
