import styles from "../../styles/account/AccountOverview.module.css";
import EthOverview from "./EthOverview";

function AccountOverview() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Token Balances</div>
      <EthOverview />
    </div>
  );
}

export default AccountOverview;
