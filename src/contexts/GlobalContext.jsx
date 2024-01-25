/* eslint-disable react/prop-types */
import { useState } from "react";
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

  const getUsdBalance = async (ethBalance) => {
    parseFloat(ethBalance);
    const res = await fetch("https://api.coincap.io/v2/assets/ethereum");
    const resJson = await res.json();
    const ethPrice = parseFloat(resJson.data.priceUsd).toFixed(4);
    const usdBalance = ethBalance * ethPrice;
    return usdBalance.toFixed(4);
  };

  return (
    <GlobalContext.Provider
      value={{
        userAddress,
        getWalletAddress,
        walletError,
        walletConnected,
        getUsdBalance,
      }}
    >
      {children}
    </GlobalContext.Provider>
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
