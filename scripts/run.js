const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners()//In order to deploy something to the blockchain, we need to have a wallet address! Hardhat does this for us magically in the background, 
  //but here I grabbed the wallet address of contract owner and I also grabbed a random wallet address and called it randomPerson. This will make more sense in a moment.

  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal') //This will actually compile our contract and generate the necessary
  //files we need to work with our contract under the artifacts directory

  //What's happening here is Hardhat will create a local Ethereum network for us, but just for this contract.
  // Then, after the script completes it'll destroy that local network. So, every time you run the contract, it'll be a fresh blockchain
  const waveContract = await waveContractFactory.deploy()
    

  //We'll wait until our contract is officially deployed to our local blockchain! Our constructor runs when we actually deploy.
  await waveContract.deployed()


  console.log('Contract deployed to:', waveContract.address)
  console.log('Contract deployed by:', owner.address)// address of the person deploying our contract.

  await waveContract.getTotalWaves()

  const firstwaveTxn = await waveContract.wave()
  await firstwaveTxn.wait()

  await waveContract.getTotalWaves()

  //WHEN YOU  SOME OTHER PERSON WANT TO WAVE AT YOU
  const secondWaveTxn = await waveContract.connect(randomPerson).wave()
  await secondWaveTxn.wait()

  await waveContract.getTotalWaves()
}

const runMain = async () => {
  try {
    await main()
    process.exit(0) // exit Node process without error
  } catch (error) {
    console.log(error)
    process.exit(1) // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
}

runMain()
