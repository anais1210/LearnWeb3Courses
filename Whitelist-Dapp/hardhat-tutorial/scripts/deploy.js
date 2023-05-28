const { ethers } = require("hardhat");

async function main() {
  /**
   * A contract factory in ethers.js is an abstraction used to deploy new smart contract,
   * so whitelisteContract here is a factory for instances of our Whitelist contract.
   */
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  // here we deploy the contract
  const deployedWhitelistContract = await whitelistContract.deploy(10);
  // 10 is the maximum number of whitelisted addresses allowed

  // Wait for it to finish deploying
  await deployedWhitelistContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Whitelist contrcat address: ",
    deployedWhitelistContract.address
  );
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
