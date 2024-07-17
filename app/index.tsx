import { Stack, Link, Redirect } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import CustomText from '~/components/CustomText';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Redirect href="/onboarding/onboarding" />
    </>
  );
}
