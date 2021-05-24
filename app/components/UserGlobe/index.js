import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Avatar, AirbnbRating, Text } from 'react-native-elements';

import styles from './styles';

const UserGlobe = ({ size, name, image, onPress, rating, ratingSize = 9 }) => {
  const Content = onPress ? TouchableOpacity : View;
  return (
    <Content style={styles.container}>
      <Avatar
        size={size}
        rounded
        source={{ uri: image }}
      />
      <View style={styles.rating}>
        <AirbnbRating
          size={ratingSize}
          defaultRating={rating}
          showRating={false}
          isDisabled
        />
      </View>
      <Text style={styles.text}>{name && name.substring(0,10)}</Text>
    </Content>
  );
}

UserGlobe.defaultProps = {
  size: 'small',
  name: '',
  image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
};

UserGlobe.propTypes = {
  size: PropTypes.string.isRequired,
  name: PropTypes.string,
  image: PropTypes.string,
  onPress: PropTypes.func,
  rating: PropTypes.number,
  ratingSize: PropTypes.number,
};

export default UserGlobe;