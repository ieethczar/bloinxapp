import { StyleSheet } from "react-native";

import * as theme from '../../../theme';

const styles = StyleSheet.create({
  save: {
    padding: 15,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.primaryColorDark,
  },
  header: {
    paddingBottom: 20,
  },
  content: {
    display: 'flex',
  },
  text: {
    marginBottom: 10,
    textAlign: 'center',
    color: theme.lightText,
  }
});

export default styles;