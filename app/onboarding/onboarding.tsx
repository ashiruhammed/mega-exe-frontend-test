import { useRouter } from 'expo-router';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { Button } from '~/components/Button';

const onboardingData = [
  {
    imgSrc: require('~/assets/images/onboarding-1.png'),
    title: ' Convenient Telehealth: Virtual Consultations and Follow-up... Anytime, Anywhere',
  },
  {
    imgSrc: require('~/assets/images/onboarding-2.png'),
    title: 'Prescriptions Plus.....Your One-Stop Shop For Medicines, Equipment and More',
  },
  {
    imgSrc: require('~/assets/images/onboarding-3.png'),
    title: 'Prescriptions Plus.....Your One-Stop Shop For Medicines, Equipment and More',
  },
  {
    imgSrc: require('~/assets/images/onboarding-4.png'),
    title: 'Prescriptions Plus.....Your One-Stop Shop For Medicines, Equipment and More',
  },
];

const Page = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
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

        <Animated.FlatList
          data={onboardingData}
          horizontal
          snapToInterval={width}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          decelerationRate="normal"
          pagingEnabled={true}
          scrollEventThrottle={16}
          getItemLayout={(data, index) => ({
            length: width, // Replace width with the height or width of your items
            offset: width * index,
            index,
          })}
          viewabilityConfig={{
            minimumViewTime: 300,
            viewAreaCoveragePercentThreshold: 10,
          }}
          renderItem={({ item, index }) => (
            <View>
              <ImageBackground
                key={index}
                source={item.imgSrc}
                style={{
                  height: '100%',
                }}>
                <ImageBackground
                  resizeMode="cover"
                  source={require('../../assets/images/overlay.png')}
                  style={{ flex: 1, justifyContent: 'center', paddingLeft: 25, width }}>
                  <Text
                    style={{
                      fontSize: 27,
                      color: 'white',
                      fontFamily: 'poppins',
                      marginTop: 267,
                    }}>
                    {item.title}
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
            </View>
          )}
        />

        <View
          style={{
            position: 'absolute',
            bottom: 40,
            left: 25,
            right: 25,
            gap: 20,
          }}>
          <Button
            title="Sign In"
            onPress={() => {
              router.push('/(auth)/sign-in');
            }}
          />
          <Button
            title="Sign Up"
            onPress={() => {
              router.push('/(auth)/sign-up');
            }}
            variant="outline"
          />
        </View>
      </View>
    </>
  );
};

export default Page;
