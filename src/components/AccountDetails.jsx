import styles from "./AccountDetails.module.css";
import TokensOverview from "./account/TokensOverview";
import WalletOverview from "./account/WalletOverview";
import TokensList from "./account/TokensList";

function AccountDetails() {
  return (
    <div className={styles.card}>
      <WalletOverview />
      <TokensOverview />
      <TokensList />
    </div>
  );
}

export default AccountDetails;
