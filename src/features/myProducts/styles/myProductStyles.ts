import { StyleSheet, Platform, ViewStyle } from 'react-native';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../../../utils/responsive'; // Import responsive utilities
import { SHARED } from '../../../styles/baseStyles';
import { theme } from '../../../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const myProductStyles = (
  currentTheme: 'light' | 'dark' | 'feminine',
) => {
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({});
};
