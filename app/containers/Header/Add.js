import React from 'react';
import { BottomSheet, Text, ListItem, Icon } from 'react-native-elements';

const Add = ({ isOpen, navigation, onClose }) => {
  const handleOnPress = (place) => {
    navigation.navigate(place);
    onClose();
  }

  return (
    <BottomSheet
      isVisible={isOpen}
      containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
    >
      <ListItem
        onPress={() => handleOnPress('JoinBatche')}
        bottomDivider
      >
        <Icon
          name='groups'
          type='material-icons'
        />
        <ListItem.Content>
          <Text>Unirme a tanda</Text>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem
        onPress={() => handleOnPress('NewBatche')}
        bottomDivider
      >
        <Icon
          name='add'
          type='material-icons'
        />
        <ListItem.Content>
          <Text>Crear nueva tanda</Text>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </BottomSheet>
  );
};

export default Add;