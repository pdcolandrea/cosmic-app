import { Ionicons } from '@expo/vector-icons';
import { Link, useNavigation } from 'expo-router';
import {
  FlatList,
  type ListRenderItem,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import { PlanetList, PlanetType } from '../app/data/planets';

interface PlanetSliderProps {
  searchFilter?: string;
}

export const PlanetSlider = (props: PlanetSliderProps) => {
  const navigation = useNavigation();
  const { searchFilter } = props;

  const renderPlanetItem: ListRenderItem<PlanetType> = ({ item }) => {
    const DEBUG_LIST = false;

    return (
      <View
        className={`flex-col items-start relative overflow-visible pt-20 mr-4 ${
          DEBUG_LIST && 'bg-red-500'
        }`}>
        <Link href={{ pathname: '/planet/[planet]', params: { planet: item.title } }}>
          <View>
            <Image
              source={item.image}
              style={{
                width: 280,
                height: 280,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
              }}
              className="absolute -top-28 -left-[66px] z-10"
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
        </Link>
      </View>
    );
  };

  return (
    <FlatList
      data={PlanetList}
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
