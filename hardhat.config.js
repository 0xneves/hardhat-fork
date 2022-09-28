/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { 
  ETH
} = process.env;

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat:{
      forking:{
        url: `${ETH}`,
        blockNumber: 15560203
      }
    },    
  }
};
