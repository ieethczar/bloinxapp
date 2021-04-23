import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { Text } from 'react-native-elements';

import EntryButton from '../../components/buttons/EntryButton';
import Margin from '../../components/Margin';

import * as theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.backgroundColor,
  },
  text: {
    color: theme.brandColor000,
    textAlign: 'center',
  }
});

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

      <EntryButton
        title="Entrar"
        onPress={() =>
          navigation.navigate('Private', { name: 'Jane' })
        }
      />

      <Margin size={14}>
        <Text style={styles.text}>
          Tambien puedes
        </Text>
      </Margin>

      <EntryButton
        title="Registro"
        onPress={() =>
          navigation.navigate('SignIn', { name: 'Jane' })
        }
      />
    </View>
  );
};

export default Login;