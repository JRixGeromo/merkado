import { StyleSheet, Platform } from 'react-native';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive'; // Import responsive utilities
import { theme } from '../styles/theme'; // Make sure this path is correct

// Centralized constants for commonly used style properties
const SHARED = {
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
      backgroundColor: selectedTheme.fullBackgrounColor, // Theme-based background
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 0,
    },
    shadowedContainer: {
      flex: 1,
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 0,
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

    rowsInside: {
      width: '100%',
      flexDirection: 'column',
    },

    /* One row with columns inside */
    /* One row with columns inside */
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

    ////
    cols_25: {
      width: '25%',
    },
    cols_75: {
      width: '75%',
    },
    ////
    cols_40: {
      width: '40%',
    },
    cols_60: {
      width: '60%',
    },
    ////
    cols_70: {
      width: '70%',
    },
    cols_30: {
      width: '30%',
    },
    ////

    dividerWrapper: {
      width: '100%', // Full width for the wrapper
      paddingVertical: 10, // Apply padding above and below
    },
    divider: {
      width: '100%', // Full width for the divider
      borderBottomWidth: 0.5, // Specify the width of the bottom border
      borderColor: selectedTheme.lineBorderColor, // Color of the divider
    },

    ////

    spacer: {
      height: 10, // Default height spacer (for vertical gaps)
      width: 10, // Default width spacer (for horizontal gaps)
    },
    // Variants of spacers for different sizes
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

    // Flexible spacer for horizontal gaps between columns
    horizontalSpacer: {
      marginHorizontal: 10, // You can also use margin to create gaps
    },

    // Vertical spacer for vertical gaps between rows
    verticalSpacerS: {
      marginVertical: 2,
    },

    // Vertical spacer for vertical gaps between rows
    verticalSpacerM: {
      marginVertical: 10,
    },

    // Full-width horizontal spacer, useful between rows or sections
    fullWidthSpacer: {
      width: '100%',
      height: 10, // Adjust the height for the gap
    },

    /* Optional shared styles for padding, margin, borderRadius */
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
  });
};
