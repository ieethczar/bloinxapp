import React, { Fragment, useState } from 'react';
import { ButtonGroup, Text } from 'react-native-elements';
import { Formik } from 'formik';

import InputText from '../../components/inputs/InputText';
import InputSlider from '../../components/inputs/InputSlider';
import InputSelect from '../../components/inputs/InputSelect';
import Button from '../../components/Button';
import LayoutView from '../../components/layouts/LayoutView';

import styles from './GeneralDates.styles';

const BatcheConfiguration = ({ navigation, route: { params }}) => {
  const [participants, setParticipants] = useState(3);
  const handleOnSubmit = (values) => {
    let newValues = {
      ...params,
      ...values,
      participants,
    };
    navigation.navigate('Resume', newValues);
  }

  return (
    <LayoutView
      title='Configuración'
      description='Personaliza tu tanda y piensa en las caracteristicas que tu grupo de amigos tiene y el monto que quieren ahorrar por periodo.'
      options={(
        <Fragment>
          <Button
            title='Siguiente'
            onPress={handleOnSubmit}
          />
          <Button
            title='Regresar'
            type='clear'
            onPress={navigation.goBack}
          />
        </Fragment>
      )}
    >
      <InputSlider
        label='No. de participantes'
        onChange={setParticipants}
        value={participants}
        min={3}
        max={10}
      />

      <InputSelect
        label='Periodicidad'
        placeholder='Seleccione periodicidad'
        onValueChange={(a) => console.log(a)}
        options={[
          { label: 'Semanal', value: 'Semanal' },
          { label: 'Quincenal', value: 'Quicenal' },
          { label: 'Mensual', value: 'Mensual' },
        ]}
      />

      <InputSelect
        label='Monto del periodo'
        placeholder='Seleccione periodicidad'
        onValueChange={(a) => console.log(a)}
        options={[
          { label: '$ 100.00', value: 100 },
          { label: '$ 250.00', value: 250 },
          { label: '$ 500.00', value: 500 },
          { label: '$ 750.00', value: 750 },
          { label: '$ 1,000.00', value: 1000 },
          { label: '$ 2,000.00', value: 2000 },
        ]}
      />
    </LayoutView>
  );
}

export default BatcheConfiguration;
