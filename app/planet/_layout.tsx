import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="[planet]" options={{ headerTransparent: false, headerTitle: '' }} />
    </Stack>
  );
}
