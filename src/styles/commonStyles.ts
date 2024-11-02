import { StyleSheet, Platform, ViewStyle } from 'react-native';
import { normalizeFontSize, normalizeHeight, normalizeWidth } from '../utils/responsive'; // Import responsive utilities
import { SHARED } from '../styles/layoutStyles';
import { theme } from '../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const commonStyles = (currentTheme: 'light' | 'dark') => {
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
       
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
      fontSize: normalizeFontSize(20),
      color: 'gray', // You can customize the color here
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
      zIndex: 1, // Ensures it appears on top of the image
      alignItems: 'center',
    },
    priceContainer: {
      position: 'absolute',
      bottom: normalizeHeight(10),     // Adjust this value for vertical positioning
      right: normalizeHeight(10),      // Adjust this value for horizontal positioning
      paddingTop: normalizeHeight(5),     // Padding around the price text
      paddingBottom: normalizeHeight(1),     // Padding around the price text
      paddingLeft: normalizeWidth(10),     // Padding around the price text
      paddingRight: normalizeWidth(10),     // Padding around the price text
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background for better readability
      borderWidth: 0.5,
      borderColor: selectedTheme.borderColorDark,
      borderRadius: 5, // Rounded corners
      zIndex: 2,      // Ensure it appears on top of other elements
    },
    reactionBarSection: {
      paddingHorizontal: normalizeWidth(16),
      alignItems: 'center',
      marginBottom: normalizeHeight(5),
    },
    commentSection: {
      paddingHorizontal: normalizeWidth(10),
      marginBottom: normalizeHeight(10), // Margin between comments
    },
    commentContainer: {
      paddingTop: normalizeHeight(5),
      paddingBottom: normalizeHeight(5),
      paddingLeft: normalizeWidth(5),
      paddingRight: normalizeWidth(5),
      borderRadius: SHARED.borderRadius,
      borderColor: selectedTheme.lineBorderColor,
      borderWidth: 0.5,
      marginBottom: normalizeHeight(10), // Margin between comments
      position: 'relative', // Necessary for positioning the thumbs-up icon
    },
    commentsList: {
      paddingHorizontal: normalizeWidth(10), // Adjust padding for the comment list
    },
    userImage: {
      width: normalizeWidth(30), // Width of the user image
      height: normalizeWidth(30), // Height of the user image
      borderRadius: 20, // Half of width/height to make it a perfect circle
    },
    commentWrapper: {
      flexDirection: 'column', // Align items in column (text above time)
      justifyContent: 'flex-start',
      position: 'relative', // Necessary for positioning thumbs-up icon
      paddingRight: normalizeWidth(40), // Create space for the thumbs-up icon
      marginBottom: normalizeHeight(10), // Create space for the thumbs-up icon
    },
    commentTextWrapper: {
      lineHeight: normalizeHeight(18),
    },
    timeAndReactionWrapper: {
      flexDirection: 'row', // Place time and thumbs-up in the same row
      alignItems: 'center', // Vertically align items
      marginTop: normalizeHeight(5), // Add margin to space it from the comment
    },
    replyContainer: {
      marginLeft: normalizeWidth(15),
      marginTop: normalizeHeight(5),
      paddingLeft: normalizeWidth(10),
    },
    replyInputWrapper: {
      // marginLeft: -10,
      // marginRight: -10,
      marginTop: normalizeHeight(10),
    },
    commentFormContainer: {
      marginBottom: normalizeHeight(2),
      paddingTop: normalizeHeight(12),
      paddingBottom: normalizeHeight(12),
      paddingLeft: normalizeWidth(12),
      paddingRight: normalizeWidth(12),
      // borderColor: selectedTheme.lineBorderColor,
      // borderWidth: 0.5,
    },
    inputWrapper: {
      //alignItems: 'center',
      borderRadius: 30,
      paddingLeft: normalizeWidth(15),
    },
    commentInput: {
      flex: 1,
      paddingVertical: normalizeHeight(10),
      paddingRight: normalizeWidth(50),
      fontSize: normalizeFontSize(12),
    },
    sendButton: {
      position: 'absolute',
      right: normalizeWidth(10),
      paddingTop: normalizeHeight(10),
      paddingBottom: normalizeHeight(10),
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      borderRadius: 20,
    },
    thumbsUpButton: {
      paddingHorizontal: normalizeWidth(10),
    },
    ////
    searchContainer: {
      paddingTop: normalizeHeight(0),
      paddingBottom: normalizeHeight(0),
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      backgroundColor: selectedTheme.inputBackgroundColor, // Use theme background color
      borderRadius: 30, // Rounded border for the search bar
      borderWidth: 0.5,
      borderColor: selectedTheme.buttonBorderPrimary, // Add border using theme color
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    searchInput: {
      flex: 1, // Make the search input take up the remaining space
      height: normalizeHeight(40), // Height of the search input
      borderColor: selectedTheme.buttonBorderPrimary, // Optional: Add border inside the input field
      borderWidth: 0, // No extra border inside the input
      paddingLeft: 0, // Padding inside the search input
      borderRadius: 20, // Rounded corners inside the search input
      backgroundColor: selectedTheme.inputBackgroundColor, // Background color of the input
      color: selectedTheme.textPrimary, // Text color from theme
    },

    contentBox: {
      backgroundColor: selectedTheme.cardBackground,
      width: "100%",
      height: normalizeHeight(110),
      marginRight: normalizeWidth(10),
      paddingBottom: 0,
      marginBottom: normalizeHeight(10),
      borderColor: selectedTheme.lineBorderColorLight,
      borderWidth: 0.5,
    },
    contentImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover', // Ensure the image covers the available space
    },

    /// Portrait
    contentBoxPortrait: {
      backgroundColor: selectedTheme.cardBackground,
      width: normalizeWidth(120),
      height: normalizeHeight(210),
      marginRight: normalizeWidth(10),
      paddingBottom: normalizeHeight(0),
      marginBottom: normalizeHeight(0),
      justifyContent: 'space-between', // Space between content and buttons
      alignItems: 'center', // Center all content horizontally
      borderColor: selectedTheme.lineBorderColorLight,
      borderWidth: 0.5,
    },
    cardImageWrapper: {
      width: '100%',
      height: '35%', // Fixed height equivalent to 35% of contentBoxPortrait height
      position: 'relative',
    },
    contentContainer: {
      justifyContent: 'flex-start', // Align content to the top of the container
      alignItems: 'center', // Center content horizontally
      width: '100%',
      height: "50%",
    },
    buttonContainer: {
      height: "15%"
    },
    ///
    
    productImage: {
      width: '100%',
      height: '100%', // Fill the wrapper container
      resizeMode: 'cover', // Ensure the image covers the available space
    },
    promoImage: {
      width: '100%',
      height: normalizeHeight(100), // Fill the wrapper container
      resizeMode: 'cover', // Ensure the image covers the available space
    },
    goFullScreenButton: {
      position: 'absolute',
      top: normalizeHeight(5),
      right: normalizeWidth(5),
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background for visibility
      padding: 5,
      borderRadius: 0, // Make it circular
    },
    productName: {
      fontSize: normalizeFontSize(12),
      color: selectedTheme.textSecondary,
      fontFamily: selectedTheme.bodyFont,
      fontWeight:  "bold",
      marginTop: normalizeHeight(3), // Add some margin after the image
    },
    productPrice: {
      fontSize: normalizeFontSize(14),
      color: selectedTheme.textHighlight, // Highlight the price
      fontFamily: selectedTheme.bodyFont,
      fontWeight:  "bold",
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
      paddingVertical: normalizeHeight(5), // Add vertical padding for better touch area
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
      paddingTop: normalizeHeight(10),
      paddingBottom: normalizeHeight(10),
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      borderBottomColor: selectedTheme.lineBorderColor, // Theme-based border color
      borderBottomWidth: 1,
    },
    listItemText: {
      color: selectedTheme.textPrimary,
    },
    searchButton: {
      paddingTop: normalizeHeight(4),
      paddingBottom: normalizeHeight(4),
      paddingLeft: normalizeWidth(8),
      paddingRight: normalizeWidth(8),
      height: normalizeHeight(30),
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: normalizeHeight(2),
      borderRadius: SHARED.borderRadius,
      backgroundColor: selectedTheme.cardBackground, // Check this color
      marginBottom: normalizeHeight(15),
      borderWidth: 1,
      borderColor: '#ddd',
      width: '80%',
      height: normalizeHeight(40),
      paddingHorizontal: normalizeWidth(10),
    },
    modalContent: {
      borderRadius: 10,
      paddingTop: normalizeHeight(20),
      paddingBottom: normalizeHeight(20),
      paddingLeft: normalizeWidth(20),
      paddingRight: normalizeWidth(20),
      backgroundColor: selectedTheme.cardBackground, // Ensure the background color is from the theme
    },
    dropdownOption: {
      paddingTop: normalizeHeight(10),
      paddingBottom: normalizeHeight(10),
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      borderBottomWidth: 1,
      borderColor: selectedTheme.textPrimary, // Use the primary color for the border
    },
    button: {
      padding: SHARED.buttonPadding, // Button padding from shared settings
      borderRadius: SHARED.borderRadius, // Border radius from shared settings
      backgroundColor: selectedTheme.textPrimary, // Primary button background color from theme
      alignItems: 'center',
      justifyContent: 'center', // Center the text/icon in the button
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
      paddingTop: normalizeHeight(10),
      paddingBottom: normalizeHeight(10),
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      width: normalizeWidth(220), // Make the dropdown wider
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5, // For Android
    },
    dropdownItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: normalizeHeight(10),
      borderBottomWidth: 1,
      borderColor: selectedTheme.lineBorderColor, // Border color based on theme
    },
    dropdownText: {
      color: selectedTheme.textSecondary,
      fontFamily: selectedTheme.bodyFont,
      marginLeft: normalizeWidth(10),
    },
    logo: {
      width: normalizeWidth(150), // Adjust width based on design
      height: normalizeHeight(150), // Adjust height based on design
      resizeMode: 'contain', // Keep the logo aspect ratio
      marginBottom: normalizeHeight(20), // Add space between logo and text
    },
    headerTitle: {
      fontSize: normalizeFontSize(20),
      fontFamily: selectedTheme.headingFont,
      color: selectedTheme.textPrimary,
      marginBottom: normalizeHeight(20),
    },
    linkText: {
      fontSize: normalizeFontSize(14),
      fontFamily: selectedTheme.bodyFont, // Use body font for links
      color: selectedTheme.textLink,
      marginTop: normalizeHeight(10),
      marginBottom: normalizeHeight(10),
      marginLeft: normalizeWidth(10),
      marginRight: normalizeWidth(10),
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
      marginTop: normalizeHeight(30), // Add space between the text and loader
      color: selectedTheme.loader,
    },
    headerLogo: {
      width: normalizeWidth(30), // Adjust the width to fit your design
      height: normalizeHeight(30), // Adjust the height to fit your design
      resizeMode: 'contain', // Ensures the logo scales appropriately
      marginRight: normalizeWidth(10), // Adds spacing between logo and title
    },
    tabBarLabelStyle: {
      fontFamily: selectedTheme.tabFont, // Apply the custom font
      fontSize: normalizeFontSize(10), // You can adjust the size to your liking
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
      marginRight: normalizeWidth(15),
    },
    headerIcon: {
      marginRight: normalizeWidth(20),
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
    cardHeader: {
      flexDirection: 'row', // Align icon and title in a row
      alignItems: 'center', // Vertically align items in header
      marginBottom: normalizeHeight(10), // Margin between header and content
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
      marginBottom: normalizeHeight(20),
    },
    toggleButtonContainer: {
      flexDirection: 'row', // Align the text and the icon in a row
      justifyContent: 'space-between', // Space between the text and the toggle icon
      alignItems: 'center', // Vertically center the items
    },
    cardText: {
      fontSize: normalizeFontSize(14), // Font size for text inside card
      color: selectedTheme.textPrimary, // Text color from selected theme
      marginTop: normalizeHeight(5), // Space between lines of text
      marginLeft: normalizeWidth(10), // Space between icon and text in header
    },
    languageContainer: {
      marginTop: normalizeHeight(10), // Add spacing at the top for the language container
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
      marginTop: normalizeHeight(10), // Add margin between the logo and the text
    },
    slide: {
      borderRadius: SHARED.borderRadiusSecondary, // Rounded corners
      overflow: 'hidden', // Ensure the content inside doesn't exceed the boundary
    },
    reactionBar: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingVertical: normalizeHeight(5),
    },
    chatAvatar: {
      width: normalizeWidth(40),
      height: normalizeHeight(40),
      borderRadius: 25,
      borderWidth: 2,
      borderColor: selectedTheme.textPrimary,
    },
    avatarBar: {
      height: normalizeHeight(48), 
      backgroundColor: 
      selectedTheme.cardBackground, 
      flexDirection: 'row'
    },
    chatSendButton: {
      marginLeft: normalizeWidth(10),
    },
    chatMessagesContainer: {
      position: 'relative', 
      backgroundColor: selectedTheme.formBackgroundColorPrimary, 
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
      top: normalizeHeight(-5),
      right: normalizeWidth(-5),
      backgroundColor: 'red',
      borderRadius: 10,
      width: normalizeWidth(20),
      height: normalizeHeight(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
    unreadText: {
      color: 'white',
      fontSize: normalizeFontSize(12),
      fontWeight: 'bold',
    },
    cartItemImage: {
      width: normalizeWidth(100),
      height: normalizeHeight(100),
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityButton: {
      width: normalizeWidth(30),
      height: normalizeHeight(30),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e0e0e0',
      borderRadius: 0,
    },
    quantityValue: {
      marginHorizontal: normalizeWidth(10),
      fontSize: normalizeHeight(16),
    },
    totalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: normalizeHeight(15),
      borderTopWidth: 1,
      borderColor: '#ccc',
    },
    totalText: {
      fontSize: normalizeHeight(18),
      fontWeight: 'bold',
    },
    totalPrice: {
      fontSize: normalizeHeight(18),
      fontWeight: 'bold',
    },
    checkoutText: {
      fontSize: normalizeHeight(18),
      fontWeight: 'bold',
    },
    
    slideModal: {
      justifyContent: 'flex-end', // Align modal to bottom
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
    slideModalContent: {
      backgroundColor: selectedTheme.formBackgroundColorSecondary,
      padding: normalizeHeight(20),
      borderTopLeftRadius: normalizeHeight(15),
      borderTopRightRadius: normalizeHeight(15),
      minHeight: '60%',  // Ensures the modal takes up at least 60% of the screen height
      maxHeight: '80%',  // Limits the height so it doesn’t take up the entire screen
    },
    slideModalCloseButton: {
      alignSelf: 'flex-end',
    },
    slideModalTitle: {
      fontSize: normalizeFontSize(18),
      fontWeight: 'bold',
      marginBottom: normalizeHeight(10),
      textAlign: 'center',
    },
    slideModalImage: {
      width: '100%',
      height: normalizeHeight(200),
      borderRadius: normalizeHeight(10),
      marginBottom: normalizeHeight(10),
    },
    confimrationModalContent: {
      padding: normalizeHeight(20),
      borderRadius: SHARED.borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    centeredConfimrationModal: {
      justifyContent: 'center', 
      alignItems: 'center', 
      margin: normalizeHeight(10),
    },
    confimrationModalTitle: {
      fontSize: normalizeFontSize(18),
      fontWeight: 'bold',
      marginBottom: normalizeHeight(10),
      textAlign: 'center',
    },
    confimrationModalMessage: {
      fontSize: normalizeFontSize(14),
      textAlign: 'center',
    },
    confimrationButtonText: {
      fontSize: normalizeFontSize(16),
      fontWeight: 'bold',
    },
  });
};
