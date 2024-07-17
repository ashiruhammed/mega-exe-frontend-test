import { View, Text } from 'react-native';
import React from 'react';

import { Drawer } from 'expo-router/drawer';
import DrawerMenu from '~/components/icon/DrawerMenu';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import CustomDrawerContent from '~/components/CustomDrawerContent';

const Layout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTitle: '',
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: '#4425F50A',
        drawerActiveTintColor: '#000',
        drawerPosition: 'right',
        drawerItemStyle: {
          paddingHorizontal: 24,
          marginTop: 18,
        },
        drawerLabelStyle: {
          fontFamily: 'axiforma',
          fontSize: 16,
          textTransform: 'capitalize',
        },
      }}
    />
  );
};

export default Layout;
