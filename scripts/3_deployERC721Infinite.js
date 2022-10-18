const hre = require("hardhat");

async function main() {
  

  const contract = await hre.ethers.getContractFactory("Erc721Infinite");
  const contractInstance = await contract.deploy();

  await contractInstance.deployed();

  console.log(
    `deployed to ${contractInstance.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
