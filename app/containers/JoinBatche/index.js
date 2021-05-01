import React, { Fragment } from 'react';

import InputPin from '../../components/inputs/InputPin';
import Button from '../../components/Button';
import LayoutView from '../../components/layouts/LayoutView';

const JoinBatche = ({ navigation }) => {
  return (
    <LayoutView
      title='Unirme a tanda'
      description='Unete a una tanda con el código de invitado.'
      options={(
        <Fragment>
          <Button title='Entrar a tanda' onPress={() => navigation.navigate('Invitations')}/>
          <Button title='Regresar' type='clear' onPress={navigation.goBack}/>
        </Fragment>
      )}
    >
      <InputPin label='Elige tu posición' />
    </LayoutView>
  );
};

export default JoinBatche;