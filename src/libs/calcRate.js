import IUniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
import { ethers } from "ethers";
import { computePoolAddress } from "@uniswap/v3-sdk";
import { tokens } from "./tokens";

const factoryAddress = "0x1F98431c8aD98523631AE4a59f267346ea31F984";

export const calcRate = async (provider, tokenIn, tokenOut, fee) => {
  try {
    const poolAddress = computePoolAddress({
      factoryAddress: factoryAddress,
      tokenA: tokenIn,
      tokenB: tokenOut,
      fee: fee,
    });

    const poolContract = new ethers.Contract(
      poolAddress,
      IUniswapV3PoolABI.abi,
      provider
    );

    const [token0, token1, slot0] = await Promise.all([
      poolContract.token0(),
      poolContract.token1(),
      poolContract.slot0(),
    ]);

    const decimal0 = tokens.find((token) => token.address === token0).decimals;
    const decimal1 = tokens.find((token) => token.address === token1).decimals;

    const sqrt = slot0.sqrtPriceX96.toString();

    const temp = (sqrt / 2 ** 96) ** 2;
    const buyOneOfTokenIn = (temp / (10 ** decimal1 / 10 ** decimal0)).toFixed(
      6
    );

    const buyOneOfTokenOut = (1 / buyOneOfTokenIn).toFixed(6);

    if (token0 === tokenIn.address) return buyOneOfTokenIn;
    else return buyOneOfTokenOut;
  } catch {
    throw new Error("Error calculating rate!");
  }
};
