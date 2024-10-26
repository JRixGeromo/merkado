import { StyleSheet, Platform } from 'react-native';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive'; // Import responsive utilities
import { theme } from '../styles/theme'; // Make sure this path is correct
import { FlatList } from 'react-native-gesture-handler';

// Centralized constants for commonly used style properties
export const SHARED = {
  borderRadius: 2, // Shared border radius
  padding: normalizeHeight(10), // Shared padding
  shadow: {
    color: '#000',
    offset: { width: 0, height: 2 },
    opacity: 0.1,
    radius: 2,
    elevation: 3, // Android-specific shadow
  },
  buttonPadding: normalizeHeight(15), // Button padding
};

// Dynamically generated styles based on theme
export const layoutStyles = (currentTheme: 'light' | 'dark') => {
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: selectedTheme.fullBackgroundColor, // Theme-based background
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 0,
    },
    shadowedContainer: {
      flex: 1,
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: SHARED.borderRadius,
      ...Platform.select({
        ios: {
          shadowColor: SHARED.shadow.color,
          shadowOffset: SHARED.shadow.offset,
          shadowOpacity: SHARED.shadow.opacity,
          shadowRadius: SHARED.shadow.radius,
        },
        android: {
          elevation: SHARED.shadow.elevation, // Android shadow
        },
      }),
    },
    contentContainer: {
      justifyContent: 'flex-start', // Align content to the top of the container
      alignItems: 'center', // Center content horizontally
      width: '100%',
    },
    innerContainer: {
      justifyContent: 'center', 
      alignItems: 'center'
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    formContainer: {
      width: '100%',
      padding: SHARED.padding,
      backgroundColor: selectedTheme.fullBackgroundColor,
      borderRadius: SHARED.borderRadius,
      alignItems: 'center', // Center content horizontally if needed
      justifyContent: 'flex-start', // Start aligning content at the top
      ...Platform.select({
        ios: {
          shadowColor: SHARED.shadow.color,
          shadowOffset: SHARED.shadow.offset,
          shadowOpacity: SHARED.shadow.opacity,
          shadowRadius: SHARED.shadow.radius,
        },
        android: {
          elevation: SHARED.shadow.elevation,
        },
      }),
    },
    rowsInside: {
      width: '100%',
      flexDirection: 'column',
    },
    columnsInsideFlex: {
      flexDirection: 'row',
    },
    columnsInside: {
      flexDirection: 'row',
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
    cols_40: {
      width: '40%',
    },
    cols_60: {
      width: '60%',
    },
    cols_70: {
      width: '70%',
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
      paddingVertical: 10, // Apply padding above and below
    },
    divider: {
      width: '100%', // Full width for the divider
      borderBottomWidth: 0.5, // Specify the width of the bottom border
      borderColor: selectedTheme.lineBorderColor, // Color of the divider
    },
    rlPaddingS: {
      paddingRight: 10,
      paddingLeft: 10,
    },

    rPaddingS: {
      paddingRight: 10,
    },
    lPaddingS: {
      paddingLeft: 10,
    },
    paddingAllS: {
      padding: 10,
    },
    rPaddingL: {
      paddingRight: 20,
    },
    lPaddingL: {
      paddingLeft: 20,
    },
    paddingAllL: {
      padding: 20,
    },
    rMarginXS: {
      marginRight: 5,
    },
    lMarginXS: {
      marginLeft: 5,
    },

    rMarginS: {
      marginRight: 10,
    },
    lMarginS: {
      marginLeft: 10,
    },

    rMarginL: {
      marginRight: 20,
    },
    lMarginL: {
      marginLeft: 20,
    },
    spacer: {
      height: 10, // Default height spacer (for vertical gaps)
      width: 10, // Default width spacer (for horizontal gaps)
    },
    spacerSmall: {
      height: 5,
      width: 5,
    },
    spacerMedium: {
      height: 15,
      width: 15,
    },
    spacerLarge: {
      height: 20,
      width: 20,
    },
    horizontalSpacer: {
      marginHorizontal: 10, // You can also use margin to create gaps
    },
    verticalSpacerXS: {
      marginVertical: 2,
    },
    verticalSpacerS: {
      marginVertical: 5,
    },
    verticalSpacerM: {
      marginVertical: 10,
    },
    verticalSpacerL: {
      marginVertical: 20,
    },
    fullWidthSpacer: {
      width: '100%',
      height: 10, // Adjust the height for the gap
    },
    withPadding: {
      padding: SHARED.padding, // Shared padding
    },
    withMargin: {
      margin: normalizeHeight(10), // Dynamic margin
    },
    withBorderRadius: {
      borderRadius: SHARED.borderRadius, // Shared border radius
    },
    withBorder: {
      borderWidth: 1,
      borderColor: selectedTheme.borderColorPrimary, // Theme-based border color
    },
    withShadow: {
      ...Platform.select({
        ios: {
          shadowColor: SHARED.shadow.color,
          shadowOffset: SHARED.shadow.offset,
          shadowOpacity: SHARED.shadow.opacity,
          shadowRadius: SHARED.shadow.radius,
        },
        android: {
          elevation: SHARED.shadow.elevation, // Android shadow
        },
      }),
    },
    font8: {
      fontSize: normalizeFontSize(8),
    },
    font10: {
      fontSize: normalizeFontSize(10),
    },
    font12: {
      fontSize: normalizeFontSize(12),
    },
    font14: {
      fontSize: normalizeFontSize(14),
    },
    font16: {
      fontSize: normalizeFontSize(16),
    },
    font18: {
      fontSize: normalizeFontSize(18),
    },
    font20: {
      fontSize: normalizeFontSize(20),
    },
    font25: {
      fontSize: normalizeFontSize(25),
    },
    font30: {
      fontSize: normalizeFontSize(30),
    },
    font35: {
      fontSize: normalizeFontSize(35),
    },
    font40: {
      fontSize: normalizeFontSize(40),
    },
    flatListMaxHeight: {
      maxHeight: normalizeHeight(30),
    },
  });
};
