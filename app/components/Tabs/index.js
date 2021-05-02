import React from 'react';
import { ButtonGroup } from 'react-native-elements';

import styles from './styles';

const Tabs = ({ tabSelected, onPress, buttons }) => (
  <ButtonGroup
    buttons={buttons}
    selectedIndex={tabSelected}
    buttonContainerStyle={styles.buttonContainerStyle}
    containerStyle={styles.containerStyle}
    selectedButtonStyle={styles.selectedButtonStyle}
    selectedTextStyle={styles.selectedTextStyle}
    buttonStyle={styles.buttonStyle}
    onPress={(index) => onPress(index)}
    innerBorderStyle={{
      width: 0,
    }}
  />
);

Tabs.defaultProps = {
  buttons: [],
};

export default Tabs;