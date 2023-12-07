import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import {
  FlatList,
  type ListRenderItem,
  View,
  Text,
  Pressable,
  Image,
  ImageStyle,
} from 'react-native';
import Animated, { FadeInLeft, FadeOutRight } from 'react-native-reanimated';
import { PlanetType } from '../lib/data/planets';

interface PlanetSliderProps {
  planets: PlanetType[];
  onPlanetPress?: (planet: PlanetType['name']) => void;
}

export default function PlanetSlider(props: PlanetSliderProps) {
  const { planets, onPlanetPress } = props;

  const renderPlanetItem: ListRenderItem<PlanetType> = ({ item, index }) => {
    const DEBUG_LIST = false;
    const imageStyle = (): ImageStyle => {
      if (item.title === 'Saturn') {
        return {
          marginLeft: 20,
          transform: [{ scale: 0.83 }],
        };
      } else if (item.title === 'Uranus') {
        return {
          marginBottom: 20,
          marginLeft: 20,
          transform: [
            { scale: 0.85 },
            {
              rotate: '25deg',
            },
          ],
        };
      }
      return {};
    };

    return (
      <Animated.View
        entering={FadeInLeft.duration(500).delay(250 * index)}
        exiting={FadeOutRight.duration(500)}
        className={`flex-col items-start relative overflow-visible pt-[70px] mr-6 ${
          DEBUG_LIST && 'bg-red-500'
        }`}>
        <Link
          onPress={() => {
            if (onPlanetPress) onPlanetPress(item.name);
          }}
          href={{ pathname: '/planet/[planet]', params: { planet: item.name } }}>
          <View>
            <Image
              source={item.image}
              style={[
                imageStyle(),
                {
                  width: 280,
                  height: 280,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,
                },
              ]}
              className="absolute -top-28 -left-[66px] z-10"
            />
            <View
              className="w-48 h-64 rounded-xl px-3 justify-end"
              style={{ backgroundColor: item.bgColor }}>
              <Text style={{ fontFamily: 'Rubik_700Bold' }} className="font-semibold text-lg mb-1">
                {item.title}
              </Text>

              <Text style={{}} className="text-[#353535] font-sans text-xs">
                {item.description}
              </Text>

              <Pressable
                style={{ backgroundColor: item.buttonColor }}
                className="h-12 w-12 border border-white rounded-full mx-auto items-center justify-center translate-y-5">
                <Ionicons name="arrow-forward" color="white" size={30} />
              </Pressable>
            </View>
          </View>
        </Link>
      </Animated.View>
    );
  };

  return (
    <FlatList
      data={planets}
      style={{ marginRight: -16 }}
      contentContainerStyle={{
        alignItems: 'flex-start',
        flexGrow: 0,
      }}
      renderItem={renderPlanetItem}
      horizontal
    />
  );
}
