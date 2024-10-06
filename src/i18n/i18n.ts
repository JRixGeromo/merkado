import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Import the language detector module
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import your translation files
import en from './locales/en.json';
import tl from './locales/tl.json'; // Tagalog translations
import bs from './locales/bs.json'; // Bisaya translations

// Language detector using AsyncStorage and react-native-localize
const languageDetector = {
  type: 'languageDetector',  // Correct plugin interface
  async: true,  // Specify that this is async
  init: () => {},  // No special initialization needed

  // Detect the language
  detect: async (callback: (lng: string) => void) => {
    try {
      // Get the saved language from AsyncStorage
      const savedLanguage = await AsyncStorage.getItem('user-language');

      // If there's a saved language, use it
      if (savedLanguage) {
        callback(savedLanguage);
        return;
      }

      // Otherwise, detect the best available locale from the device
      const locales = RNLocalize.getLocales();
      const bestLang = locales[0]?.languageTag;

      // Callback with the best available language or English
      callback(bestLang || 'en');
    } catch (error) {
      console.error('Error detecting language', error);
      callback('en'); // Fallback to English in case of error
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
  .use(LanguageDetector)  // Use the language detector module
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
  });

export default i18n;
