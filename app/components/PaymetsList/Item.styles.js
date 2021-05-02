import { StyleSheet } from "react-native";

import * as theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 5,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  small: {
    fontSize: 12,
    color: theme.grayText,
  }
});

export default styles;