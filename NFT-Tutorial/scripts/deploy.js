const { ethers } = require("hardhat");

async function main() {
  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts, 
    so nftContract here is a factory for instance of our NFTee contract
  */

  const nftContract = await ethers.getContractFactory("NFTee");

  //here we deploy the contract
  const deployedNFTContract = await nftContract.deploy();

  //wait for the contract to deploy
  await deployedNFTContract.deployed();

  console.log("NFT Contract Address:", deployedNFTContract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
