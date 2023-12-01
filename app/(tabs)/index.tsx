import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  FlatList,
  LayoutAnimation,
  ListRenderItem,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import { PlanetSlider } from '../../components/planet-slider';
import StarBackground from '../../components/star-background';
import ArticleSlider from '../../components/article-slider';

const TEMP_LABELS = [
  {
    title: 'All',
    filter: 'all',
  },
  {
    title: 'Planets',
    filter: 'planets',
  },
  {
    title: 'Stars',
    filter: 'stars',
  },
  {
    title: 'Galaxies',
    filter: 'galaxies',
  },
] as const;

type LabelsType = (typeof TEMP_LABELS)[number];
type FilterType = LabelsType['filter'];

export default function TabOneScreen() {
  const [selectedTab, setSelectedTab] = useState<FilterType>('all');

  const renderTabLabel: ListRenderItem<LabelsType> = ({ item }) => {
    const isSelected = item.filter === selectedTab;

    const onTabPressed = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      setSelectedTab(item.filter);
    };

    return (
      <Pressable
        onPress={onTabPressed}
        className={`border-[#565656] h-8 px-4 mr-3 border items-center justify-center rounded-lg ${
          isSelected && 'border-0 bg-white text-black'
        }`}>
        <Text className="text-[#565656]" style={{}}>
          {item.title}
        </Text>
      </Pressable>
    );
  };

  return (
    <StarBackground>
      <View className={styles.container}>
        <StatusBar backgroundColor="red" />
        <View className="mt-12 mb-4 h-12 mx-auto items-center w-full rounded-xl bg-[#161616] flex-row px-4">
          <Ionicons name="search-sharp" color="white" size={22} style={{ marginTop: 5 }} />
          <TextInput
            className="w-full text-base text-white ml-2"
            placeholder="Search for planets and stars"
            placeholderTextColor="white"
          />
        </View>

        <FlatList
          data={TEMP_LABELS}
          renderItem={renderTabLabel}
          style={{ flexGrow: 0, marginBottom: 24 }}
          horizontal
        />
        <PlanetSlider />
        <ArticleSlider />
      </View>
    </StarBackground>
  );
}

const styles = {
  container: `flex-1 p-4`,
  title: `text-xl font-bold text-white`,
};
