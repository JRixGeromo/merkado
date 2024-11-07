import { StyleSheet, Platform, ViewStyle } from 'react-native';
import { normalizeFontSize, normalizeHeight, normalizeWidth } from '../../../utils/responsive'; // Import responsive utilities
import { SHARED } from '../../../styles/layoutStyles';
import { theme } from '../../../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const myProductStyles = (currentTheme: 'light' | 'dark' | 'feminine') => {
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme
 
  return StyleSheet.create({
    searchContainer: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      backgroundColor: selectedTheme.inputBackgroundColor, 
      borderRadius: 30, 
      borderWidth: SHARED.borderWidthSecondary,
      borderColor: selectedTheme.buttonBorderPrimary, 
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    searchInput: {
      flex: 1, 
      height: normalizeHeight(40), 
      borderColor: selectedTheme.buttonBorderPrimary,
      borderWidth: 0,
      paddingLeft: 0, 
      borderRadius: 20, 
      backgroundColor: selectedTheme.inputBackgroundColor, 
      color: selectedTheme.textPrimary,
    },
   cardButton: {
      alignItems: 'center', 
      justifyContent: 'center', 
      paddingVertical: normalizeHeight(5), 
    },
    slideModalImage: {
      width: '100%',
      height: normalizeHeight(200),
      borderRadius: normalizeHeight(10),
      marginBottom: normalizeHeight(10),
    },
  });
};