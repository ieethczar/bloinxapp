import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Avatar, AirbnbRating, Text } from 'react-native-elements';

import styles from './styles';

const UserGlobe = ({ size, name, image, onPress }) => {
  const Content = onPress ? TouchableOpacity : View;
  return (
    <Content style={styles.container}>
      <Avatar
        size={size}
        rounded
        source={{ uri: image }}
      />
      <AirbnbRating
        size={9}
        defaultRating={1.5}
        showRating={false}
        isDisabled
      />
      <Text style={styles.text}>{name && name.substring(0,10)}</Text>
    </Content>
  );
}

UserGlobe.defaultProps = {
  size: 'small',
  name: '',
  image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
};

export default UserGlobe;