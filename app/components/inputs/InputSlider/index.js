import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Slider } from 'react-native-elements';

import * as theme from '../../../theme';
import styles from './styles';

const InputSlider = ({ label, value, onChange, min, max, inputLabelStyle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.internalContainer}>
        <Slider
          style={styles.slider}
          maximumValue={max}
          minimumValue={min}
          thumbStyle={{
            height: 15,
            width: 15,
            backgroundColor: theme.selectionColor,
          }}
          onValueChange={onChange}
          step={1}
          value={value}
        />
        <Text style={StyleSheet.compose(styles.sliderInfo, inputLabelStyle)}>
          {value}
        </Text>
      </View>
    </View>
  )
};

InputSlider.defaultProps = {
  min: 0,
  max: 1,
};

export default InputSlider;
