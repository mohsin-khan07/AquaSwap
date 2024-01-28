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

export const getQuote = async (tokenIn, tokenOut, amount) => {
  const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
    tokenIn.address,
    tokenOut.address,
    fee,
    fromReadableAmount(amount, tokenIn.decimals).toString(),
    0
  );
  return toReadableAmount(quotedAmountOut, tokenOut.decimals);
};
