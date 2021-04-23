import * as React from 'react';
import { StyleSheet } from "react-native";
import { Button } from 'react-native-elements';

import * as theme from '../../../theme';

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    borderColor: theme.primaryColor,
    borderWidth: 2,
    borderRadius: 20,
  },
});

const EntryButton = ({ title, onPress }) => (
  <Button
    buttonStyle={styles.button}
    title={title}
    onPress={onPress}
    type="outline"
  />
);

export default EntryButton;
