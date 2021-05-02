import { StyleSheet } from "react-native";

import * as theme from '../../theme';

const styles = StyleSheet.create({
  buttonContainerStyle: {
  },
  containerStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  selectedButtonStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: theme.secondaryColor,
    borderBottomWidth: 2,
  },
  selectedTextStyle: {
    color: theme.secondaryColor,
    fontWeight: 'bold',
  },
  buttonStyle: {
    borderBottomWidth: 2,
    borderColor: '#CCC',
  },
  disabledSelectedStyle: {},
});

export default styles;