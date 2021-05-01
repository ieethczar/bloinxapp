import * as React from 'react';
import { View } from "react-native";
import { Avatar, Text, Rating, AirbnbRating } from 'react-native-elements';

import styles from './styles';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerProfile}>
        <View style={styles.containerProfileName}>
          <Text h4>Rogelio Roman Hernandez Cordoba</Text>
        </View>
        <View style={styles.containerProfileImage}>
          <Avatar
            size='large'
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
          <AirbnbRating
            size={10}
            defaultRating={1.5}
            showRating={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;