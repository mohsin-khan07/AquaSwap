import styles from "../../styles/account/TokensList.module.css";
import { Utils } from "alchemy-sdk";
import { useAccountContext } from "../../contexts/AccountContext";
import { useGlobalContext } from "../../contexts/GlobalContext";
import TokenItem from "./TokenItem";
import Spinner from "./Spinner";

function TokensList() {
  const {
    isLoading,
    hasQueried,
    tokenBalancesObject,
    tokenDataObjects,
    hideZeroBal,
  } = useAccountContext();

  const { walletConnected, walletError } = useGlobalContext();

  return (
    <div className={styles.list}>
      {!walletError ? (
        walletConnected ? (
          !isLoading ? (
            hasQueried ? (
              tokenBalancesObject.tokenBalances.map((token, i) => {
                if (hideZeroBal) {
                  const tokenBal =
                    tokenBalancesObject.tokenBalances[i].tokenBalance;
                  const decimal = parseInt(
                    tokenBal,
                    tokenDataObjects[i].decimals
                  );
                  if (decimal !== 0) {
                    return (
                      <TokenItem
                        key={token.contractAddress}
                        icon={tokenDataObjects[i].logo}
                        tokenName={tokenDataObjects[i].name}
                        symbol={tokenDataObjects[i].symbol}
                        balance={Utils.formatUnits(
                          token.tokenBalance,
                          tokenDataObjects[i].decimals
                        )}
                      />
                    );
                  }
                } else {
                  return (
                    <TokenItem
                      key={token.contractAddress}
                      icon={tokenDataObjects[i].logo}
                      tokenName={tokenDataObjects[i].name}
                      symbol={tokenDataObjects[i].symbol}
                      balance={Utils.formatUnits(
                        token.tokenBalance,
                        tokenDataObjects[i].decimals
                      )}
                    />
                  );
                }
              })
            ) : (
              <Spinner />
            )
          ) : (
            <Spinner />
          )
        ) : (
          "Please connect your wallet!"
        )
      ) : (
        "Error connecting the wallet!"
      )}
    </div>
  );
}

export default TokensList;
