/* eslint-disable react/prop-types */
import Quoter from "@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json";
import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";
import { fromReadableAmount, toReadableAmount } from "../libs/conversion";
import { getPoolConstants } from "../libs/poolConstants";

const SwapContext = createContext();

const QUOTER_CONTRACT_ADDRESS = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";

const provider = new ethers.providers.AlchemyProvider(
  "homestead",
  import.meta.env.VITE_ALCHEMY_API
);

const quoterContract = new ethers.Contract(
  QUOTER_CONTRACT_ADDRESS,
  Quoter.abi,
  provider
);

function SwapContextProvider({ children }) {
  const [tokenIn, setTokenIn] = useState();
  const [tokenOut, setTokenOut] = useState();
  const [amountIn, setAmountIn] = useState(0);
  const [outputAmount, setOutputAmount] = useState("");

  useEffect(() => {
    const getQuote = async () => {
      if (tokenIn && tokenOut) {
        const poolConstants = await getPoolConstants(
          tokenIn,
          tokenOut,
          provider
        );

        const quotedAmountOut =
          await quoterContract.callStatic.quoteExactInputSingle(
            poolConstants.token0,
            poolConstants.token1,
            poolConstants.fee,
            fromReadableAmount(amountIn, tokenIn.decimals).toString(),
            0
          );

        console.log(toReadableAmount(quotedAmountOut, tokenOut.decimals));

        setOutputAmount(toReadableAmount(quotedAmountOut, tokenOut.decimals));
      }
    };
    getQuote();
  }, [amountIn, tokenIn, tokenOut]);

  // const getQuote = async () => {
  //   const poolConstants = await getPoolConstants(tokenIn, tokenOut, provider);

  //   const quotedAmountOut =
  //     await quoterContract.callStatic.quoteExactInputSingle(
  //       poolConstants.token0,
  //       poolConstants.token1,
  //       poolConstants.fee,
  //       fromReadableAmount(amountIn, tokenIn.decimals).toString(),
  //       0
  //     );

  //   setOutputAmount(toReadableAmount(quotedAmountOut, tokenOut.decimals));
  // };

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
