import styles from "../../styles/swap/TokenContainer.module.css";
import { useTokensContext } from "../../contexts/TokensContext";
import { useAmountsContext } from "../../contexts/AmountsContext";
import Token from "./Token";
import Amount from "./Amount";

function TokenIn() {
  const { tokenIn, setTokenIn } = useTokensContext();
  const { setAmountIn } = useAmountsContext();

  return (
    <div className={styles.container}>
      <Token token={tokenIn} setToken={setTokenIn} />
      <Amount setAmount={setAmountIn} />
    </div>
  );
}

export default TokenIn;
