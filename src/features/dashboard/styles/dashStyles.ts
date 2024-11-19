import { StyleSheet, Platform, ViewStyle } from 'react-native';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../../../utils/responsive'; // Import responsive utilities
import { SHARED } from '../../../styles/baseStyles';
import { theme } from '../../../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const dashStyles = (currentTheme: 'light' | 'dark' | 'femme') => {
  const myTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({

    metricBox: {
      paddingTop: normalizeHeight(6),
      paddingBottom: normalizeHeight(6),
      paddingLeft: normalizeWidth(6),
      paddingRight: normalizeWidth(6),
     },

    metricBoxInner: {
      paddingTop: normalizeHeight(12),
      paddingBottom: normalizeHeight(12),
      paddingLeft: normalizeWidth(12),
      paddingRight: normalizeWidth(12),
      borderRadius: SHARED.borderRadius1st,
      backgroundColor: myTheme.lightBackgroundColor,
      borderWidth: myTheme.boxBorderWidth2nd,
      borderColor: myTheme.lineBorderColor,
    },

    orderBox: {
      marginVertical: normalizeHeight(4),
      paddingTop: normalizeHeight(8),
      paddingBottom: normalizeHeight(8),
      paddingLeft: normalizeWidth(8),
      paddingRight: normalizeWidth(8),
      borderRadius: SHARED.borderRadius1st,
      backgroundColor: myTheme.lightBackgroundColor,
      borderWidth: myTheme.boxBorderWidth2nd,
      borderColor: myTheme.lineBorderColor,
    },

    feedbackBox: {
      paddingTop: normalizeHeight(12),
      paddingBottom: normalizeHeight(12),
      paddingLeft: normalizeWidth(12),
      paddingRight: normalizeWidth(12),
      marginVertical: normalizeHeight(4),
      borderRadius: SHARED.borderRadius1st,
      backgroundColor: myTheme.lightBackgroundColor,
      borderWidth: myTheme.boxBorderWidth2nd,
      borderColor: myTheme.lineBorderColor,
    },
  });
};
