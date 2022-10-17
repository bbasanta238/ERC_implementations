// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract Erc20finite is ERC20Capped {
    constructor (uint initialSuplly) ERC20("ERC20finite","FTOK") ERC20Capped(300000*(10** decimals())){
        _mint(msg.sender, initialSuplly*(10**decimals()));
    }

    function mint(uint amount) public {
        _mint(msg.sender,amount*(10**decimals()));
    }
}