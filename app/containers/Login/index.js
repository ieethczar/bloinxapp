import * as React from 'react';
import { View } from "react-native";
import { Text } from 'react-native-elements';

import Button from '../../components/Button';
import InputLogin from '../../components/inputs/InputLogin';
import Margin from '../../components/Margin';
import styles from './styles';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Margin size={36}>
        <Text h4 style={styles.text}>
          BLOINX
        </Text>
      </Margin>

      <Margin size={14}>
        <Text style={styles.text}>
          Inicia sesión
        </Text>
      </Margin>

      <InputLogin
        placeholder='Ingrese email'
      />

      <InputLogin
        placeholder='Ingrese contraseña'
        secureTextEntry={true}
      />
      
      <Margin size={36}>
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Private')}
        />
      </Margin>

      <Margin size={14}>
        <Text style={styles.text}>
          Tambien puedes
        </Text>
        
        <Button
          title='Registro'
          type='clear'
          onPress={() => navigation.navigate('SignIn')}
        />
      </Margin>
    </View>
  );
};

export default Login;