import styles from "./SwapCard.module.css";
import Arrow from "./swap/Arrow";
import From from "./swap/From";
import To from "./swap/To";

function SwapCard() {
  return (
    <div className={styles.card}>
      <From />
      <Arrow />
      <To />
    </div>
  );
}

export default SwapCard;
