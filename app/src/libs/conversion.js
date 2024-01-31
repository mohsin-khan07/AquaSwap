import { ethers } from "ethers";

// const READABLE_FORM_LEN = 6;

export function fromReadableAmount(amount, decimals) {
  return ethers.utils.parseUnits(amount.toString(), decimals);
}

export function toReadableAmount(rawAmount, decimals) {
  return parseFloat(ethers.utils.formatUnits(rawAmount, decimals)).toFixed(4);
}
