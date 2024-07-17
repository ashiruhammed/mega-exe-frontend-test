import { Redirect, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Page() {
  const router = useRouter();
  return <Redirect href="/onboarding/onboarding" />;
}
