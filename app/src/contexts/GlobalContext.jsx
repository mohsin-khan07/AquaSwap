/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [userAddress, setUserAddress] = useState("");
  const [walletError, setWalletError] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const getWalletAddress = async () => {
    if (window.ethereum) {
      try {
        const eth = window.ethereum;
        const address = await eth.request({ method: "eth_requestAccounts" });
        setUserAddress(address[0]);
        setWalletConnected(true);
      } catch (error) {
        console.error("Error connecting with wallet!");
        setWalletError(true);
      }
    } else {
      alert("No wallet is available to connect");
    }
  };

  const value = useMemo(() => {
    const value = {
      userAddress,
      getWalletAddress,
      walletError,
      walletConnected,
    };
    return value;
  }, [userAddress, walletConnected, walletError]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error(
      "useGlobalContext must be used within GlobalContextProvider"
    );
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { GlobalContextProvider, useGlobalContext };
