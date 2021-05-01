import React from 'react';
import { Input } from 'react-native-elements';

import styles from './styles';

const InputText = ({ label, placeholder }) => (
  <Input
    label={label}
    placeholder={placeholder}
    containerStyle={styles.container}
  />
);

export default InputText;