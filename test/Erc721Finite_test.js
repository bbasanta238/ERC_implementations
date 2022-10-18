const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Erc20Finite_test", () => {
	beforeEach(async () => {
		[add1, add2, add3] = await ethers.getSigners();
		contract = await ethers.getContractFactory("Erc721Finite");
		deployedContract = await contract.deploy();
	});
	it("should have mint token", async () => {
        await deployedContract.connect(add2).safeMint(add2.address,"NFT_1")
		expect (await deployedContract.connect(add1).ownerOf(1)).to.equal(add2.address)
		
	});

    it("should have revert transaction if minting exceeds total supply",async()=>{
        await deployedContract.connect(add2).safeMint(add2.address,"NFT_1")
        await deployedContract.connect(add2).safeMint(add2.address,"NFT_2")
        await deployedContract.connect(add2).safeMint(add2.address,"NFT_3")
       await  expect(deployedContract.connect(add3).safeMint(add3.address,"NFT_4")).to.be.revertedWith("Token cannot exceeds Max Supply")
    })
});