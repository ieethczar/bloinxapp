import { StyleSheet } from "react-native";

import * as theme from '../../../theme';

const styles = StyleSheet.create({
  save: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    padding: 15,
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
    color: theme.grayText,
  }
});

export default styles;