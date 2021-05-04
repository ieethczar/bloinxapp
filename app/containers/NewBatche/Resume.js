import React, { Fragment } from 'react';
import { ButtonGroup, Text } from 'react-native-elements';

import Label from '../../components/Label';
import Button from '../../components/Button';
import LayoutView from '../../components/layouts/LayoutView';

const Resume = ({ navigation, route: { params }}) => {
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
      <Text>Elige tu posición</Text>
      <ButtonGroup
        buttons={['1','2','3','4','5','6','7','8','9','10']}
        selectedIndex={0}
        onPress={() => {}}
      />

      <Text>Elige tu posición</Text>

      <Label
        label='Administrador'
        value={''}
      />
      <Label
        label='Nombre de la tanda'
        value={params.name}
      />
      <Label
        label='Estilo de tanda'
        value={params.isPublic ? 'Public' : 'Privada'}
      />
      <Label
        label='No. de participantes'
        value={params.participants}
      />
      <Label
        label='Periodicidad'
        value={params.periodicity}
      />
      <Label
        label='Monto por ronda'
        value={params.amount}
      />
    </LayoutView>
  );
}

export default Resume;
