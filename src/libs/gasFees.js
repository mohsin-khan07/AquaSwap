import { Utils } from "alchemy-sdk";
import { fromReadableAmount } from "./conversion";
import { getPoolConstants } from "./poolConstants";

export const getGasFees = async (
  quoterContract,
  tokenIn,
  tokenOut,
  amountIn,
  provider,
  alchemy
) => {
  const poolConstants = await getPoolConstants(tokenIn, tokenOut, provider);

  const gasEstimate = await quoterContract.estimateGas.quoteExactInputSingle(
    poolConstants.token0,
    poolConstants.token1,
    poolConstants.fee,
    fromReadableAmount(amountIn, tokenIn.decimals).toString(),
    0
  );

  const gasPrice = (await alchemy.core.getGasPrice()).toString();

  const gasFee = Utils.formatUnits(gasPrice * gasEstimate.toString(), "ether");

  return gasFee;
};
