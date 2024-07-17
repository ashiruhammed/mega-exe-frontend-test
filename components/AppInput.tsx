import { View, Text, TextStyle, TextInputProps, TextInput } from 'react-native';
import React from 'react';

type InputProps = TextInputProps & {
  leftIcon?: React.ReactNode;
  error?: string;
};

const AppInput = ({ leftIcon, error, ...props }: InputProps) => {
  return (
    <>
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 16,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}>
        <View>{leftIcon}</View>
        <TextInput
          {...props}
          style={{
            fontSize: 16,
            fontFamily: 'gothamMedium',
            flex: 1,
            paddingVertical: 18,
            marginLeft: 16,
          }}
          placeholderTextColor="#000"
        />
      </View>
      {error && (
        <Text
          style={{
            color: 'red',
          }}>
          {error}
        </Text>
      )}
    </>
  );
};

export default AppInput;
