import { StyleSheet } from "react-native";

import * as theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.primaryColorDark,
  },
  text: {
    color: theme.brandColor000,
    textAlign: 'center',
  }
});

export default styles;