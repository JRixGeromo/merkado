import i18n, { LanguageDetectorAsyncModule } from 'i18next';  // Import the correct type for language detector
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import your translation files
import en from './locales/en.json';
import tl from './locales/tl.json'; // Tagalog translations
import bs from './locales/bs.json'; // Bisaya translations

// Language detector using AsyncStorage and react-native-localize
const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,  // Specify that this is async
  init: () => {},  // No special initialization needed

  // Detect the language
  detect: async (): Promise<string> => {
    try {
      // Get the saved language from AsyncStorage
      const savedLanguage = await AsyncStorage.getItem('user-language');

      // If there's a saved language, use it
      if (savedLanguage) {
        return savedLanguage;
      }

      // Otherwise, detect the best available locale from the device
      const locales = RNLocalize.getLocales();
      const bestLang = locales[0]?.languageTag;

      // Return the best available language or English
      return bestLang || 'en';
    } catch (error) {
      console.error('Error detecting language', error);
      return 'en'; // Fallback to English in case of error
    }
  },

  // Cache the user's selected language
  cacheUserLanguage: async (lng: string) => {
    try {
      // Save the user's selected language in AsyncStorage
      await AsyncStorage.setItem('user-language', lng);
    } catch (error) {
      console.error('Error saving language', error);
    }
  },
};

// Initialize i18n with the translations
i18n
  .use(languageDetector)  // Use the custom language detector
  .use(initReactI18next)   // Passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',  // Fallback language if the user language is not available
    resources: {
      en: { translation: en },
      tl: { translation: tl },  // Tagalog
      bs: { translation: bs },  // Bisaya
    },
    interpolation: {
      escapeValue: false,  // React already escapes values
    },
    compatibilityJSON: 'v3',  // Fallback to simpler pluralization handling
    saveMissing: true,  // Optional: useful for catching missing translations in your resources
  });

export default i18n;
