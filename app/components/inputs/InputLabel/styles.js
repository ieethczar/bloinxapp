import { StyleSheet } from 'react-native';

import * as theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    color: theme.grayText,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8F9CB3',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 20,
  },  
  value: {
    fontSize: 18,
  }
});

export default styles;