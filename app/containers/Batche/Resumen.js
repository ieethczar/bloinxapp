import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements';

import Label from '../../components/Label';
import UserGlobe from '../../components/UserGlobe';

import styles from './Resumen.styles';

const Resumen = () => (
  <View style={styles.container}>
    <Label
      label='Inicio de la tanda'
      style={styles.text}
    />
    <Divider />
    <Label
      label='Pagos realizados'
      style={styles.text}
    />
    <Divider />
    <Label
      label='Último dia de pago'
      style={styles.text}
    />
    <Divider />
    <Label
      label='Monto a pagar'
      style={styles.text}
    />

    <Divider />
    <Text h4 style={styles.text}>Miembros</Text>
    <View style={styles.usersSection}>
      <UserGlobe
        name="Julian Pérez Olivares"
        onPress={() => {}}
      />
      <UserGlobe
        name="Ricardo Gómez Zelonka"
        onPress={() => {}}
      />
      <UserGlobe
        name="Julian Pérez Olivares"
        onPress={() => {}}
      />
      <UserGlobe
        name="Ricardo Gómez Zelonka"
      />
      <UserGlobe
        name="Julian Pérez Olivares"
      />
    </View>
  </View>
);

export default Resumen;
