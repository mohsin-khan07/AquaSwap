import { useAccountContext } from "../../contexts/AccountContext";
import styles from "./TokensOverview.module.css";
import ZeroBalanceButton from "./ZeroBalanceButton";

function TokensOverview() {
  const { hasQueried, tokenBalancesObject } = useAccountContext();

  return (
    <div className={styles.container}>
      <div className={styles.tokens}>
        Tokens: {hasQueried ? tokenBalancesObject.tokenBalances.length : 0}
      </div>
      <ZeroBalanceButton />
    </div>
  );
}

export default TokensOverview;
