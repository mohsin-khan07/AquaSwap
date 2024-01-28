/* eslint-disable react/prop-types */
import styles from "../../styles/swap/Token.module.css";
import { useEffect, useState } from "react";
import { calcTokenBalance } from "../../libs/tokenBalance";
import { useGlobalContext } from "../../contexts/GlobalContext";
import SelectButton from "./SelectButton";

function Token({ token, setToken }) {
  const { userAddress } = useGlobalContext();

  const [tokenBalance, setTokenBalance] = useState(0);

  useEffect(() => {
    const getTokenBalance = async () => {
      if (userAddress) {
        const tokenBalance = await calcTokenBalance(
          userAddress,
          token.address,
          token.decimals
        );
        setTokenBalance(tokenBalance);
      }
    };
    getTokenBalance();
  }, [userAddress, token.address, token.decimals]);

  return (
    <div className={styles.container}>
      <SelectButton selectedToken={token.symbol} setToken={setToken} />
      <div className={styles.balance}>Balance: {tokenBalance}</div>
    </div>
  );
}

export default Token;
