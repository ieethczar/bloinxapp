import { StyleSheet, Dimensions } from "react-native";

import * as theme from '../../../theme';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8F9CB3',
    marginBottom: 5,
  },
  internalContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slider: {
    width: screenWidth - 80,
  },
  sliderInfo: {
    width: 30,
    height: 30,
    textAlign: 'center',
    fontSize: 20,
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 2,
    color: theme.selectionColor,
    fontWeight: 'bold'
  },
});

export default styles;