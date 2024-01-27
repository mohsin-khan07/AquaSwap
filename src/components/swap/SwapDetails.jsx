/* eslint-disable react/prop-types */
import { useSwapContext } from "../../contexts/SwapContext";
import styles from "../../styles/swap/SwapDetails.module.css";

function SwapDetails() {
  return (
    <div className={styles.container}>
      <DetailsList />
    </div>
  );
}

function DetailsList() {
  const { tokenIn, tokenOut, outputAmount, rate, gasFees } = useSwapContext();

  return (
    <div className={styles.list}>
      <Details
        title={"Rate"}
        value={
          tokenIn && tokenOut && rate
            ? `1 ${tokenIn.symbol} = ${rate} ${tokenOut.symbol}`
            : "..."
        }
      />
      <Details
        title={"Estimated Gas Fees"}
        value={gasFees ? `$${gasFees}` : "..."}
      />
      <Details
        title={"Fee (0.3%)"}
        value={
          outputAmount && tokenOut
            ? `${(outputAmount * 0.003).toFixed(4)} ${tokenOut.symbol}`
            : "..."
        }
      />
    </div>
  );
}

//tokenIn && tokenOut && outputAmount && rate && gasFees

function Details({ title, value }) {
  return (
    <div className={styles.details}>
      <div>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default SwapDetails;
