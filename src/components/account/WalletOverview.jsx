import AddressButton from "./AddressButton";
import EthOverview from "./EthOverview";
import styles from "./WalletOverview.module.css";

function WalletOverview() {
  return (
    <div className={styles.container}>
      <AddressButton />
      <EthOverview />
    </div>
  );
}

export default WalletOverview;
