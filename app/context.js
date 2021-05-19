import React from 'react';
import {
  waitForAccountAuth,
  requestAccountAddress,
  waitForSignedTxs,
  requestTxSig,
} from '@celo/dappkit';
import contractImplement from './Implement';
import Web3 from 'web3';

const setUserWallet = async() => {
  const requestId = 'login';
  const dappName = 'Bloinx';

  requestAccountAddress({requestId, dappName});

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
