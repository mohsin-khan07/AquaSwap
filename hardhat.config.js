require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.7.6",
  networks: {
    sepolia: {
      url: import.meta.env.VITE_SEPOLIA_URL,
      account: [import.meta.env.VITE_PRIVATE_KEY],
    },
  },
};
