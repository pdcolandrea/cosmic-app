import { Ionicons } from '@expo/vector-icons';
import { FlatList, type ListRenderItem, View, Text, Pressable } from 'react-native';

interface PlanetSliderProps {
  searchFilter?: string;
}

const TEMP_PLANETS = [
  { title: 'Mother Earth', description: 'lorem ipsum lorem ipsum', color: 'earth' },
] as const;

type PlanetType = (typeof TEMP_PLANETS)[number];

export const PlanetSlider = (props: PlanetSliderProps) => {
  const renderPlanetItem: ListRenderItem<PlanetType> = ({ item }) => {
    return (
      <View
        style={{ backgroundColor: '#B6F3FF' }}
        className="h-60 w-48 rounded-xl px-3 pt-3 justify-end">
        <Text className="font-semibold text-lg mb-1">{item.title}</Text>
        <Text className="text-[#353535]">
          Earth is the third planet from the sun and the only known planet to support life. It has a
          diameter of 12,742 km.
        </Text>
        <Pressable className="h-12 w-12 bg-[#1D99B5] border border-white rounded-full mx-auto items-center justify-center translate-y-5">
          <Ionicons name="arrow-forward" color="white" size={30} />
        </Pressable>
      </View>
    );
  };

  return <FlatList data={TEMP_PLANETS} renderItem={renderPlanetItem} horizontal />;
};
