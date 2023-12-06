import { Canvas, Circle, Easing, Line, runTiming, useValue } from '@shopify/react-native-skia';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const NUM_STARS = 250;
const NUM_LAYERS = 2; // Number of layers

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

const randomIncrement = (maxValue) => (Math.random() - 0.5) * 2 * maxValue;

const animateStar = (posX, posY, maxDistance, movementDuration) => {
  const newPosX = posX.current + randomIncrement(maxDistance);
  const newPosY = posY.current + randomIncrement(maxDistance);

  runTiming(posX, newPosX, { duration: movementDuration, easing: Easing.linear });
  runTiming(posY, newPosY, { duration: movementDuration, easing: Easing.linear });

  setTimeout(() => animateStar(posX, posY, maxDistance, movementDuration), movementDuration);
};

const animateOpacity = (opacity, start, end, duration, onComplete) => {
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

const SparklingStar = ({ x, y, size, color, opacity }) => {
  const numLines = 2 + Math.floor(Math.random() * 3); // 2 to 4 lines for variation
  const lines = [];

  for (let i = 0; i < numLines; i++) {
    const angle = Math.random() * 2 * Math.PI; // Random angle for each line
    const lineLength = size * (0.5 + Math.random() * 0.5); // Randomize line length
    lines.push({
      p1: { x, y },
      p2: {
        x: x + lineLength * Math.cos(angle),
        y: y + lineLength * Math.sin(angle),
      },
    });
  }

  return lines.map((line, index) => (
    <Line
      key={index}
      p1={line.p1}
      p2={line.p2}
      color={color}
      strokeWidth={Math.random() * 0.5 + 0.5} // Randomize stroke width for a more subtle effect
      opacity={opacity * Math.random() * 0.5 + 0.5} // Varying opacity for a twinkling effect
    />
  ));
};

const LayeredStar = ({ star }) => {
  const posX = useValue(star.x);
  const posY = useValue(star.y);
  const opacity = useValue(star.opacity);
  const size = star.size;

  useEffect(() => {
    const maxDistance = 20 * star.layerFactor; // Max distance a star can move in any direction
    const movementDuration = 8000 + Math.random() * 4000; // Increased duration for slower movement
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

  if (star.shape === 'sparkling') {
    return (
      <SparklingStar
        x={posX.current}
        y={posY.current}
        size={star.size}
        color={star.color}
        opacity={star.opacity.current}
      />
    );
  }

  return <Circle cx={posX} cy={posY} r={size / 2} color={star.color} opacity={opacity} />;
};

// Function to generate random stars for a given layer
const generateStarsForLayer = (layerIndex) => {
  return Array.from({ length: NUM_STARS / NUM_LAYERS }).map(() => {
    const layerFactor = (layerIndex + 1) / NUM_LAYERS;
    const color = starColors[Math.floor(Math.random() * starColors.length)];
    const shape = Math.random() < 0.2 ? 'sparkling' : 'circle'; // 20% chance to be a sparkling star

    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size: (Math.random() * 3 + 1) * layerFactor,
      opacity: (Math.random() * 0.5 + 0.5) * layerFactor,
      layerFactor,
      color,
      shape,
    };
  });
};

// Creating stars for each layer
const layers = Array.from({ length: NUM_LAYERS }).map((_, index) => generateStarsForLayer(index));

const StarBackgroundSkia = ({ children }) => {
  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        {layers.map((layer, layerIndex) =>
          layer.map((star, starIndex) => (
            <LayeredStar key={`layer-${layerIndex}-star-${starIndex}`} star={star} />
          ))
        )}
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
    ...StyleSheet.absoluteFillObject,
  },
  childrenContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
});
