import { Redirect } from 'expo-router';

export default function Home() {
  console.log('cool');
  return (
    <>
      <Redirect href="/onboarding/onboarding" />
    </>
  );
}
