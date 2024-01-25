import WalletButton from "./WalletButton";
import styles from "../styles/WalletOverview.module.css";

function WalletOverview() {
  return (
    <div className={styles.container}>
      <WalletButton />
    </div>
  );
}

export default WalletOverview;
