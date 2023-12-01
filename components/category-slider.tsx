import { FlatList, LayoutAnimation, ListRenderItem, Pressable, Text, View } from 'react-native';

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

export type LabelsType = (typeof TEMP_LABELS)[number];
export type FilterType = LabelsType['filter'];

interface CategorySliderProps {
  selectedTab: FilterType;
  onChange: (filter: FilterType) => void;
}

export default function CategorySlider(props: CategorySliderProps) {
  const { selectedTab, onChange } = props;
  const renderTabLabel: ListRenderItem<LabelsType> = ({ item }) => {
    const isSelected = item.filter === selectedTab;

    return (
      <Pressable
        onPress={() => onChange(item.filter)}
        className={`border-[#565656] h-8 px-4 mr-3 border items-center justify-center rounded-lg ${
          isSelected && 'border-0 bg-white text-black'
        }`}>
        <Text className="text-[#565656] font-sans" style={{}}>
          {item.title}
        </Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={TEMP_LABELS}
      renderItem={renderTabLabel}
      style={{ flexGrow: 0, marginBottom: 24 }}
      horizontal
    />
  );
}
