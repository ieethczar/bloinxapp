import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements'

import styles from './styles';

const Item = ({ title }) => (
  <Card>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </Card>
);

export default Item;