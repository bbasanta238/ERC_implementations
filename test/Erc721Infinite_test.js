const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Erc20infinte_test", () => {
	beforeEach(async () => {
		[add1, add2, add3] = await ethers.getSigners();
		contract = await ethers.getContractFactory("Erc721Infinite");
		deployedContract = await contract.deploy();
	});
	it("should have mint token", async () => {
        await deployedContract.connect(add2).safeMint(add2.address,"NFT_1")
        // let balance1 = await deployedContract.connect(add2).balanceOf(add1.address)
		expect (await deployedContract.connect(add1).ownerOf(1)).to.equal(add2.address)
		
		console.log(
			"token in the addres should be 1000000",
			await deployedContract.connect(add1).ownerOf(1)
		);


     
	});

    it("should have give the uri of metadata",async()=>{
        await deployedContract.connect(add2).safeMint(add2.address,"NFT_1")
        expect(await deployedContract.connect(add1).tokenURI(1)).to.equal("https://ERC721InfintieToken/tokenId/NFT_1")
    })
});