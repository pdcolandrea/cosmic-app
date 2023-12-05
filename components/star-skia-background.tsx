import { Canvas, Circle, runSpring, runTiming, useValue } from '@shopify/react-native-skia';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const { width, height } = Dimensions.get('window');
const NUM_STARS = 500;

const Star = () => {
  const posX = useValue(Math.random() * width);
  const posY = useValue(Math.random() * height);
  const opacity = useValue(Math.random() * 0.5 + 0.5);
  const size = Math.random() * 3 + 1;

  useEffect(() => {
    const movementDuration = 3000 + Math.random() * 2000;
    const deltaX = (Math.random() - 0.5) * 20;
    const deltaY = (Math.random() - 0.5) * 20;

    // Movement animation
    runTiming(posX, posX.current + deltaX, { duration: movementDuration });
    runTiming(posY, posY.current + deltaY, { duration: movementDuration });

    // Twinkling effect
    if (Math.random() < 0.05) {
      const twinklingDuration = 1000 + Math.random() * 500;
      runSpring(opacity, 0.2, { mass: 1, stiffness: 100, damping: 10 });
      setTimeout(() => {
        runSpring(opacity, 1, { mass: 1, stiffness: 100, damping: 10 });
      }, twinklingDuration);
    }
  }, []);

  return <Circle cx={posX} cy={posY} r={size / 2} color="white" opacity={opacity} />;
};

const StarBackgroundSkia = ({ children }) => {
  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        {Array.from({ length: NUM_STARS }).map((_, index) => (
          <Star key={index} />
        ))}
      </Canvas>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
};

export default StarBackgroundSkia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0E0F',
  },
  canvas: {
    ...StyleSheet.absoluteFillObject, // Makes the canvas fill the entire container
  },
  childrenContainer: {
    ...StyleSheet.absoluteFillObject, // Ensures children cover the same area
    zIndex: 1, // Makes sure children are on top
  },
});
