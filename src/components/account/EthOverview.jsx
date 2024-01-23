import { useEffect, useState } from "react";
import { useAccountContext } from "../../contexts/AccountContext";
import { useGlobalContext } from "../../contexts/GlobalContext";
import styles from "./EthOverview.module.css";

function EthOverview() {
  const [usdBalance, setUsdBalance] = useState();

  const { ethBalance } = useAccountContext();
  const { getUsdBalance } = useGlobalContext();

  useEffect(() => {
    const getBalance = async () => {
      const bal = await getUsdBalance(ethBalance);
      setUsdBalance(bal);
    };
    getBalance();
  }, [ethBalance, getUsdBalance]);

  return (
    <div className={styles.container}>
      <div>{ethBalance} ETH</div>
      <div className={styles.usd}>
        {!isNaN(usdBalance) ? `$${usdBalance}` : "$0"}
      </div>
    </div>
  );
}

export default EthOverview;
