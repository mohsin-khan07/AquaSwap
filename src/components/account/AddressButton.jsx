import { useGlobalContext } from "../../contexts/GlobalContext";
import styles from "./AddressButton.module.css";

function AddressButton() {
  const { userAddress, getWalletAddress } = useGlobalContext();

  return (
    <div className={styles.button} onClick={getWalletAddress}>
      {userAddress
        ? `${userAddress.slice(0, 7)}...${userAddress.slice(-7)}`
        : "Connect Wallet"}
    </div>
  );
}

export default AddressButton;
