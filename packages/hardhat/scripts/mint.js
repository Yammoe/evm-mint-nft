/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

const delayMS = 1000 //sometimes xDAI needs a 6000ms break lol 😅

const main = async () => {

  // ADDRESS TO MINT TO:
  const toAddress = "0x7A63FD46d5eDB9bA7b09CAb488Eb7950e1D8cE78"
  const gasLimit = 8000000;
  console.log("\n\n 🎫 Minting to "+toAddress+"...\n");

  const { deployer } = await getNamedAccounts();
  const yourCollectible = await ethers.getContract("YourCollectible", deployer);

  const buffalo = {
    "name": "Catalina Whale 2517",
    "image": "https://www.arweave.net/JLkyhrKKAEix4DgZSecoIbxPKAPFNjfxj5rQ44fycbY?ext=png",
    "description": "The most exclusive gathering of Whales in the Western Hemisphere since 1997. The genesis project from WAGMI Beach.",
    "attributes": [
      {
        "trait_type": "Background",
        "value": "Analog"
      },
      {
        "trait_type": "Body",
        "value": "Aqua"
      },
      {
        "trait_type": "Clothing",
        "value": "Poncho"
      },
      {
        "trait_type": "Mouth",
        "value": "Cigarette"
      },
      {
        "trait_type": "Hair Hole",
        "value": "Rainbow"
      },
      {
        "trait_type": "Eyes",
        "value": "Eyes"
      }
    ],
  }
  console.log("Uploading buffalo...")
  const uploaded = await ipfs.add(JSON.stringify(buffalo))

  console.log("Minting buffalo with IPFS hash ("+uploaded.path+")")
  await yourCollectible.mintItem(toAddress,uploaded.path,{ gasLimit })


  await sleep(delayMS)


  const zebra = {
    "name": "Catalina Whale 2581",
    "image": "https://www.arweave.net/EC3S-FK0XR3zyu94fKd4pii543GwN_tSRoawqz6rCgc?ext=png",
    "description": "The most exclusive gathering of Whales in the Western Hemisphere since 1997. The genesis project from WAGMI Beach.",
    "attributes": [
      {
        "trait_type": "Background",
        "value": "Inertia"
      },
      {
        "trait_type": "Body",
        "value": "Grey"
      },
      {
        "trait_type": "Clothing",
        "value": "Freak"
      },
      {
        "trait_type": "Mouth",
        "value": "Prestige Worldwide"
      },
      {
        "trait_type": "Hair Hole",
        "value": "None"
      },
      {
        "trait_type": "Glasses",
        "value": "Rimless"
      }
    ],
  }
  console.log("Uploading zebra...")
  const uploadedzebra = await ipfs.add(JSON.stringify(zebra))

  console.log("Minting zebra with IPFS hash ("+uploadedzebra.path+")")
  await yourCollectible.mintItem(toAddress,uploadedzebra.path,{ gasLimit })



  await sleep(delayMS)


  const rhino = {
    "name": "Catalina Whale 2194",
    "image": "https://www.arweave.net/ISXAM9DoVXE5vG5_uRxBFWwP0ON5yyhKdnnKboC8Rxc?ext=png",
    "description": "The most exclusive gathering of Whales in the Western Hemisphere since 1997. The genesis project from WAGMI Beach.",
    "attributes": [
      {
        "trait_type": "Background",
        "value": "Beluga"
      },
      {
        "trait_type": "Body",
        "value": "Oil Slick"
      },
      {
        "trait_type": "Clothing",
        "value": "White Tank"
      },
      {
        "trait_type": "Mouth",
        "value": "Cigarette"
      },
      {
        "trait_type": "Hair Hole",
        "value": "None"
      },
      {
        "trait_type": "Eyes",
        "value": "Eyes"
      }
    ],
  }
  console.log("Uploading rhino...")
  const uploadedrhino = await ipfs.add(JSON.stringify(rhino))

  console.log("Minting rhino with IPFS hash ("+uploadedrhino.path+")")
  await yourCollectible.mintItem(toAddress,uploadedrhino.path,{ gasLimit })



  await sleep(delayMS)


  const fish = {
    "name": "Catalina Whale 3722",
    "image": "https://www.arweave.net/nGFs7SQmiyd7Ml9uwErOih0l6THjKa2GmI2FGjWeiqc?ext=png",
    "description": "The most exclusive gathering of Whales in the Western Hemisphere since 1997. The genesis project from WAGMI Beach.",
    "attributes": [
      {
        "trait_type": "Background",
        "value": "Inertia"
      },
      {
        "trait_type": "Body",
        "value": "Zebra"
      },
      {
        "trait_type": "Clothing",
        "value": "Wagwan"
      },
      {
        "trait_type": "Mouth",
        "value": "Stogie"
      },
      {
        "trait_type": "Hat",
        "value": "Beanie Orange"
      },
      {
        "trait_type": "Glasses",
        "value": "Tortoise"
      }
    ],
  }
  console.log("Uploading fish...")
  const uploadedfish = await ipfs.add(JSON.stringify(fish))

  console.log("Minting fish with IPFS hash ("+uploadedfish.path+")")
  await yourCollectible.mintItem(toAddress,uploadedfish.path,{ gasLimit })



  await sleep(delayMS)


  const flamingo = {
    "name": "Catalina Whale 307",
    "image": "https://www.arweave.net/eZhrQcDoLdC1vE9hdDTMKdfs3AlxuhZR2rw4Qn7uWNo?ext=png",
    "description": "The most exclusive gathering of Whales in the Western Hemisphere since 1997. The genesis project from WAGMI Beach.",
    "attributes": [
      {
        "trait_type": "Background",
        "value": "Shaman"
      },
      {
        "trait_type": "Body",
        "value": "Aqua"
      },
      {
        "trait_type": "Clothing",
        "value": "Toga"
      },
      {
        "trait_type": "Mouth",
        "value": "No Teeth"
      },
      {
        "trait_type": "Hair Hole",
        "value": "None"
      },
      {
        "trait_type": "Glasses",
        "value": "Rimless"
      }
    ],
  }
  console.log("Uploading flamingo...")
  const uploadedflamingo = await ipfs.add(JSON.stringify(flamingo))

  console.log("Minting flamingo with IPFS hash ("+uploadedflamingo.path+")")
  await yourCollectible.mintItem(toAddress,uploadedflamingo.path,{ gasLimit })





  const godzilla = {
    "name": "Catalina Whale 5331",
    "image": "https://www.arweave.net/qDD6i_cf5f8WutjLG25CBBJfUJ_crK1a7cHwN97Z1Qw?ext=png",
    "description": "The most exclusive gathering of Whales in the Western Hemisphere since 1997. The genesis project from WAGMI Beach.",
    "attributes": [
      {
        "trait_type": "Background",
        "value": "Hemisphere"
      },
      {
        "trait_type": "Body",
        "value": "Orca"
      },
      {
        "trait_type": "Clothing",
        "value": "Classic Hoodie"
      },
      {
        "trait_type": "Mouth",
        "value": "No Teeth"
      },
      {
        "trait_type": "Hat",
        "value": "Yarmulke"
      },
      {
        "trait_type": "Glasses",
        "value": "Gold Spectacles"
      }
    ],
  }
  console.log("Uploading godzilla...")
  const uploadedgodzilla = await ipfs.add(JSON.stringify(godzilla))

  console.log("Minting godzilla with IPFS hash ("+uploadedgodzilla.path+")")
  await yourCollectible.mintItem(toAddress,uploadedgodzilla.path,{ gasLimit })




  //await sleep(delayMS)

  // console.log("Transferring Ownership of YourCollectible to "+toAddress+"...")

  // await yourCollectible.transferOwnership(toAddress)

  // await sleep(delayMS)

  /*


  console.log("Minting zebra...")
  await yourCollectible.mintItem("0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1","zebra.jpg")

  */


  //const secondContract = await deploy("SecondContract")

  // const exampleToken = await deploy("ExampleToken")
  // const examplePriceOracle = await deploy("ExamplePriceOracle")
  // const smartContractWallet = await deploy("SmartContractWallet",[exampleToken.address,examplePriceOracle.address])



  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */


  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */


  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
