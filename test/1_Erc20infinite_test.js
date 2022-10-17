const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Erc20infinte_test", () => {
	beforeEach(async () => {
		[add1, add2, add3] = await ethers.getSigners();
		contract = await ethers.getContractFactory("Erc20infinite");
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

	// it("should revert transaction if owner apply for lottery", async () => {
	// 	await expect(
	// 		deployedContract.connect(add1).applyLottery(101, { value: 999 })
	// 	).to.be.revertedWith("Owner can't participate");
	// });
	// it("should revert transaction if paid value is less or greater than lottery price", async () => {
	// 	await expect(
	// 		deployedContract.connect(add2).applyLottery(101, { value: 929 })
	// 	).to.be.revertedWith("paid balance is greater or less than lottery price");
	// 	await expect(
	// 		deployedContract.connect(add2).applyLottery(101, { value: 1000 })
	// 	).to.be.revertedWith("paid balance is greater or less than lottery price");
	// });
});