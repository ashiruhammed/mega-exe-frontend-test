import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Image, View } from 'react-native';
import CustomText from './CustomText';
import { useRouter } from 'expo-router';
import WalletIcon from './icon/WalletIcon';
import TrackIcon from './icon/TrackIcon';
import PostIcon from './icon/PostIcon';

const drawerList = [
  { title: 'Wallet', icon: <WalletIcon /> },
  { title: 'Track Order', icon: <TrackIcon /> },
  { title: 'My Posts', icon: <PostIcon /> },
];

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#4425F5',
          paddingHorizontal: 28,
          paddingVertical: 20,
          paddingTop: 50,
          gap: 12,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -5,
        }}>
        <Image source={require('~/assets/images/dr-pic.png')} />
        <View>
          <CustomText
            style={{
              fontSize: 18,
              color: '#fff',
              fontFamily: 'gothamMedium',
            }}>
            Welcome Dr
          </CustomText>
          <CustomText
            style={{
              fontSize: 10,
              color: '#fff',
            }}>
            What do you want today?
          </CustomText>
        </View>
      </View>
      <View
        style={{
          marginTop: 54,
        }}>
        {drawerList.map(({ title, icon }, index) => (
          <DrawerItem
            key={index}
            label={title}
            labelStyle={{
              fontSize: 16,
            }}
            icon={() => icon}
            onPress={() => {
              router.push('/(guarded)');
            }}
          />
        ))}
      </View>
    </DrawerContentScrollView>
  );
}
