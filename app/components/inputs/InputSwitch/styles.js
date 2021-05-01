import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  linealContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 25,
  },
  linealLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8F9CB3',
  },
  container: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8F9CB3',
    marginBottom: 5,
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputOptional: {
    fontSize: 20,
  }
});

export default styles;