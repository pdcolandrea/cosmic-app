import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

interface HeartToggleProps {
  liked: boolean;
  onPress: (value: boolean) => void;
}

export const AnimatedHeartToggle = (props: HeartToggleProps) => {
  const { liked, onPress } = props;
  const scale = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    onPress(!liked);
    scale.value = withSpring(liked ? 1 : 1.28, { damping: 5, stiffness: 100, mass: 1 });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.View
        style={[
          animatedStyles,
          {
            /* Add additional styles here */
          },
        ]}>
        <Ionicons name={liked ? 'heart' : 'heart-outline'} color="#FF3797" size={30} />
      </Animated.View>
    </TouchableOpacity>
  );
};
