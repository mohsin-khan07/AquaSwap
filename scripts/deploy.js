const hre = require("hardhat");

async function main() {
  const SingleSwap = await hre.ethers.getContractFactory("SingleSwap");
  const singleSwap = await SingleSwap.deploy();

  await singleSwap.waitForDeployment();

  console.log(`Contract deployed at ${singleSwap.target}`);
  // 0xb448B43d843883D016d100087B24264FE3FDA874
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
