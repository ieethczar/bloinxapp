import React from 'react';
import { View } from 'react-native';
import { Text, ListItem } from 'react-native-elements'

import styles from './Item.styles';

const Item = (props) => {
  const { title, date, amount, currency, status } = props;
  return (
  <ListItem
    bottomDivider
    containerStyle={styles.container}
  >
    <ListItem.Content style={styles.content}>
      <View>
        <ListItem.Title>
          {title && title.substring(0.25)}
        </ListItem.Title>
        <Text style={styles.small}>{date}</Text>  
      </View>
      <View>
        <ListItem.Title>
          ${amount && amount.toFixed(2)} {currency}
        </ListItem.Title>
        <Text style={styles.small}>{status}</Text>
      </View>
    </ListItem.Content>
  </ListItem>
)};

Item.defaultProps = {
  title: 'Movimiento desconocido',
  date: 'N/A',
  amount: 0,
  currency: 'N/A',
  status: 'Desconocido'
};

export default Item;
