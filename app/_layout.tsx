import {
  useFonts,
  Kanit_400Regular,
  Kanit_700Bold,
  Cabin_400Regular,
  Cabin_700Bold,
  Barlow_400Regular,
  Barlow_500Medium,
  Barlow_700Bold,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Rubik_400Regular,
  Rubik_700Bold,
} from '@expo-google-fonts/dev';
import { SplashScreen, Stack } from 'expo-router';
import { useCallback } from 'react';
import { View } from 'react-native';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

function RootLayout() {
  const hasOnboarded = true;

  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      <Stack.Screen name="planet" options={{ headerShown: false }} />
    </Stack>
  );
}

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
    Cabin_400Regular,
    Cabin_700Bold,
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Rubik_400Regular,
    Rubik_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <RootLayout />
    </View>
  );
}
