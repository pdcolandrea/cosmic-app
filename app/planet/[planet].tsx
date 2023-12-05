import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { AnimatedHeartToggle } from '../../components/icons/animated-heart';
import StarBackground from '../../components/star-background';
import { useLikeStore } from '../../hooks/use-likes';
import { PlanetList } from '../../lib/data/planets';

const IMG_HEIGHT = 300;
const { width } = Dimensions.get('window');

export default function PlanetScreen() {
  const { toggleLike, likes } = useLikeStore();
  const { setOptions, goBack } = useNavigation();
  const { planet: planetName } = useLocalSearchParams<{
    planet: string;
  }>();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const planet = PlanetList.find((p) => p.name === planetName);
  if (!planetName || !planet) throw new Error("Planet screen requires 'planet' param");

  const isLikedPlanet = likes.includes(planet.name);

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

  const onLikePressed = () => {
    toggleLike(planet.name);
  };

  return (
    <StarBackground>
      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          ref={scrollRef}
          scrollEventThrottle={16}
          style={{ marginTop: 10 }}>
          <Animated.Image
            source={planet?.image}
            style={[styles.image, imageAnimatedStyle]}
            resizeMode="cover"
          />
          <View className="p-6 h-full bg-dark">
            <View className="flex-row items-center justify-between">
              <View>
                <Text style={{ fontFamily: 'Rubik_700Bold' }} className="text-4xl text-white">
                  {planet.name}
                </Text>
                <Text className="text-xl text-white font-sans">{planet.subtitle}</Text>
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
                <Pressable onPress={onLikePressed} style={{ marginRight: 12 }}>
                  <AnimatedHeartToggle liked={isLikedPlanet} onPress={onLikePressed} />
                </Pressable>
              </View>
            </View>
            <Text className="text-lg text-white my-4 font-sans">{planet.information}</Text>
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
