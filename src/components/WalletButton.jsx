import { useGlobalContext } from "../contexts/GlobalContext";
import styles from "../styles/WalletButton.module.css";

function WalletButton() {
  const { userAddress, getWalletAddress } = useGlobalContext();

  return (
    <div className={styles.button} onClick={getWalletAddress}>
      {userAddress
        ? `${userAddress.slice(0, 7)}...${userAddress.slice(-7)}`
        : "Connect Wallet"}
    </div>
  );
}

export default WalletButton;
