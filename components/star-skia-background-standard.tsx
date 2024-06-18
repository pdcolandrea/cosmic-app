import {
  Canvas,
  Circle,
  useValue,
  runTiming,
  Easing,
  type SkiaMutableValue,
} from '@shopify/react-native-skia';
import React, { memo, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const NUM_STARS = 100;

const starColors = [
  '#FFFFFF', // White (common color)
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF',
  '#FFFFFF', // Repeat white to increase its probability
  '#BBDDFF', // Blue (rarer color)
  '#FFFFAA', // Yellow (rarer color)
  '#FF9999', // Red (rarer color)
];

const randomIncrement = (maxValue: number) => {
  return (Math.random() - 0.5) * 2 * maxValue;
};

const animateStar = (
  posX: SkiaMutableValue<number>,
  posY: SkiaMutableValue<number>,
  maxDistance: number,
  movementDuration: number
) => {
  const newPosX = posX.current + randomIncrement(maxDistance);
  const newPosY = posY.current + randomIncrement(maxDistance);

  runTiming(posX, newPosX, { duration: movementDuration, easing: Easing.linear });
  runTiming(posY, newPosY, { duration: movementDuration, easing: Easing.linear });

  const timeout = setTimeout(
    () => animateStar(posX, posY, maxDistance, movementDuration),
    movementDuration
  );

  return () => clearTimeout(timeout);
};

const animateOpacity = (
  opacity: SkiaMutableValue<number>,
  start: number,
  end: number,
  duration: number,
  onComplete: () => void
) => {
  runTiming(
    opacity,
    end,
    {
      duration,
      easing: Easing.linear,
    },
    () => {
      if (onComplete) onComplete();
    }
  );
};

const Star = memo(() => {
  const posX = useValue(Math.random() * width);
  const posY = useValue(Math.random() * height);
  const opacity = useValue(Math.random() * 0.5 + 0.5);
  const size = Math.random() * 3 + 1;
  const color = starColors[Math.floor(Math.random() * starColors.length)];

  useEffect(() => {
    const maxDistance = 20; // Max distance a star can move in any direction
    const movementDuration = 8000 + Math.random() * 4000; // Increased duration for slower movement

    // start movement of star
    animateStar(posX, posY, maxDistance, movementDuration);

    // Twinkling effect
    if (Math.random() < 0.1) {
      const twinklingDuration = 3000 + Math.random() * 2000; // Increased duration for slower twinkling
      const fadeOutDuration = twinklingDuration * 0.5;
      const fadeInDuration = twinklingDuration * 0.5;

      const startTwinkling = () => {
        animateOpacity(opacity, 1, 0.2, fadeOutDuration, () => {
          animateOpacity(opacity, 0.2, 1, fadeInDuration, startTwinkling);
        });
      };

      startTwinkling();
    }
  }, []);

  return <Circle cx={posX} cy={posY} r={size / 2} color={color} opacity={opacity} />;
});

const stars = Array.from({ length: NUM_STARS });

// increased performance, stars have no depth
export const SkiaNonLayeredStarBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        {stars.map((_, index) => (
          <Star key={index} />
        ))}
      </Canvas>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0E0F',
  },
  canvas: {
    ...StyleSheet.absoluteFillObject,
  },
  childrenContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
});
