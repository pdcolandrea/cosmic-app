import { SafeAreaView, Text, View } from 'react-native';
import StarBackground from '../components/star-background';

export default function OnboardScreen() {
  return (
    <StarBackground>
      <SafeAreaView>
        <View className="p-4 mt-10">
          <Text style={{ fontFamily: 'Kanit_700Bold' }} className="text-6xl text-white">
            Explore the Universe
          </Text>
        </View>
      </SafeAreaView>
    </StarBackground>
  );
}
