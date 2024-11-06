import { StyleSheet, Platform, ViewStyle } from 'react-native';
import { normalizeFontSize, normalizeHeight, normalizeWidth } from '../../../utils/responsive'; // Import responsive utilities
import { SHARED } from '../../../styles/layoutStyles';
import { theme } from '../../../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const cartStyles = (currentTheme: 'light' | 'dark' | 'feminine') => {
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme
 
  return StyleSheet.create({
    contentBox: {
      backgroundColor: selectedTheme.cardBackground,
      width: "100%",
      height: normalizeHeight(110),
      marginRight: normalizeWidth(10),
      paddingBottom: 0,
      marginBottom: normalizeHeight(10),
      borderColor: selectedTheme.lineBorderColorLight,
      borderWidth: SHARED.borderWidth,
      borderRadius: SHARED.borderRadiusSecondary,
      overflow: 'hidden'
    },
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