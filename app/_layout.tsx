import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SystemUI from 'expo-system-ui';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

SystemUI.setBackgroundColorAsync("black");

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'glass-antigua-regular': require('../public/fonts/GlassAntiqua-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
      <Stack screenOptions={{ headerShown: false }}>
      </Stack>
  );
}
