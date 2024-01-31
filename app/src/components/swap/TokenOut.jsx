import styles from "../../styles/swap/TokenContainer.module.css";
import { useTokensContext } from "../../contexts/TokensContext";
import { useAmountsContext } from "../../contexts/AmountsContext";
import { useMemo } from "react";
import Token from "./Token";
import Amount from "./Amount";

function TokenOut() {
  const { tokenOut, setTokenOut } = useTokensContext();
  const { amountOut, setAmountOut } = useAmountsContext();

  const tokenData = useMemo(() => {
    const tokenData = {
      tokenAdd: tokenOut.address,
      tokenDec: tokenOut.decimals,
      tokenSym: tokenOut.symbol,
      setToken: setTokenOut,
    };
    return tokenData;
  }, [tokenOut.address, tokenOut.decimals, tokenOut.symbol, setTokenOut]);

  const amountData = useMemo(() => {
    const amountData = {
      amount: amountOut,
      setAmount: setAmountOut,
    };
    return amountData;
  }, [amountOut, setAmountOut]);

  return (
    <div className={styles.container}>
      <Token
        tokenAdd={tokenData.tokenAdd}
        tokenDec={tokenData.tokenDec}
        tokenSym={tokenData.tokenSym}
        setToken={tokenData.setToken}
      />
      <Amount amount={amountData.amount} setAmount={amountData.setAmount} />
    </div>
  );
}

export default TokenOut;
