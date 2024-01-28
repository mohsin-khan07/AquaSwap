/* eslint-disable react/prop-types */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { tokens } from "../libs/tokens";

const TokensContext = createContext();

function TokensContextProvider({ children }) {
  const [tokenIn, setTokenIn] = useState(tokens[0]);
  const [tokenOut, setTokenOut] = useState(tokens[1]);

  const onReverse = useCallback(() => {
    setTokenIn(tokenOut);
    setTokenOut(tokenIn);
  }, [tokenIn, tokenOut]);

  const value = useMemo(() => {
    const value = { tokenIn, setTokenIn, tokenOut, setTokenOut, onReverse };
    return value;
  }, [tokenIn, tokenOut, onReverse]);

  return (
    <TokensContext.Provider value={value}>{children}</TokensContext.Provider>
  );
}

function useTokensContext() {
  const context = useContext(TokensContext);
  if (!context)
    throw new Error(
      "useTokenContext must be used within TokensContextProvider"
    );
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { TokensContextProvider, useTokensContext };
