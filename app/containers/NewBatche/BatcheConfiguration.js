import React, { Fragment, useState } from 'react';
import { ButtonGroup, Text } from 'react-native-elements';
import { Formik } from 'formik';

import InputText from '../../components/inputs/InputText';
import InputSlider from '../../components/inputs/InputSlider';
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
        inputLabelStyle={styles.optionLabelStyles}
        min={3}
        max={10}
      />
      

      <Text>Periodicidad</Text>
      <ButtonGroup
        buttons={['Semanal','Quincenal','Mensual']}
        selectedIndex={0}
        onPress={() => {}}
        // vertical
      />

      <Text>Monto del periodo</Text>
      <ButtonGroup
        buttons={['100','250','500','750','1000','2000']}
        selectedIndex={0}
        onPress={() => {}}
        // vertical
      />
    </LayoutView>
  );
}

export default BatcheConfiguration;
