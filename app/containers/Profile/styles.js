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
    width: '100%',
  },
  containerProfileName: {
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
  },
  containerProfileImage: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center'
  },
  textCenter: {
    textAlign: 'center',
    marginBottom: 10,
  },
  digitalWallet: {
    marginTop: 20,
  }
});

export default styles;