import Quoter from "@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json";
import { ethers } from "ethers";
import { fee, provider } from "./FeeAndProviders";
import { fromReadableAmount, toReadableAmount } from "./conversion";

const quoterContractAddress = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";

export const quoterContract = new ethers.Contract(
  quoterContractAddress,
  Quoter.abi,
  provider
);

export const getQuote = async (
  tokenInAdd,
  tokenInDec,
  tokenOutAdd,
  tokenOutDec,
  amount
) => {
  try {
    const quotedAmountOut =
      await quoterContract.callStatic.quoteExactInputSingle(
        tokenInAdd,
        tokenOutAdd,
        fee,
        fromReadableAmount(amount, tokenInDec).toString(),
        0
      );
    return toReadableAmount(quotedAmountOut, tokenOutDec);
  } catch (error) {
    console.error(error.message);
  }
};
