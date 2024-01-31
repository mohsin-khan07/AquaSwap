/* eslint-disable react/prop-types */
import { useAmountsContext } from "../contexts/AmountsContext";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useTokensContext } from "../contexts/TokensContext";
import styles from "../styles/Button.module.css";

function Button() {
  const { userAddress, getWalletAddress } = useGlobalContext();
  const { tokenIn, tokenOut } = useTokensContext();
  const { amountIn, amountOut } = useAmountsContext();

  const isButtonDisabled =
    !tokenIn.address || !tokenOut.address || !amountIn || !amountOut;

  if (userAddress) {
    return (
      <div
        // onClick={onSwap}
        className={`${styles.button} ${
          isButtonDisabled ? styles.disabled : ""
        }`}
        disabled={isButtonDisabled}
      >
        Swap
      </div>
    );
  } else {
    return (
      <div onClick={getWalletAddress} className={styles.button}>
        Connect Wallet
      </div>
    );
  }
}

export default Button;
