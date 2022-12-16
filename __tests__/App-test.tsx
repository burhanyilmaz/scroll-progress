/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/navigators/MainNavigator';
import { render } from '@testing-library/react-native';

it('renders correctly', () => {
  render(<App />);
});
