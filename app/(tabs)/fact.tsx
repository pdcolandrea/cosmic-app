import { Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { SkiaNonLayeredStarBackground } from '../../components/star-skia-background-standard';
import { useDailyFact } from '../../hooks/use-random-fact';

export default function TabTwoScreen() {
  const fact = useDailyFact();

  return (
    <SkiaNonLayeredStarBackground>
      <View className={styles.container}>
        <Text style={{ fontFamily: 'Rubik_700Bold' }} className="text-3xl text-white">
          Did you know...
        </Text>
        <Animated.Text entering={FadeInDown.delay(500)} className={styles.title}>
          {fact.fact.replace('Did you know', '')}
        </Animated.Text>
      </View>
    </SkiaNonLayeredStarBackground>
  );
}

const styles = {
  container: `items-center flex-1 justify-center px-4`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-3xl font-sans font-bold text-center text-white`,
};
