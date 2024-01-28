import { Utils } from "alchemy-sdk";
import { fromReadableAmount } from "./conversion";
import { quoterContract } from "./quote";
import { alchemy, fee } from "./FeeAndProviders";
import { calcUsdBalance } from "./ethToUsd";

export const calcGasFees = async (
  tokenInAddress,
  tokenOutAddress,
  tokenInDecimals,
  amount
) => {
  if (amount !== 0) {
    try {
      const gasEstimate =
        await quoterContract.estimateGas.quoteExactInputSingle(
          tokenInAddress,
          tokenOutAddress,
          fee,
          fromReadableAmount(amount, tokenInDecimals).toString(),
          0
        );

      const gasPrice = (await alchemy.core.getGasPrice()).toString();
      const gasFee = Utils.formatUnits(
        gasPrice * gasEstimate.toString(),
        "ether"
      );

      const gasFeeInUsd = await calcUsdBalance(gasFee);
      return gasFeeInUsd;
    } catch {
      throw new Error("Error calculating gas fees!");
    }
  }
};
