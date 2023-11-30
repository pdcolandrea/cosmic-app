import { Ionicons } from '@expo/vector-icons';
import { FlatList, type ListRenderItem, View, Text, Pressable, Image } from 'react-native';

interface PlanetSliderProps {
  searchFilter?: string;
}

const TEMP_PLANETS = [
  { title: 'Mother Earth', description: 'lorem ipsum lorem ipsum', color: 'earth' },
] as const;

type PlanetType = (typeof TEMP_PLANETS)[number];

export const PlanetSlider = (props: PlanetSliderProps) => {
  const renderPlanetItem: ListRenderItem<PlanetType> = ({ item }) => {
    const DEBUG_LIST = false;

    return (
      <View
        className={`flex-col items-start relative overflow-visible pl-3 pt-20 ${
          DEBUG_LIST && 'bg-red-500'
        }`}>
        <Image
          source={require('../assets/planets/Earth.png')}
          style={{
            width: 190,
            height: 190,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
          }}
          className="absolute -top-3 -left-4 z-10"
        />
        <View
          className="w-52 h-64 rounded-xl px-3 justify-end"
          style={{ backgroundColor: '#B6F3FF' }}>
          <Text className="font-semibold text-xl mb-1">{item.title}</Text>
          <Text className="text-[#353535]">
            Earth is the third planet from the sun and the only known planet to support life. It has
            a diameter of 12,742 km.
          </Text>
          <Pressable className="h-12 w-12 bg-[#1D99B5] border border-white rounded-full mx-auto items-center justify-center translate-y-5">
            <Ionicons name="arrow-forward" color="white" size={30} />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={TEMP_PLANETS}
      contentContainerStyle={{ alignItems: 'flex-start', paddingHorizontal: -16 }}
      renderItem={renderPlanetItem}
      horizontal
    />
  );
};
