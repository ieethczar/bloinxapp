import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements'

import Login from './containers/Login';
import SignIn from './containers/SingIn';
import Profile from './containers/Profile';
import Batches from './containers/Batches';
import NewBatche from './containers/NewBatche';
import Header from './containers/Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
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
            title: 'NewBatche',
          }}
          component={NewBatche}
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
        options={{
          tabBarLabel: 'Tandas',
          tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='account-balance-wallet'
              type='material-icons'
              color={color}
              size={size}
              onPress={() => console.log('BRANCHES')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Cuenta',
          tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='person-pin'
              type='material-icons'
              color={color}
              size={size}
              onPress={() => console.log('PROFILE')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </View>
);

export default App;
