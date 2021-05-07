import React, { Fragment, useState } from 'react';

import InputLabel from '../../components/inputs/InputLabel';
import InputButtonOptions from '../../components/inputs/InputButtonOptions';
import Button from '../../components/Button';
import LayoutView from '../../components/layouts/LayoutView';

const generatePositions = (length = 0) => {
  return Array.from({length}, (_, i) => (i + 1).toString());
}

const Resume = ({ navigation, route: { params }}) => {
  const [positionValue, setPositionValue] = useState('1');

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
      <InputButtonOptions 
        label="Elige tu posición"
        value={positionValue}
        options={generatePositions(params.participants)}
        onPress={setPositionValue}
      />
      <InputLabel
        label='Administrador'
        value={''}
      />
      <InputLabel
        label='Nombre de la tanda'
        value={params.name}
      />
      <InputLabel
        label='Estilo de tanda'
        value={params.isPublic ? 'Public' : 'Privada'}
      />
      <InputLabel
        label='No. de participantes'
        value={params.participants}
      />
      <InputLabel
        label='Periodicidad'
        value={params.periodicity}
      />
      <InputLabel
        label='Monto por ronda'
        value={params.amount}
      />
    </LayoutView>
  );
}

export default Resume;
