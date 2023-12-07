import { Text, View } from 'react-native';

import { useDailyFact } from '../../hooks/use-random-fact';

export default function TabTwoScreen() {
  const fact = useDailyFact();
  console.log(fact);

  return (
    <View className={styles.container}>
      <Text className={styles.title}>{fact.fact}</Text>
    </View>
  );
}

const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold text-center`,
};
