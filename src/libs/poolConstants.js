import { ethers } from "ethers";
import { FeeAmount, computePoolAddress } from "@uniswap/v3-sdk";
import IUniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";

const POOL_FACTORY_CONTRACT_ADDRESS =
  "0x1F98431c8aD98523631AE4a59f267346ea31F984";

export const getPoolConstants = async (tokenIn, tokenOut, provider) => {
  const currPoolAddress = computePoolAddress({
    factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
    tokenA: tokenIn,
    tokenB: tokenOut,
    fee: FeeAmount.MEDIUM,
  });

  const poolContract = new ethers.Contract(
    currPoolAddress,
    IUniswapV3PoolABI.abi,
    provider
  );

  const slot0 = await poolContract.slot0();
  const sqrt = slot0.sqrtPriceX96.toString();

  const multiply = (sqrt / 2 ** 96) ** 2;
  const rate = (
    multiply /
    (10 ** tokenOut.decimals / 10 ** tokenIn.decimals)
  ).toFixed(6);

  const [token0, token1, fee] = await Promise.all([
    poolContract.token0(),
    poolContract.token1(),
    poolContract.fee(),
  ]);

  return {
    token0,
    token1,
    fee,
    rate,
  };
};
