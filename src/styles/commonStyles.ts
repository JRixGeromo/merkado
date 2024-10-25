import { StyleSheet, Platform, ViewStyle } from 'react-native';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive'; // Import responsive utilities
import { SHARED } from '../styles/layoutStyles';
import { theme } from '../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const commonStyles = (currentTheme: 'light' | 'dark') => {
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
       
    /////////
    
    bannerImageWrapper: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    bannerContentImage: {
      width: '100%',
      height: 200,
    },

    selectedReactionWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    selectedReactionText: {
      fontSize: normalizeFontSize(20),
      color: 'gray', // You can customize the color here
    },

    saleBanner: {
      position: 'absolute',
      top: 0,
      width: '100%',
      backgroundColor: 'red',
      padding: 5,
      zIndex: 1, // Ensures it appears on top of the image
      alignItems: 'center',
    },

    priceContainer: {
      position: 'absolute',
      bottom: 10,     // Adjust this value for vertical positioning
      right: 10,      // Adjust this value for horizontal positioning
      paddingTop: 5,     // Padding around the price text
      paddingBottom: 5,     // Padding around the price text
      paddingLeft: 10,     // Padding around the price text
      paddingRight: 10,     // Padding around the price text
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background for better readability
      borderWidth: 0.5,
      borderColor: selectedTheme.borderColorDark,
      borderRadius: 5, // Rounded corners
      zIndex: 2,      // Ensure it appears on top of other elements
    },

    reactionBarSection: {
      paddingHorizontal: 16,
      alignItems: 'center',
      marginBottom: 5,
    },

    commentSection: {
      paddingHorizontal: 10,
    },

    commentContainer: {
      padding: 10,
      borderRadius: 2, // Rounded corners for the container
      borderBottomWidth: 1,
      marginBottom: 10, // Margin between comments
      position: 'relative', // Necessary for positioning the thumbs-up icon
    },

    commentsList: {
      paddingHorizontal: 10, // Adjust padding for the comment list
    },

    userImage: {
      width: 30, // Width of the user image
      height: 30, // Height of the user image
      borderRadius: 20, // Half of width/height to make it a perfect circle
    },

    commentWrapper: {
      flexDirection: 'column', // Align items in column (text above time)
      justifyContent: 'flex-start',
      position: 'relative', // Necessary for positioning thumbs-up icon
      paddingRight: 40, // Create space for the thumbs-up icon
      marginBottom: 10, // Create space for the thumbs-up icon
    },

    commentTextWrapper: {
      lineHeight: 18,
    },

    timeAndReactionWrapper: {
      flexDirection: 'row', // Place time and thumbs-up in the same row
      alignItems: 'center', // Vertically align items
      marginTop: 5, // Add margin to space it from the comment
    },

    replyContainer: {
      marginLeft: 15,
      marginTop: 5,
      paddingLeft: 10,
    },
    replyInputWrapper: {
      marginLeft: -10,
      marginRight: -10,
      marginTop: 10,
    },

    commentFormContainer: {
      marginBottom: 2,
      padding: 12,
    },

    inputWrapper: {
      //alignItems: 'center',
      borderRadius: 30,
      paddingLeft: 15,
    },

    commentInput: {
      flex: 1,
      paddingVertical: 10,
      paddingRight: 50,
      fontSize: normalizeFontSize(12),
    },

    sendButton: {
      position: 'absolute',
      right: 10,
      padding: 10,
      borderRadius: 20,
    },

    thumbsUpButton: {
      paddingHorizontal: 10,
    },
    ////

    searchContainer: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 10,
      paddingRight: 10,

      backgroundColor: selectedTheme.cardBackground, // Use theme background color
      borderRadius: 30, // Rounded border for the search bar
      borderWidth: 0.5,
      borderColor: selectedTheme.buttonBorderPrimary, // Add border using theme color
      
      justifyContent: 'flex-start',
      alignItems: 'center',
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


    productBox: {
      backgroundColor: selectedTheme.cardBackground,
      width: 120,
      height: 225,
      marginRight: 10,
      paddingBottom: 0,
      marginBottom: 0,
      justifyContent: 'space-between', // Space between content and buttons
      alignItems: 'center', // Center all content horizontally
    },

    cardImageWrapper: {
      width: '100%',
      height: '33%', // Fixed height equivalent to 35% of productBox height
      position: 'relative',
    },

    productImage: {
      width: '100%',
      height: '100%', // Fill the wrapper container
      resizeMode: 'cover', // Ensure the image covers the available space
    },

    promoImage: {
      width: '100%',
      height: 225, // Fill the wrapper container
      resizeMode: 'cover', // Ensure the image covers the available space
    },

    goFullScreenButton: {
      position: 'absolute',
      top: 5,
      right: 5,
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background for visibility
      padding: 5,
      borderRadius: 1, // Make it circular
    },

    productName: {
      fontSize: normalizeFontSize(12),
      color: selectedTheme.textSecondary,
      fontFamily: selectedTheme.bodyFont,
      marginTop: 3, // Add some margin after the image
    },

    productPrice: {
      fontSize: normalizeFontSize(14),
      color: selectedTheme.textHighlight, // Highlight the price
      fontFamily: selectedTheme.bodyFont,
      marginTop: 0, // Space between the product name and price
    },

    productPriceL: {
      fontSize: normalizeFontSize(20),
      color: selectedTheme.textHighlight, // Highlight the price
      fontFamily: selectedTheme.bodyFont,
    },

    storeLocation: {
      fontSize: normalizeFontSize(10),
      color: selectedTheme.textSecondary,
      fontFamily: selectedTheme.bodyFontSlim,
    },

    cardButton: {
      alignItems: 'center', // Center the content vertically
      justifyContent: 'center', // Center the content horizontally
      paddingVertical: 5, // Add vertical padding for better touch area
    },

    sectionTitle: {
      fontSize: normalizeFontSize(14), // Default size for icons
      color: selectedTheme.textSecondary,
      fontFamily: selectedTheme.headingFont,
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
    searchButton: {
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 8,
      paddingRight: 8,
      height: 30,
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
    
    modalContent: {
      borderRadius: 10,
      padding: 20,
      backgroundColor: selectedTheme.cardBackground, // Ensure the background color is from the theme
    },

    dropdownOption: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: selectedTheme.textPrimary, // Use the primary color for the border
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
    input: {
      flex: 1,
      fontSize: normalizeFontSize(16),
      color: selectedTheme.textPrimary, // Input text color from selected theme
    },
    modalOverlay: {
      backgroundColor: selectedTheme.modalOverlay, // Add modal overlay color from theme
    },

    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background for the overlay
      justifyContent: 'center', // Center content
      alignItems: 'center', // Align items in center
    },

    modalText: {
      fontSize: normalizeFontSize(16),
      color: selectedTheme.textPrimary, // Text color from selected theme
      fontFamily: selectedTheme.bodyFont,
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

    logo: {
      width: 150, // Adjust width based on design
      height: 150, // Adjust height based on design
      resizeMode: 'contain', // Keep the logo aspect ratio
      marginBottom: 20, // Add space between logo and text
    },
    
    headerTitle: {
      fontSize: normalizeFontSize(20),
      fontFamily: selectedTheme.headingFont,
      color: selectedTheme.textPrimary,
      marginBottom: 20,
    },

    linkText: {
      fontSize: normalizeFontSize(14),
      fontFamily: selectedTheme.bodyFont, // Use body font for links
      color: selectedTheme.textLink,
      margin: 10,
    },

    paragraph: {
      fontSize: normalizeFontSize(14),
      fontFamily: selectedTheme.bodyFont, // Apply body font for paragraphs
      color: selectedTheme.textDark,
      margin: 10,
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
    socialButtonText: {
      color: selectedTheme.textLight, // Social button text color from selected theme
    },

     loader: {
      marginTop: 30, // Add space between the text and loader
      color: selectedTheme.loader,
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
      color: selectedTheme.textSecondary,
    },
    screenHeaderTitle: {
      fontSize: normalizeFontSize(16),
      fontFamily: selectedTheme.tabFont,
      color: selectedTheme.textSecondary,
    },
    tabBarStyle: {
      backgroundColor: selectedTheme.tabBarBackgroundColor,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerRightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    headerIcon: {
      marginRight: 20,
    },
    chatButton: {
      backgroundColor: selectedTheme.buttonDark, // Explicit background color for Chat button
    },

    cartButton: {
      backgroundColor: selectedTheme.buttonPrimary, // Explicit background color for Add to Cart button
    },

    commentButton: {
      backgroundColor: selectedTheme.buttonInfo, // Explicit background color for Add to Cart button
    },

    followButton: {
      backgroundColor: selectedTheme.buttonInfo, // Explicit background color for Add to Cart button
    },

    ////

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
    cardHeaderTitle: {
      fontSize: normalizeFontSize(18),
      fontFamily: selectedTheme.headingFont, // Use the heading font for card titles
      color: selectedTheme.textPrimary,
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
    cardText: {
      fontSize: normalizeFontSize(14), // Font size for text inside card
      color: selectedTheme.textPrimary, // Text color from selected theme
      marginTop: 5, // Space between lines of text
      marginLeft: 10, // Space between icon and text in header
    },
    languageContainer: {
      marginTop: 10, // Add spacing at the top for the language container
      backgroundColor: selectedTheme.cardBackground, // Background color from theme
    },

    splashContainer: {
      flex: 1,
      justifyContent: 'center', // Centers content vertically
      alignItems: 'center', // Centers content horizontally
      backgroundColor: selectedTheme.cardBackground, // Background color from the theme
    },
    splashText: {
      fontSize: normalizeFontSize(20),
      fontWeight: 'bold',
      color: selectedTheme.textPrimary, // Use primary color from the theme
      marginTop: 10, // Add margin between the logo and the text
    },
    slide: {
      borderRadius: SHARED.borderRadius, // Rounded corners
      overflow: 'hidden', // Ensure the content inside doesn't exceed the boundary
      shadowColor: SHARED.shadow.color, // Apply shadow settings
      shadowOffset: SHARED.shadow.offset,
      shadowOpacity: SHARED.shadow.opacity,
      shadowRadius: SHARED.shadow.radius,
      elevation: SHARED.shadow.elevation, // Apply Android-specific shadow
      marginBottom: 20, // Space between slides
    },
    
    ////
    reactionBar: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingVertical: 5,
    },

    ////
    // CHAT
    ////
    chatAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: selectedTheme.textPrimary,
    },

    chatSendButton: {
      marginLeft: 10,
    },

    chatMessagesContainer: {
      position: 'relative', 
      backgroundColor: selectedTheme.cardBackground, 
      paddingTop: 8, 
      paddingBottom: 8,
    },

    chatInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginHorizontal: 10,
      marginBottom: 5,
      borderRadius: 25,
    },

    unreadBadge: {
      position: 'absolute',
      top: -5,
      right: -5,
      backgroundColor: 'red',
      borderRadius: 10,
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    unreadText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
    },

    //////////
   
  });
};
