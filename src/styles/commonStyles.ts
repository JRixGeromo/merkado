import { StyleSheet, Platform, ViewStyle } from 'react-native';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive'; // Import responsive utilities
import { theme } from '../styles/theme';  // Make sure this path is correct

// Shared styles for box components
const sharedBoxStyle: ViewStyle = {
  padding: normalizeHeight(16),  // Shared padding
  borderRadius: 10,  // Rounded corners
  shadowColor: '#000',  // Shadow properties
  shadowOffset: { width: 0, height: 2 }, 
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 3,  // Shadow for Android
};

// Shared styles for button components
const sharedButtonStyle: ViewStyle = {
  padding: normalizeHeight(15),
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',  // Center the text/icon in the button
  shadowColor: '#000',  // Shadow for depth
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 3,  // Shadow for Android
};

// Dynamically generated styles based on theme
export const commonStyles = (currentTheme: 'light' | 'dark') => {
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
    container: {
      ...sharedBoxStyle,  // Apply shared styles for box
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: selectedTheme.backgroundColor,  // Background color from selected theme
      margin: normalizeHeight(20),  // Margin for the container
    },
    box: {
      ...sharedBoxStyle,  // Apply shared styles for box
      backgroundColor: selectedTheme.backgroundColor,  // Box background from selected theme
      width: Platform.select({
        web: '50%',  // Width for desktop
        default: '90%',  // Width for mobile
      }),
    },
    buttonText: {
      fontSize: normalizeFontSize(16),
      color: selectedTheme.buttonTextColor,  // Text color from selected theme
    },
    button: {
      ...sharedButtonStyle,  // Apply shared styles for button
      backgroundColor: selectedTheme.primary,  // Primary button background color from theme
      width: Platform.select({
        web: '40%',  // Width for desktop
        default: '80%',  // Width for mobile
      }),
    },
    socialButton: {
      ...sharedButtonStyle,  // Apply shared styles for button
      flexDirection: 'row',  // Row layout for icon + text
      width: '48%',  // Width for social buttons
    },
    googleButton: {
      backgroundColor: selectedTheme.googleButtonColor,  // Google button color
    },
    facebookButton: {
      backgroundColor: selectedTheme.facebookButtonColor,  // Facebook button color
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: normalizeHeight(5),
      borderRadius: 10,
      backgroundColor: selectedTheme.backgroundColor,  // Input background from selected theme
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
      color: selectedTheme.textColor,  // Input text color from selected theme
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
      color: selectedTheme.primary,  // Title color from selected theme
    },
    forgotPasswordText: {
      color: selectedTheme.secondary,  // Link color from selected theme
      marginTop: 20,
      marginBottom: 20,
      textAlign: 'center',
      fontSize: normalizeFontSize(12),
    },
    orText: {
      fontSize: normalizeFontSize(14),
      color: selectedTheme.textColor,  // Text color for "Or login with"
      marginBottom: 20,
      textAlign: 'center',
    },
    socialButtonText: {
      color: selectedTheme.buttonTextColor,  // Social button text color from selected theme
    },
    iconColor: {
      color: '#000',  // Set a default color for the icon
      fontSize: normalizeFontSize(24),  // Default size for icons
    },
    placeholderTextColor: {
      color: '#999',
    },
    textColor: {
      color: '#333',
    },
    dropdown: {  // New dropdown style
      backgroundColor: selectedTheme.backgroundColor,  // Dropdown background based on theme
      borderColor: selectedTheme.primary,  // Border color matching the theme's primary color
      borderWidth: 1,
      borderRadius: 8,
      width: '80%',
      paddingHorizontal: 10,
    },
    dropdownText: {  // Text style for Picker items
      fontSize: normalizeFontSize(16),
      color: selectedTheme.textColor,  // Text color from selected theme
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
      padding: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
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
      padding: 10,
      borderRadius: 10,
      alignItems: 'center', // Center the product name and image
      justifyContent: 'center', // Vertically center the content
      width: 120, // Set a fixed width for product boxes
      height: 150, // Set a fixed height for product boxes
      marginRight: 10, // Adjust spacing between boxes
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
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
  });
};
