import { StyleSheet } from "react-native";

import * as theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  saving: {
    width: '100%',
    height: 150,
  },
  text: {
    textAlign: 'center',
    color: theme.grayText
  },
  flatList: {
    height: '100%',
  }
});

export default styles;