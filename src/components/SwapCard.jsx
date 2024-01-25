import { useSwapContext } from "../contexts/SwapContext";
import styles from "../styles/SwapCard.module.css";
import SwapDetails from "./SwapDetails";
import Arrow from "./swap/Arrow";
import Balance from "./swap/Balance";
import From from "./swap/From";
import To from "./swap/To";

function SwapCard() {
  const { tokenInBalance, tokenOutBalance } = useSwapContext();

  return (
    <div className={styles.card}>
      <From />
      {tokenInBalance ? (
        <Balance balance={parseFloat(tokenInBalance).toFixed(2)} />
      ) : (
        <Balance balance={0} />
      )}
      <Arrow />
      <To />
      {tokenOutBalance ? (
        <Balance balance={parseFloat(tokenOutBalance).toFixed(2)} />
      ) : (
        ""
      )}
      <div className={styles.hLine}></div>
      <SwapDetails />
    </div>
  );
}

export default SwapCard;
