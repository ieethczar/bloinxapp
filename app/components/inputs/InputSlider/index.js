import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Slider } from 'react-native-elements';

import styles from './styles';

const InputSlider = ({ label, value = 0 }) => {
  const [ initialValue, setInitialValue ] = useState(value);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.internalContainer}>
        <Slider
          style={styles.slider}
          maximumValue={25}
          minimumValue={3}
          thumbStyle={{
            height: 15,
            width: 15,
            backgroundColor: '#888888'
          }}
          onValueChange={setInitialValue}
          step={1}
          value={initialValue}
        />
        <Text style={styles.sliderInfo}>
          {initialValue}
        </Text>
      </View>
    </View>
  )
};

export default InputSlider;
