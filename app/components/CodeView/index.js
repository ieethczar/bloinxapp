import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text, Avatar } from 'react-native-elements';

import styles from './styles';

const avatarOptions = {
  rounded: true,
  size: "medium",
  containerStyle: styles.digit,
};

const CodeView = ({ code }) => {
  const codeSplit = code ? code.split(''): '';

  if(!code || code.length !== 6) {
    new Error('El componente espera una cadena de 6 digitos.');
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Código invalido</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Código de tanda</Text>
      <View style={styles.codeView}>
        <Avatar
          title={codeSplit[0]}
          {...avatarOptions}
        />
        <Avatar
          title={codeSplit[1]}
          {...avatarOptions}
        />
        <Avatar
          title={codeSplit[2]}
          {...avatarOptions}
        />
        <Avatar
          title={codeSplit[3]}
          {...avatarOptions}
        />
        <Avatar
          title={codeSplit[4]}
          {...avatarOptions}
        />
        <Avatar
          title={codeSplit[5]}
          {...avatarOptions}
        />
      </View>
    </View>
  );
}

CodeView.propTypes = {
  code: PropTypes.string,
};

export default CodeView;
