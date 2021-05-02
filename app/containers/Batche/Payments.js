import React from 'react';
import { View, Text } from 'react-native';

import Margin from '../../components/Margin';
import Label from '../../components/Label';

import styles from './Payments.styles';

const Payments = () => (
  <View>
    <Margin size={[20, 0, 0, 0]}>
      <Text h4 style={styles.containerResumeTitlesName}>Detalles</Text>
    </Margin>
    <View style={styles.containerResumeTitlesAmounts}>
      <Label
        label='Inicio de la tanda'
        style={styles.textLabel}
      />
      <Label
        label='Pagos realizados'
        style={styles.textLabel}
      />
      <Label
        label='Último dia de pago'
        style={styles.textLabel}
      />
      <Label
        label='Monto a pagar'
        style={styles.textLabel}
      />
    </View>
  </View>
);

export default Payments;
