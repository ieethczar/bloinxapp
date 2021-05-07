import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Divider } from 'react-native-elements';

import InputLabel from '../../components/inputs/InputLabel';
import Label from '../../components/Label';
import Tabs from '../../components/Tabs';
import BatcheChart from './BatcheChart';
import styles from './styles';

import History from './History';
import Resumen from './Resumen';
import Payments from './Payments';

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
        <View style={styles.containerResumeTitle}>
          <Text h4>
            {name}
          </Text>

          <BatcheChart
            totalAmount={25000}
            recaudedAmount={10000}
            realizedPayments={4}
            totalPayments={5}
          />
        </View>

        <Divider />
        
        <View style={styles.containerResumeTitleAmounts}>
          <InputLabel
            label='Mi turno'
            style={styles.textLabelMin}
            value={12}
          />
          <InputLabel
            label='Proximo turno a pagar'
            style={styles.textLabel}
            value={5}
          />
        </View>

        <Divider />
        
        <View style={styles.containerResumeTitleAmounts}>
          <InputLabel
            label='Pagos'
            style={styles.textLabelMin}
            value={`${realizedPayments} de ${totalPayments}`}
          />
          <InputLabel
            label='Monto recaudado'
            style={styles.textLabel}
            value={`${amount.toFixed(2)} ${currency}`}
          />
        </View>
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
