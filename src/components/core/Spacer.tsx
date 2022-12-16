import React from 'react';
import { View } from 'react-native';

type Props = {
  size: number;
  horizontal?: boolean;
};

const Spacer = ({ size, horizontal }: Props) => (
  <View style={{ width: horizontal ? size : 0, height: horizontal ? 0 : size }} />
);

export default Spacer;
