const { ethers } = require("hardhat");

const impersonate_wallet = "0x10bf1Dcb5ab7860baB1C3320163C6dddf8DCC0e4";

async function impersonate() {
    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [impersonate_wallet]
    })
  
    const signer = await ethers.getSigner(impersonate_wallet);
    console.log("Account address: %s", signer.address);
  
    return signer
  }

describe("Deploy contract", function () { 
    it("Should deploy the contract at contracts/Example.sol", async function () {
        const account = await impersonate();
        const factory = await ethers.getContractFactory("Example", account)
        const contract = await factory.deploy()
        await contract.deployed()
        console.log("\n Contract address: ", contract.address)
    }).timeout(10000000)
})