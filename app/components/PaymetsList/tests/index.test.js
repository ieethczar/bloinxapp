import React from 'react';
import renderer from 'react-test-renderer';

import PaymentsList from '../index';

describe('PaymentsList', () => {
  const data = [
    {
      id: 'some-id',
      title: 'some-title',
      amount: 10,
      currency: 'some-currency',
      status: 'some-status',
      date: '2020-12-12',
    }
  ];

  it('should render correctly', () => {
    const component = renderer.create(
      <PaymentsList data={data} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});