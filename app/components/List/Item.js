import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements'

import styles from './Item.styles';

const Item = ({ title }) => (
  <Card containerStyle={styles.container}>
    <Text h4 style={styles.title}>$ {title}</Text>
  </Card>
);

export default Item;