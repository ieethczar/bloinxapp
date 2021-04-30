import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Text, SocialIcon, Avatar } from 'react-native-elements';

import Button from '../../components/Button';
import Margin from '../../components/Margin';
import LayoutView from '../../components/layouts/LayoutView';

import styles from './Invitations.styles';

const Invitations = (props) => {
  const { navigation } = props;
  console.log('-->>>', props);
  return (
  <LayoutView
    title='Invitación'
    description='Compartela con la gente que quieres compartir este círculo de ahorro a trávez de las distintas opciones que hay.'
    options={(
      <Fragment>
        <Button title='Salir' onPress={() => navigation.navigate('Invitations')} />
      </Fragment>
    )}
  >
    <Text style={styles.text}>Código de tanda</Text>

    <View style={styles.codeView}>
      <Avatar rounded title="1" />
      <Avatar rounded title="2" />
      <Avatar rounded title="3" />
      <Avatar rounded title="4" />
      <Avatar rounded title="5" />
      <Avatar rounded title="6" />  
    </View>

    <Margin size={36}>
      <Button title='Copiar' type='clear' onPress={navigation.goBack}/>
    </Margin>

    <Text style={styles.text}>Compartir en redes</Text>

    <View style={styles.socialView}>
      <SocialIcon type='whatsapp' />
      <SocialIcon type='facebook' />
      <SocialIcon type='twitter' />
      <SocialIcon type='instagram' />
    </View>
  </LayoutView>
)};

export default Invitations;
