import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Text, SocialIcon, Avatar } from 'react-native-elements';

import Button from '../../components/Button';
import Margin from '../../components/Margin';
import LayoutView from '../../components/layouts/LayoutView';
import CodeView from '../../components/CodeView';

import styles from './Invitations.styles';

const Invitations = ({ navigation }) => {
  return (
  <LayoutView
    title='Invitación'
    description='Compartela con la gente que quieres compartir este círculo de ahorro a trávez de las distintas opciones que hay.'
    options={(
      <Fragment>
        <Button title='Salir' onPress={() => navigation.navigate('Batches')} />
      </Fragment>
    )}
  >

    <CodeView code='123456' />

    <Margin size={36}>
      <Button title='Copiar' type='clear' />
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
