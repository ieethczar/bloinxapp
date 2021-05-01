import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
  },
  containerProfile: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 1,
    width: '100%',
  },
  containerProfileName: {
    borderColor: 'blue',
    borderWidth: 1,
    width: '70%',
  },
  containerProfileImage: {
    borderColor: 'green',
    borderWidth: 1,
    width: '30%',
    display: 'flex',
    justifyContent: 'center'
  },
});

export default styles;