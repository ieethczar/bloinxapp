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
    display: 'flex',
    alignItems: 'center',
  },
  turn: {
    borderWidth: 1,
    borderColor: theme.secondaryColorDark,
  },
  turnText: {
    color: theme.secondaryColorDark,
  },
  graphText: {
    marginBottom: 10,
  },
  cardData: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  cardAmount: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 18,
    textAlign: 'right',
  },
  currency: {
    textAlign: 'right',
  },
  payments: {
    width: '100%',
    paddingBottom: 8,
  },
  nextPayments: {
    paddingTop: 5,
  },
  nextUser: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});

export default styles;