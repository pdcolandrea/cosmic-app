import { Text, TextInput, View } from 'react-native';

import EditScreenInfo from '../../components/edit-screen-info';
import { StatusBar } from 'expo-status-bar';

export default function TabOneScreen() {
  return (
    <View className={styles.container}>
      <StatusBar backgroundColor="red" />
      <TextInput
        className="mt-20 h-14 rounded-md w-[90%] mx-auto bg-[#161616]"
        placeholder="Search for planets and stars"
      />
    </View>
  );
}

const styles = {
  container: `flex-1 bg-dark`,
  title: `text-xl font-bold text-white`,
};
