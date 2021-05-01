import React, { Fragment } from 'react';

import InputText from '../../components/inputs/InputText';
import Button from '../../components/Button';
import LayoutView from '../../components/layouts/LayoutView';

const Resume = ({ navigation }) => {
  return (
    <LayoutView
      title='Resumen'
      description='Por último, confirma que toda la información esté correcta y elige en que ronda recibiras tu tanda.'
      options={(
        <Fragment>
          <Button title='Crear tanda' onPress={() => navigation.navigate('Invitations')}/>
          <Button title='Regresar' type='clear' onPress={navigation.goBack}/>
        </Fragment>
      )}
    >
      <InputText label='Elige tu posición' />
    </LayoutView>
  );
}

export default Resume;
