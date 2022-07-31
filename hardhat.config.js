require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("dotenv").config();

module.exports = {
  solidity: "0.8.14",
  networks: {
    mumbai: {
      url: process.env.ALCHEMY_MUMBAI_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

//BuyMeCoffee deployed to: 0xC249FbA613d6F3118Cf1D14BE9B9d7FbD1Afa156
//account to:              0x379077f09a6c1e4c0f20ce58f4341f1c7aefac9d

// Successfully submitted source code for contract
// contracts/BuyMeCoffee.sol:BuyMeCoffee at 0xC249FbA613d6F3118Cf1D14BE9B9d7FbD1Afa156
// for verification on the block explorer. Waiting for verification result...

// Successfully verified contract BuyMeCoffee on Etherscan.
// https://mumbai.polygonscan.com/address/0xC249FbA613d6F3118Cf1D14BE9B9d7FbD1Afa156#code
