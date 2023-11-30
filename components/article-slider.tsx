import { FlatList, ListRenderItem, Text, View } from 'react-native';

const TEMP_ARTICLES = [
  {
    title: 'Ice Giant - Uranus',
    description:
      'Uranus is a fascinating planet that is often overlooked due to its distance from Earth and lack of visible features. ',
    author: 'Louise Stark',
    date: 'May 12, 2023',
  },
] as const;

export default function ArticleSlider() {
  const renderArticleItem: ListRenderItem<(typeof TEMP_ARTICLES)[number]> = ({ item }) => {
    return (
      <View className="flex-row bg-[#161616] h-36 w-[350px] rounded-xl">
        <View className="w-28 bg-[#B098E4] rounded-l-xl" />
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
    <View className="">
      <Text className="text-lg text-white font-semibold mb-3">Articles</Text>
      <FlatList data={TEMP_ARTICLES} renderItem={renderArticleItem} horizontal />
    </View>
  );
}
