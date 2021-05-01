import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Card, Avatar, Text } from 'react-native-elements'

import styles from './Item.styles';

const Item = ({
  name,
  realizedPayments,
  totalPayments,
  amount,
  currency,
  onPress,
}) => (
  <TouchableOpacity onPressOut={onPress}>
    <Card containerStyle={styles.card}>
      <View style={styles.cardContainer}>
        <View style={styles.graph}>
          <Avatar
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
        </View>
        <View style={styles.cardData}>
          <Text style={styles.name}>{name}</Text>
          <Text>Pagos realizados: {realizedPayments} de {totalPayments}</Text>
        </View>
        <View>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
          <Text style={styles.currency}>{currency}</Text>
        </View>
      </View>
    </Card>
  </TouchableOpacity>
);

Item.defaultProps = {
  name: 'Nombre no definido',
  realizedPayments: 0,
  totalPayments: 0,
  amount: 0,
  currency: 'N/A',
}

export default Item;
