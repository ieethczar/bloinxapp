import React, { useState } from 'react';
import { View } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import styles from './styles';

const InputPin = ({ onComplete }) => {
  const [ code, setCode ] = useState();
  return (
    <View style={styles.container}>
      <SmoothPinCodeInput
        cellSize={50}
        codeLength={6}
        ref={this.pinInput}
        value={code}
        onTextChange={code => setCode(code)}
        onFulfill={this._checkCode}
        onBackspace={this._focusePrevInput}
        restrictToNumbers
        containerStyle={styles.code}
        cellStyle={styles.cellStyle}
        cellStyleFocused={styles.cellStyleFocused}
        onFulfill={onComplete}
      />
    </View>
  );
};

export default InputPin;