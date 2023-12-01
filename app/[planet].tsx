import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';

export default function PlanetScreen() {
  const { setOptions } = useNavigation();
  const { planet } = useLocalSearchParams<{ planet: string }>();

  useLayoutEffect(() => {
    setOptions({
      title: planet,
    });
  }, []);

  return (
    <View>
      <Text>Planetsx</Text>
    </View>
  );
}
