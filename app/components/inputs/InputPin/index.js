import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';

const InputPin = () => {
  const [ inputValue, setInputValue ] = useState('');

  const inputRefs = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ];

  const props = {
    containerStyle: styles.field,
    inputContainerStyle: styles.inputContainer,
    inputStyle: styles.input,
    keyboardType: 'number-pad',
    maxLength: 1,
    onChangeText: (value) => {
      const newValue = `${inputValue}${value}`;
      setInputValue(newValue);
    },
  };

  return (
    <View style={styles.container}>
      {
        inputRefs.map((k, index) => (
          <Input
            {...props}
            ref={r => inputRefs[index] === r}
          />
        ))
      }
    </View>
  );
};

export default InputPin;