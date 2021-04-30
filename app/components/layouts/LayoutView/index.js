import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import styles from './styles';

const LayoutView = ({ title, description, children, options }) => (
  <ScrollView style={styles.scroll}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h2>{title}</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.content}>
        {children}
      </View>
      <View>
        {options}
      </View>
    </View>
  </ScrollView>
);

export default LayoutView;
