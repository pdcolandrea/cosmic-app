import { Text, View } from 'react-native';

import { useDailyFact } from '../../hooks/use-random-fact';
import { SkiaNonLayedStarBackground } from '../../components/star-skia-background-standard';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function TabTwoScreen() {
  const fact = useDailyFact();

  return (
    <SkiaNonLayedStarBackground>
      <View className={styles.container}>
        <Text style={{ fontFamily: 'Rubik_700Bold' }} className="text-3xl text-white">
          Did you know...
        </Text>
        <Animated.Text entering={FadeInDown.delay(500)} className={styles.title}>
          {fact.fact.replace('Did you know', '')}
        </Animated.Text>
      </View>
    </SkiaNonLayedStarBackground>
  );
}

const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-3xl font-sans font-bold text-center text-white`,
};
