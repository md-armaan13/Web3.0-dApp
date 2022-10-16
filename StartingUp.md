
//  RUN THESE COMMAND IN THE TERMINAL IN THE CURRENT DIRECTORY
npm init -y
npm install --save-dev hardhat@latest

// THEN PREFORM THIS
npx hardhat

-> THEN CHOOSE Create A JavaScript Project

-> THEN INSTALL THESE DEPENDENCIES
npm install --save-dev chai @nomiclabs/hardhat-ethers ethers @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-chai-matchers

->  hardhat.config.js should look like this.

require("@nomicfoundation/hardhat-toolbox");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.17",
};


-> COMPILE  npx hardhat compile
-> RUN npx hardhat test

->Go ahead and delete the file Lock.js under test.  Also, delete deploy.js under scripts. Then, delete Lock.sol under contracts. Don't delete the actual folders!


-> TO RIIN THE SCRIPT npx hardhat run scripts/run.js