import React from 'react';

import InputPin from '../../components/inputs/InputPin';
import Button from '../../components/Button';
import LayoutView from '../../components/layouts/LayoutView';

const Pin = ({ navigation }) => {
  return (
    <LayoutView
      title='Unirme a tanda'
      description='Unete a una tanda con el código de invitado.'
      options={(
        <Button title='Salir' type='clear' onPress={navigation.goBack}/>
      )}
    >
      <InputPin onComplete={() => navigation.navigate('Selection')} />
    </LayoutView>
  );
};

export default Pin;