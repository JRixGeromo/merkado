import { StyleSheet, Platform } from 'react-native';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../utils/responsive'; // Import responsive utilities
import { theme } from './theme'; // Make sure this path is correct

import { Dimensions } from 'react-native';

// Get screen width
const screenWidth = Dimensions.get('window').width;

// Calculate 50% of the screen width
const halfScreenWidth = screenWidth * 0.4;

// Centralized constants for commonly used style properties
export const SHARED = {
  halfScreen: halfScreenWidth, // Shared border radius
  borderRadius: 4, // Shared border radius
  borderRadiusPrimary: 6,
  borderRadiusSecondary: 8,
  borderRadiusRound: 15,
  padding: normalizeWidth(10), // Shared padding
  buttonPadding: normalizeWidth(15), // Button padding
  shadow: {
    color: '#000',
    offset: { width: 0, height: 2 },
    opacity: 0.1,
    radius: 0,
  },
  fontXxS: normalizeFontSize(8),
  fontXS: normalizeFontSize(10),
  fontS: normalizeFontSize(12),
  fontSM: normalizeFontSize(13),
  fontM: normalizeFontSize(14),
  fontLM: normalizeFontSize(15),
  fontL: normalizeFontSize(16),
  fontXL: normalizeFontSize(18),
  fontXxL: normalizeFontSize(20),
  fontXxxL: normalizeFontSize(30),
  fontBig: normalizeFontSize(40),
  fontXBig: normalizeFontSize(50),
};

