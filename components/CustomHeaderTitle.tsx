import { View, Text, TextStyle } from 'react-native';
import React from 'react';

const CustomHeaderTitle = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: TextStyle;
}) => {
  return (
    <Text
      style={[
        {
          fontFamily: 'axiformaSemiBold',
          fontSize: 32,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default CustomHeaderTitle;
