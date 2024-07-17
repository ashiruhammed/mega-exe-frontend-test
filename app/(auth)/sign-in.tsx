import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '~/components/BackButton';
import CustomHeaderTitle from '~/components/CustomHeaderTitle';
import AppTextInput from '~/components/AppInput';
import AppInput from '~/components/AppInput';
import UserIcon from '~/components/icon/UserIcon';
import MailIcon from '~/components/icon/MailIcon';
import { Button } from '~/components/Button';
import CustomText from '~/components/CustomText';
import { CheckBox } from '@rneui/base';
import GoogleIcon from '~/components/icon/GoogleIcon';
import LockIcon from '~/components/icon/LockIcon';
import { useRouter } from 'expo-router';

const Page = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <BackButton />
        <CustomHeaderTitle
          style={{
            marginTop: 48,
            textAlign: 'center',
          }}>
          Hello Dr!
        </CustomHeaderTitle>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'gotham',
            lineHeight: 28,
            color: '#717171',
            marginTop: 16,
          }}>
          {'Fill your details or continue with\n social media'}
        </Text>
        <View style={{ gap: 16, marginTop: 16 }}>
          <AppInput placeholder="example@gmail.com" leftIcon={<MailIcon />} />
          <AppInput placeholder="********" leftIcon={<LockIcon />} />
          <CustomText
            style={{
              alignSelf: 'flex-end',
              fontSize: 14,
            }}>
            Forgot Password ?
          </CustomText>
          <View
            style={{
              marginTop: 20,
            }}>
            <Button
              title="Sign In"
              onPress={() => {
                router.push('/(guarded)');
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
            }}>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#C2BCBC',
              }}
            />
            <CustomText
              style={{
                color: '#C2BCBC',
              }}>
              {' '}
              Or Sign in with
            </CustomText>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#C2BCBC',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 16,
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 8,
            }}>
            <GoogleIcon />
            <CustomText
              style={{
                fontFamily: 'poppins',
              }}>
              Sign Up with Google
            </CustomText>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 4,
            marginTop: 124,
          }}>
          <CustomText
            style={{
              // fontFamily: 'poppins',
              color: '#555',
              fontFamily: 'gotham',
            }}>
            Don't have an account?
          </CustomText>
          <TouchableOpacity
            onPress={() => {
              router.push('/(auth)/sign-up');
            }}>
            <CustomText
              style={{
                color: '#4425F5',
                fontFamily: 'gotham',
              }}>
              Sign Up
            </CustomText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: '#F6F8FA',
  },
});
