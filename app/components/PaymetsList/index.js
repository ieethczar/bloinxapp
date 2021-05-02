import React from 'react';
import { VirtualizedList, Dimensions } from 'react-native';
import moment from 'moment';

import Item from './Item';

const getItem = (data, index) => ({
  id: data[index].id,
  title: data[index].name,
  amount: data[index].amount,
  currency: data[index].currency,
  status: data[index].status,
  date: moment(data[index].date).format('DD MMM'),
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

export default PaymentsList;