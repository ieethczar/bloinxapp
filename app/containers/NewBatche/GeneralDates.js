import React, { Fragment } from 'react';

import InputText from '../../components/inputs/InputText';
import InputCalendar from '../../components/inputs/InputCalendar';
import InputSwith from '../../components/inputs/InputSwitch';
import Button from '../../components/Button';
import LayoutView from '../../components/layouts/LayoutView';

const GeneralDates = ({ navigation }) => {
  return (
    <LayoutView
      title='Datos generales'
      description='Son los datos que idenfificarán a tu tanda y le hará saber a los demás cuando empieza y si será con amigos o con desconocidos.'
      options={(
        <Fragment>
          <Button title='Siguiente' onPress={() => navigation.navigate('BatchConfiguration')}/>
          <Button title='Cancelar' type='clear' onPress={navigation.goBack}/>
        </Fragment>
      )}
    >
      <InputText
        label='Nombre de la tanda'
        placeholder='Ingrese un nombre eje. "Tanda oficina"'
      />
      <InputCalendar
        label='Fecha de inicio'
      />
      <InputSwith
        label='Tipo de tanda'
        primaryOptionLabel='Publico'
        secondaryOptionLabel='Privado'
      />
    </LayoutView>
  );
}

export default GeneralDates;