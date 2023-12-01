import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

// not being used currently
export default function NavBack(props) {
  return (
    <Pressable>
      <Ionicons name="ios-arrow-back-circle" />
    </Pressable>
  );
}
