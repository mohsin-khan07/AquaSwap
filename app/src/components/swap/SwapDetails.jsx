/* eslint-disable react/prop-types */
import styles from "../../styles/swap/SwapDetails.module.css";
import { useTokensContext } from "../../contexts/TokensContext";
import { useAmountsContext } from "../../contexts/AmountsContext";
import { memo, useEffect, useState } from "react";
import { calcRate } from "../../libs/calcRate";
import { calcGasFees } from "../../libs/gasFees";

const SwapDetails = memo(function SwapDetails() {
  const { tokenIn, tokenOut } = useTokensContext();
  const { amountIn, amountOut } = useAmountsContext();

  const [rate, setRate] = useState();
  const [gasFee, setGasFee] = useState();

  useEffect(() => {
    const getRate = async () => {
      const rate = await calcRate(tokenIn, tokenOut);
      setRate(rate);
    };
    getRate();
  }, [tokenIn, tokenOut]);

  useEffect(() => {
    const getGasFees = async () => {
      if (amountIn !== 0 && amountOut !== 0) {
        const gasFee = await calcGasFees(
          tokenIn.address,
          tokenOut.address,
          tokenIn.decimals,
          amountIn
        );
        setGasFee(gasFee);
      }
    };
    getGasFees();
  }, [tokenIn.address, tokenOut.address, tokenIn.decimals, amountIn, amountOut]);

  return (
    <div className={styles.list}>
      <Details
        title={"Rate"}
        value={
          rate ? `1 ${tokenIn.symbol} = ${rate} ${tokenOut.symbol}` : "..."
        }
      />
      <Details
        title={"Estimated Gas Fees"}
        value={gasFee ? `$${gasFee}` : "..."}
      />
      <Details
        title={"Fee (0.3%)"}
        value={
          amountOut
            ? `${(amountOut * 0.003).toFixed(4)} ${tokenOut.symbol}`
            : "..."
        }
      />
    </div>
  );
});

function Details({ title, value }) {
  return (
    <div className={styles.details}>
      <div>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default SwapDetails;
