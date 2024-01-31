import { Utils } from "alchemy-sdk";
import { alchemy } from "./FeeAndProviders";

export const calcTokenBalance = async (
  userAddress,
  tokenAddress,
  tokenDecimals
) => {
  const res = await alchemy.core.getTokenBalances(userAddress, [tokenAddress]);
  const [b1] = res.tokenBalances;
  return Utils.formatUnits(b1.tokenBalance, tokenDecimals);
};
