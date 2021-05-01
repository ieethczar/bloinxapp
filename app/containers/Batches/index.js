import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import { Text, Image } from 'react-native-elements';

import Margin from '../../components/Margin';
import Button from '../../components/Button';
import Item from './Item';
import styles from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tanda de la chamba',
    realizedPayments: 0,
    totalPyaments: 10,
    amount: 10,
    currency: 'MXN',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //   title: 'Third Item',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d22',
  //   title: 'Third Item',
  // },
  // {
  //   id: '58694a0f-3da1-dsfs-bd96-145571e29d73',
  //   title: 'Third Item',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e2werw',
  //   title: 'Third Item',
  // },
];

const Batches = ({ navigation }) => {
  if (!DATA.length) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.saving}
          resizeMode='contain'
          source={require('../../assets/images/png/saving.png')}
        />
        <Margin>
          <Text h4 style={styles.text}>No tienes tandas</Text>
          <Text style={styles.text}>Crea tu primera tanta con tus amigos</Text>
          <Text style={styles.text}>o compañeros del trabajo.</Text>
        </Margin>
        <Button
          title='Crear tanda'
          type='outline'
          onPress={() => navigation.navigate('NewBatche')}
        />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        style={styles.flatList}
        renderItem={({ item }) => (
          <Item
            key={item.id}
            name={item.name}
            realizedPayments={item.realizedPayments}
            totalPayments={item.totalPyaments}
            amount={item.amount}
            currency={item.currency}
            onPress={() => navigation.navigate('Batche', item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Batches;