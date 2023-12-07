import { useNavigation } from 'expo-router';
import { forwardRef, useLayoutEffect } from 'react';
import { View, Dimensions, ImageSourcePropType, StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

interface ParallaxModalProps {
  children: React.ReactNode;
  image: ImageSourcePropType;
  imageHeight?: number;
  animateHeader?: boolean;
}

const { width } = Dimensions.get('window');

const ParallaxModal = forwardRef<Animated.ScrollView, ParallaxModalProps>((props, ref) => {
  const { setOptions } = useNavigation();
  const { children, image, animateHeader = true, imageHeight = 300 } = props;
  const scrollOffset = useScrollViewOffset(ref);

  useLayoutEffect(() => {
    if (!animateHeader) return;

    setOptions({
      headerBackground: () => <Animated.View style={[headerAnimatedStyle, styles.header]} />,
    });
  }, []);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-imageHeight, 0, imageHeight, imageHeight],
            [-imageHeight / 2, 0, imageHeight * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-imageHeight, 0, imageHeight], [2, 1, 1]),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, imageHeight / 1.5], [0, 1]),
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Animated.ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        ref={ref}
        scrollEventThrottle={16}
        style={{ marginTop: 10 }}>
        <Animated.Image
          source={image}
          style={[{ height: imageHeight, width }, imageAnimatedStyle]}
          resizeMode="cover"
        />
        {children}
      </Animated.ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0F0E0F',
    height: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
  },
});

export default ParallaxModal;
