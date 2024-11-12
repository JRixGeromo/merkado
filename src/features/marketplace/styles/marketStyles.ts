import { StyleSheet, Platform, ViewStyle } from 'react-native';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../../../utils/responsive'; // Import responsive utilities
import { SHARED } from '../../../styles/baseStyles';
import { theme } from '../../../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const marketStyles = (currentTheme: 'light' | 'dark' | 'feminine') => {
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
  
  // SearchBarWithToggle 
  searchContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalizeWidth(15),
    paddingVertical: normalizeHeight(10),
    borderBottomWidth: SHARED.borderWidth,
    borderBottomColor: selectedTheme.lineBorderColor,
  },
  
  searchInput: {
    flex: 1,
    backgroundColor: selectedTheme.inputBackgroundColor,
    paddingTop: normalizeHeight(5),
    paddingBottom: normalizeHeight(5),
    paddingLeft: normalizeWidth(10),
    paddingRight: normalizeWidth(10),
    borderRadius: SHARED.borderRadiusSecondary,
    fontSize: SHARED.fontS,
    marginRight: normalizeWidth(10),
  },

  iconButton: {
    paddingTop: normalizeHeight(5),
    paddingBottom: normalizeHeight(5),
    paddingLeft: normalizeWidth(10),
    paddingRight: normalizeWidth(10),
    backgroundColor: selectedTheme.buttonSecondary,
    borderRadius: SHARED.borderRadiusSecondary,
    marginLeft:  normalizeWidth(5),
  },

  activeIconButton: {
    backgroundColor: selectedTheme.buttonInfo,
  },

  iconText: {
    fontSize: SHARED.fontM,
    color: selectedTheme.textDark,
  },
  activeIconText: {
    color: selectedTheme.textLight,
  },


    //////
    bannerImageWrapper: {
      width: '100%',
      height: normalizeHeight(200),
      resizeMode: 'cover',
    },
    bannerContentImage: {
      width: '100%',
      height: normalizeHeight(200),
    },
    selectedReactionWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    selectedReactionText: {
      fontSize: SHARED.fontXxL,
      color: selectedTheme.textGray,
    },
    saleBanner: {
      position: 'absolute',
      top: 0,
      width: '100%',
      backgroundColor: 'red',
      paddingTop: normalizeHeight(5),
      paddingBottom: normalizeHeight(5),
      paddingLeft: normalizeWidth(5),
      paddingRight: normalizeWidth(5),
      zIndex: 1,
      alignItems: 'center',
    },
    priceContainer: {
      position: 'absolute',
      bottom: normalizeHeight(10),
      right: normalizeHeight(10),
      paddingTop: normalizeHeight(5),
      paddingBottom: normalizeHeight(1),
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderWidth: SHARED.borderWidthSecondary,
      borderColor: selectedTheme.borderColorDark,
      borderRadius: 5,
      zIndex: 2,
    },
    reactionBarSection: {
      paddingHorizontal: normalizeWidth(16),
      alignItems: 'center',
      marginBottom: normalizeHeight(5),
    },
    commentSection: {
      paddingHorizontal: normalizeWidth(10),
      marginBottom: normalizeHeight(10),
    },
    commentContainer: {
      paddingTop: normalizeHeight(15),
      paddingBottom: normalizeHeight(15),
      paddingLeft: normalizeWidth(15),
      paddingRight: normalizeWidth(15),
      borderRadius: SHARED.borderRadius,
      borderColor: selectedTheme.lineBorderColor,
      borderWidth: SHARED.borderWidth,
      marginBottom: normalizeHeight(10),
      position: 'relative',
    },
    commentsList: {
      paddingHorizontal: normalizeWidth(10),
    },
    userImage: {
      width: normalizeWidth(30),
      height: normalizeWidth(30),
      borderRadius: 20,
    },
    commentWrapper: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      position: 'relative',
      paddingRight: normalizeWidth(40),
      marginBottom: normalizeHeight(10),
    },
    commentTextWrapper: {
      lineHeight: normalizeHeight(18),
    },
    timeAndReactionWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: normalizeHeight(5),
    },
    replyContainer: {
      marginLeft: normalizeWidth(15),
      marginTop: normalizeHeight(5),
      paddingLeft: normalizeWidth(10),
    },
    replyInputWrapper: {
      marginLeft: -15,
      marginRight: -15,
      marginTop: normalizeHeight(10),
    },
    chatButton: {
      backgroundColor: selectedTheme.buttonDark,
    },
    cartButton: {
      backgroundColor: selectedTheme.buttonPrimary,
    },
  });
};
