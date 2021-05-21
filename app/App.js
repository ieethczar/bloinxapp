import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

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

import MyContext from './context';

export default function App(props) {
  useEffect(() => {
    MyContext.setUserWallet();
  },[]);

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
