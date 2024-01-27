import { useSwapContext } from "../../contexts/SwapContext";
import styles from "../../styles/swap/SwapCard.module.css";
import ReverseArrow from "./ReverseArrow";
import Balance from "./Balance";
import From from "./From";
import To from "./To";

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
        <Balance balance={0} />
      )}
    </div>
  );
}

export default SwapCard;
