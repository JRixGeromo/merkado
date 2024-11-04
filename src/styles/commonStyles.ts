import { StyleSheet, Platform, ViewStyle } from 'react-native';
import { normalizeFontSize, normalizeHeight, normalizeWidth } from '../utils/responsive'; // Import responsive utilities
import { SHARED } from '../styles/layoutStyles';
import { theme } from '../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const commonStyles = (currentTheme: 'light' | 'dark' | 'feminine') => {
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
      fontSize: SHARED.fontXxL,
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
      fontSize: SHARED.fontS,
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
      paddingTop: 0,
      paddingBottom: 0,
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
      paddingBottom: 0,
      marginBottom: 0,
      justifyContent: 'space-between', // Space between content and buttons
      alignItems: 'center', // Center all content horizontally
      borderColor: selectedTheme.lineBorderColorLight,
      borderWidth: 0.5,
    },
    cardImageWrapper: {
      width: '100%',
      flex: 0.35, // Fixed height equivalent to 35% of contentBoxPortrait height
      position: 'relative',
    },
    contentContainer: {
      justifyContent: 'flex-start', // Align content to the top of the container
      alignItems: 'center', // Center content horizontally
      width: '100%',
      flex: 0.5,
    },
    buttonContainer: {
      flex: 0.15,
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
      fontSize: SHARED.fontS,
      color: selectedTheme.textSecondary,
      fontFamily: selectedTheme.bodyFont,
      fontWeight:  "bold",
      marginTop: normalizeHeight(3), // Add some margin after the image
    },
    productPrice: {
      fontSize: SHARED.fontM,
      color: selectedTheme.textHighlight, // Highlight the price
      fontFamily: selectedTheme.bodyFont,
      fontWeight:  "bold",
      marginTop: 0, // Space between the product name and price
    },
    productPriceL: {
      fontSize: SHARED.fontXxL,
      color: selectedTheme.textHighlight, // Highlight the price
      fontFamily: selectedTheme.bodyFont,
    },
    storeLocation: {
      fontSize: SHARED.fontXS,
      color: selectedTheme.textSecondary,
      fontFamily: selectedTheme.bodyFontSlim,
    },
    cardButton: {
      alignItems: 'center', // Center the content vertically
      justifyContent: 'center', // Center the content horizontally
      paddingVertical: normalizeHeight(5), // Add vertical padding for better touch area
    },
    sectionTitle: {
      fontSize: SHARED.fontM, // Default size for icons
      color: selectedTheme.textSecondary,
      fontFamily: selectedTheme.headingFont,
    },
    modalTitle: {
      fontSize: SHARED.fontL,
      fontWeight: 'bold',
      color: selectedTheme.textPrimary, // Theme-based text color for the title
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
      fontSize: SHARED.fontL,
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
      fontSize: SHARED.fontL,
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
      fontSize: SHARED.fontXxL,
      fontFamily: selectedTheme.headingFont,
      color: selectedTheme.textPrimary,
      marginBottom: normalizeHeight(20),
    },
    linkText: {
      fontSize: SHARED.fontM,
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
      color: selectedTheme.buttonTextPrimary, // Social button text color from selected theme
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
      fontSize: SHARED.fontXS, // You can adjust the size to your liking
      color: selectedTheme.textSecondary,
    },
    screenHeaderTitle: {
      fontSize: SHARED.fontL,
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
      fontSize: SHARED.fontXL,
      fontFamily: selectedTheme.headingFont, // Use the heading font for card titles
      color: selectedTheme.textPrimary,
    },
    sectionButtonText: {
      color: selectedTheme.textPrimary, // Theme-based text color
      fontSize: SHARED.fontXS,
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
      fontSize: SHARED.fontM, // Font size for text inside card
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
      fontSize: SHARED.fontXxL,
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
      backgroundColor: selectedTheme.cardBackground, 
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
      top: normalizeHeight(-3),
      right: normalizeWidth(-7),
      backgroundColor: 'red',
      borderRadius: 10,
      width: normalizeWidth(20),
      height: normalizeHeight(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
    unreadText: {
      color: 'white',
      fontSize: SHARED.fontS,
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
      fontSize: normalizeFontSize(16),
    },
    totalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: normalizeHeight(15),
      borderTopWidth: 1,
      borderColor: '#ccc',
    },
    totalText: {
      fontSize: SHARED.fontXL,
      fontWeight: 'bold',
    },
    totalPrice: {
      fontSize: SHARED.fontXL,
      fontWeight: 'bold',
    },
    checkoutText: {
      fontSize: SHARED.fontXL,
      fontWeight: 'bold',
    },
    
    slideModal: {
      justifyContent: 'flex-end', // Align modal to bottom
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
    slideModalContent: {
      backgroundColor: selectedTheme.cardBackground,
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
      fontSize: SHARED.fontXL,
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
      fontSize: SHARED.fontXL,
      fontWeight: 'bold',
      marginBottom: normalizeHeight(10),
      textAlign: 'center',
    },
    confimrationModalMessage: {
      fontSize: SHARED.fontM,
      textAlign: 'center',
    },
    confimrationButtonText: {
      fontSize: SHARED.fontL,
      fontWeight: 'bold',
    },



    ////////////////


    container: {
      flex: 1,
      padding: 16,
    },
    verticalSpacerM: {
      marginVertical: 12,
    },
    rlPaddingS: {
      paddingHorizontal: 8,
    },
    largeText: {
      fontSize: 18,
      fontWeight: '600',
    },
    metricBox: {
      flex: 1,
      padding: 12,
      //borderRadius: 8,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginHorizontal: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    metricTitle: {
      fontSize: 14,
      color: '#666',
      marginBottom: 4,
    },
    metricValue: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    orderBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#f5f5f5',
      marginVertical: 4,
    },
    orderText: {
      fontSize: 14,
      color: '#333',
    },
    orderStatus: {
      fontSize: 12,
      fontWeight: '500',
    },
    feedbackBox: {
      padding: 12,
      borderRadius: 8,
      backgroundColor: '#f9f9f9',
      marginVertical: 4,
    },
    feedbackUser: {
      fontSize: 14,
      fontWeight: '600',
      color: '#333',
    },
    feedbackContent: {
      fontSize: 13,
      color: '#666',
      marginVertical: 4,
    },
    feedbackRating: {
      fontSize: 12,
      fontWeight: '500',
      color: '#ffa500',
    },
    liveShowButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 8,
      marginTop: 16,
    },
    liveShowText: {
      fontSize: 16,
      fontWeight: '500',
      marginLeft: 8,
    },
    //////////////////////////
    vendorHeader: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: 10,
    },
    vendorInfo: {
      marginLeft: 10,
      flex: 1,
    },
    vendorName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333', // Adjust based on theme
    },
    vendorLocation: {
      color: '#666', // Adjust based on theme
      fontSize: 14,
    },
    vendorStats: {
      color: '#666', // Adjust based on theme
      fontSize: 12,
    },

    followButtonText: {
      color: '#FFF', // Text color for the button
      fontWeight: 'bold',
      fontSize: 14,
    },
    iconMargin: {
      marginLeft: 10,
    },
    bannerImage: {
      width: '90%',
      height: 150,
      borderRadius: 10,
      marginRight: 10,
    },
    categoryCard: {
      backgroundColor: '#f2f2f2', // Replace with theme background color
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 20,
      marginHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoryText: {
      color: '#333', // Replace with theme text color
      fontSize: 14,
    },

    productCard: {
      marginRight: 10,
      width: 150,
    },
    reviewBox: {
      backgroundColor: '#f9f9f9', // Adjust based on theme
      padding: 10,
      borderRadius: 8,
      marginVertical: 5,
    },
    reviewUser: {
      fontWeight: 'bold',
      color: '#333', // Replace with theme text color
    },
    reviewContent: {
      color: '#555', // Adjust based on theme
      fontSize: 14,
      marginVertical: 5,
    },
    reviewRating: {
      color: '#FFC107', // Star color
      fontSize: 14,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },

    storeName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: selectedTheme.textPrimary,
    },
    metricsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
    },
    metricLabel: {
      fontSize: 14,
      color: selectedTheme.textBlur,
      marginTop: 5,
    },
    productListContainer: {
      marginTop: 20,
    },
    
    productInfo: {
      flex: 1,
    },
    
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    ratingText: {
      fontSize: 14,
      color: selectedTheme.textBlur,
      marginLeft: 5,
    },
    reactionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    reactionIcon: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    reactionCount: {
      fontSize: 14,
      color: selectedTheme.textPrimary,
      marginLeft: 5,
    },
    
    bannerWrapper: {
      position: 'relative',
      width: '100%',
      height: 200, // Adjust based on desired height of the banner
      marginBottom: 20,
    },

  
    // Profile picture in the lower left corner of the banner
    profilePicture: {
      position: 'absolute',
      bottom: 10, // Adjust distance from the bottom edge
      left: 10,   // Adjust distance from the left edge
      width: 60,  // Adjust size of the profile picture
      height: 60,
      borderRadius: 30, // Make it circular
      borderWidth: 2,
      borderColor: 'white', // White border for a nice effect
    },
  });
};
