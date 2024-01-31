/* eslint-disable react/prop-types */
import styles from "../../styles/swap/Token.module.css";
import { useCallback, useEffect, useState } from "react";
import { calcTokenBalance } from "../../libs/tokenBalance";
import { useGlobalContext } from "../../contexts/GlobalContext";
import SelectButton from "./SelectButton";

function Token({ tokenAdd, tokenDec, tokenSym, setToken }) {
  const { userAddress } = useGlobalContext();

  const [tokenBalance, setTokenBalance] = useState(0);

  const getTokenBalance = useCallback(async () => {
    if (userAddress) {
      const tokenBalance = await calcTokenBalance(
        userAddress,
        tokenAdd,
        tokenDec
      );
      setTokenBalance(tokenBalance);
    }
  }, [userAddress, tokenAdd, tokenDec]);

  useEffect(() => {
    getTokenBalance();
  }, [getTokenBalance]);

  return (
    <div className={styles.container}>
      <SelectButton selectedToken={tokenSym} setToken={setToken} />
      <div className={styles.balance}>Balance: {tokenBalance}</div>
    </div>
  );
}

export default Token;
