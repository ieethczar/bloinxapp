import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GeneralDates from './GeneralDates';
import BatcheConfiguration from './BatcheConfiguration';
import Resume from './Resume';
import Invitations from './Invitations';

const Stack = createStackNavigator();

const NewBatche = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GeneralDates"
        component={GeneralDates}
        options={{
          title: 'Datos generales',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="BatchConfiguration"
        component={BatcheConfiguration}
        options={{
          title: 'Configuración',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Resume"
        component={Resume}
        options={{
          title: 'Resumen',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Invitations"
        component={Invitations}
        options={{
          title: 'Invitaciones',
          headerShown: false,
          screen: {
            optionMMM: '123123',
          }
        }}
        
      />
    </Stack.Navigator>
  );
};

export default NewBatche;