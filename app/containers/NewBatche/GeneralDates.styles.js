import { StyleSheet } from "react-native";

import * as theme from '../../theme';

const styles = StyleSheet.create({
  inputContainerStyle: {
    color: 'red',
    backgroundColor: theme.lightText,
    borderRadius: 20,
    marginTop: 5,
  },
  inputStyle: {
    marginRight: 10,
    marginLeft: 10,
  },
  optionLabelStyles: {
    color: theme.lightText,
    borderColor: theme.lightText,
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  }
});

export default styles;