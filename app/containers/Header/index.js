import React, { Fragment, useState } from 'react';
import { Header as OriginalHeader, Icon, Image } from "react-native-elements";

import Add from './Add';
import styles from './styles';
import * as theme from '../../theme';

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
        backgroundColor={theme.lightText}
        leftComponent={(
          <Image
            style={styles.logo}
            source={require('../../assets/images/png/logo.png')}
          />
        )}
        rightComponent={(
          <Icon
            name='add'
            type='material-icons'
            size={30}
            onPress={handleOpenButtonSheet}
          />
        )}
      />
    </Fragment>
  )
};

export default Header;