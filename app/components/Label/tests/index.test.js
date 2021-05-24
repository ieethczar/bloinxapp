import React from 'react';
import { cleanup, render } from '@testing-library/react-native';

import Label from '../index';

describe('Label', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    render(
      <Label
        label="some-label"
        value="some-value"
        style="some-class"
      />
    );
  });
});