import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import Label from '../../components/Label';
import styles from './styles';

const Batche = () => (
  <View style={styles.container}>
    <Text>asdsad</Text>
    <Label
      label='Inicio de la tanda'
    />
    <Label
      label='Pagos realizados'
    />
    <Label
      label='Último dia de pago'
    />
    <Label
      label='Monto a pagar'
    />
  </View>
);

export default Batche;