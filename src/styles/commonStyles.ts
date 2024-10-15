import { StyleSheet, Platform, ViewStyle } from 'react-native';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive'; // Import responsive utilities
import { theme } from '../styles/theme'; // Make sure this path is correct

// Centralized constants for commonly used style properties
const SHARED = {
  borderRadius: 5,  // Shared border radius
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
    headerLogo: {
      width: 30, // Adjust the width to fit your design
      height: 30, // Adjust the height to fit your design
      resizeMode: 'contain', // Ensures the logo scales appropriately
      marginRight: 10, // Adds spacing between logo and title
    },
    tabBarLabelStyle: {
      fontFamily: selectedTheme.tabFont, // Apply the custom font
      fontSize: normalizeHeight(10), // You can adjust the size to your liking
      color:  selectedTheme.tabColor
    },
    screenHeaderTitle: {
      fontSize: normalizeFontSize(16),
      fontFamily: selectedTheme.tabFont,
      color: selectedTheme.textColor,
    },
    headerTitle: {
      fontSize: normalizeFontSize(20),
      fontFamily: selectedTheme.headingFont,
      color: selectedTheme.textColor,
    },
    headerRightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    headerIcon: {
      marginRight: 20,
    },
    tabBarStyle: {
      backgroundColor: selectedTheme.backgroundColor,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    fullScreenBackgroundImage: {
      position: 'absolute',
      resizeMode: 'cover', // Ensure the image covers the entire screen
    },
    splashContainer: {
      flex: 1,
      justifyContent: 'center', // Centers content vertically
      alignItems: 'center', // Centers content horizontally
      backgroundColor: selectedTheme.backgroundColor, // Background color from the theme
    },
    logo: {
      width: 150, // Adjust width based on design
      height: 150, // Adjust height based on design
      resizeMode: 'contain', // Keep the logo aspect ratio
      marginBottom: 20, // Add space between logo and text
    },
    splashText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: selectedTheme.primary, // Use primary color from the theme
      marginTop: 10, // Add margin between the logo and the text
    },
    loader: {
      marginTop: 30, // Add space between the text and loader
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
      height: normalizeHeight(40),
      paddingHorizontal: 10,
    },
    
    input: {
      flex: 1,
      fontSize: normalizeFontSize(16),
      color: selectedTheme.textColor, // Input text color from selected theme
    },

    

    buttonText: {
      fontSize: normalizeFontSize(16),
      fontFamily: selectedTheme.buttonFont,  // Apply button font from theme
      color: selectedTheme.buttonTextColor,
    },
    bodyText: {
      fontSize: normalizeFontSize(16),
      fontFamily: selectedTheme.bodyFont,  // Apply body font from theme
      color: selectedTheme.textColor,
    },
    title: {
      fontSize: normalizeFontSize(26),
      fontFamily: selectedTheme.headingFont, // Apply heading font from theme
      fontWeight: 'bold',
      color: selectedTheme.primary,
      textAlign: 'center',
    },
    cardHeaderTitle: {
      fontSize: normalizeFontSize(18),
      fontFamily: selectedTheme.headingFont, // Use the heading font for card titles
      color: selectedTheme.textColor,
    },
    paragraph: {
      fontSize: normalizeFontSize(14),
      fontFamily: selectedTheme.bodyFont,  // Apply body font for paragraphs
      color: selectedTheme.paragraph,
    },
    linkText: {
      fontSize: normalizeFontSize(14),
      fontFamily: selectedTheme.bodyFont,  // Use body font for links
      color: selectedTheme.linkColor,
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
    cardText: {
      fontSize: normalizeFontSize(14), // Font size for text inside card
      color: selectedTheme.textColor, // Text color from selected theme
      marginTop: 5, // Space between lines of text
      marginLeft: 10, // Space between icon and text in header
    },
    editLink: {
      fontSize: normalizeFontSize(14), // Font size for the "Edit" link
      color: selectedTheme.linkColor, // Link color based on theme
      textAlign: 'right', // Align edit link to the right
      marginTop: 10, // Space above the edit link
    },
    iconColor: {
      color: selectedTheme.iconColor, // Set a default color for the icon
      fontSize: normalizeFontSize(24), // Default size for icons
    },
    placeholderTextColor: {
      color: selectedTheme.placeholderTextColor, // Text color for "Or login with"
    },
    textColor: {
      color: selectedTheme.textColor, // Text color for "Or login with"
    },
    section: {
      marginTop: 20,
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: normalizeFontSize(14), // Default size for icons
      color: selectedTheme.textColor,
      fontFamily: selectedTheme.headingFont,
      //fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 5,
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
      marginVertical: 5, // Equal margin on top and bottom
      marginHorizontal: 10, // Equal margin on left and right
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

    todayTextColor: {
      color: selectedTheme.primary, // Primary color for today's date
    },
    selectedDayBackgroundColor: {
      backgroundColor: selectedTheme.primary, // Background for selected day
    },
    dayTextColor: {
      color: selectedTheme.textColor, // Text color for day numbers
    },
    textDisabledColor: {
      color: '#d9e1e8', // Disabled text color for unselectable days
    },
    monthTextColor: {
      color: selectedTheme.textColor, // Color for the month header
    },
    arrowColor: {
      color: selectedTheme.primary, // Color for navigation arrows
    },
    modal: {
      backgroundColor: selectedTheme.backgroundColor, // Background for dropdown based on theme
      borderColor: selectedTheme.primary, // Border color matching the theme's primary color
      borderWidth: 1,
      borderRadius: SHARED.borderRadius,
      width: '80%',
      paddingHorizontal: 10,
    },
    modalOverlay: {
      backgroundColor: selectedTheme.modalOverlay, // Add modal overlay color from theme
    },
    modalText: {
      fontSize: normalizeFontSize(16),
      color: selectedTheme.textColor, // Text color from selected theme
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    modalContent: {
      borderRadius: 10,
      padding: 20,
      backgroundColor: selectedTheme.cardBackground, // Ensure the background color is from the theme
    },
    option: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: selectedTheme.primary, // Use the primary color for the border
    },
    buttonBackgroundColor: { 
      backgroundColor: selectedTheme.buttonBackgroundColor, // Ensure the background color is from the theme
    },
    inputBackgroundColor: { 
      backgroundColor: selectedTheme.inputBackgroundColor, // Ensure the background color is from the theme
    },
    closeButton: {
      marginTop: 20,
      alignItems: 'center',
    },

    profileHeader: {
      alignItems: 'center',
      marginBottom: 30,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      resizeMode: 'cover',
    },
    profileName: {
      fontSize: normalizeFontSize(18),
      fontWeight: 'bold',
      color: selectedTheme.textColor,
      marginBottom: 4,
    },
    profileEmail: {
      fontSize: normalizeFontSize(16),
      color: selectedTheme.primary,
    },
    profileBirthDate: {
      fontSize: normalizeFontSize(16), // Adjust size based on design
      color: selectedTheme.textColor, // Use the dynamic theme's text color
      marginTop: 10, // Add some spacing between elements
    },
    languageButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
    },
    languageButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    languageContainer: {
      marginTop: 10, // Add spacing at the top for the language container
      backgroundColor: selectedTheme.cardBackground, // Background color from theme
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background for the overlay
      justifyContent: 'center', // Center content
      alignItems: 'center', // Align items in center
    },
    dropdownMenu: {
      backgroundColor: selectedTheme.cardBackground, // Background color for the dropdown
      borderRadius: 10,
      padding: 10,
      width: 220, // Make the dropdown wider
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5, // For Android
    },
    dropdownItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderColor: selectedTheme.primary, // Border color based on theme
    },
    dropdownText: {
      color: selectedTheme.textColor,
      marginLeft: 10,
    },
    // Add these to commonStyles in your existing StyleSheet

    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: selectedTheme.inputBackgroundColor,
      borderRadius: SHARED.borderRadius,
      padding: SHARED.padding,
      marginVertical: 10,
      width: '90%',
      alignSelf: 'center',
    },
    searchText: {
      color: selectedTheme.placeholderTextColor,
      marginLeft: 10,
      fontSize: normalizeFontSize(14),
      fontFamily: selectedTheme.bodyFont,
    },

    shadow: {
      shadowColor: SHARED.shadow.color, // Reuse shared shadow properties
      shadowOffset: SHARED.shadow.offset,
      shadowOpacity: SHARED.shadow.opacity,
      shadowRadius: SHARED.shadow.radius,
      elevation: SHARED.shadow.elevation, // Android shadow
    },
    storeImage: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
      marginBottom: 10,
    },
    storeName: {
      fontSize: normalizeFontSize(10),
      fontWeight: 'bold',
      color: selectedTheme.textColor,
    },
    storeLocation: {
      fontSize: normalizeFontSize(10),
      color: selectedTheme.secondary,
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
    productBox: {
      backgroundColor: selectedTheme.backgroundColor,
      padding: SHARED.padding,
      borderRadius: SHARED.borderRadius,
      alignItems: 'center', // Center the product name and image
      justifyContent: 'center', // Vertically center the content
      width: 120, // Set a fixed width for product boxes
      height: 200, // Set a fixed height for product boxes
      marginRight: 10, // Adjust spacing between boxes
      shadowColor: SHARED.shadow.color,
      shadowOpacity: SHARED.shadow.opacity,
      shadowOffset: SHARED.shadow.offset,
      shadowRadius: SHARED.shadow.radius,
    },
    productName: {
      fontSize: normalizeFontSize(10),
      color: selectedTheme.textColor,
      fontWeight: 'bold',
    },
    productImage: {
      width: 80, // Set a fixed width for the product image
      height: 80, // Set a fixed height for the product image
      resizeMode: 'contain', // Ensure the image doesn't stretch
      marginBottom: 10, // Add space between the image and text
    },
    promoImage: {
      width: '100%',
      height: 200,
      borderRadius: SHARED.borderRadius,
      resizeMode: 'cover',  // Cover the image within the bounds
    },
    productPrice: {
      fontSize: normalizeFontSize(10),
      color: selectedTheme.price, // Highlight the price using the primary color
      fontWeight: 'bold', // Make the price bold
      marginTop: 4, // Add some space between the product name and the price
    },
    saleProductPrice: {
      fontSize: normalizeFontSize(10),
      color: selectedTheme.salePrice, // Highlight the price using the primary color
      fontWeight: 'bold', // Make the price bold
      marginTop: 4, // Add some space between the product name and the price
    },
    discountedProductPrice: {
      fontSize: normalizeFontSize(10),
      color: selectedTheme.discountedPrice, // Highlight the price using the primary color
      fontWeight: 'bold', // Make the price bold
      marginTop: 4, // Add some space between the product name and the price
    },
    likeRow: {
      flexDirection: 'row',
      alignItems: 'center', // Vertically align the heart icon and text
      justifyContent: 'center', // Center them within the container
      marginTop: 0, // Add space between this row and the rating
    },
    infoRow: {
      flexDirection: 'row', // Align icon and text in a row
      alignItems: 'center', // Vertically align items
      marginVertical: 10, // Space between rows
    },
    infoText: {
      marginLeft: 10, // Space between icon and text
      fontSize: normalizeFontSize(10),
      color: selectedTheme.textColor, // Dynamic text color
    },
    
  });
};
