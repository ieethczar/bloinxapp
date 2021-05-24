import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from "react-native";
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  button: {
    marginBottom: 15,
    borderRadius: 20,
  },
});

const Btn = ({ title, type, onPress }) => (
  <Button
    type={type}
    buttonStyle={styles.button}
    title={title}
    onPress={onPress}
  />
);

Btn.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Btn;
