import { forwardRef, useMemo } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface ArticleBottomSheetProps {}

export const ArticleBottomSheet = forwardRef<BottomSheetModal, ArticleBottomSheetProps>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['25%', '95%'], []);

    return (
      <BottomSheetModal
        backgroundStyle={{ backgroundColor: '#1E1E1E' }}
        ref={ref}
        snapPoints={snapPoints}>
        <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 12 }}>
          <View className="flex-row items-center">
            <View
              style={{
                width: 25,
                height: 25,
                backgroundColor: 'red',
                borderRadius: 300,
                marginRight: 6,
              }}
            />
            <Text className="text-[#a3a3a3]">posted by</Text>
            <Text className="text-white font-semibold"> CNN Indonesia</Text>
          </View>
          <Text className="font-semibold text-white text-lg mt-2">
            Bring me the Horizon talk about Uranus
          </Text>
          <View className="flex-row items-center">
            <Feather name="clock" color="#a3a3a3" size={14} />
            <Text className="text-[#a3a3a3] ml-1">2 hours ago</Text>
          </View>
        </View>
      </BottomSheetModal>
    );
  }
);
