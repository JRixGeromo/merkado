import { StyleSheet, Platform, ViewStyle } from 'react-native';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive'; // Import responsive utilities
import { theme } from '../styles/theme'; // Make sure this path is correct

// Centralized constants for commonly used style properties
const SHARED = {
  borderRadius: 10,  // Shared border radius
  padding: normalizeHeight(10),  // Shared padding
  shadow: {
    color: '#000',
    offset: { width: 0, height: 2 },
    opacity: 0.1,
    radius: 5,
    elevation: 3,  // Android-specific shadow
  },
  buttonPadding: normalizeHeight(15),  // Button padding
};

// Dynamically generated styles based on theme
export const commonStyles = (currentTheme: 'light' | 'dark') => {
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
    container: {
      ...SHARED, // Apply shared styles
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: selectedTheme.backgroundColor, // Background color from selected theme
      margin: normalizeHeight(20), // Margin for the container
    },
    box: {
      padding: SHARED.padding,
      borderRadius: SHARED.borderRadius,
      backgroundColor: selectedTheme.backgroundColor, // Box background from selected theme
      shadowColor: SHARED.shadow.color, // Apply shadow settings
      shadowOffset: SHARED.shadow.offset,
      shadowOpacity: SHARED.shadow.opacity,
      shadowRadius: SHARED.shadow.radius,
      elevation: SHARED.shadow.elevation, // Apply Android-specific shadow
      width: Platform.select({
        web: '50%', // Width for desktop
        default: '90%', // Width for mobile
      }),
    },
    buttonText: {
      fontSize: normalizeFontSize(16),
      color: selectedTheme.buttonTextColor, // Text color from selected theme
    },
    button: {
      padding: SHARED.buttonPadding, // Button padding from shared settings
      borderRadius: SHARED.borderRadius, // Border radius from shared settings
      backgroundColor: selectedTheme.primary, // Primary button background color from theme
      alignItems: 'center',
      justifyContent: 'center', // Center the text/icon in the button
      shadowColor: SHARED.shadow.color, // Shadow for depth
      shadowOffset: SHARED.shadow.offset,
      shadowOpacity: SHARED.shadow.opacity,
      shadowRadius: SHARED.shadow.radius,
      elevation: SHARED.shadow.elevation, // Shadow for Android
      width: Platform.select({
        web: '40%', // Width for desktop
        default: '80%', // Width for mobile
      }),
    },
    socialButton: {
      ...SHARED, // Reuse shared shadow and padding
      flexDirection: 'row', // Row layout for icon + text
      width: '48%', // Width for social buttons
    },
    googleButton: {
      backgroundColor: selectedTheme.googleButtonColor, // Google button color
    },
    facebookButton: {
      backgroundColor: selectedTheme.facebookButtonColor, // Facebook button color
    },
    inputContainer: { 
      flexDirection: 'row',
      alignItems: 'center',
      padding: normalizeHeight(2),
      borderRadius: SHARED.borderRadius,
      backgroundColor: selectedTheme.backgroundColor, // Check this color
      marginBottom: 15,
      borderWidth: 1,
      borderColor: '#ddd',
      width: '80%',
      height: normalizeHeight(45),
      paddingHorizontal: 10,
    },
    
    input: {
      flex: 1,
      fontSize: normalizeFontSize(16),
      color: selectedTheme.textColor, // Input text color from selected theme
    },
    logo: {
      width: 120,
      height: 120,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    title: {
      fontSize: normalizeFontSize(28),
      fontWeight: 'bold',
      marginBottom: normalizeHeight(20),
      textAlign: 'center',
      color: selectedTheme.primary, // Title color from selected theme
    },
    forgotPasswordText: {
      color: selectedTheme.secondary, // Link color from selected theme
      marginTop: 20,
      marginBottom: 20,
      textAlign: 'center',
      fontSize: normalizeFontSize(12),
    },
    orText: {
      fontSize: normalizeFontSize(14),
      color: selectedTheme.textColor, // Text color for "Or login with"
      marginBottom: 20,
      textAlign: 'center',
    },
    socialButtonText: {
      color: selectedTheme.buttonTextColor, // Social button text color from selected theme
    },
    iconColor: {
      color: '#000', // Set a default color for the icon
      fontSize: normalizeFontSize(24), // Default size for icons
    },
    placeholderTextColor: {
      color: '#999',
    },
    textColor: {
      color: '#333',
    },
    dropdown: {
      backgroundColor: selectedTheme.backgroundColor, // Dropdown background based on theme
      borderColor: selectedTheme.primary, // Border color matching the theme's primary color
      borderWidth: 1,
      borderRadius: SHARED.borderRadius,
      width: '80%',
      paddingHorizontal: 10,
    },
    dropdownText: {
      fontSize: normalizeFontSize(16),
      color: selectedTheme.textColor, // Text color from selected theme
    },
    section: {
      marginTop: 20,
    },
    sectionTitle: {
      fontSize: 18,
      color: selectedTheme.textColor,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    storeBox: {
      backgroundColor: selectedTheme.backgroundColor,
      padding: SHARED.padding,
      borderRadius: SHARED.borderRadius,
      shadowColor: SHARED.shadow.color,
      shadowOpacity: SHARED.shadow.opacity,
      shadowOffset: SHARED.shadow.offset,
      marginBottom: 10,
    },
    storeName: {
      fontSize: 16,
      color: selectedTheme.textColor,
      fontWeight: 'bold',
    },
    storeLocation: {
      fontSize: 14,
      color: selectedTheme.secondary,
    },
    productBox: {
      backgroundColor: selectedTheme.backgroundColor,
      padding: SHARED.padding,
      borderRadius: SHARED.borderRadius,
      alignItems: 'center', // Center the product name and image
      justifyContent: 'center', // Vertically center the content
      width: 120, // Set a fixed width for product boxes
      height: 150, // Set a fixed height for product boxes
      marginRight: 10, // Adjust spacing between boxes
      shadowColor: SHARED.shadow.color,
      shadowOpacity: SHARED.shadow.opacity,
      shadowOffset: SHARED.shadow.offset,
      shadowRadius: SHARED.shadow.radius,
    },
    productName: {
      fontSize: 16,
      color: selectedTheme.textColor,
      fontWeight: 'bold',
    },
    productImage: {
      width: 80, // Set a fixed width for the product image
      height: 80, // Set a fixed height for the product image
      resizeMode: 'contain', // Ensure the image doesn't stretch
      marginBottom: 10, // Add space between the image and text
    },
    storeImage: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
    },
    promoImage: {
      width: '100%',
      height: 200,
      borderRadius: SHARED.borderRadius,
      resizeMode: 'cover',  // Cover the image within the bounds
    },
    infoRow: {
      flexDirection: 'row', // Align icon and text in a row
      alignItems: 'center', // Vertically align items
      marginVertical: 10, // Space between rows
    },
    productPrice: {
      fontSize: 14, // Slightly smaller font size for the price
      color: selectedTheme.primary, // Highlight the price using the primary color
      fontWeight: 'bold', // Make the price bold
      marginTop: 4, // Add some space between the product name and the price
    },
    infoText: {
      marginLeft: 10, // Space between icon and text
      fontSize: normalizeFontSize(16),
      color: selectedTheme.textColor, // Dynamic text color
    },
    logoutButton: {
      backgroundColor: selectedTheme.danger, // Logout button color (e.g., red for danger)
      padding: SHARED.buttonPadding,
      borderRadius: SHARED.borderRadius,
      marginTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      shadowColor: SHARED.shadow.color,
      shadowOffset: SHARED.shadow.offset,
      shadowOpacity: SHARED.shadow.opacity,
      shadowRadius: SHARED.shadow.radius,
      elevation: SHARED.shadow.elevation, // Shadow for Android
    },
    logoutText: {
      fontSize: normalizeFontSize(16),
      color: '#fff', // Text color for logout button
      fontWeight: 'bold',
    },
    card: {
      backgroundColor: selectedTheme.cardBackground, // Background color for card
      padding: SHARED.padding, // Padding inside each card
      borderRadius: SHARED.borderRadius, // Card border radius
      marginBottom: 20, // Spacing between cards
      shadowColor: SHARED.shadow.color, // Shadow settings for the card
      shadowOffset: SHARED.shadow.offset,
      shadowOpacity: SHARED.shadow.opacity,
      shadowRadius: SHARED.shadow.radius,
      elevation: SHARED.shadow.elevation, // Apply Android-specific shadow
    },
    cardHeader: {
      flexDirection: 'row', // Align icon and title in a row
      alignItems: 'center', // Vertically align items in header
      marginBottom: 10, // Margin between header and content
    },
    cardHeaderTitle: {
      fontSize: normalizeFontSize(18), // Font size for header text
      fontWeight: 'bold', // Bold text for header
      color: selectedTheme.textColor, // Text color based on theme
      marginLeft: 10, // Space between icon and text in header
    },
    cardText: {
      fontSize: normalizeFontSize(16), // Font size for text inside card
      color: selectedTheme.textColor, // Text color from selected theme
      marginBottom: 5, // Space between lines of text
    },
    editLink: {
      fontSize: normalizeFontSize(14), // Font size for the "Edit" link
      color: selectedTheme.linkColor, // Link color based on theme
      textAlign: 'right', // Align edit link to the right
      marginTop: 10, // Space above the edit link
    },
    toggleButtonContainer: {
      flexDirection: 'row', // Align the text and the icon in a row
      justifyContent: 'space-between', // Space between the text and the toggle icon
      alignItems: 'center', // Vertically center the items
    },
    slide: {
      borderRadius: SHARED.borderRadius,  // Rounded corners
      overflow: 'hidden',  // Ensure the content inside doesn't exceed the boundary
      shadowColor: SHARED.shadow.color,  // Apply shadow settings
      shadowOffset: SHARED.shadow.offset,
      shadowOpacity: SHARED.shadow.opacity,
      shadowRadius: SHARED.shadow.radius,
      elevation: SHARED.shadow.elevation,  // Apply Android-specific shadow
      marginBottom: 20,  // Space between slides
    },
  });
};
