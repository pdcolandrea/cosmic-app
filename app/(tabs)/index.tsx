import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { LayoutAnimation, TextInput, View } from 'react-native';

import ArticleSlider from '../../components/article-slider';
import CategorySlider, { FilterType } from '../../components/category-slider';
import PlanetSlider from '../../components/planet-slider';
import StarBackground from '../../components/star-background';
import StarBackgroundSkia from '../../components/star-skia-background';

export default function TabOneScreen() {
  const [selectedTab, setSelectedTab] = useState<FilterType>('all');

  const onTabPressed = (filter: FilterType) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setSelectedTab(filter);
  };

  return (
    <StarBackgroundSkia>
      <View className="flex-1 p-4">
        <StatusBar backgroundColor="red" />
        <View className="mt-12 mb-4 h-12 mx-auto items-center w-full rounded-xl bg-[#161616] flex-row px-4">
          <Ionicons name="search-sharp" color="white" size={22} style={{ marginTop: 5 }} />
          <TextInput
            className="w-full text-base text-white ml-2 font-sans"
            placeholder="Search for planets and stars"
            placeholderTextColor="white"
          />
        </View>

        <CategorySlider selectedTab={selectedTab} onChange={onTabPressed} />
        <PlanetSlider />
        <ArticleSlider />
      </View>
    </StarBackgroundSkia>
  );
}
