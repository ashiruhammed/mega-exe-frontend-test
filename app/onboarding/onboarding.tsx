import { View, Text, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/Button';

const Page = () => {
  return (
    <>
      <StatusBar hidden />
      <View>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            position: 'absolute',
            top: 40,
            zIndex: 99999,
            left: 25,
          }}
        />
        <ImageBackground
          source={require('../../assets/images/onboarding-1.png')}
          style={{
            height: '100%',
          }}>
          <ImageBackground
            source={require('../../assets/images/overlay.png')}
            style={{ flex: 1, justifyContent: 'center', paddingLeft: 25 }}>
            <Text
              style={{
                fontSize: 27,
                color: 'white',
                fontFamily: 'poppins',
                marginTop: 267,
              }}>
              Convenient Telehealth: Virtual Consultations and Follow-up... Anytime, Anywhere
            </Text>
            <Text
              style={{
                color: '#E32654',
                fontSize: 16,
              }}>
              With Hospyta
            </Text>
          </ImageBackground>
        </ImageBackground>
        <View
          style={{
            position: 'absolute',
            bottom: 40,
            left: 25,
            right: 25,
            gap: 20,
          }}>
          <Button title="Sign In" />
          <Button title="Sign Up" type="outline" />
        </View>
      </View>
    </>
  );
};

export default Page;
