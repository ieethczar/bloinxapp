import React from 'react';
import { View } from 'react-native';
import { ButtonGroup, Text } from 'react-native-elements';

import styles from './styles';

const InputButtonOptions = ({ label, options, value, onPress }) => {
  const indexValue = options.indexOf(value);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <ButtonGroup
        buttons={options}
        selectedIndex={indexValue !== -1 ? indexValue : 0}
        onPress={(indexSelected) =>  onPress(options[indexSelected])}
      />
    </View>
  )
};

export default InputButtonOptions;