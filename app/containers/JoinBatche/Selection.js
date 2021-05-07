import React, { useState } from 'react';
import { Text } from 'react-native-elements';

import Button from '../../components/Button';
import InputButtonOptions from '../../components/inputs/InputButtonOptions';
import LayoutView from '../../components/layouts/LayoutView';

import styles from './Selection.styles';

const Selection = ({ navigation }) => {
  const options = [
    '1',
    '2',
    '3',
    '4',
  ];
  const [number, setNumber] = useState(options[0]);
  return (
    <LayoutView
      title='Selecciona turno'
      description='Selecciona uno de los turnos disponibles'
      options={(
        <Button title='Continuar' type='solid' onPress={() => navigation.navigate('Complete')}/>
      )}
    >
      <Text style={styles.bigNumber}>{number}</Text>
      <InputButtonOptions
        onPress={setNumber}
        value={number}
        options={options}
      />
    </LayoutView>
  );
};

export default Selection;