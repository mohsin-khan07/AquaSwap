/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useTokensContext } from "./TokensContext";
import { getQuote } from "../libs/quote";

const AmountsContext = createContext();

function AmountsContextProvider({ children }) {
  const [amountIn, setAmountIn] = useState(0);
  const [amountOut, setAmountOut] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { tokenIn, tokenOut } = useTokensContext();

  useEffect(() => {
    if (amountIn !== 0) {
      const calcAmountOut = async () => {
        setIsLoading(true);
        const quote = await getQuote(
          tokenIn.address,
          tokenIn.decimals,
          tokenOut.address,
          tokenOut.decimals,
          amountIn
        );
        setAmountOut(quote);
        setIsLoading(false);
      };
      calcAmountOut();
    }
  }, [
    tokenIn.address,
    tokenIn.decimals,
    tokenOut.address,
    tokenOut.decimals,
    amountIn,
  ]);

  const value = useMemo(() => {
    const value = {
      amountIn,
      setAmountIn,
      amountOut,
      setAmountOut,
      isLoading,
    };
    return value;
  }, [amountIn, amountOut, isLoading]);

  return (
    <AmountsContext.Provider value={value}>{children}</AmountsContext.Provider>
  );
}

function useAmountsContext() {
  const context = useContext(AmountsContext);
  if (!context)
    throw new Error(
      "useAmountsContext must be used within AmountsContextProvider"
    );
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AmountsContextProvider, useAmountsContext };
