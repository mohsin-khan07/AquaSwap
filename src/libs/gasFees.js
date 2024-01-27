import { Utils } from "alchemy-sdk";
import { fromReadableAmount } from "./conversion";

export const getGasFees = async (
  quoterContract,
  tokenIn,
  tokenOut,
  amountIn,
  fee,
  alchemy
) => {
  const gasEstimate = await quoterContract.estimateGas.quoteExactInputSingle(
    tokenIn.address,
    tokenOut.address,
    fee,
    fromReadableAmount(amountIn, tokenIn.decimals).toString(),
    0
  );

  const gasPrice = (await alchemy.core.getGasPrice()).toString();

  const gasFee = Utils.formatUnits(gasPrice * gasEstimate.toString(), "ether");

  return gasFee;
};
