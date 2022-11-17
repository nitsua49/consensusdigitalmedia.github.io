
const hre = require("hardhat");

async function main() {
  
  const ConsensusNFT = await hre.ethers.getContractFactory("ConsensusNFT");
  const consensusNFT = await ConsensusNFT.deploy();

  await consensusNFT.deployed();

  console.log("ConsensusNFT deployed to:", consensusNFT.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
