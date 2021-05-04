import React, { Fragment, useState } from 'react';
import { Formik } from 'formik';

import InputText from '../../components/inputs/InputText';
import InputCalendar from '../../components/inputs/InputCalendar';
import InputSwith from '../../components/inputs/InputSwitch';
import Button from '../../components/Button';
import LayoutView from '../../components/layouts/LayoutView';

import styles from './GeneralDates.styles';

const GeneralDates = ({ navigation }) => {
  const [type, setType] = useState(false);

  const handleOnSubmit = (values) => {
    let newValues = {
      ...values,
      isPublic: type,
    };
    navigation.navigate('BatchConfiguration', newValues);
  }

  return (
    <LayoutView
      title='Datos generales'
      description='Son los datos que idenfificarán a tu tanda y le hará saber a los demás cuando empieza y si será con amigos o con desconocidos.'
      options={(
        <Button
          title='Cancelar'
          type='clear'
          onPress={navigation.goBack}
        />
      )}
    >
      <Formik
        onSubmit={handleOnSubmit}
        initialValues={{ name: null, startDate: null }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
         <Fragment>
          <InputText
            key='name'
            label='Nombre de la tanda'
            placeholder='Ingrese un nombre eje. "Tanda oficina"'
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
          />
          <InputCalendar
            inputKey='startDate'
            label='Fecha de inicio'
            onChangeText={handleChange('startDate')}
            value={values.startDate}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
          />
          <InputSwith
            label='Tipo de tanda'
            primaryOptionLabel='Publico'
            secondaryOptionLabel='Privado'
            onChange={setType}
            value={type}
            optionLabelStyles={styles.optionLabelStyles}
          />
          <Button
            title='Siguiente'
            onPress={handleSubmit}
          />
         </Fragment> 
        )}
      </Formik>
    </LayoutView>
  );
}

export default GeneralDates;