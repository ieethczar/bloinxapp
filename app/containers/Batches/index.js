import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-elements';

import List from '../../components/List';
import styles from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Batches = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text h4>Mis tandas</Text>
      </View>
      <List data={DATA} />
    </SafeAreaView>
  );
};

export default Batches;