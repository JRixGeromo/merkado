import { StyleSheet, Platform, ViewStyle } from 'react-native';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../utils/responsive'; // Import responsive utilities
import { SHARED } from '../styles/baseStyles';
import { theme } from '../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const commonStyles = (currentTheme: 'light' | 'dark' | 'femme') => {
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({

   //////////////
    // COMMON STYLES
    tabHeaderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    tabBarStyle: {
      backgroundColor: selectedTheme.tabBarBackgroundColor,
    },

    headerLogo: {
      width: normalizeWidth(30),
      height: normalizeHeight(30),
      resizeMode: 'contain',
      marginRight: normalizeWidth(10),
    },
    tabBarLabelStyle: {
      fontFamily: selectedTheme.tabFont,
      fontSize: SHARED.fontXS,
      color: selectedTheme.textSecondary,
      marginTop: normalizeHeight(-4),
      marginBottom: normalizeHeight(4),
    },

    screenHeaderTitle: {
      fontSize: SHARED.fontL,
      fontFamily: selectedTheme.tabFont,
      color: selectedTheme.textSecondary,
    },
    headerRightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: normalizeWidth(15),
    },
    headerIcon: {
      marginRight: normalizeWidth(20),
    },
    
    /////////

    slideModalImage: {
      width: '100%',
      height: normalizeHeight(200),
      borderRadius: normalizeHeight(10),
      marginBottom: normalizeHeight(10),
    },
    searchContainer: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      backgroundColor: selectedTheme.inputBackgroundColor,
      borderRadius: 30,
      borderWidth: selectedTheme.boxBorderWidth,
      borderColor: selectedTheme.buttonBorderPrimary,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    searchInput: {
      flex: 1,
      height: normalizeHeight(40),
      borderColor: selectedTheme.buttonBorderPrimary,
      borderWidth: 0,
      paddingLeft: 0,
      borderRadius: 20,
      backgroundColor: selectedTheme.inputBackgroundColor,
      color: selectedTheme.textPrimary,
    },
    cardButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: normalizeHeight(5),
    },
    input: {
      flex: 1,
      fontSize: SHARED.fontL,
      color: selectedTheme.textPrimary,
    },
    contentBox: {
      backgroundColor: selectedTheme.cardBackground,
      width: '100%',
      height: normalizeHeight(110),
      marginRight: normalizeWidth(10),
      paddingBottom: 0,
      marginBottom: normalizeHeight(10),
      borderColor: selectedTheme.lineBorderColorLight,
      borderWidth: selectedTheme.boxBorderWidthSecondary,
      borderRadius: SHARED.borderRadiusSecondary,
      overflow: 'hidden',
    },
    logo: {
      width: normalizeWidth(100),
      height: normalizeHeight(100),
      resizeMode: 'contain',
      marginBottom: normalizeHeight(20),
    },

    headerContainer: {
      backgroundColor: selectedTheme.cardBackground,
      
      paddingTop: normalizeHeight(10),
      paddingBottom: normalizeHeight(8),
      paddingLeft: normalizeWidth(15),
      paddingRight: normalizeWidth(15),
      
      marginTop: normalizeHeight(0),
      marginBottom: normalizeHeight(0),
      marginLeft: normalizeWidth(-15),
      marginRight: normalizeWidth(-15),
      alignItems: 'center',
    },

    scrollViewContent: {
      paddingBottom:  normalizeHeight(40),
    },

    featuredContainer: {
      marginBottom: normalizeHeight(20),
      marginHorizontal: normalizeWidth(5),
      borderBottomWidth: 1, // Add bottom border
      borderColor: selectedTheme.borderColorLightGray,
    },

    newBadgeContainer: {
      position: 'absolute',
      backgroundColor: selectedTheme.badgeBackgroundColor, // Only round the top-left corner, // Green background
      borderTopRightRadius: SHARED.borderRadiusSecondary, // Only round the top-left corner
      borderBottomLeftRadius: 12, // Only round the bottom-right corner
      borderBottomRightRadius: 0, // Keep top-right square
      borderTopLeftRadius: 0, // Keep bottom-left square
      paddingHorizontal: normalizeWidth(10), // Space on left and right
      paddingVertical: normalizeHeight(2), // Space on top and bottom
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      right: 0,
      zIndex: 23,
    },
    
    newBadgeText: {
      color: '#fff', // White text color
      fontSize: SHARED.fontXxS, // Smaller text
      fontWeight: 'bold', // Bold text
    },
    iconTextSolid: {
      fontSize: SHARED.fontM,
      marginRight: normalizeHeight(5),
      color: '#007BFF',
    },
    detailText: {
      fontSize: SHARED.fontXS,
      color: selectedTheme.textGray,
      flexWrap: 'wrap',
      textAlign: 'center',
    },
    sectionHeader: {
      fontSize: SHARED.fontL,
      fontWeight: 'bold',
      color: selectedTheme.textSecondary,
      marginBottom: normalizeHeight(10),
      marginLeft: normalizeWidth(10),
    },
    productName: { fontSize: SHARED.fontSM, color: selectedTheme.textSecondary },
    productDescription: { fontSize: SHARED.fontS, color: selectedTheme.textGray, marginVertical: normalizeHeight(2) },
    vendorInfo: { fontSize: SHARED.fontXxS, color: selectedTheme.textGray, marginVertical: normalizeHeight(2) },
    headerTitle: { 
      fontSize: SHARED.fontXxL, fontWeight: 'bold', color: selectedTheme.textSecondary, 
    },
    priceRow: { alignItems: 'center', marginRight: normalizeWidth(10), marginTop: normalizeHeight(8) },
   
    discountedPrice: {
      fontSize: SHARED.fontSM,
      color: selectedTheme.textSecondary,
      marginRight: normalizeWidth(10),
    },
    originalPrice: {
      fontSize: SHARED.fontS,
      color: selectedTheme.textGray,
      textDecorationLine: 'line-through',
      marginRight: normalizeWidth(10),
    },
    discountBadge: {
      backgroundColor: selectedTheme.buttonDanger,
      color: selectedTheme.textLight,
      paddingHorizontal: normalizeWidth(5),
      fontSize: SHARED.fontXS,
      borderRadius: SHARED.borderRadiusPrimary, 
      fontWeight: 'bold',
    },

    description: {
      fontSize: SHARED.fontM,
      color: selectedTheme.textGray,
      textAlign: 'center',
    },
    recentlyPostedList: {
      paddingHorizontal: normalizeWidth(10),
    },

    categoryGrid: {
      paddingHorizontal: normalizeWidth(10),
      paddingTop: normalizeHeight(10),
    },
    activeIconText: {
      color: selectedTheme.textLight,
    },




    ////////////////////////////////////////////////////////
    // OLD COMMON STYLES
    // bannerImageWrapper: {
    //   width: '100%',
    //   height: normalizeHeight(200),
    //   resizeMode: 'cover',
    // },
    // bannerContentImage: {
    //   width: '100%',
    //   height: normalizeHeight(200),
    // },
    // selectedReactionWrapper: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    // },
    // selectedReactionText: {
    //   fontSize: SHARED.fontXxL,
    //   color: selectedTheme.textGray,
    // },
    // saleBanner: {
    //   position: 'absolute',
    //   top: 0,
    //   width: '100%',
    //   backgroundColor: 'red',
    //   paddingTop: normalizeHeight(5),
    //   paddingBottom: normalizeHeight(5),
    //   paddingLeft: normalizeWidth(5),
    //   paddingRight: normalizeWidth(5),
    //   zIndex: 1,
    //   alignItems: 'center',
    // },
    // priceContainer: {
    //   position: 'absolute',
    //   bottom: normalizeHeight(10),
    //   right: normalizeHeight(10),
    //   paddingTop: normalizeHeight(5),
    //   paddingBottom: normalizeHeight(1),
    //   paddingLeft: normalizeWidth(10),
    //   paddingRight: normalizeWidth(10),
    //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //   borderWidth: selectedTheme.boxBorderWidth,
    //   borderColor: selectedTheme.borderColorDark,
    //   borderRadius: 5,
    //   zIndex: 2,
    // },
    // reactionBarSection: {
    //   paddingHorizontal: normalizeWidth(16),
    //   alignItems: 'center',
    //   marginBottom: normalizeHeight(5),
    // },
    // commentSection: {
    //   paddingHorizontal: normalizeWidth(10),
    //   marginBottom: normalizeHeight(10),
    // },
    // commentContainer: {
    //   paddingTop: normalizeHeight(15),
    //   paddingBottom: normalizeHeight(15),
    //   paddingLeft: normalizeWidth(15),
    //   paddingRight: normalizeWidth(15),
    //   borderRadius: SHARED.borderRadius,
    //   borderColor: selectedTheme.lineBorderColor,
    //   borderWidth: selectedTheme.boxBorderWidthSecondary,
    //   marginBottom: normalizeHeight(10),
    //   position: 'relative',
    // },
    // commentsList: {
    //   paddingHorizontal: normalizeWidth(10),
    // },
    // userImage: {
    //   width: normalizeWidth(30),
    //   height: normalizeWidth(30),
    //   borderRadius: 20,
    // },
    // commentWrapper: {
    //   flexDirection: 'column',
    //   justifyContent: 'flex-start',
    //   position: 'relative',
    //   paddingRight: normalizeWidth(40),
    //   marginBottom: normalizeHeight(10),
    // },
    // commentTextWrapper: {
    //   lineHeight: normalizeHeight(18),
    // },
    // timeAndReactionWrapper: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   marginTop: normalizeHeight(5),
    // },
    // replyContainer: {
    //   marginLeft: normalizeWidth(15),
    //   marginTop: normalizeHeight(5),
    //   paddingLeft: normalizeWidth(10),
    // },
    // replyInputWrapper: {
    //   marginLeft: -15,
    //   marginRight: -15,
    //   marginTop: normalizeHeight(10),
    // },
    // commentFormContainer: {
    //   marginBottom: normalizeHeight(2),
    //   paddingTop: normalizeHeight(12),
    //   paddingBottom: normalizeHeight(12),
    //   paddingLeft: normalizeWidth(12),
    //   paddingRight: normalizeWidth(12),
    // },
    // inputWrapper: {
    //   borderRadius: 30,
    //   paddingLeft: normalizeWidth(15),
    // },
    // commentInput: {
    //   flex: 1,
    //   paddingVertical: normalizeHeight(10),
    //   paddingRight: normalizeWidth(50),
    //   fontSize: SHARED.fontS,
    // },
    // sendButton: {
    //   position: 'absolute',
    //   right: normalizeWidth(10),
    //   paddingTop: normalizeHeight(10),
    //   paddingBottom: normalizeHeight(10),
    //   paddingLeft: normalizeWidth(10),
    //   paddingRight: normalizeWidth(10),
    //   borderRadius: 20,
    // },
    // thumbsUpButton: {
    //   paddingHorizontal: normalizeWidth(10),
    // },
    // ////
    // searchContainer: {
    //   paddingTop: 0,
    //   paddingBottom: 0,
    //   paddingLeft: normalizeWidth(10),
    //   paddingRight: normalizeWidth(10),
    //   backgroundColor: selectedTheme.inputBackgroundColor,
    //   borderRadius: 30,
    //   borderWidth: selectedTheme.boxBorderWidth,
    //   borderColor: selectedTheme.buttonBorderPrimary,
    //   justifyContent: 'flex-start',
    //   alignItems: 'center',
    // },
    // searchInput: {
    //   flex: 1,
    //   height: normalizeHeight(40),
    //   borderColor: selectedTheme.buttonBorderPrimary,
    //   borderWidth: 0,
    //   paddingLeft: 0,
    //   borderRadius: 20,
    //   backgroundColor: selectedTheme.inputBackgroundColor,
    //   color: selectedTheme.textPrimary,
    // },

    // contentBox: {
    //   backgroundColor: selectedTheme.cardBackground,
    //   width: '100%',
    //   height: normalizeHeight(110),
    //   marginRight: normalizeWidth(10),
    //   paddingBottom: 0,
    //   marginBottom: normalizeHeight(10),
    //   borderColor: selectedTheme.lineBorderColorLight,
    //   borderWidth: selectedTheme.boxBorderWidthSecondary,
    //   borderRadius: SHARED.borderRadiusSecondary,
    //   overflow: 'hidden',
    // },
    // contentImage: {
    //   width: '100%',
    //   height: '100%',
    //   resizeMode: 'cover',
    // },

    // /// Portrait
    // contentBoxPortrait: {
    //   backgroundColor: selectedTheme.cardBackground,
    //   width: normalizeWidth(120),
    //   height: normalizeHeight(210),
    //   marginRight: normalizeWidth(10),
    //   paddingBottom: 0,
    //   marginBottom: 0,
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    //   borderColor: selectedTheme.lineBorderColorLight,
    //   borderWidth: selectedTheme.boxBorderWidthSecondary,
    //   borderRadius: SHARED.borderRadiusSecondary,
    //   overflow: 'hidden',
    // },
    // cardImageWrapper: {
    //   width: '100%',
    //   flex: 0.35,
    //   position: 'relative',
    // },
    // contentContainer: {
    //   justifyContent: 'flex-start',
    //   alignItems: 'center',
    //   width: '100%',
    //   flex: 0.5,
    // },
    // buttonContainer: {
    //   flex: 0.15,
    // },
    // ///

    // productImage: {
    //   width: '100%',
    //   height: '100%',
    //   resizeMode: 'cover',
    // },
    // promoImage: {
    //   width: '100%',
    //   height: normalizeHeight(100),
    //   resizeMode: 'cover',
    // },
    // goFullScreenButton: {
    //   position: 'absolute',
    //   top: normalizeHeight(2),
    //   right: normalizeWidth(2),
    //   backgroundColor: 'rgba(0, 0, 0, 0.4)',
    //   padding: 5,
    //   borderRadius: 0,
    // },
    // goLiveShowButton: {
    //   position: 'absolute',
    //   bottom: normalizeHeight(2),
    //   right: normalizeWidth(2),
    //   backgroundColor: 'rgba(0, 0, 0, 0.4)',
    //   padding: 5,
    //   borderRadius: 15,
    // },
    // productName: {
    //   fontSize: SHARED.fontS,
    //   color: selectedTheme.textSecondary,
    //   fontFamily: selectedTheme.bodyFont,
    //   fontWeight: 'bold',
    //   marginTop: normalizeHeight(3),
    // },
    // productPrice: {
    //   fontSize: SHARED.fontM,
    //   color: selectedTheme.textHighlight,
    //   fontFamily: selectedTheme.bodyFont,
    //   fontWeight: 'bold',
    //   marginTop: 0,
    // },
    // productPriceL: {
    //   fontSize: SHARED.fontXxL,
    //   color: selectedTheme.textHighlight,
    //   fontFamily: selectedTheme.bodyFont,
    // },
    // storeLocation: {
    //   fontSize: SHARED.fontXS,
    //   color: selectedTheme.textSecondary,
    //   fontFamily: selectedTheme.bodyFontSlim,
    // },
    // cardButton: {
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   paddingVertical: normalizeHeight(5),
    // },
    // sectionTitle: {
    //   fontSize: SHARED.fontM,
    //   color: selectedTheme.textSecondary,
    //   fontFamily: selectedTheme.headingFont,
    // },
    // modalTitle: {
    //   fontSize: SHARED.fontL,
    //   fontWeight: 'bold',
    //   color: selectedTheme.textPrimary,
    //   marginBottom: 15,
    // },
    // listItem: {
    //   paddingTop: normalizeHeight(10),
    //   paddingBottom: normalizeHeight(10),
    //   paddingLeft: normalizeWidth(10),
    //   paddingRight: normalizeWidth(10),
    //   borderBottomColor: selectedTheme.lineBorderColor,
    //   borderBottomWidth: 1,
    // },
    // searchButton: {
    //   paddingTop: normalizeHeight(4),
    //   paddingBottom: normalizeHeight(4),
    //   paddingLeft: normalizeWidth(8),
    //   paddingRight: normalizeWidth(8),
    //   height: normalizeHeight(30),
    // },
    // inputContainer: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   padding: normalizeHeight(2),
    //   borderRadius: SHARED.borderRadius,
    //   backgroundColor: selectedTheme.cardBackground,
    //   marginBottom: normalizeHeight(15),
    //   borderWidth: 1,
    //   borderColor: '#ddd',
    //   width: '80%',
    //   height: normalizeHeight(40),
    //   paddingHorizontal: normalizeWidth(10),
    // },
    // modalContent: {
    //   borderRadius: 10,
    //   paddingTop: normalizeHeight(20),
    //   paddingBottom: normalizeHeight(20),
    //   paddingLeft: normalizeWidth(20),
    //   paddingRight: normalizeWidth(20),
    //   backgroundColor: selectedTheme.cardBackground,
    // },
    // dropdownOption: {
    //   paddingTop: normalizeHeight(10),
    //   paddingBottom: normalizeHeight(10),
    //   paddingLeft: normalizeWidth(10),
    //   paddingRight: normalizeWidth(10),
    //   borderBottomWidth: 1,
    //   borderColor: selectedTheme.textPrimary,
    // },
    // button: {
    //   padding: SHARED.buttonPadding,
    //   borderRadius: SHARED.borderRadius,
    //   backgroundColor: selectedTheme.textPrimary,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   ...Platform.select({
    //     ios: {
    //       shadowColor: SHARED.shadow.color,
    //       shadowOffset: SHARED.shadow.offset,
    //       shadowOpacity: SHARED.shadow.opacity,
    //       shadowRadius: SHARED.shadow.radius,
    //     },
    //     android: {
    //       elevation: selectedTheme.shadowElevation,
    //     },
    //   }),
    //   width: Platform.select({
    //     web: '40%', // Width for desktop
    //     default: '80%', // Width for mobile
    //   }),
    // },
    // input: {
    //   flex: 1,
    //   fontSize: SHARED.fontL,
    //   color: selectedTheme.textPrimary,
    // },
    // modalOverlay: {
    //   backgroundColor: selectedTheme.modalOverlay,
    // },
    // overlay: {
    //   flex: 1,
    //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    // modalText: {
    //   fontSize: SHARED.fontL,
    //   color: selectedTheme.textPrimary,
    //   fontFamily: selectedTheme.bodyFont,
    // },
    // dropdownMenu: {
    //   backgroundColor: selectedTheme.cardBackground,
    //   borderRadius: 10,
    //   paddingTop: normalizeHeight(10),
    //   paddingBottom: normalizeHeight(10),
    //   paddingLeft: normalizeWidth(10),
    //   paddingRight: normalizeWidth(10),
    //   width: normalizeWidth(220),
    //   shadowColor: '#000',
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowOpacity: 0.2,
    //   shadowRadius: 3,
    //   elevation: 5,
    // },
    // dropdownItem: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   paddingVertical: normalizeHeight(10),
    //   borderBottomWidth: 1,
    //   borderColor: selectedTheme.lineBorderColor,
    // },
    // dropdownText: {
    //   color: selectedTheme.textSecondary,
    //   fontFamily: selectedTheme.bodyFont,
    //   marginLeft: normalizeWidth(10),
    // },
    // logo: {
    //   width: normalizeWidth(150),
    //   height: normalizeHeight(150),
    //   resizeMode: 'contain',
    //   marginBottom: normalizeHeight(20),
    // },
    // headerTitle: {
    //   fontSize: SHARED.fontXxL,
    //   fontFamily: selectedTheme.headingFont,
    //   color: selectedTheme.textPrimary,
    //   marginBottom: normalizeHeight(20),
    // },
    // linkText: {
    //   fontSize: SHARED.fontM,
    //   fontFamily: selectedTheme.bodyFont,
    //   color: selectedTheme.textLink,
    //   marginTop: normalizeHeight(10),
    //   marginBottom: normalizeHeight(10),
    //   marginLeft: normalizeWidth(10),
    //   marginRight: normalizeWidth(10),
    // },
    // socialButton: {
    //   ...SHARED,
    //   flexDirection: 'row',
    //   width: '48%',
    // },
    // googleButton: {
    //   backgroundColor: selectedTheme.googleButtonColor,
    // },
    // facebookButton: {
    //   backgroundColor: selectedTheme.facebookButtonColor,
    // },
    // socialButtonText: {
    //   color: selectedTheme.buttonTextPrimary,
    // },

    // loader: {
    //   marginTop: normalizeHeight(30),
    //   color: selectedTheme.loader,
    // },
    // headerLogo: {
    //   width: normalizeWidth(30),
    //   height: normalizeHeight(30),
    //   resizeMode: 'contain',
    //   marginRight: normalizeWidth(10),
    // },
    // tabBarLabelStyle: {
    //   fontFamily: selectedTheme.tabFont,
    //   fontSize: SHARED.fontXS,
    //   color: selectedTheme.textSecondary,
    //   marginTop: normalizeHeight(-4),
    //   marginBottom: normalizeHeight(4),
    // },
    // screenHeaderTitle: {
    //   fontSize: SHARED.fontL,
    //   fontFamily: selectedTheme.tabFont,
    //   color: selectedTheme.textSecondary,
    // },
    // tabBarStyle: {
    //   backgroundColor: selectedTheme.tabBarBackgroundColor,
    // },
    // headerContainer: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    // },
    // headerRightContainer: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   marginRight: normalizeWidth(15),
    // },
    // headerIcon: {
    //   marginRight: normalizeWidth(20),
    // },
    // chatButton: {
    //   backgroundColor: selectedTheme.buttonDark,
    // },
    // cartButton: {
    //   backgroundColor: selectedTheme.buttonPrimary,
    // },
    // commentButton: {
    //   backgroundColor: selectedTheme.buttonInfo,
    // },
    // followButton: {
    //   backgroundColor: selectedTheme.buttonInfo,
    // },
    // cardHeader: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   marginBottom: normalizeHeight(10),
    // },
    // cardHeaderTitle: {
    //   fontSize: SHARED.fontXL,
    //   fontFamily: selectedTheme.headingFont,
    //   color: selectedTheme.textPrimary,
    // },
    // sectionButtonText: {
    //   color: selectedTheme.textPrimary,
    //   fontSize: SHARED.fontXS,
    // },
    // sectionButtonContainer: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   marginBottom: normalizeHeight(20),
    // },
    // toggleButtonContainer: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    // },
    // cardText: {
    //   fontSize: SHARED.fontM,
    //   color: selectedTheme.textPrimary,
    //   marginTop: normalizeHeight(5),
    //   marginLeft: normalizeWidth(10),
    // },
    // languageContainer: {
    //   marginTop: normalizeHeight(10),
    //   backgroundColor: selectedTheme.cardBackground,
    // },
    // splashContainer: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: selectedTheme.cardBackground,
    // },
    // splashText: {
    //   fontSize: SHARED.fontXxL,
    //   fontWeight: 'bold',
    //   color: selectedTheme.textPrimary,
    //   marginTop: normalizeHeight(10),
    // },
    // slide: {
    //   borderRadius: SHARED.borderRadiusSecondary,
    //   overflow: 'hidden',
    // },
    // reactionBar: {
    //   flexDirection: 'row',
    //   justifyContent: 'flex-start',
    //   paddingVertical: normalizeHeight(5),
    // },
    // chatAvatar: {
    //   width: normalizeWidth(40),
    //   height: normalizeHeight(40),
    //   borderRadius: 25,
    //   borderWidth: 2,
    //   borderColor: selectedTheme.textPrimary,
    // },
    // avatarBar: {
    //   height: normalizeHeight(48),
    //   backgroundColor: selectedTheme.cardBackground,
    //   flexDirection: 'row',
    // },
    // chatSendButton: {
    //   marginLeft: normalizeWidth(10),
    // },
    // chatMessagesContainer: {
    //   position: 'relative',
    //   backgroundColor: selectedTheme.cardBackground,
    //   paddingTop: normalizeHeight(8),
    //   paddingBottom: normalizeHeight(8),
    // },
    // chatInputContainer: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   paddingHorizontal: normalizeWidth(10),
    //   marginHorizontal: normalizeWidth(10),
    //   marginBottom: normalizeHeight(10),
    //   borderRadius: 25,
    // },
    // unreadBadge: {
    //   position: 'absolute',
    //   top: normalizeHeight(-3),
    //   right: normalizeWidth(-7),
    //   backgroundColor: 'red',
    //   borderRadius: 10,
    //   width: normalizeWidth(20),
    //   height: normalizeHeight(20),
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    // unreadText: {
    //   color: 'white',
    //   fontSize: SHARED.fontS,
    //   fontWeight: 'bold',
    // },
    // cartItemImage: {
    //   width: normalizeWidth(100),
    //   height: normalizeHeight(100),
    // },
    // quantityContainer: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    // },
    // quantityButton: {
    //   width: normalizeWidth(30),
    //   height: normalizeHeight(30),
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#e0e0e0',
    //   borderRadius: 0,
    // },
    // quantityValue: {
    //   marginHorizontal: normalizeWidth(10),
    //   fontSize: normalizeFontSize(16),
    // },
    // totalContainer: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   padding: normalizeHeight(15),
    //   borderTopWidth: 1,
    //   borderColor: '#ccc',
    // },
    // totalText: {
    //   fontSize: SHARED.fontXL,
    //   fontWeight: 'bold',
    // },
    // totalPrice: {
    //   fontSize: SHARED.fontXL,
    //   fontWeight: 'bold',
    // },
    // checkoutText: {
    //   fontSize: SHARED.fontXL,
    //   fontWeight: 'bold',
    // },

    // slideModal: {
    //   justifyContent: 'flex-end',
    //   marginLeft: 0,
    //   marginRight: 0,
    //   marginBottom: 0,
    // },
    // slideModalContent: {
    //   backgroundColor: selectedTheme.cardBackground,
    //   padding: normalizeHeight(20),
    //   borderTopLeftRadius: normalizeHeight(15),
    //   borderTopRightRadius: normalizeHeight(15),
    //   minHeight: '60%',
    //   maxHeight: '80%',
    // },
    // slideModalCloseButton: {
    //   alignSelf: 'flex-end',
    // },
    // slideModalTitle: {
    //   fontSize: SHARED.fontXL,
    //   fontWeight: 'bold',
    //   marginBottom: normalizeHeight(10),
    //   textAlign: 'center',
    // },
    // slideModalImage: {
    //   width: '100%',
    //   height: normalizeHeight(200),
    //   borderRadius: normalizeHeight(10),
    //   marginBottom: normalizeHeight(10),
    // },
    // confimrationModalContent: {
    //   padding: normalizeHeight(20),
    //   borderRadius: SHARED.borderRadius,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   width: '90%',
    // },
    // centeredConfimrationModal: {
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   margin: normalizeHeight(10),
    // },
    // confimrationModalTitle: {
    //   fontSize: SHARED.fontXL,
    //   fontWeight: 'bold',
    //   marginBottom: normalizeHeight(10),
    //   textAlign: 'center',
    // },
    // confimrationModalMessage: {
    //   fontSize: SHARED.fontM,
    //   textAlign: 'center',
    // },
    // confimrationButtonText: {
    //   fontSize: SHARED.fontL,
    //   fontWeight: 'bold',
    // },

    // ////////////////
    // // CSS below need refactore

    // container: {
    //   flex: 1,
    //   padding: 16,
    // },
    // verticalSpacerM: {
    //   marginVertical: 12,
    // },
    // rlPaddingS: {
    //   paddingHorizontal: 8,
    // },
    // largeText: {
    //   fontSize: 18,
    //   fontWeight: '600',
    // },
    // metricBox: {
    //   flex: 1,
    //   padding: 12,
    //   //borderRadius: 8,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   marginHorizontal: 4,
    //   shadowColor: '#000',
    //   shadowOffset: { width: 0, height: 1 },
    //   shadowOpacity: 0.2,
    //   shadowRadius: 1.41,
    //   elevation: 2,
    // },
    // metricTitle: {
    //   fontSize: 14,
    //   color: '#666',
    //   marginBottom: 4,
    // },
    // metricValue: {
    //   fontSize: 20,
    //   fontWeight: 'bold',
    // },
    // orderBox: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   padding: 10,
    //   borderRadius: 8,
    //   backgroundColor: '#f5f5f5',
    //   marginVertical: 4,
    // },
    // orderText: {
    //   fontSize: 14,
    //   color: '#333',
    // },
    // orderStatus: {
    //   fontSize: 12,
    //   fontWeight: '500',
    // },
    // feedbackBox: {
    //   padding: 12,
    //   borderRadius: 8,
    //   backgroundColor: '#f9f9f9',
    //   marginVertical: 4,
    // },
    // feedbackUser: {
    //   fontSize: 14,
    //   fontWeight: '600',
    //   color: '#333',
    // },
    // feedbackContent: {
    //   fontSize: 13,
    //   color: '#666',
    //   marginVertical: 4,
    // },
    // feedbackRating: {
    //   fontSize: 12,
    //   fontWeight: '500',
    //   color: '#ffa500',
    // },
    // liveShowButton: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   paddingVertical: 12,
    //   borderRadius: 8,
    //   marginTop: 16,
    // },
    // liveShowText: {
    //   fontSize: 16,
    //   fontWeight: '500',
    //   marginLeft: 8,
    // },
    // //////////////////////////
    // vendorHeader: {
    //   alignItems: 'center',
    //   flexDirection: 'row',
    //   paddingVertical: 10,
    // },
    // vendorInfo: {
    //   marginLeft: 10,
    //   flex: 1,
    // },
    // vendorName: {
    //   fontSize: 18,
    //   fontWeight: 'bold',
    //   color: '#333',
    // },
    // vendorLocation: {
    //   color: '#666',
    //   fontSize: 14,
    // },
    // vendorStats: {
    //   color: '#666',
    //   fontSize: 12,
    // },

    // followButtonText: {
    //   color: '#FFF',
    //   fontWeight: 'bold',
    //   fontSize: 14,
    // },
    // iconMargin: {
    //   marginLeft: 10,
    // },
    // bannerImage: {
    //   width: '90%',
    //   height: 150,
    //   borderRadius: 10,
    //   marginRight: 10,
    // },
    // categoryCard: {
    //   backgroundColor: '#f2f2f2',
    //   paddingHorizontal: 15,
    //   paddingVertical: 10,
    //   borderRadius: 20,
    //   marginHorizontal: 5,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    // categoryText: {
    //   color: '#333',
    //   fontSize: 14,
    // },

    // productCard: {
    //   marginRight: 10,
    //   width: 150,
    // },
    // reviewBox: {
    //   backgroundColor: '#f9f9f9',
    //   padding: 10,
    //   borderRadius: 8,
    //   marginVertical: 5,
    // },
    // reviewUser: {
    //   fontWeight: 'bold',
    //   color: '#333',
    // },
    // reviewContent: {
    //   color: '#555',
    //   fontSize: 14,
    //   marginVertical: 5,
    // },
    // reviewRating: {
    //   color: '#FFC107',
    //   fontSize: 14,
    // },
    // header: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   marginBottom: 20,
    // },

    // storeName: {
    //   fontSize: 24,
    //   fontWeight: 'bold',
    //   color: selectedTheme.textPrimary,
    // },
    // metricsContainer: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   marginVertical: 20,
    // },
    // metricLabel: {
    //   fontSize: 14,
    //   color: selectedTheme.textBlur,
    //   marginTop: 5,
    // },
    // productListContainer: {
    //   marginTop: 20,
    // },

    // productInfo: {
    //   flex: 1,
    // },

    // ratingContainer: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   marginTop: 5,
    // },
    // ratingText: {
    //   fontSize: 14,
    //   color: selectedTheme.textBlur,
    //   marginLeft: 5,
    // },
    // reactionContainer: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   marginTop: 20,
    // },
    // reactionIcon: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    // },
    // reactionCount: {
    //   fontSize: 14,
    //   color: selectedTheme.textPrimary,
    //   marginLeft: 5,
    // },

    // bannerWrapper: {
    //   position: 'relative',
    //   width: '100%',
    //   height: 200,
    //   marginBottom: 20,
    // },

    // // Profile picture in the lower left corner of the banner
    // profilePicture: {
    //   position: 'absolute',
    //   bottom: 10,
    //   left: 10,
    //   width: 60,
    //   height: 60,
    //   borderRadius: 30,
    //   borderWidth: 2,
    //   borderColor: 'white',
    // },
  });
};
