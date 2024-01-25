import { useSwapContext } from "../contexts/SwapContext";
import styles from "../styles/SwapDetails.module.css";
import SwapButton from "./swap/SwapButton";
import DetailsList from "./swap/DetailsList";

function SwapDetails() {
  const { getQuote } = useSwapContext();

  return (
    <div className={styles.card}>
      <DetailsList />
      <SwapButton onClick={getQuote} />
    </div>
  );
}

export default SwapDetails;
