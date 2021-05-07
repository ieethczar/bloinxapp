import { StyleSheet } from "react-native";

import * as theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  code: {
    paddingBottom: 20,
  },
  cellStyle: {
    borderColor: '#CCC',
    borderWidth: 1,
  },
  cellStyleFocused: {
    borderColor: theme.selectionColor,
  }
});

export default styles;