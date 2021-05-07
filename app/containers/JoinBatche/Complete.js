import React, { Fragment } from 'react';
import { Icon } from 'react-native-elements';

import Button from '../../components/Button';
import LayoutView from '../../components/layouts/LayoutView';

const Complete = ({ navigation }) => {
  return (
    <LayoutView
      title='Registro completado'
      description='Felicidades, ahora eres parte de este proyecto'
      options={(
        <Fragment>
          {/* <Button
            title='Ir a la tanda'
            type='outline'
            onPress={() => navigation.navigate('Batches')}
          /> */}
          <Button
            title='Salir'
            type='clear'
            onPress={() => navigation.navigate('Batches')}
          />
        </Fragment>
      )}
    >
      <Icon
        name='add-task'
        type='material'
        color='#0DC023'
        size={150}
        containerStyle={{
          marginBottom: 50,
        }}
      />
    </LayoutView>
  );
};

export default Complete;