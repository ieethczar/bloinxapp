import React from 'react';
import PropTypes from 'prop-types';
import { VirtualizedList } from 'react-native';
import moment from 'moment';

import Item from './Item';

const getItem = (data, index) => ({
  id: data[index].id,
  title: data[index].name,
  amount: data[index].amount,
  currency: data[index].currency,
  status: data[index].status,
  date: moment(new Date(data[index].date)).format('DD MMM'),
});

const getItemCount = (data) => data.length;

const PaymentsList = ({ data }) => (
  <VirtualizedList
    data={data}
    initialNumToRender={0}
    renderItem={({ item }) => (
      <Item
        key={item.id}
        title={item.title}
        amount={item.amount}
        currency={item.currency}
        status={item.status}
        date={item.date}
      />
    )}
    keyExtractor={item => item.id}
    getItem={getItem}
    getItemCount={getItemCount}
    style={{ height: '100%' }}
  />
);

PaymentsList.propTypes = {
  data: PropTypes.array,
}

export default PaymentsList;