import { useNavigation } from '@react-navigation/native';
import React, { Children, useState } from 'react';
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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginLeft: 10,
          marginTop: 34,
          maxHeight: 160,
        }}>
        <HomeCard bgColor="#643FDB">
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
        </HomeCard>

        <HomeCard bgColor="#FCC500">
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
        </HomeCard>
      </ScrollView>

      <View
        style={{
          paddingHorizontal: 35,
        }}>
        <SwitchButton />
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#9797971C',
            padding: 14,
            borderRadius: 8,
            marginTop: 24,
          }}>
          <AntDesign name="calendar" color="#000" size={24} />
          <CustomText
            style={{
              fontFamily: 'gothamMedium',
            }}>
            Schedule appointment later
          </CustomText>
          <AntDesign name="arrowright" color="#000" size={24} />
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 22,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 50,
        }}>
        <CustomText
          style={{
            fontFamily: 'gothamMedium',
            fontSize: 16,
          }}>
          Community Feed
        </CustomText>
        <TouchableOpacity>
          <CustomText
            style={{
              fontSize: 14,
              color: '#6798E1',
            }}>
            View All
          </CustomText>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 12,
        }}
        style={{
          paddingHorizontal: 22,
          marginTop: 25,
        }}>
        {[require('~/assets/images/wash-hand.png'), require('~/assets/images/soap.png')].map(
          (item, index) => (
            <Image
              key={index}
              source={item}
              style={{
                width: width * 0.8,
                borderRadius: 20,
              }}
            />
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const SwitchButton = function () {
  const [checked, setChecked] = useState(true);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#7AEC530F',
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
      }}>
      <CustomText
        style={{
          color: '#159900',
        }}>
        I am Available
      </CustomText>
      <Switch
        value={checked}
        color="#159900"
        thumbColor="#fff"
        onValueChange={(value) => setChecked((d) => !d)}
      />
    </View>
  );
};

const HomeCard = function ({ children, bgColor }: { children: React.ReactNode; bgColor: string }) {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        alignSelf: 'center',
        position: 'relative',
        marginHorizontal: 5,
      }}>
      <View
        style={{
          position: 'absolute',
          bottom: -10,
          width: width * 0.8,
          left: 20,
          height: 40,
          backgroundColor: bgColor,
          opacity: 0.4,
          borderRadius: 16,
        }}
      />

      <View
        style={{
          borderRadius: 16,
          backgroundColor: bgColor,
          paddingHorizontal: 28,
          paddingVertical: 22,
          flexDirection: 'row',
          width: width * 0.9,
          alignItems: 'center',
          gap: 8,
        }}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 8,
    borderRadius: 100,
    borderWidth: 1,
    // alignSelf: 'flex-start',
    alignSelf: 'flex-end',
    borderColor: '#2B2B2B0D',
  },
});
export default Page;
