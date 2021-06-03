import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import Web3 from 'web3';
import {newKitFromWeb3} from '@celo/contractkit';
import { waitForAccountAuth, requestAccountAddress, waitForSignedTxs, requestTxSig } from '@celo/dappkit';
import * as Linking from 'expo-linking'

import Login from './containers/Login';
import SignIn from './containers/SingIn';
import Profile from './containers/Profile';
import Batches from './containers/Batches';
import NewBatche from './containers/NewBatche';
import JoinBatche from './containers/JoinBatche';
import Batche from './containers/Batche';
import Header from './containers/Header';
import SavingGroups from './contracts/SavingGroups.json';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// import MyContext from './context';

export default function App(props) {
  const [client, setClient] = useState(null);
  const [contractInstance, setContractInstance] = useState({});

  useEffect(() => {
    const contractImplement = async () => {
      const web3 = new Web3('https://celo-alfajores--rpc.datahub.figment.io/apikey/e92580cb6bd38d37b0c235b74b1e4528/');
      const client = newKitFromWeb3(web3);
    
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SavingGroups.networks[networkId];
      const instance = new web3.eth.Contract(
        SavingGroups.abi,
        deployedNetwork && deployedNetwork.address,
      );

      setClient(client);
      setContractInstance(instance);
    };
    contractImplement();
  }, []);

  const handleLogin = async () => {
    try {
      console.log('--------------------------------')
      const requestId = 'login';
      const dappName = 'Bloinx';
      // const callback = Linking.createURL('/');
      // console.log({ callback });

      console.log('---->> 0');
      requestAccountAddress({requestId, dappName, callback: 'https://google.com' });
      console.log('---->> 1');
      const dappKitRes = await waitForAccountAuth(requestId);
      client.defaultAccount = dappKitRes.address;
      const stableToken = await client.contracts.getStableToken();
      const cUSDBalanceBig = await stableToken.balanceOf(client.defaultAccount);
      const cUSDBalance = cUSDBalanceBig.toString();

      console.log({ cUSDBalance });
    } catch (e) {
      console.log(e);
    }
  }

  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
          initialParams={{
            onLogin: handleLogin,
          }}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: 'SignIn',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Private"
          options={{
            title: 'Private',
            headerShown: false,
          }}
          component={Private}
        />

        <Stack.Screen
          name="NewBatche"
          options={{
            title: 'Crear tanda',
            headerShown: false,
          }}
          component={NewBatche}
        />

        <Stack.Screen
          name="JoinBatche"
          options={{
            title: 'Unirme a tanda',
          }}
          component={JoinBatche}
        />

        <Stack.Screen
          name="Batche"
          options={{
            title: 'Detalles',
          }}
          component={Batche}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Private = ({ navigation }) => (
  <View style={{ height: '100%' }}>
    <Header navigation={navigation} />

    <Tab.Navigator initialRouteName="Batches">
      <Tab.Screen
        name="Batches"
        component={Batches}
        onPress={() => console.log('BRANCHES')}
        options={{
          tabBarLabel: () => null,
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <Icon
              name='account-balance-wallet'
              type='material-icons'
              color={color}
              size={35}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        onPress={() => console.log('PROFILE')}
        options={{
          tabBarLabel: () => null,
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <Icon
              name='person-pin'
              type='material-icons'
              color={color}
              size={35}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
