/* eslint-disable react/prop-types */
import { useGlobalContext } from "../contexts/GlobalContext";
import { useSwapContext } from "../contexts/SwapContext";
import styles from "../styles/Button.module.css";

function Button() {
  const { userAddress, getWalletAddress } = useGlobalContext();
  const { tokenIn, tokenOut, amountIn } = useSwapContext();

  const isButtonDisabled = !tokenIn || !tokenOut || !amountIn;

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

// {!tokenIn && !tokenOut && !amountIn}
