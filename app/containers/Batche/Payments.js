import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import Button from '../../components/Button';

import styles from './Payments.styles';

const Payments = () => (
  <View style={styles.container}>
    <Text h4 style={styles.text}>Pagar tanda</Text>
    <Text style={styles.text}>Recuerda que debes tener fondos suficientes en tu cartera digital para poder proceder a realizar el pago correspondiente de tu tanda.</Text>
    <Button
      title="Pagar"
    />
  </View>
);

export default Payments;
