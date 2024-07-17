import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  const [loaded, error] = useFonts({
    gotham: require('./../assets/fonts/gotham/GothamPro.ttf'),
    axiforma: require('./../assets/fonts/axiforma/Axiforma-Regular.ttf'),
    axiformaSemiBold: require('./../assets/fonts/axiforma/Axiforma-SemiBold.ttf'),
    gothamMedium: require('./../assets/fonts/gotham/GothamPro-Medium.ttf'),
    poppins: Poppins_500Medium,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </GestureHandlerRootView>
  );
}
