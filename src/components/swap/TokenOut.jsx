import styles from "../../styles/swap/TokenContainer.module.css";
import { useTokensContext } from "../../contexts/TokensContext";
import { useAmountsContext } from "../../contexts/AmountsContext";
import Token from "./Token";
import Amount from "./Amount";

function TokenOut() {
  const { tokenOut, setTokenOut } = useTokensContext();
  const { setAmountOut } = useAmountsContext();

  return (
    <div className={styles.container}>
      <Token token={tokenOut} setToken={setTokenOut} />
      <Amount setAmount={setAmountOut} />
    </div>
  );
}

export default TokenOut;
