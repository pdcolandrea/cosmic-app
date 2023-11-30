import { Ionicons } from '@expo/vector-icons';
import { FlatList, type ListRenderItem, View, Text, Pressable, Image } from 'react-native';

interface PlanetSliderProps {
  searchFilter?: string;
}

const TEMP_PLANETS = [
  {
    title: 'Mother Earth',
    image: require('../assets/planets/Earth.png'),
    description:
      'Earth is the third planet from the sun and the only known planet to support life. It has a diameter of 12,742 km.',
    bgColor: '#B6F3FF',
    buttonColor: '#1D99B5',
  },
  {
    title: 'Venus',
    image: require('../assets/planets/Venus.png'),
    description:
      "Venus is the second planet from the sun and is often referred to as the Earth's sister planet.",
    bgColor: '#F6E3C4',
    buttonColor: '#D6711E',
  },
] as const;

type PlanetType = (typeof TEMP_PLANETS)[number];

export const PlanetSlider = (props: PlanetSliderProps) => {
  const { searchFilter } = props;

  const renderPlanetItem: ListRenderItem<PlanetType> = ({ item }) => {
    const DEBUG_LIST = false;

    return (
      <View
        className={`flex-col items-start relative overflow-visible pt-20 mr-4 ${
          DEBUG_LIST && 'bg-red-500'
        }`}>
        <Image
          source={item.image}
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
          className="w-48 h-64 rounded-xl px-3 justify-end"
          style={{ backgroundColor: item.bgColor }}>
          <Text className="font-semibold text-lg mb-1">{item.title}</Text>

          <Text className="text-[#353535] text-xs">{item.description}</Text>

          <Pressable
            style={{ backgroundColor: item.buttonColor }}
            className="h-12 w-12 border border-white rounded-full mx-auto items-center justify-center translate-y-5">
            <Ionicons name="arrow-forward" color="white" size={30} />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={TEMP_PLANETS}
      style={{ marginRight: -16 }}
      contentContainerStyle={{
        alignItems: 'flex-start',
        flexGrow: 0,
      }}
      renderItem={renderPlanetItem}
      horizontal
    />
  );
};
