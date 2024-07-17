import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '~/components/BackButton';
import CustomHeaderTitle from '~/components/CustomHeaderTitle';
import AppTextInput from '~/components/AppInput';
import AppInput from '~/components/AppInput';
import UserIcon from '~/components/icon/UserIcon';
import MailIcon from '~/components/icon/MailIcon';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Button } from '~/components/Button';

const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Please enter valid email').required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  first_name: yup.string().required('First Name is required'),
  last_name: yup.string().required('Last Name is required'),
});

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <CustomHeaderTitle
        style={{
          marginTop: 48,
          textAlign: 'center',
        }}>
        Register Account
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
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '', first_name: '', last_name: '' }}
        onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View
            style={{
              gap: 16,
            }}>
            <AppInput
              leftIcon={<UserIcon />}
              placeholder="First Name"
              onChangeText={handleChange('first_name')}
              onBlur={handleBlur('first_name')}
              value={values.first_name}
              error={errors.first_name}
            />
            <AppInput
              leftIcon={<UserIcon />}
              onChangeText={handleChange('last_name')}
              onBlur={handleBlur('last_name')}
              placeholder="Last Name"
              value={values.last_name}
              error={errors.last_name}
            />
            <AppInput
              leftIcon={<MailIcon />}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
              error={errors.email}
            />
            <AppInput
              leftIcon={<UserIcon />}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="********"
              error={errors.password}
            />
            <Button title="Submit" variant="solid" type="submit" />
          </View>
        )}
      </Formik>
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
