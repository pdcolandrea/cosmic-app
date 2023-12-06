import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  onboard: 'HAS_ONBOARDED',
};

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
