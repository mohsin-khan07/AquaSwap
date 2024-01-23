import styles from "./TokensList.module.css";
import TokenItem from "./TokenItem";
import { useAccountContext } from "../../contexts/AccountContext";
import { Utils } from "alchemy-sdk";
import { useGlobalContext } from "../../contexts/GlobalContext";
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

{
  /* {tokenBalancesObject.tokenBalances.map((token, i) => {
        if (isActive) {
          if (token.tokenBalance.toString() !== "0") {
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
        }
      })} */
}
