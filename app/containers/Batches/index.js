import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import { Text, Image, Divider } from 'react-native-elements';

import Margin from '../../components/Margin';
import Button from '../../components/Button';
import Item from './Item';
import styles from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tanda de la chanba que esta muy grande',
    realizedPayments: 3,
    totalPyaments: 11,
    amount: 12343.30,
    currency: 'MXN',
  },
];

const DATAOTHER = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tanda ',
    realizedPayments: 3,
    totalPyaments: 11,
    amount: 12343.30,
    currency: 'MXN',
  },
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
      <Text style={styles.title}>Mis tandas</Text>
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

      <Divider />
      <Text style={styles.title}>Soy participante</Text>
      <FlatList
        data={DATAOTHER}
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