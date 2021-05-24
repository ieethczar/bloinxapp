import React from 'react';
import renderer from 'react-test-renderer';

import InputButtonOptions from '../index';

describe('InputButtonOptions', () => {
  const props = {
    label: "some-label",
    options: ['uno','two','three'],
    value: "one",
    onPress: jest.fn((arg) => arg),
  };

  it('should render correctly', () => {
    const component = renderer.create(
      <InputButtonOptions {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});