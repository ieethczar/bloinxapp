import { waitForAccountAuth, requestAccountAddress, waitForSignedTxs, requestTxSig } from '@celo/dappkit';
import * as Linking from 'expo-linking'
import Web3 from 'web3';

import contractImplement from './Implement';

const setUserWallet = async () => {
  const requestId = 'login';
  const dappName = 'Bloinx';
  const callback = Linking.makeUrl('/Private');

  requestAccountAddress({requestId, dappName, callback});
  const dappKitRes = await waitForAccountAuth(requestId);
  console.log('---->> ', dappKitRes);
};

const registerUser = async (userTurn) => {
  await contractImplement.methods
    .registerUser(userTurn)
    .send({from: account, value: Web3.utils.toWei('1', 'ether')});
};

export default {
  setUserWallet,
  registerUser,
};
