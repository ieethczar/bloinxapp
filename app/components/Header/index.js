import * as React from 'react';
import { Header as OriginalHeader } from "react-native-elements";

import { Icon } from 'react-native-elements'

const Header = ({ navigation }) => (
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
        onPress={() => navigation.navigate('NewBatche')}
      />
    )}
  />
)

export default Header;