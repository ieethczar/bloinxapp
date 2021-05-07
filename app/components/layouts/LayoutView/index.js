import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';

import styles from './styles';

const LayoutView = ({ title, description, children, options }) => (
  <SafeAreaView style={styles.save}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h4 style={styles.text}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
      <View style={styles.content}>
        {children}
      </View>
      <View>
        {options}
      </View>
    </View>
  </SafeAreaView>
);

export default LayoutView;
