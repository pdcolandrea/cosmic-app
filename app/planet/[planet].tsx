import { useNavigation, useLocalSearchParams } from 'expo-router';
import { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

export default function PlanetScreen() {
  const { setOptions } = useNavigation();
  const { planet } = useLocalSearchParams<{
    planet: string;
  }>();
  useLayoutEffect(() => {
    setOptions({
      title: planet,
    });
  }, []);
  return (
    <View>
      <Text>Planets1</Text>
    </View>
  );
}
