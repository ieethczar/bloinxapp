import React from 'react';
import { ProgressChart } from "react-native-chart-kit";

const BatcheChart = ({ totalAmount, recaudedAmount, realizedPayments, totalPayments }) => (
  <ProgressChart
    data={{
      data: [
        ((100/totalPayments)*realizedPayments)/100,
        ((100/totalAmount)*recaudedAmount)/100,
      ]
    }}
    width={100}
    height={100}
    chartConfig={{
      backgroundGradientFrom: "#FFFFFF",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#FFFFFF",
      backgroundGradientToOpacity: 0,
      color: (opacity = 0) => `rgba(64, 123, 255, ${opacity})`,
    }}
    strokeWidth={5}
    radius={30}
    hideLegend={true}
  />
);

BatcheChart.defaultProps = {
  totalAmount: 0,
  recaudedAmount: 0,
  realizedPayments: 0,
  totalPayments: 12,
};

export default BatcheChart;
