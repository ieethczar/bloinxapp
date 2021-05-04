import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';

const InputText = ({
  label,
  placeholder,
  onChangeText,
  onBlur,
  value,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  labelStyle,
}) => (
  <Input
    label={label}
    placeholder={placeholder}
    containerStyle={StyleSheet.compose(styles.container, containerStyle)}
    inputContainerStyle={inputContainerStyle}
    onChangeText={onChangeText}
    onBlur={onBlur}
    value={value && value.toString()}
    inputStyle={inputStyle}
    labelStyle={labelStyle}
  />
);

export default InputText;