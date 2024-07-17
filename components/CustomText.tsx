import { View, Text, TextStyle } from 'react-native';
import React from 'react';

const CustomText = ({ children, style }: { children: React.ReactNode; style: TextStyle }) => {
  return (
    <Text
      style={[
        {
          fontFamily: 'axiforma',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;
