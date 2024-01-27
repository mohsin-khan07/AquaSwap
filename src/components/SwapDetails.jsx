/* eslint-disable react/prop-types */
import { useSwapContext } from "../contexts/SwapContext";
import styles from "../styles/SwapDetails.module.css";

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
    <>
      <div className={styles.hLine}></div>
      <div className={styles.list}>
        {tokenIn && tokenOut && rate ? (
          <Details
            title={"Rate"}
            value={`1 ${tokenIn.symbol} = ${rate} ${tokenOut.symbol}`}
          />
        ) : (
          ""
        )}
        {gasFees ? (
          <Details title={"Estimated Gas Fees"} value={`$${gasFees}`} />
        ) : (
          ""
        )}

        {outputAmount ? (
          <Details
            title={"Fee (0.3%)"}
            value={`${(outputAmount * 0.003).toFixed(4)} ${tokenOut.symbol}`}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

function Details({ title, value }) {
  return (
    <div className={styles.details}>
      <div>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default SwapDetails;
