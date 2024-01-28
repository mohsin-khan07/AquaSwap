export const getUsdBalance = async (ethBalance) => {
  parseFloat(ethBalance);
  const res = await fetch("https://api.coincap.io/v2/assets/ethereum");
  const resJson = await res.json();
  const ethPrice = parseFloat(resJson.data.priceUsd).toFixed(4);
  const usdBalance = ethBalance * ethPrice;
  return usdBalance.toFixed(4);
};

// useEffect(() => {
//   if (userAddress) {
//     const getEthBalance = async () => {
//       const balance = await alchemy.core.getBalance(userAddress);
//       const formattedBalance = parseFloat(
//         Utils.formatUnits(balance, 18)
//       ).toFixed(4);
//       setEthBalance(formattedBalance);
//     };
//     getEthBalance();
//   }
// }, [userAddress]);
