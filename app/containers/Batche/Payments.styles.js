import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerResume: {
    padding: 15,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerResumeTitles: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  containerResumeTitlesName: {
    marginBottom: 10,
  },
  containerResumeTitlesAmounts: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textLabel: {
    marginTop: 10,
    width: '50%',
  }
});

export default styles;