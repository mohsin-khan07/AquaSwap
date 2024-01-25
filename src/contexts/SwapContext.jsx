/* eslint-disable react/prop-types */
import Quoter from "@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json";
import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";
import { fromReadableAmount, toReadableAmount } from "../libs/conversion";
import { getPoolConstants } from "../libs/poolConstants";
import { Alchemy, Network, Utils } from "alchemy-sdk";
import { useGlobalContext } from "./GlobalContext";
import { getGasFees } from "../libs/gasFees";

const SwapContext = createContext();

const QUOTER_CONTRACT_ADDRESS = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";

const provider = new ethers.providers.AlchemyProvider(
  "mainnet",
  import.meta.env.VITE_MAINNET_API
);

const settings = {
  apiKey: import.meta.env.VITE_MAINNET_API,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const quoterContract = new ethers.Contract(
  QUOTER_CONTRACT_ADDRESS,
  Quoter.abi,
  provider
);

function SwapContextProvider({ children }) {
  const [tokenIn, setTokenIn] = useState();
  const [tokenInBalance, setTokenInBalance] = useState();
  const [tokenOut, setTokenOut] = useState();
  const [tokenOutBalance, setTokenOutBalance] = useState();
  const [amountIn, setAmountIn] = useState(0);
  const [outputAmount, setOutputAmount] = useState("");
  const [rate, setRate] = useState();
  const [gasFees, setGasFees] = useState();

  const { userAddress, getUsdBalance } = useGlobalContext();

  useEffect(() => {
    const getQuote = async () => {
      if (tokenIn && tokenOut) {
        const poolConstants = await getPoolConstants(
          tokenIn,
          tokenOut,
          provider
        );

        setRate(poolConstants.rate);

        if (amountIn !== 0) {
          try {
            const quotedAmountOut =
              await quoterContract.callStatic.quoteExactInputSingle(
                poolConstants.token0,
                poolConstants.token1,
                poolConstants.fee,
                fromReadableAmount(amountIn, tokenIn.decimals).toString(),
                0
              );
            setOutputAmount(
              toReadableAmount(quotedAmountOut, tokenOut.decimals)
            );
          } catch (error) {
            console.error(error.message);
          }
        }
      }
    };
    getQuote();
  }, [amountIn, tokenIn, tokenOut, getUsdBalance]);

  useEffect(() => {
    if (userAddress) {
      try {
        if (tokenIn) {
          const calTokenInBalance = async () => {
            const res = await alchemy.core.getTokenBalances(userAddress, [
              tokenIn.address,
            ]);
            const [b1] = res.tokenBalances;
            setTokenInBalance(
              Utils.formatUnits(b1.tokenBalance, tokenIn.decimals)
            );
          };
          calTokenInBalance();
        }
        if (tokenOut) {
          const calTokenOutBalance = async () => {
            const res = await alchemy.core.getTokenBalances(userAddress, [
              tokenOut.address,
            ]);

            const [b2] = res.tokenBalances;
            setTokenOutBalance(
              Utils.formatUnits(b2.tokenBalance, tokenOut.decimals)
            );
          };
          calTokenOutBalance();
        }
      } catch (error) {
        throw new Error("Error fetching tokens balances");
      }
    }
  }, [userAddress, tokenIn, tokenOut]);

  useEffect(() => {
    const gasFees = async () => {
      if (tokenIn && tokenOut && amountIn !== 0) {
        const gasFee = await getGasFees(
          quoterContract,
          tokenIn,
          tokenOut,
          amountIn,
          provider,
          alchemy
        );
        const gasInUsd = await getUsdBalance(gasFee);
        setGasFees(gasInUsd);
      }
    };
    gasFees();
  }, [amountIn, tokenIn, tokenOut, getUsdBalance]);

  return (
    <SwapContext.Provider
      value={{
        tokenIn,
        tokenOut,
        amountIn,
        setTokenIn,
        setTokenOut,
        setAmountIn,
        outputAmount,
        tokenInBalance,
        tokenOutBalance,
        rate,
        gasFees,
      }}
    >
      {children}
    </SwapContext.Provider>
  );
}

function useSwapContext() {
  const context = useContext(SwapContext);
  if (!context)
    throw new Error("useSwapContext must be used within SwapContextProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { SwapContextProvider, useSwapContext };
