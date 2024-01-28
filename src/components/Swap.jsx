import styles from "../styles/Swap.module.css";
import SwapCard from "./swap/SwapCard";
import SwapDetails from "./swap/SwapDetails";

function Swap() {
  return (
    <div className={styles.container}>
      <SwapCard />
      <SwapDetails />
    </div>
  );
}

export default Swap;
