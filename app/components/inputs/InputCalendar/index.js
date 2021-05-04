import React, { useState } from 'react';
import { View, SafeAreaView, TouchableHighlight } from 'react-native';
import { Input, Button, Overlay, Icon, Text, Divider } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

import styles from './styles';
import * as theme from '../../../theme';

const today = moment(new Date()).format('DD/MMMM/YYYY', 'es');

const InputCalendar = ({ label, onChangeText, value, inputContainerStyle, inputStyle, labelStyle }) => {
  const convertedValue = moment(value).format('DD/MMMM/YYYY', 'es');
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(() => value ? convertedValue : today);

  const handleSetDate = (date) => setDate(moment(date).format('DD/MMMM/YYYY', 'es'));
  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);
  const handleOnAccept = () => {
    setVisible(false);
    onChangeText(date);
  }

  return (
    <View>
      <TouchableHighlight onPressIn={handleOpen}>
        <Input
          label={label}
          value={!date ? 'Selecciona fecha' : date}
          containerStyle={styles.input}
          inputContainerStyle={inputContainerStyle}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
          disabled
        />
      </TouchableHighlight>

      <Overlay
        isVisible={visible}
        fullScreen
      >
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.buttonContainer}>
            <Button
              containerStyle={styles.buttonClose}
              titleStyle={styles.titleStyle}
              type='clear'
              title='cerrar'
              onPress={handleClose}
              iconRight
              icon={
                <Icon
                  name='close'
                  type='material-icons'
                  size={30}
                />
              }
            />
          </View>
          <Text h4>{label}</Text>
          <Divider style={styles.divider} />

          <CalendarPicker
            onDateChange={handleSetDate}
            previousTitle="Anterior"
            nextTitle="Siguiente"
            selectedDayColor={theme.secondaryColor}
            selectedDayStyle={{
              borderWidth: 1,
              borderColor: theme.secondaryColor,
              backgroundColor: 'trasparent'
            }}
            selectedDayTextColor={theme.secondaryColor}
            todayBackgroundColor={theme.secondaryColorDark}
            todayTextStyle={{
              color: theme.lightText
            }}
            minDate={new Date()}
            weekdays={[
              'Dom',
              'Lun',
              'Mar',
              'Mie',
              'Jue',
              'Vie',
              'Sab',
            ]}
            months={[
              'Enero',
              'Febrero',
              'Marzo',
              'Abril',
              'Mayo',
              'Junio',
              'Julio',
              'Agosto',
              'Septiembre',
              'Octubre',
              'Noviembre',
              'Diciembre',
            ]}
          />

          <Divider style={styles.divider} />

          <Button
            containerStyle={styles.buttonAccept}
            title='OK'
            type='outline'
            onPress={handleOnAccept}
          />
        </SafeAreaView>
      </Overlay>
    </View>
  );
};

export default InputCalendar;