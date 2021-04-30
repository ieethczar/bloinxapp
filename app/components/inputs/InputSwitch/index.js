import React from 'react';

import { View, Switch } from 'react-native';
import { Text } from 'react-native-elements';

import styles from './styles';

const InputSwith = ({
  label,
  primaryOptionLabel,
  secondaryOptionLabel,
  value
}) => {
  if (!primaryOptionLabel) {
    return (
      <View style={styles.linealContainer}>
        {
          label && (
            <Text style={styles.label}>{label}</Text>
          )
        }
        <Switch
          value={value}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {
        label && (
          <Text style={styles.label}>{label}</Text>
        )
      }
      <View style={styles.input}>
        <Text style={styles.inputOptional}>
          {primaryOptionLabel}
        </Text>
        <Switch
          value={value}
        />
        {
          secondaryOptionLabel && (
            <Text style={styles.inputOptional}>
              {secondaryOptionLabel}
            </Text>
          )
        }
      </View>
    </View>
  )
};

export default InputSwith;