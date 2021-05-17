import Web3 from 'web3';
import {newKitFromWeb3} from '@celo/contractkit';
import SavingGroups from './contracts/SavingGroups.json';

const contractImplement = async () => {
  const web3 = new Web3('');
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
