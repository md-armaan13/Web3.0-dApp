// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17; //This is the version of the Solidity compiler we want our contract to use

// version of solidity

import "hardhat/console.sol";//Some magic given to us by Hardhat to do some console logs in our contract


//Once we initialize this contract for the first time, that constructor will run and print out that line
contract WavePortal {
//we also added a totalWaves variable that automatically is initialized to 0. 
//But, this variable is special because it's called a "state variable" and it's cool because it's stored permanently in contract storage.
    uint256 totalWaves;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }
      function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);//msg.sender. This is the wallet address of the person who called the function
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}