import React from 'react';
import { Input } from 'react-native-elements';

const InputLogin = ({ placeholder, textContentType, onChangeText, onBlur, value, secureTextEntry }) => (
  <Input
    placeholder={placeholder}
    textContentType={textContentType}
    secureTextEntry={secureTextEntry}
    onChangeText={onChangeText}
    onBlur={onBlur}
    value={value}
    containerStyle={{
      color: '#FFFFFF',
      paddingRight: 0,
      paddingLeft: 0,
    }}
    inputContainerStyle={{
      color: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      borderRadius: 25,
      paddingLeft: 15,
      paddingRight: 15,
    }}
  />
)

export default InputLogin;
