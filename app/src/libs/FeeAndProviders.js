import { FeeAmount } from "@uniswap/v3-sdk";
import { Alchemy, Network } from "alchemy-sdk";
import { ethers } from "ethers";

export const provider = new ethers.providers.AlchemyProvider(
  "mainnet",
  import.meta.env.VITE_ALC_MAINNET_API
);

const settings = {
  apiKey: import.meta.env.VITE_MAINNET_API,
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);

export const fee = FeeAmount.MEDIUM;
