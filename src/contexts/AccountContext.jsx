/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useGlobalContext } from "./GlobalContext";
import { alchemy } from "../libs/FeeAndProviders";

const AccountContext = createContext();

function AccountContextProvider({ children }) {
  const [tokenBalancesObject, setTokenBalancesObject] = useState([]);
  const [tokenDataObjects, setTokenDataObjects] = useState([]);
  const [hideZeroBal, setHideZeroBal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasQueried, setHasQueried] = useState(false);

  const { userAddress } = useGlobalContext();

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

  const value = useMemo(() => {
    const value = {
      isLoading,
      tokenBalancesObject,
      tokenDataObjects,
      hasQueried,
      hideZeroBal,
      setHideZeroBal,
    };
    return value;
  }, [
    isLoading,
    tokenBalancesObject,
    tokenDataObjects,
    hasQueried,
    hideZeroBal,
  ]);

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
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
