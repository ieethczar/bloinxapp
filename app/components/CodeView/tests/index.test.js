import React from 'react';
import renderer from 'react-test-renderer';

import CodeView from '../index';

describe('UserGlobe', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <CodeView />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const component = renderer.create(
      <CodeView code="123456" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});