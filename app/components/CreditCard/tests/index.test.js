import React from 'react';
import { cleanup, render } from '@testing-library/react-native';

import CreditCard from '../index';

describe('CodeView', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    render(<CreditCard />);
  });
});