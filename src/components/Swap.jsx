import { useAmountsContext } from "../contexts/AmountsContext";
import styles from "../styles/Swap.module.css";
import SwapCard from "./swap/SwapCard";
import SwapDetails from "./swap/SwapDetails";

function Swap() {
  const { amountIn, isLoading } = useAmountsContext();

  return (
    <div className={styles.container}>
      <SwapCard />
      {amountIn ? !isLoading ? <SwapDetails /> : "Fetching best price..." : ""}
    </div>
  );
}

export default Swap;
