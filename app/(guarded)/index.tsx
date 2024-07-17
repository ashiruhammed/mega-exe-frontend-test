import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from '~/components/CustomText';
import DrawerMenu from '~/components/icon/DrawerMenu';
import NotificationIcon from '~/components/icon/NotificationIcon';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Switch } from '@rneui/base';

const Page = () => {
  const navigation: any = useNavigation();
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 26,
          gap: 26,
        }}>
        <View
          style={{
            paddingTop: 28,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}>
          <Image source={require('~/assets/images/dr-pic.png')} />
          <View>
            <CustomText
              style={{
                fontSize: 18,

                fontFamily: 'gothamMedium',
              }}>
              Welcome Dr
            </CustomText>
            <CustomText
              style={{
                fontSize: 10,
              }}>
              What do you want today?
            </CustomText>
          </View>
        </View>
        <View style={styles.iconStyle}>
          <NotificationIcon />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
          style={[
            styles.iconStyle,
            {
              alignSelf: 'flex-end',
              marginLeft: 'auto',
            },
          ]}>
          <DrawerMenu />
        </TouchableOpacity>
      </View>
      <>
        <ScrollView
          horizontal
          style={{
            marginLeft: 20,
            marginTop: 34,
            maxHeight: 160,
          }}>
          <View>
            <View
              style={{
                alignSelf: 'center',
                position: 'relative',
              }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: -10,
                  width: width * 0.8,
                  left: 20,
                  height: 40,
                  backgroundColor: '#643FDB',
                  opacity: 0.4,
                  borderRadius: 16,
                }}
              />

              <View
                style={{
                  borderRadius: 16,
                  backgroundColor: '#643FDB',
                  paddingHorizontal: 28,
                  paddingVertical: 22,
                  flexDirection: 'row',
                  width: width * 0.9,
                  alignItems: 'center',
                  gap: 8,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    alignSelf: 'flex-start',
                    backgroundColor: '#FFFFFF14',
                    paddingHorizontal: 14,
                    paddingVertical: 10,
                    borderRadius: 15,
                  }}>
                  <CustomText
                    style={{
                      fontSize: 18,
                      color: '#fff',
                    }}>
                    29
                  </CustomText>
                  <CustomText
                    style={{
                      fontSize: 10,
                      color: '#fff',
                      marginTop: 6,
                    }}>
                    Tue
                  </CustomText>
                  <View
                    style={{
                      borderWidth: 0.5,
                      marginVertical: 10,
                      width: '100%',
                      backgroundColor: '#fff',
                    }}
                  />
                  <CustomText
                    style={{
                      fontSize: 10,
                      color: '#fff',
                    }}>
                    2:00PM
                  </CustomText>
                </View>
                <View>
                  <CustomText
                    style={{
                      color: '#fff',
                    }}>
                    Pending Appointment
                  </CustomText>
                  <CustomText
                    style={{
                      color: '#fff',
                      fontSize: 18,
                      fontFamily: 'poppins',
                    }}>
                    Tanvir Ahmed
                  </CustomText>
                  <CustomText
                    style={{
                      fontSize: 12,
                      color: '#fff',
                    }}>
                    High Blood Pressure
                  </CustomText>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                alignSelf: 'center',
                position: 'relative',
                marginHorizontal: 10,
              }}>
              <View
                style={{
                  position: 'absolute',
                  bottom: -10,
                  width: width * 0.8,
                  left: 20,
                  height: 40,
                  backgroundColor: '#FCC500',
                  opacity: 0.4,
                  borderRadius: 16,
                }}
              />

              <View
                style={{
                  borderRadius: 16,
                  backgroundColor: '#FCC500',
                  paddingHorizontal: 28,
                  paddingVertical: 22,
                  flexDirection: 'row',
                  width: width * 0.9,
                  alignItems: 'center',
                  gap: 8,
                }}>
                <View>
                  <View style={{ flexDirection: 'row' }}>
                    <Entypo name="dot-single" size={24} color="#27AE60" />
                    <CustomText
                      style={{
                        color: '#fff',
                      }}>
                      108,651 Virtual consultations
                    </CustomText>
                  </View>
                  <CustomText
                    style={{
                      color: '#fff',
                      fontSize: 18,
                      fontFamily: 'poppins',
                    }}>
                    Deliver hassle-free care with Hospyta
                  </CustomText>
                  <CustomText
                    style={{
                      fontSize: 12,
                      color: '#fff',
                    }}>
                    Set Schedule Now
                  </CustomText>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
      <View
        style={{
          flexDirection: 'row',
          maxWidth: 300,
          marginHorizontal: 'auto',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
          borderRadius: 20,
          backgroundColor: '#7AEC530F',
          width: '100%',
          marginTop: 40,
        }}>
        <CustomText
          style={{
            color: '#159900',
          }}>
          I am Available
        </CustomText>
        <Switch color="#159900" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 12,
    borderRadius: 100,
    borderWidth: 1,
    // alignSelf: 'flex-start',
    alignSelf: 'flex-end',
    borderColor: '#2B2B2B0D',
  },
});
export default Page;
