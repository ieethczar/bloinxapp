import React from 'react';
import { View } from 'react-native';

import PaymentsList from '../../components/PaymetsList';

import styles from './History.styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    name: 'Rocio Olivares',
    amount: 10,
    currency: 'MXN',
    status: 'completado',
    date: '2021/05/12',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
    name: 'Vecindario',
    amount: 10,
    currency: 'MXN',
    status: 'completado',
    date: '2021/05/12',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
    name: 'Oficina',
    amount: 10,
    currency: 'MXN',
    status: 'en proceso',
    date: '2021/05/12',
  },
];

const History = () => (
  <View style={styles.container}>
    <PaymentsList
      data={DATA}
    />
  </View>
);

export default History;
