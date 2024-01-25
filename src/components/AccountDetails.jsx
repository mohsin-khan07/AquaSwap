import styles from "../styles/AccountDetails.module.css";
import TokensOverview from "./account/TokensOverview";
import TokensList from "./account/TokensList";
import AccountOverview from "./account/AccountOverview";

function AccountDetails() {
  return (
    <div className={styles.card}>
      <AccountOverview />
      <TokensOverview />
      <TokensList />
    </div>
  );
}

export default AccountDetails;
