import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'react-native-elements';

import Login from './containers/Login';
import SignIn from './containers/SingIn';
import Profile from './containers/Profile';
import Batches from './containers/Batches';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: 'Login' }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ title: 'SignIn' }}
            />
            <Stack.Screen
              name="Private"
              component={Private}
              options={{ title: 'Private' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

const Private = () => (
  <Tab.Navigator initialRouteName="Profile">
    <Tab.Screen
      name="Profile"
      component={Profile}
    />
    <Tab.Screen
      name="Batches"
      component={Batches}
    />
  </Tab.Navigator>
);

export default App;