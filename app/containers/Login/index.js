import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { Formik } from 'formik';

import InputLogin from '../../components/inputs/InputLogin';
import Button from '../../components/Button';
import Margin from '../../components/Margin';
import styles from './styles';

const Login = ({ navigation, login }) => {
  console.log('login -->> ', login);
  const handleOnSubmit = (values) => {
    navigation.navigate('Private');
    login();
  }

  return (
    <View style={styles.container}>
      <Margin size={36} style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/png/logo.png')}
        />
      </Margin>

      <Margin size={14}>
        <Text h4 style={styles.text}>
          Iniciar sesión
        </Text>
      </Margin>

      <Formik
        onSubmit={handleOnSubmit}
        initialValues={{ email: '', password: '' }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Fragment>
            <InputLogin
              key='email'
              placeholder='Ingrese email'
              textContentType='emailAddress'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />

            <InputLogin
              key='password'
              placeholder='Ingrese contraseña'
              textContentType='password'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
            />

            <Margin size={36}>
              <Button
                title="Entrar"
                onPress={handleSubmit}
              />
            </Margin>
          </Fragment>
        )}
      </Formik>

      <Margin size={14}>
        <Text style={styles.text}>
          o tambien puedes
        </Text>
        
        <Button
          title='Registrarse'
          type='clear'
          onPress={() => navigation.navigate('SignIn')}
        />
      </Margin>
    </View>
  );
};

export default Login;