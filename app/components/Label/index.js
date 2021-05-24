import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import styles from './styles';

const Label = ({ label, value, style }) => (
  <View style={StyleSheet.compose(styles.container, style)}>
    <Text style={styles.label}>{label}</Text>
    <Text>{value}</Text>
  </View>
);

Label.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  style: PropTypes.string,
};

export default Label;
