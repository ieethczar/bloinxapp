import * as React from 'react';
import { StyleSheet } from "react-native";
import { Button as Btn } from 'react-native-elements';

const styles = StyleSheet.create({
  button: {
    marginBottom: 15,
    borderRadius: 20,
  },
});

const Button = ({ title, type, onPress }) => (
  <Btn
    type={type}
    buttonStyle={styles.button}
    title={title}
    onPress={onPress}
  />
);

export default Button;
