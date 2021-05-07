import { StyleSheet } from "react-native";

import * as theme from '../../theme';

const styles = StyleSheet.create({
  card: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },  
});

export default styles;