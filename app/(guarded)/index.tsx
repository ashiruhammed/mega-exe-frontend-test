import { View, Text } from 'react-native';
import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Drawer.Screen options={{}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default Page;
