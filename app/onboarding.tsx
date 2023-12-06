import { Dimensions, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import StarBackground from '../components/star-background';
import { AppSettings } from '../lib/storage';

const { height, width } = Dimensions.get('window');

export default function OnboardScreen() {
  const onGetStartedPressed = async () => {
    await AppSettings.setHasOnboarded(true);
  };
  return (
    <StarBackground>
      <SafeAreaView>
        <View className="p-4 mt-10">
          <Text style={{ fontFamily: 'Kanit_700Bold' }} className="text-6xl text-white">
            Explore the Universe
          </Text>
          <Text style={{ fontFamily: 'Kanit_400Regular' }} className="text-[#d1d1d1] text-2xl mr-8">
            Journey through the cosmos with our space app
          </Text>
          <TouchableOpacity
            onPress={onGetStartedPressed}
            className="px-16 py-4 bg-white self-start mt-4 rounded-xl">
            <Text style={{ fontFamily: 'Kanit_400Regular' }} className="text-lg">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '100%',

          position: 'relative',
        }}>
        <Image
          source={require('../assets/planets/Mars.png')}
          style={{ width: 250, height: 250, position: 'absolute', top: 0, left: -100 }}
        />
        <Image
          source={require('../assets/planets/Earth2.png')}
          style={{ width: 400, height: 400, position: 'absolute', top: 0, left: width / 5 }}
        />
        <Image
          source={require('../assets/planets/Saturn.png')}
          style={{ width: 250, height: 250, position: 'absolute', bottom: 350, left: -20 }}
        />
      </View>
    </StarBackground>
  );
}
