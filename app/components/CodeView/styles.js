import { StyleSheet } from "react-native";

import * as theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: theme.grayText,
    fontSize: 18,
  },
  codeView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  digit: {
    backgroundColor: theme.selectionColor,
    margin: 3,
  }
});

export default styles;