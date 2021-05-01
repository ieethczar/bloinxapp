import { StyleSheet } from "react-native";

import * as theme from '../../theme';

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: theme.selectionColor,
    borderRadius: 10,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  graph: {
    paddingRight: 10,
  },
  cardData: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardAmount: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 18,
  },
  amount: {
    fontSize: 18,
    textAlign: 'right',
  },
  currency: {
    textAlign: 'right',
  }
});

export default styles;