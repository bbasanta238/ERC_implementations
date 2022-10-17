// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Erc20infinite is ERC20{
    constructor(uint intialSupply) ERC20("InfiniteToken","ITOK"){
        _mint(msg.sender,intialSupply * (10 ** decimals() ));
    }

    function mint(uint amount) public {
        _mint(msg.sender, amount * (10 ** decimals()));
    }
}