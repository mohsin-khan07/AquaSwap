/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";

const AmountsContext = createContext();

function AmountsContextProvider({ children }) {
  const [amountIn, setAmountIn] = useState(0);
  const [amountOut, setAmountOut] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const value = useMemo(() => {
    const value = {
      amountIn,
      setAmountIn,
      amountOut,
      setAmountOut,
      isLoading,
      setIsLoading,
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
