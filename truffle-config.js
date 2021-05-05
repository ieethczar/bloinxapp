const ContractKit = require('@celo/contractkit');
const Web3 = require('web3');
const path = require('path');
require('dotenv').config();

const web3 = new Web3(process.env.REST_URL);
const client = ContractKit.newKitFromWeb3(web3);

module.exports = {
  // * $ truffle test --network <network-name>

  contracts_build_directory: path.join(__dirname, 'app/contracts'),

  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    alfajores: {
      provider: client.web3.currentProvider,
      network_id: 44787,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.7.2', // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
