import React from 'react';
import renderer from 'react-test-renderer';

import InputCalendar from '../index';

describe('InputCalendar', () => {
  const props = {
    label: 'some-label',
    onChangeText: jest.fn(),
    value: '2020-01-01',
  };

  it('should render correctly', () => {
    const component = renderer.create(
      <InputCalendar {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});