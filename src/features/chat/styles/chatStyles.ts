import { StyleSheet, Platform, ViewStyle } from 'react-native';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../../../utils/responsive'; // Import responsive utilities
import { SHARED } from '../../../styles/baseStyles';
import { theme } from '../../../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const chatStyles = (currentTheme: 'light' | 'dark' | 'feminine') => {
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
    chatAvatar: {
      width: normalizeWidth(40),
      height: normalizeHeight(40),
      borderRadius: 25,
      borderWidth: 2,
      borderColor: selectedTheme.textPrimary,
    },
    avatarBar: {
      height: normalizeHeight(48),
      backgroundColor: selectedTheme.cardBackground,
      flexDirection: 'row',
    },
    chatSendButton: {
      marginLeft: normalizeWidth(10),
    },
    chatMessagesContainer: {
      position: 'relative',
      backgroundColor: selectedTheme.cardBackground,
      paddingTop: normalizeHeight(8),
      paddingBottom: normalizeHeight(8),
    },
    chatInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: normalizeWidth(10),
      marginHorizontal: normalizeWidth(10),
      marginBottom: normalizeHeight(10),
      borderRadius: 25,
    },
    unreadBadge: {
      position: 'absolute',
      top: normalizeHeight(-3),
      right: normalizeWidth(-7),
      backgroundColor: 'red',
      borderRadius: 10,
      width: normalizeWidth(20),
      height: normalizeHeight(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
    unreadText: {
      color: 'white',
      fontSize: SHARED.fontS,
      fontWeight: 'bold',
    },
  });
};
