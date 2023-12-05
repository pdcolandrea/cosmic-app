import { SafeAreaView, Text, View } from 'react-native';
import { useLikeStore } from '../../hooks/use-likes';

export default function LikesScreen() {
  const likes = useLikeStore((store) => store.likes);

  return (
    <View>
      <SafeAreaView>
        <Text>Likes</Text>
        {likes.map((like) => {
          return (
            <View key={`like-${like}`}>
              <Text>{like}</Text>
            </View>
          );
        })}
      </SafeAreaView>
    </View>
  );
}
