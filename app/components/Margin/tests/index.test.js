import 'react-native';
import React from 'react';
import { View } from 'react-native';
import Margin from '../index';
 
import renderer from 'react-test-renderer';
 
it('renders correctly', () => {
  const Foo = () => (<View />);
  renderer.create(<Margin><Foo /></Margin>);
});
 