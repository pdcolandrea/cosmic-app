import { useMemo, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const NUM_STARS = 25;

const Star = () => {
  const posX = useSharedValue(Math.random() * width);
  const posY = useSharedValue(Math.random() * height);

  // Randomize size and opacity
  const size = useMemo(() => Math.random() * 3 + 1, []); // Size between 1 and 4
  const opacity = useMemo(() => Math.random() * 0.5 + 0.5, []); // Opacity between 0.5 and 1

  useEffect(() => {
    const duration = 5000 + Math.random() * 2000; // Random duration between 3 and 5 seconds
    const deltaX = (Math.random() - 0.5) * 20; // Random distance between -10 and 10
    const deltaY = (Math.random() - 0.5) * 20;

    posX.value = withRepeat(
      withTiming(posX.value + deltaX, { duration, easing: Easing.linear }),
      -1,
      true
    );
    posY.value = withRepeat(
      withTiming(posY.value + deltaY, { duration, easing: Easing.linear }),
      -1,
      true
    );
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: posX.value }, { translateY: posY.value }],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[styles.star, animatedStyles, { width: size, height: size, borderRadius: size / 2 }]}
    />
  );
};

interface StarBackgroundProps {
  children: React.ReactNode;
}

export default function StarBackground(props: StarBackgroundProps) {
  const { children } = props;
  return (
    <View style={styles.container}>
      {Array.from({ length: NUM_STARS }).map((_, index) => (
        <Star key={index} />
      ))}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0E0F',
  },
  star: {
    position: 'absolute',
    width: 2,
    height: 2,
    backgroundColor: 'white',
    borderRadius: 1,
  },
});
