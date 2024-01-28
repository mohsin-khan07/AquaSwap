/* eslint-disable react/prop-types */
import { useTokensContext } from "../../contexts/TokensContext";
import styles from "../../styles/swap/ReverseArrow.module.css";

function ReverseArrow() {
  const { onReverse } = useTokensContext();

  return (
    <div className={styles.container}>
      <div className={styles.circle} onClick={onReverse}>
        <img className={styles.arrow} src="reverseArrow.svg" alt="arrow"></img>
      </div>
      <div className={styles.hLine}></div>
    </div>
  );
}

export default ReverseArrow;
