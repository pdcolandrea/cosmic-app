import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { LayoutAnimation, TextInput, View } from 'react-native';

import ArticleSlider from '../../components/article-slider';
import CategorySlider, { FilterType } from '../../components/category-slider';
import PlanetSlider from '../../components/planet-slider';
import StarBackground from '../../components/star-background';
import StarBackgroundSkia from '../../components/star-skia-background';
import { PlanetList } from '../../lib/data/planets';
import { SkiaNonLayedStarBackground } from '../../components/star-skia-background-standard';

export default function TabOneScreen() {
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedTab, setSelectedTab] = useState<FilterType>('all');
  const [planetList, setPlanetList] = useState(PlanetList);

  const onTabPressed = (filter: FilterType) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setSelectedTab(filter);
  };

  useEffect(() => {
    if (searchFilter.length === 0) {
      setPlanetList(PlanetList);
    } else {
      setPlanetList(PlanetList.filter((planet) => planet.name.includes(searchFilter)));
    }
  }, [searchFilter]);

  return (
    <SkiaNonLayedStarBackground>
      <View className="flex-1 p-4">
        <StatusBar style="inverted" />
        <View className="mt-12 mb-4 h-12 mx-auto items-center w-full rounded-xl bg-[#161616] flex-row px-4">
          <Ionicons name="search-sharp" color="white" size={22} style={{ marginTop: 5 }} />
          <TextInput
            className="w-full text-base text-white ml-2 font-sans"
            placeholder="Search for planets and stars"
            onChangeText={setSearchFilter}
            placeholderTextColor="white"
          />
        </View>

        <CategorySlider selectedTab={selectedTab} onChange={onTabPressed} />
        <PlanetSlider
          planets={planetList}
          onPlanetPress={() => {
            // avoid resetting until slide animation finished
            setTimeout(() => {
              setSearchFilter('');
            }, 1000);
          }}
        />
        <ArticleSlider />
      </View>
    </SkiaNonLayedStarBackground>
  );
}
