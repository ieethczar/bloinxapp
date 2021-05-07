import * as React from 'react';
import { View } from "react-native";
import { Text, Divider } from 'react-native-elements';

import UserGlobe from '../../components/UserGlobe';
import Button from '../../components/Button';
import CreditCard from '../../components/CreditCard';
import styles from './styles';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerProfile}>
        <View style={styles.containerProfileImage}>
          <UserGlobe
            size='large'
            rating={5}
            ratingSize={13}
          />
        </View>
        <View style={styles.containerProfileName}>
          <Text h4 style={styles.textCenter}>Rogelio Roman Hernandez Cordoba</Text>
        </View>
      </View>
      
      <Divider />

      <View style={styles.digitalWallet}>
        <Text h4 style={styles.textCenter}>Mi cartera digital</Text>
        <Text style={styles.textCenter}>Recuerda que siempre debes de tener fondos en tu cartera digital para poder realizar todas tus operaciones</Text>
        <CreditCard />
        <Button
          title='Fondear'
          type='outline'
        />
        <Button
          title='Eliminar'
          type='clear'
        />
      </View>
    </View>
  );
};

export default Profile;