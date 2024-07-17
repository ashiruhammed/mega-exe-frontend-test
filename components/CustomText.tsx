import { View, Text, TextStyle } from 'react-native';
import React from 'react';

const CustomText = ({ children, style }: { children: React.ReactNode; style?: TextStyle }) => {
  return (
    <Text
      style={[
        {
          fontFamily: 'axiforma',
          fontSize: 16,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;
