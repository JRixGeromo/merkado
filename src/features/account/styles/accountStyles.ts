import { StyleSheet, Platform, ViewStyle } from 'react-native';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../../../utils/responsive'; // Import responsive utilities
import { SHARED } from '../../../styles/baseStyles';
import { theme } from '../../../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const acctStyles = (currentTheme: 'light' | 'dark' | 'femme') => {
  const myTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
    welcomeText: {
      fontSize: SHARED.fontXxL,
      fontFamily: myTheme.headingFont,
      color: myTheme.text1st,
      marginBottom: normalizeHeight(20),
    },
    linkText: {
      fontSize: SHARED.fontM,
      fontFamily: myTheme.bodyFont,
      color: myTheme.textLink,
      marginTop: normalizeHeight(10),
      marginBottom: normalizeHeight(10),
      marginLeft: normalizeWidth(10),
      marginRight: normalizeWidth(10),
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: normalizeHeight(10),
    },
    cardHeaderTitle: {
      fontSize: SHARED.fontXL,
      fontFamily: myTheme.headingFont,
      color: myTheme.text1st,
    },
    toggleButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardText: {
      fontSize: SHARED.fontM,
      color: myTheme.text1st,
      marginTop: normalizeHeight(5),
      marginLeft: normalizeWidth(10),
    },
    languageContainer: {
      marginTop: normalizeHeight(10),
      backgroundColor: myTheme.cardBackground,
    },
  });
};
