import { StyleSheet, Dimensions } from "react-native";

import * as theme from '../../../theme';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8F9CB3',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#DDD',
    padding: 11,
    fontSize: 18,
    borderRadius: 20,
  },
});

export default styles;