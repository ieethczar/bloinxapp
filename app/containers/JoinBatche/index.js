import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Pin from './Pin';
import Selection from './Selection';
import Complete from './Complete';

const Stack = createStackNavigator();

const JoinBatche = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pin"
        component={Pin}
        options={{
          title: 'Ingrese Pin',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Selection"
        component={Selection}
        options={{
          title: 'Selecciona turno',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Complete"
        component={Complete}
        options={{
          title: 'Completado',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default JoinBatche;