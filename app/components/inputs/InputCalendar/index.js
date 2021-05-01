import React, { useState } from 'react';
import { View, Button } from 'react-native';
import moment from 'moment';
import { Input, Overlay } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';

import styles from './styles';

const InputCalendar = ({ label }) => {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(moment().format('DD/MMMM/YYYY'));

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const handleSetDate = (date) => {
    setDate(moment(date).format('DD/MMMM/YYYY'))
  }

  return (
    <View>
      <Input
        label={label}
        onPressIn={toggleOverlay}
        value={date.toString()}
        containerStyle={styles.input}
      />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <CalendarPicker
          onDateChange={handleSetDate}
        />
        <Button
          title='OK'
        />
      </Overlay>
    </View>
  );
};

export default InputCalendar;