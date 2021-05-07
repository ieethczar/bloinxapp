import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

import styles from './styles';

const InputSelect = ({ label, options, value, placeholder, onValueChange }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <RNPickerSelect
      onValueChange={onValueChange}
      placeholder="Seleccione un valor"
      items={options}
      textInputProps={{
        style: styles.input,
      }}
    />
  </View>
);

export default InputSelect;