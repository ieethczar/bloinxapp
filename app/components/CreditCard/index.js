import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';

import styles from './styles';

const CreditCard = () => (
  <Card containerStyle={styles.card}>
    <Card.Title>
      ID: 172387123bx12783b6b81x
    </Card.Title>
    <View style={styles.cardDetails}>
      <View>
        <Text>Estatus</Text>
        <Text h4>ACTIVO</Text>
      </View>
      <View>
        <Text>Fondos</Text>
        <Text h4>500.00 MXN</Text>
      </View>
    </View>
  </Card>
);

export default CreditCard;