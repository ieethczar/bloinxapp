import React, { Fragment } from 'react';

import InputText from '../../components/inputs/InputText';
import InputSlider from '../../components/inputs/InputSlider';
import Button from '../../components/Button';
import LayoutView from '../../components/layouts/LayoutView';


const BatcheConfiguration = ({ navigation }) => {
  return (
    <LayoutView
      title='Configuración'
      description='Personaliza tu tanda y piensa en las caracteristicas que tu grupo de amigos tiene y el monto que quieren ahorrar por periodo.'
      options={(
        <Fragment>
          <Button title='Siguiente' onPress={() => navigation.navigate('Resume')}/>
          <Button title='Regresar' type='clear' onPress={navigation.goBack}/>
        </Fragment>
      )}
    >
      <InputSlider label='No. de participantes' />
      <InputText label='Monto del periodo' />
    </LayoutView>
  );
}

export default BatcheConfiguration;
