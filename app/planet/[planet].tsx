import { useNavigation, useLocalSearchParams } from 'expo-router';
import { useLayoutEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Pressable } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import StarBackground from '../../components/star-background';
import { Ionicons } from '@expo/vector-icons';
import HeartIcon from '../../components/icons/heart';

const IMG_HEIGHT = 300;
const { width } = Dimensions.get('window');

export default function PlanetScreen() {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const { setOptions, goBack } = useNavigation();
  const { planet } = useLocalSearchParams<{
    planet: string;
  }>();

  useLayoutEffect(() => {
    setOptions({
      title: planet,
    });
  }, []);

  useLayoutEffect(() => {
    setOptions({
      headerBackground: () => <Animated.View style={[headerAnimatedStyle, styles.header]} />,
      headerLeft: () => (
        <Pressable onPress={goBack}>
          <Ionicons name="ios-arrow-back-circle-outline" color="white" size={35} />
        </Pressable>
      ),
    });
  }, []);

  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
    };
  }, []);

  return (
    <StarBackground>
      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          ref={scrollRef}
          scrollEventThrottle={16}
          style={{ marginTop: 10 }}>
          <Animated.Image
            source={require('../../assets/planets/Earth.png')}
            style={[styles.image, imageAnimatedStyle]}
            resizeMode="cover"
          />
          <View className="p-6 h-full bg-dark">
            <View className="flex-row items-center justify-between">
              <View>
                <Text style={{ fontFamily: 'Rubik_700Bold' }} className="text-4xl text-white">
                  Saturn
                </Text>
                <Text className="text-xl text-white font-sans">The Jewel of the Solar System</Text>
              </View>
              <View
                style={{
                  shadowColor: 'red',
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.91,
                  shadowRadius: 9.11,

                  elevation: 14,
                }}>
                <HeartIcon />
              </View>
            </View>
            <Text className="text-lg text-white my-4 font-sans">
              Saturn is often referred to as the "jewel of the solar system" due to its stunning
              rings that are visible from Earth. With a diameter of 116,460 km, Saturn is the second
              largest planet in our solar system and is known for its unique and beautiful ring
              system, which is composed of ice particles, dust, and small rocks. The rings are
              believed to be relatively young, having formed less than 100 million years ago from
              the debris of a destroyed moon or comet. Saturn's atmosphere is primarily composed of
              hydrogen and helium, with trace amounts of other gases.{' '}
            </Text>
            <Text className="text-[#787878] font-sans">By Daisy Stephenson | 02 May 2023</Text>
          </View>
        </Animated.ScrollView>
      </View>
    </StarBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0F0E0F',
    height: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
  },
  image: { height: IMG_HEIGHT, width },
});
