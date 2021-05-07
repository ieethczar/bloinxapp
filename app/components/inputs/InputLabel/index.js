import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import styles from './styles';

const Label = ({ label, value, style }) => (
  <View style={StyleSheet.compose(styles.container, style)}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.input}>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

export default Label;
