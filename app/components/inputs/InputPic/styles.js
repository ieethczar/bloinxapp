import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  field: {
    width: '16.66%',
    paddingLeft: 0,
    paddingRight: 0,
  },
  inputContainer: {
    marginLeft: 5,
    marginRight: 5,
  },
  input: {
    paddingTop: 10,
    paddingBottom: 10,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    backgroundColor: '#DDD',
    fontSize: 30,
    textAlign: 'center',
  }
});

export default styles;