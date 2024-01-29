import styles from "../../styles/swap/TokenContainer.module.css";
import { useTokensContext } from "../../contexts/TokensContext";
import { useAmountsContext } from "../../contexts/AmountsContext";
import { useMemo } from "react";
import Token from "./Token";
import Amount from "./Amount";

function TokenIn() {
  const { tokenIn, setTokenIn } = useTokensContext();
  const { amountIn, setAmountIn } = useAmountsContext();

  const tokenData = useMemo(() => {
    const tokenData = {
      tokenAdd: tokenIn.address,
      tokenDec: tokenIn.decimals,
      tokenSym: tokenIn.symbol,
      setToken: setTokenIn,
    };
    return tokenData;
  }, [tokenIn.address, tokenIn.decimals, tokenIn.symbol, setTokenIn]);

  const amountData = useMemo(() => {
    const amountData = {
      amount: amountIn,
      setAmount: setAmountIn,
    };
    return amountData;
  }, [amountIn, setAmountIn]);

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

export default TokenIn;
