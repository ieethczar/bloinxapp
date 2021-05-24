import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../index';

describe('Button', () => {
  const props = {
    type: '',
    title: 'some-tittle',
    onPress: jest.fn(),
  };

  it('should render correctly', () => {
    const component = renderer.create(
      <Button {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});