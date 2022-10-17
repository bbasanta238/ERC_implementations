const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Erc20infinte_test", () => {
	beforeEach(async () => {
		[add1, add2, add3] = await ethers.getSigners();
		contract = await ethers.getContractFactory("Erc20Infinite");
		deployedContract = await contract.deploy(100000);
	});
	it("should have mint token", async () => {
        let balance1 = await deployedContract.connect(add1).balanceOf(add1.address)
		expect (100000).to.equal(Math.round(balance1/(10**18)))
		
		console.log(
			"token in the addres should be 1000000",
			await deployedContract.connect(add1).balanceOf(add1.address)
		);

        console.log(" **************** After minting again ******************")
        await deployedContract.connect(add1).mint(100000)
        let balance2 = await deployedContract.connect(add1).balanceOf(add1.address)
		expect (200000).to.equal(Math.round(balance2/(10**18)))
        console.log("token in the address after reminiting 1000000", await deployedContract.connect(add1).balanceOf(add1.address))
	});
});