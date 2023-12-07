import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import { useLayoutEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';

import { AnimatedHeartToggle } from '../../components/icons/animated-heart';
import ParallaxModal from '../../components/parallax-modal';
import { SkiaNonLayedStarBackground } from '../../components/star-skia-background-standard';
import { useLikeStore } from '../../hooks/use-likes';
import { PlanetList } from '../../lib/data/planets';
import StarBackgroundSkia from '../../components/star-skia-background';

const IMG_HEIGHT = 300;

export default function PlanetScreen() {
  const { toggleLike, likes } = useLikeStore();
  const { setOptions, goBack } = useNavigation();
  const { planet: planetName } = useLocalSearchParams<{
    planet: string;
  }>();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const planet = PlanetList.find((p) => p.name === planetName);
  if (!planetName || !planet) throw new Error("Planet screen requires 'planet' param");

  const isLikedPlanet = likes.includes(planet.name);

  useLayoutEffect(() => {
    setOptions({
      headerLeft: () => (
        <Pressable onPress={goBack}>
          <Ionicons name="ios-arrow-back-circle-outline" color="white" size={35} />
        </Pressable>
      ),
    });
  }, []);

  const onLikePressed = () => {
    toggleLike(planet.name);
  };

  return (
    <SkiaNonLayedStarBackground>
      <View style={{ flex: 1 }}>
        <ParallaxModal image={planet.image} imageHeight={300} animateHeader ref={scrollRef}>
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
        </ParallaxModal>
      </View>
    </SkiaNonLayedStarBackground>
  );
}
