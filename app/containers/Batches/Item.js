import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Card, Avatar, Text, Divider } from 'react-native-elements'

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
          <Text style={styles.graphText}>Mi turno</Text>
          <Avatar
            rounded
            title={12}
            size='medium'
            avatarStyle={styles.turn}
            titleStyle={styles.turnText}
          />
        </View>
        <View style={styles.cardData}>
          <Text style={styles.name}>{name && name.slice(0,20)}</Text>
          <Text style={styles.payments}>Pagos realizados: {realizedPayments} de {totalPayments}</Text>
          <Divider />
          <Text style={styles.nextPayments}>Próximo pago a:</Text>
          <Text style={styles.nextUser}>Rogelio Romero turno 5</Text>
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
