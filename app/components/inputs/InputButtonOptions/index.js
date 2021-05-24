import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ButtonGroup, Text } from 'react-native-elements';

import utils from './utils';
import styles from './styles';

const InputButtonOptions = ({ label, options, value, onPress }) => {
  const handleOnPress = (indexSelected) => onPress(options[indexSelected]);
  const selectedIndex = utils.determineIndex(options, value);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <ButtonGroup
        buttons={options}
        selectedIndex={selectedIndex}
        onPress={handleOnPress}
      />
    </View>
  )
};

InputButtonOptions.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default InputButtonOptions;