import React from 'react';

import { View, Switch, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import styles from './styles';

const InputSwith = ({
  inputKey,
  label,
  primaryOptionLabel,
  secondaryOptionLabel,
  value,
  onChange,
  optionLabelStyles,
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
          onValueChange={onChange}
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
        <Text style={StyleSheet.compose(styles.inputOptional, optionLabelStyles)}>
          {primaryOptionLabel}
        </Text>
        <Switch
          value={value}
          onValueChange={onChange}
        />
        {
          secondaryOptionLabel && (
            <Text style={StyleSheet.compose(styles.inputOptional, optionLabelStyles)}>
              {secondaryOptionLabel}
            </Text>
          )
        }
      </View>
    </View>
  )
};

export default InputSwith;