/* eslint-disable react/prop-types */
import styles from "../../styles/account/TokenItem.module.css";
import TokenDetails from "./TokenDetails";

function TokenItem({ icon, symbol, tokenName, balance }) {
  const decimalBalance = parseFloat(balance);
  let formattedBalance = decimalBalance.toFixed(2);

  return (
    <div className={styles.container}>
      <TokenDetails icon={icon} symbol={symbol} tokenName={tokenName} />
      <div className={styles.balance}>{formattedBalance}</div>
    </div>
  );
}

export default TokenItem;
