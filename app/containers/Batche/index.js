import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Divider } from 'react-native-elements';

import Label from '../../components/Label';
import Tabs from '../../components/Tabs';
import BatcheChart from './BatcheChart';
import styles from './styles';

import History from './History';
import Resumen from './Resumen';
import Payments from './Payments';
import { Fragment } from 'react';

const renderSection = (tabSelected) => {
  switch (tabSelected) {
    case 0:
      return History;
    case 1:
      return Resumen;
    case 2:
      return Payments;
    default:
      return History;
  }
}

const Batche = ({ name, realizedPayments, totalPayments, amount, currency }) => {
  const [tabSelected, setTabSelected] = useState(0);
  const RenderSection = renderSection(tabSelected);
  return (
    <View>
      <View style={styles.containerResume}>
        <View style={styles.containerResumeTitles}>
          <Text h4 style={styles.containerResumeTitlesName}>
            {name}
          </Text>

          <Divider />

          <View style={styles.containerResumeTitlesAmounts}>
            <Label
              label='Pagos'
              style={styles.textLabel}
              value={`${realizedPayments} de ${totalPayments}`}
            />
            <Label
              label='Monto'
              style={styles.textLabel}
              value={`${amount.toFixed(2)} ${currency}`}
            />
          </View>
        </View>
        <BatcheChart
          totalAmount={25000}
          recaudedAmount={10000}
          realizedPayments={4}
          totalPayments={5}
        />
      </View>

      <Divider />
      <Tabs
        buttons={['Movimientos', 'Resumen', 'Pagos']}
        tabSelected={tabSelected}
        onPress={(value) => setTabSelected(value)}
      />
      <RenderSection />
    </View>
  );
}

Batche.defaultProps = {
  name: 'Tanda de la chamba',
  realizedPayments: 1,
  totalPayments: 10,
  amount: 500,
  currency: 'MXN'
};

export default Batche;
