import * as React from 'react';
import { View, Text } from "react-native";

import { Button } from 'react-native-elements';

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>asdasd</Text>
      <Button
        title="Entrar"
        onPress={() =>
          navigation.navigate('Private', { name: 'Jane' })
        }
      />
      <Button
        title="Registro"
        onPress={() =>
          navigation.navigate('SignIn', { name: 'Jane' })
        }
      />
    </View>
  );
};

export default Login;