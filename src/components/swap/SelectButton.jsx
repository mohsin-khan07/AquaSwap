/* eslint-disable react/prop-types */
import { tokens } from "../../libs/tokens";
import styles from "../../styles/swap/SelectButton.module.css";

function SelectButton({ selectedToken, otherToken, setToken, setOtherToken }) {
  function tokenFromSymbol(symbol) {
    const token = tokens.find((token) => token.symbol === symbol);
    if (token === otherToken) {
      setOtherToken(tokens.find((token) => token.symbol === selectedToken));
      setToken(token);
    } else setToken(token);
  }

  return (
    <div className={styles.button}>
      {/* <img className={styles.icon} src="ethIcon.svg" alt="icon"></img> */}
      <select
        value={selectedToken}
        onChange={(e) => tokenFromSymbol(e.target.value)}
      >
        {tokens.map((token) => (
          <option key={token.symbol}>{token.symbol}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectButton;