// Dynamically generated styles based on theme
export const baseStyles = (currentTheme: 'light' | 'dark' | 'femme') => {
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
    //////////////
    // BASE STYLES
    container: {
      flex: 1,
      //backgroundColor: selectedTheme.fullBackgroundColor, // Theme-based background
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 0,
    },
    shadowedContainer: {
      borderRadius: SHARED.borderRadiusSecondary,
      ...Platform.select({
        ios: {
          shadowColor: SHARED.shadow.color,
          shadowOffset: SHARED.shadow.offset,
          shadowOpacity: SHARED.shadow.opacity,
          shadowRadius: SHARED.shadow.radius,
        },
        android: {
          elevation: selectedTheme.shadowElevation,
        },
      }),
    },

    alignAllItems: {
      justifyContent: 'flex-start', // Align content to the top of the container
      alignItems: 'center', // Center content horizontally
    },
    innerContainerCenter: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerContainerLeft: {
      alignItems: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    formContainer: {
      width: '100%',
      padding: SHARED.padding,
      backgroundColor: selectedTheme.fullBackgroundColor,
      borderWidth: selectedTheme.boxBorderWidthSecondary,
      borderColor: selectedTheme.lineBorderColor,
      borderRadius: SHARED.borderRadius,
      alignItems: 'center', // Center content horizontally if needed
      justifyContent: 'flex-start', // Start aligning content at the top
    },
    rowsInside: {
      width: '100%',
      flexDirection: 'column',
    },
    columnsInsideFlex: {
      flexDirection: 'row',
    },
    columnsInsideFlexCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    columnsInside: {
      flexDirection: 'row',
      width: '100%',
    },
    cols_1: {
      width: '100%',
    },
    cols_2: {
      width: '50%',
    },
    cols_3: {
      width: '33.33%',
    },
    cols_4: {
      width: '25%',
    },
    cols_5: {
      width: '20%',
    },
    cols_25: {
      width: '25%',
    },
    cols_75: {
      width: '75%',
    },
    cols_35: {
      width: '35%',
    },
    cols_40: {
      width: '40%',
    },
    cols_60: {
      width: '60%',
    },
    cols_70: {
      width: '70%',
    },
    cols_80: {
      width: '80%',
    },
    cols_90: {
      width: '90%',
    },
    cols_30: {
      width: '30%',
    },

    alignLeft: {
      justifyContent: 'flex-start', // Align items to the left
      flexDirection: 'row',
    },
    alignCenter: {
      justifyContent: 'center', // Center the items
      flexDirection: 'row',
    },
    alignRight: {
      justifyContent: 'flex-end', // Align items to the right
      flexDirection: 'row',
    },
    dividerWrapper: {
      width: '100%', // Full width for the wrapper
      paddingVertical: normalizeHeight(10), // Apply padding above and below
    },
    divider: {
      width: '100%', // Full width for the divider
      borderBottomWidth: 0.5, // Specify the width of the bottom border
      borderColor: selectedTheme.lineBorderColor, // Color of the divider
    },

    rlPaddingS: {
      paddingRight: normalizeWidth(10),
      paddingLeft: normalizeWidth(10),
    },
    rPaddingXS: {
      paddingRight: normalizeWidth(4),
    },
    rPaddingS: {
      paddingRight: normalizeWidth(10),
    },
    lPaddingS: {
      paddingLeft: normalizeWidth(10),
    },
    paddingAllS: {
      padding: normalizeWidth(10),
    },
    rPaddingL: {
      paddingRight: normalizeWidth(20),
    },
    lPaddingL: {
      paddingLeft: normalizeWidth(20),
    },
    paddingAllL: {
      padding: normalizeWidth(20),
    },
    rMarginXS: {
      marginRight: normalizeWidth(5),
    },
    lMarginXS: {
      marginLeft: normalizeWidth(5),
    },
    bMarginS: {
      marginBottom: normalizeHeight(10),
    },
    bMarginM: {
      marginBottom: normalizeHeight(20),
    },
    tMarginXxS: {
      marginTop: normalizeHeight(3),
    },
    tMarginXS: {
      marginTop: normalizeHeight(5),
    },
    tMarginS: {
      marginTop: normalizeHeight(10),
    },
    tMarginM: {
      marginTop: normalizeHeight(20),
    },
    rMarginS: {
      marginRight: normalizeWidth(10),
    },
    lMarginS: {
      marginLeft: normalizeWidth(10),
    },
    rMarginL: {
      marginRight: normalizeWidth(20),
    },
    lMarginL: {
      marginLeft: normalizeWidth(20),
    },
    lMarginXL: {
      marginLeft: normalizeWidth(25),
    },
    marginAllS: {
      margin: normalizeWidth(5),
    },
    marginAllM: {
      margin: normalizeWidth(10),
    },
    marginAllL: {
      margin: normalizeWidth(20),
    },
    spacer: {
      height: normalizeHeight(10),
      width: normalizeWidth(10),
    },
    spacerSmall: {
      height: normalizeHeight(5),
      width: normalizeWidth(5),
    },
    spacerMedium: {
      height: normalizeHeight(15),
      width: normalizeWidth(15),
    },
    spacerLarge: {
      height: normalizeHeight(20),
      width: normalizeWidth(20),
    },
    horizontalSpacer: {
      marginHorizontal: normalizeWidth(10),
    },
    verticalSpacerXS: {
      marginVertical: normalizeHeight(2),
    },
    verticalSpacerS: {
      marginVertical: normalizeHeight(5),
    },
    verticalSpacerM: {
      marginVertical: normalizeHeight(10),
    },
    verticalSpacerL: {
      marginVertical: normalizeHeight(20),
    },
    fullWidthSpacer: {
      width: '100%',
      height: normalizeHeight(10), // Adjust the height for the gap
    },
    withPadding: {
      padding: SHARED.padding, // Shared padding
    },
    withMargin: {
      margin: normalizeWidth(10), // Dynamic margin
    },
    withBorderRadius: {
      borderRadius: SHARED.borderRadius, // Shared border radius
    },
    withBorder: {
      borderWidth: 1,
      borderColor: selectedTheme.borderColorPrimary, // Theme-based border color
    },

    XxSmallText: {
      fontFamily: selectedTheme.bodyFont,
      fontSize: SHARED.fontXxS,
    },

    xSmallText: {
      fontFamily: selectedTheme.bodyFont,
      fontSize: SHARED.fontXS,
    },
    smallText: {
      fontFamily: selectedTheme.bodyFont,
      fontSize: SHARED.fontS,
    },
    mediumText: {
      fontFamily: selectedTheme.bodyFont,
      fontSize: SHARED.fontM,
    },

    largeText: {
      fontFamily: selectedTheme.headingFont,
      fontSize: SHARED.fontL,
    },

    xLargeText: {
      fontFamily: selectedTheme.headingFont,
      fontSize: SHARED.fontXL,
    },

    XxLargeText: {
      fontFamily: selectedTheme.headingFont,
      fontSize: SHARED.fontXxL,
    },

    flatListMaxHeight: {
      maxHeight: normalizeHeight(30),
    },
    flatListPaddingTop: {
      paddingTop: normalizeHeight(10),
    },
    loader: {
      marginTop: normalizeHeight(30),
      color: selectedTheme.loader,
    },

  });
};
