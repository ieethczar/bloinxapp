import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerResume: {
    padding: 15,
  },
  containerResumeTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerResumeTitleAmounts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLabel: {
    marginTop: 10,
    width: '60%',
    paddingRight: 10,
  },
  textLabelMin: {
    marginTop: 10,
    width: '40%',
    marginRight: 10,
  }
});

export default styles;