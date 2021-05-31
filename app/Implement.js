import Web3 from 'web3';
import {newKitFromWeb3} from '@celo/contractkit';
import SavingGroups from './contracts/SavingGroups.json';

const contractImplement = async () => {
  const web3 = new Web3('https://celo-alfajores--rpc.datahub.figment.io/apikey/e92580cb6bd38d37b0c235b74b1e4528/');
  const client = newKitFromWeb3(web3);
  // const account = web3.eth.accounts.privateKeyToAccount('');
  // client.addAccount(account.privateKey);

  const networkId = await web3.eth.net.getId();
  const deployedNetwork = SavingGroups.networks[networkId];
  const instance = new web3.eth.Contract(
    SavingGroups.abi,
    deployedNetwork && deployedNetwork.address,
  );
  return {instance, client};
};

export default contractImplement;
