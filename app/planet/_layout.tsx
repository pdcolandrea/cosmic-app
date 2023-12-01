import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from 'expo-router';
import { Pressable } from 'react-native';

export default function RootLayout() {
  const { goBack } = useNavigation();
  return (
    <Stack>
      <Stack.Screen
        name="[planet]"
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <Pressable onPress={goBack}>
              <Ionicons name="ios-arrow-back-circle-outline" color="white" size={40} />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
