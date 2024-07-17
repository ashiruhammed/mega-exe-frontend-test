import { AntDesign } from '@expo/vector-icons';

import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const BackButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        borderColor: '#717171',
        borderWidth: 1,
        borderRadius: 8,
        alignSelf: 'flex-start',
        marginTop: 12,
      }}
      onPress={() => {
        router.back();
      }}>
      <AntDesign name="arrowleft" size={25} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
