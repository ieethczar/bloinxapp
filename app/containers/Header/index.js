import React, { Fragment, useState } from 'react';
import { Header as OriginalHeader, Icon } from "react-native-elements";

import Add from './Add';

const Header = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  handleOpenButtonSheet = () => {
    setIsVisible(!isVisible);
  }

  return (
    <Fragment>
      <Add
        isOpen={isVisible}
        onClose={handleOpenButtonSheet}
        navigation={navigation}
      />

      <OriginalHeader
        placement="left"
        leftComponent={(
          <Icon
            name='menu'
            type='material-icons'
            color='#FFFFFF'
            size={30}
            onPress={() => console.log('MENU')}
          />
        )}
        centerComponent={{
          text: 'Bloinx',
          style: {
            fontSize: 22,
            color: '#FFFFFF'
          }
        }}
        rightComponent={(
          <Icon
            name='add'
            type='material-icons'
            color='#FFFFFF'
            size={30}
            onPress={handleOpenButtonSheet}
          />
        )}
      />
    </Fragment>
  )
};

export default Header;