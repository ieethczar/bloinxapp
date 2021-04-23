import React from 'react';
import { Input } from 'react-native-elements';

const InputLogin = ({ placeholder, secureTextEntry}) => (
  <Input
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
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
