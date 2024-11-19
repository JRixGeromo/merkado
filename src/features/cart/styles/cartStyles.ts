import { StyleSheet, Platform, ViewStyle } from 'react-native';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../../../utils/responsive'; // Import responsive utilities
import { SHARED } from '../../../styles/baseStyles';
import { theme } from '../../../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const cartStyles = (currentTheme: 'light' | 'dark' | 'femme') => {
  const myTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
    cartItemImage: {
      width: normalizeWidth(100),
      height: normalizeHeight(100),
    },
    quantityButton: {
      width: normalizeWidth(30),
      height: normalizeHeight(30),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e0e0e0',
      borderRadius: 0,
    },
  });
};
