import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  buttonClose: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 100,
  },
  buttonAccept: {
    marginTop: 20,
  },
  titleStyle: {
    color: '#222',
    marginRight: 10,
  },
  input: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  }
});

export default styles;