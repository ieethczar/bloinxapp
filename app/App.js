import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

// Contract Imports
import SavingGroups from './contracts/SavingGroups.json';
import { newKitFromWeb3 } from '@celo/contractkit';
import Web3 from 'web3';

import Login from './containers/Login';
import SignIn from './containers/SingIn';
import Profile from './containers/Profile';
import Batches from './containers/Batches';
import NewBatche from './containers/NewBatche';
import JoinBatche from './containers/JoinBatche';
import Batche from './containers/Batche';
import Header from './containers/Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const main = async () => {
  const web3 = new Web3(process.env.REST_URL);
  const client = newKitFromWeb3(web3);

  const account = web3.eth.accounts.privateKeyToAccount(
    process.env.PRIVATE_KEY,
  );
  console.log(account);

  client.addAccount(account.privateKey);

  const networkId = await web3.eth.net.getId();
  console.log(networkId);
};

const App = () => {
  main();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
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
};

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

export default App;
