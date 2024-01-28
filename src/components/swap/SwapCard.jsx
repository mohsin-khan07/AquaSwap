import styles from "../../styles/swap/SwapCard.module.css";
import ReverseArrow from "./ReverseArrow";
import TokenIn from "./TokenIn";
import TokenOut from "./TokenOut";

function SwapCard() {
  return (
    <div className={styles.card}>
      <TokenIn />
      <ReverseArrow />
      <TokenOut />
    </div>
  );
}

export default SwapCard;
