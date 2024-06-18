import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  onboard: 'HAS_ONBOARDED',
  seenFactPrefix: 'RANDOM_FACT-',
};

// so sorry about this
// TODO: Remove this class mess
export class AppSettings {
  protected static async getWrapper<T>(key: string, fallback: T): Promise<T | string> {
    try {
      const value = await AsyncStorage.getItem(key);
      if (!value) return fallback;
      return value;
    } catch (error) {
      console.error(error);
      return fallback;
    }
  }

  static async getHasOnboarded() {
    const value = await this.getWrapper(KEYS.onboard, 'false');
    if (value === 'true') return true;
    return false;
  }

  static async setHasOnboarded(value: boolean) {
    try {
      await AsyncStorage.setItem(KEYS.onboard, String(value));
    } catch (err) {
      console.error(err);
    }
  }
}

export const getHasSeenFact = async (id: number) => {
  const hasSeen = await AsyncStorage.getItem(`${KEYS.seenFactPrefix}${id}`);
  if (hasSeen && hasSeen === 'true') {
    return true;
  }

  return false;
};

export const markFactAsSeen = async (id: number) => {
  try {
    await AsyncStorage.setItem(`${KEYS.seenFactPrefix}${id}`, 'true');
  } catch (err) {
    console.error(err);
    return false;
  }
};
