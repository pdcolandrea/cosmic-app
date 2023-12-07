import { FlatList, Image, ListRenderItem, Pressable, Text, View } from 'react-native';

const TEMP_ARTICLES = [
  {
    title: 'Ice Giant - Uranus',
    description:
      'Uranus is a fascinating planet that is often overlooked due to its distance from Earth and lack of visible features. ',
    author: 'Louise Stark',
    date: 'May 12, 2023',
  },
] as const;

interface ArticleSliderProps {
  onArticlePressed: (id: number) => void;
}

export default function ArticleSlider(props: ArticleSliderProps) {
  const { onArticlePressed } = props;

  const renderArticleItem: ListRenderItem<(typeof TEMP_ARTICLES)[number]> = ({ item }) => {
    return (
      <View className="flex-row bg-[#161616] h-36 w-[350px] rounded-xl">
        <View className="w-28 bg-[#B098E4] rounded-l-xl items-center justify-center">
          <Image
            source={require('../assets/temp-article-img.png')}
            style={{ width: 105, height: 105 }}
          />
        </View>
        <View className="flex-col flex-1 p-3">
          <Text className="text-lg text-white">{item.title}</Text>
          <Text className="text-[#BBBBBB] flex-wrap  text-xs" numberOfLines={4}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Pressable onPress={() => onArticlePressed(1)} className="">
      <Text className="text-lg text-white font-semibold mb-3">Articles</Text>
      <FlatList data={TEMP_ARTICLES} renderItem={renderArticleItem} horizontal />
    </Pressable>
  );
}
