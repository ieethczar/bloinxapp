import React from 'react';
import renderer from 'react-test-renderer';

import UserGlobe from '../index';

describe('UserGlobe', () => {
  it('', () => {
    const component = renderer.create(
      <UserGlobe
        size="small"
        name="Text"
        image="some-image-url"
        onPress={jest.fn()}
        rating={5}
        ratingSize={5}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});