import { StyleSheet } from "react-native";

import * as theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 80,
  },
  text: {
    color: theme.grayText,
    textAlign: 'center',
  }
});

export default styles;