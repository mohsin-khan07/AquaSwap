/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useGlobalContext } from "./GlobalContext";
import { Alchemy, Network, Utils } from "alchemy-sdk";

const AccountContext = createContext();

const settings = {
  apiKey: import.meta.env.VITE_MAINNET_API,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function AccountContextProvider({ children }) {
  const [ethBalance, setEthBalance] = useState();
  const [tokenBalancesObject, setTokenBalancesObject] = useState([]);
  const [tokenDataObjects, setTokenDataObjects] = useState([]);
  const [hideZeroBal, setHideZeroBal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [hasQueried, setHasQueried] = useState(false);

  const { userAddress } = useGlobalContext();

  useEffect(() => {
    if (userAddress) {
      const getEthBalance = async () => {
        const balance = await alchemy.core.getBalance(userAddress);
        const formattedBalance = parseFloat(
          Utils.formatUnits(balance, 18)
        ).toFixed(4);
        setEthBalance(formattedBalance);
      };
      getEthBalance();
    }
  }, [userAddress]);

  useEffect(() => {
    const getTokenData = async () => {
      if (userAddress) {
        try {
          setIsLoading(true);
          let data;

          if (userAddress.slice(-4) === ".eth")
            data = await alchemy.core.resolveName(userAddress);

          data = await alchemy.core.getTokenBalances(userAddress);
          setTokenBalancesObject(data);

          const tokenDataPromises = [];
          for (let i = 0; i < data.tokenBalances.length; i++) {
            const tokenData = alchemy.core.getTokenMetadata(
              data.tokenBalances[i].contractAddress
            );
            tokenDataPromises.push(tokenData);
          }

          setTokenDataObjects(await Promise.all(tokenDataPromises));
          setHasQueried(true);
        } catch (error) {
          console.error("Error fetching data");
        } finally {
          setIsLoading(false);
        }
      }
    };
    getTokenData();
  }, [userAddress]);

  return (
    <AccountContext.Provider
      value={{
        ethBalance,
        isLoading,
        tokenBalancesObject,
        tokenDataObjects,
        hasQueried,
        hideZeroBal,
        setHideZeroBal,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

function useAccountContext() {
  const context = useContext(AccountContext);
  if (!context)
    throw new Error(
      "useAccountContext must be used within AccountContextProvider"
    );
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useAccountContext, AccountContextProvider };
