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
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://methodical-warmhearted-lambo.ethereum-goerli.discover.quiknode.pro/b75f5e0ed8dc69acfea4a504d25827b66046a94e/",
      accounts: ["6fb6b08acf3a52027d7cde06c9c9c54085f738384a3a7e9d46d8ac1a81803dc4"]
    },
  },
};
