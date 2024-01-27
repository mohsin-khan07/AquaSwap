import { useSwapContext } from "../contexts/SwapContext";
import styles from "../styles/SwapCard.module.css";
import SwapDetails from "./SwapDetails";
import ReverseArrow from "./swap/ReverseArrow";
import Balance from "./swap/Balance";
import From from "./swap/From";
import To from "./swap/To";

function SwapCard() {
  const { tokenInBalance, tokenOutBalance, onReverse } = useSwapContext();

  return (
    <div className={styles.card}>
      <From />
      {tokenInBalance ? (
        <Balance balance={parseFloat(tokenInBalance).toFixed(2)} />
      ) : (
        <Balance balance={0} />
      )}
      <ReverseArrow onReverse={onReverse} />
      <To />
      {tokenOutBalance ? (
        <Balance balance={parseFloat(tokenOutBalance).toFixed(2)} />
      ) : (
        ""
      )}
      <SwapDetails />
    </div>
  );
}

export default SwapCard;
