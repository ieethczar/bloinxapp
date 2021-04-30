import { StyleSheet, Dimensions } from "react-native";

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
    textAlign: 'right',
    fontSize: 16,
  },
});

export default styles;