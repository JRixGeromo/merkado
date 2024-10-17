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
      backgroundColor: selectedTheme.fullBackgrounColor, // Background color from selected theme
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
      color:  selectedTheme.textSecondary
    },
    screenHeaderTitle: {
      fontSize: normalizeFontSize(16),
      fontFamily: selectedTheme.tabFont,
      color: selectedTheme.textSecondary,
    },
    headerTitle: {
      fontSize: normalizeFontSize(20),
      fontFamily: selectedTheme.headingFont,
      color: selectedTheme.textPrimary,
      marginBottom: 20,
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
      backgroundColor: selectedTheme.tabBarBackgroundColor,
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
      backgroundColor: selectedTheme.cardBackground, // Background color from the theme
    },
    logo: {
      width: 150, // Adjust width based on design
      height: 150, // Adjust height based on design
      resizeMode: 'contain', // Keep the logo aspect ratio
      marginBottom: 20, // Add space between logo and text
    },
    splashText: {
      fontSize: normalizeFontSize(20),
      fontWeight: 'bold',
      color: selectedTheme.textPrimary, // Use primary color from the theme
      marginTop: 10, // Add margin between the logo and the text
    },
    loader: {
      marginTop: 30, // Add space between the text and loader
      color: selectedTheme.loader,
    },
    box: {
      padding: SHARED.padding,
      borderRadius: SHARED.borderRadius,
      backgroundColor: selectedTheme.cardBackground, // Box background from selected theme
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
    inputContainer: { 
      flexDirection: 'row',
      alignItems: 'center',
      padding: normalizeHeight(2),
      borderRadius: SHARED.borderRadius,
      backgroundColor: selectedTheme.cardBackground, // Check this color
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
      color: selectedTheme.textPrimary, // Input text color from selected theme
    },
    bodyText: {
      fontSize: normalizeFontSize(16),
      fontFamily: selectedTheme.bodyFont,  // Apply body font from theme
      color: selectedTheme.textPrimary,
    },
    title: {
      fontSize: normalizeFontSize(26),
      fontFamily: selectedTheme.headingFont, // Apply heading font from theme
      fontWeight: 'bold',
      color: selectedTheme.textPrimary,
      textAlign: 'center',
    },
    cardHeaderTitle: {
      fontSize: normalizeFontSize(18),
      fontFamily: selectedTheme.headingFont, // Use the heading font for card titles
      color: selectedTheme.textPrimary,
    },
    paragraph: {
      fontSize: normalizeFontSize(14),
      fontFamily: selectedTheme.bodyFont,  // Apply body font for paragraphs
      color: selectedTheme.textDark,
      margin: 10,
    },
    linkText: {
      fontSize: normalizeFontSize(14),
      fontFamily: selectedTheme.bodyFont,  // Use body font for links
      color: selectedTheme.textLink,
      margin: 10,
    },
    orText: {
      fontSize: normalizeFontSize(14),
      color: selectedTheme.textPrimary, // Text color for "Or login with"
      marginBottom: 20,
      textAlign: 'center',
    },
    cardText: {
      fontSize: normalizeFontSize(14), // Font size for text inside card
      color: selectedTheme.textPrimary, // Text color from selected theme
      marginTop: 5, // Space between lines of text
      marginLeft: 10, // Space between icon and text in header
    },
    editLink: {
      fontSize: normalizeFontSize(14), // Font size for the "Edit" link
      color: selectedTheme.textLink, // Link color based on theme
      textAlign: 'right', // Align edit link to the right
      marginTop: 10, // Space above the edit link
    },
    iconColor: {
      color: selectedTheme.iconColor, // Set a default color for the icon
      fontSize: normalizeFontSize(24), // Default size for icons
    },
    placeholderTextColor: {
      color: selectedTheme.textPlaceHolderInfo, // Text color for "Or login with"
    },
    textColor: {
      color: selectedTheme.textSecondary, // Text color for "Or login with"
    },
    section: {
      paddingTop: 20,
      marginBottom: 10,
      backgroundColor: selectedTheme.fullBackgrounColor,
    },
    sectionTitle: {
      fontSize: normalizeFontSize(14), // Default size for icons
      color: selectedTheme.textSecondary,
      fontFamily: selectedTheme.headingFont,
      //fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 5,
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
      color: selectedTheme.textPrimary, // Primary color for today's date
    },
    selectedDayBackgroundColor: {
      backgroundColor: selectedTheme.textPrimary, // Background for selected day
    },
    dayTextColor: {
      color: selectedTheme.textPrimary, // Text color for day numbers
    },
    textDisabledColor: {
      color: '#d9e1e8', // Disabled text color for unselectable days
    },
    monthTextColor: {
      color: selectedTheme.textPrimary, // Color for the month header
    },
    arrowColor: {
      color: selectedTheme.textPrimary, // Color for navigation arrows
    },
    modal: {
      backgroundColor: selectedTheme.cardBackground, // Background for dropdown based on theme
      borderColor: selectedTheme.textPrimary, // Border color matching the theme's primary color
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
      color: selectedTheme.textPrimary, // Text color from selected theme
      fontFamily: selectedTheme.bodyFont,
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
      borderColor: selectedTheme.textPrimary, // Use the primary color for the border
    },
    inputBackgroundColor: { 
      backgroundColor: selectedTheme.inputBackgroundColor, // Ensure the background color is from the theme
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
      fontFamily: selectedTheme.bodyFont,
      color: selectedTheme.textPrimary,
      marginBottom: 4,
    },
    profileEmail: {
      fontSize: normalizeFontSize(16),
      color: selectedTheme.textPrimary,
      fontFamily: selectedTheme.bodyFont,
    },
    profileBirthDate: {
      fontSize: normalizeFontSize(16), // Adjust size based on design
      color: selectedTheme.textPrimary, // Use the dynamic theme's text color
      fontFamily: selectedTheme.bodyFont,
      marginTop: 10, // Add some spacing between elements
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
      borderColor: selectedTheme.lineBorderColor, // Border color based on theme
    },
    dropdownText: {
      color: selectedTheme.textSecondary,
      fontFamily: selectedTheme.bodyFont,
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
      color: selectedTheme.textPrimary,
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

    likeRow: {
      flexDirection: 'row', // Arrange items in a row
      alignItems: 'center', // Vertically center items
      justifyContent: 'space-between', // Distribute space between items
      marginTop: 10, // Add some space above the row
    },
    
    iconContainer: {
      marginRight: 5, // Space between the heart icon and the likes count
    },
    
    infoText: {
      fontSize: normalizeFontSize(10),
      color: selectedTheme.textPrimary, // Use primary text color from theme
    },
    storeName: {
      fontSize: normalizeFontSize(10),
      color: selectedTheme.textPrimary,
      fontFamily: selectedTheme.bodyFont,
      marginTop: 6, // Add some margin after the image
    },

    storeLocation: {
      fontSize: normalizeFontSize(10),
      color: selectedTheme.textSecondary,
      fontFamily: selectedTheme.bodyFontSlim,
    },
    storeBox: {
      backgroundColor: selectedTheme.cardBackground,
      //padding: SHARED.padding,
      //borderRadius: SHARED.borderRadius,
      alignItems: 'center',
      justifyContent: 'flex-start', // Align content to the top
      width: 120, // Fixed width for product boxes
      height: 225, // Total height for the product box
      marginRight: 10,
      shadowColor: SHARED.shadow.color,
      shadowOpacity: SHARED.shadow.opacity,
      shadowOffset: SHARED.shadow.offset,
      shadowRadius: SHARED.shadow.radius,
    },
    
    storeImage: {
      width: '100%', // Full width of the product box
      height: '40%', // Ensure the image takes up 40% of the product box's height
      resizeMode: 'cover', // Ensure the image covers the space
      //borderRadius: SHARED.borderRadius,
    },
    productBox: {
      backgroundColor: selectedTheme.cardBackground,
      //padding: SHARED.padding,
      //borderRadius: SHARED.borderRadius,
      alignItems: 'center',
      justifyContent: 'flex-start', // Align content to the top
      width: 120, // Fixed width for product boxes
      height: 225, // Total height for the product box
      marginRight: 10,
      shadowColor: SHARED.shadow.color,
      shadowOpacity: SHARED.shadow.opacity,
      shadowOffset: SHARED.shadow.offset,
      shadowRadius: SHARED.shadow.radius,
    },
    
    productImage: {
      width: '100%', // Full width of the product box
      height: '35%', // Ensure the image takes up 40% of the product box's height
      resizeMode: 'cover', // Ensure the image covers the space
      //borderRadius: SHARED.borderRadius,
    },
    

    productName: {
      fontSize: normalizeFontSize(10),
      color: selectedTheme.textPrimary,
      fontFamily: selectedTheme.bodyFont,
      marginTop: 6, // Add some margin after the image
    },
    
    productPrice: {
      fontSize: normalizeFontSize(14),
      color: selectedTheme.textHighlight, // Highlight the price
      fontFamily: selectedTheme.bodyFont,
      marginTop: 4, // Space between the product name and price
    },
    
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 6, // Add some space between price and rating row
    },

    buttonRow: {
      flexDirection: 'row', // Align buttons in a row
      justifyContent: 'space-between', // Ensure space between buttons
      marginTop: 10, // Add margin above the buttons
      width: '100%', // Ensure the buttons span the entire width of the card
    },
    
    fullWidthButton: {
      flexDirection: 'row', // Arrange icon and text in a row
      alignItems: 'center', // Center the content vertically
      justifyContent: 'center', // Center the content horizontally
      paddingVertical: 10, // Add vertical padding for better touch area
      //borderRadius: 5, // Rounded corners
      flex: 0.5, // Each button takes 50% of the width
      //marginHorizontal: 2, // Small space between the two buttons
    },
    
    chatButton: {
      backgroundColor: selectedTheme.buttonDark, // Explicit background color for Chat button
    },
    
    cartButton: {
      backgroundColor: selectedTheme.buttonPrimary, // Explicit background color for Add to Cart button
    },
    
        
    followButton: {
      backgroundColor: selectedTheme.buttonInfo, // Explicit background color for Add to Cart button
    },

    buttonText: {
      color: 'white', // Button text color
      marginLeft: 5, // Space between icon and text
    },
    
    saleProductPrice: {
      fontSize: normalizeFontSize(10),
      color: selectedTheme.textHighlight, // Highlight the price using the primary color
      fontFamily: selectedTheme.bodyFont,
      marginTop: 4, // Add some space between the product name and the price
    },
    discountedProductPrice: {
      fontSize: normalizeFontSize(10),
      color: selectedTheme.textHighlight, // Highlight the price using the primary color
      fontFamily: selectedTheme.bodyFont,
      marginTop: 4, // Add some space between the product name and the price
    },
    categoryScroll: {
      marginVertical: 10,
    },
    categoryText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    searchContainer: {
      flexDirection: 'row', // Align items horizontally
      alignItems: 'center', // Center items vertically
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 2,
      marginBottom: 2,
      marginLeft: 10,
      marginRight: 10,

      backgroundColor: selectedTheme.cardBackground, // Use theme background color
      borderRadius: 30, // Rounded border for the search bar
      borderWidth: 0.5,
      borderColor: selectedTheme.buttonBorderPrimary, // Add border using theme color
    },
    searchInput: {
      flex: 1, // Make the search input take up the remaining space
      height: 40, // Height of the search input
      borderColor: selectedTheme.buttonBorderPrimary, // Optional: Add border inside the input field
      borderWidth: 0, // No extra border inside the input
      paddingLeft: 0, // Padding inside the search input
      borderRadius: 20, // Rounded corners inside the search input
      backgroundColor: selectedTheme.cardBackground, // Background color of the input
      color: selectedTheme.textPrimary, // Text color from theme
    },  
    modalTitle: {
      fontSize: normalizeFontSize(14),
      fontWeight: 'bold',
      color: selectedTheme.textSecondary, // Theme-based text color for the title
      marginBottom: 15,
    },
    listItem: {
      padding: 10,
      borderBottomColor: selectedTheme.lineBorderColor, // Theme-based border color
      borderBottomWidth: 1,
      backgroundColor: selectedTheme.cardBackground, // Theme-based background color
    },
    listItemText: {
      color: selectedTheme.textPrimary,
    },
    modalContainerFull: {
      flex: 1,
      padding: 20,
      backgroundColor: selectedTheme.cardBackground, // Theme-based background for modal
    },

    horizontalScroll: {
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    sectionContent: {
      flex: 1,
    },
    
    ////
    searchButton: {
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 8,
      paddingRight: 8,
      height: 30,
    },
    button: {
      padding: SHARED.buttonPadding, // Button padding from shared settings
      borderRadius: SHARED.borderRadius, // Border radius from shared settings
      backgroundColor: selectedTheme.textPrimary, // Primary button background color from theme
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

    sectionButtonText: {
      color: selectedTheme.textPrimary, // Theme-based text color
      fontSize: normalizeFontSize(10),
    },
    sectionButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    toggleButtonContainer: {
      flexDirection: 'row', // Align the text and the icon in a row
      justifyContent: 'space-between', // Space between the text and the toggle icon
      alignItems: 'center', // Vertically center the items
    },
    socialButtonText: {
      color: selectedTheme.textLight // Social button text color from selected theme
    },
  });
};
