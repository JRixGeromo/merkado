import { StyleSheet, Platform, ViewStyle } from 'react-native';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../../../utils/responsive'; // Import responsive utilities
import { SHARED } from '../../../styles/baseStyles';
import { theme } from '../../../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const marketStyles = (currentTheme: 'light' | 'dark' | 'femme') => {
  const myTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
 
    // MarketPlaceScreen
    liveSellingContainer: {
      marginBottom: normalizeHeight(20), // Add spacing from the section below
      marginLeft: normalizeWidth(5), // Add spacing from the section below
      paddingVertical: normalizeHeight(10), // Ensure padding around the section
      borderTopWidth: 0.5, // Add top border
      borderBottomWidth: 0.5, // Add bottom border
      borderColor: myTheme.borderColorGray, // Light gray border color
    },
    liveSellingList: {
      paddingHorizontal: normalizeWidth(10),
    },
    featuredList: {
      paddingHorizontal: normalizeWidth(5),
    },
    recentlyPostedContainer: {
      marginTop: normalizeHeight(10),
      marginHorizontal: normalizeWidth(4),
    },

    // SearchBarWithToggle 
    searchContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: normalizeWidth(15),
      paddingVertical: normalizeHeight(10),
      borderBottomWidth: myTheme.boxBorderWidth2nd,
      borderBottomColor: myTheme.lineBorderColor,
    },
    
    searchInput: {
      flex: 1,
      paddingTop: normalizeHeight(10),
      paddingBottom: normalizeHeight(10),
      paddingLeft: normalizeWidth(15),
      paddingRight: normalizeWidth(15),
    },

    toggleIconButton: {
      paddingTop: normalizeHeight(5),
      paddingBottom: normalizeHeight(5),
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      backgroundColor: myTheme.button2nd,
      borderRadius: SHARED.borderRadius2nd,
      marginLeft:  normalizeWidth(5),
    },

    activeIconButton: {
      backgroundColor: myTheme.button1st,
    },


    // ProductItem
    productCardLandscape: {
      alignItems: 'flex-start', // Ensures the items align to the top
      justifyContent: 'flex-start', // Align the content to the top-left
      marginVertical: normalizeHeight(8),
      paddingTop: normalizeHeight(20),
      paddingBottom: normalizeHeight(10),
      paddingLeft: normalizeWidth(15),
      paddingRight: normalizeWidth(15),
      backgroundColor: myTheme.cardBackground,
      borderWidth: myTheme.boxBorderWidth,
      borderColor: myTheme.borderColorGray,
    },
  
    featuredProductCard: {
      width: normalizeWidth(SHARED.halfScreen),
      marginRight:  normalizeWidth(15),
      marginLeft:  normalizeWidth(4),
    },
    postedProductCard: {
      marginHorizontal: 0,
    },
    productInfo: {
      flex: 1,
      //paddingRight: normalizeWidth(10),
      alignItems: 'flex-start', // Ensures child elements are aligned to the top-left
      justifyContent: 'flex-start', // Forces content to start at the top
    },
   
    productImageWrapper: {
      justifyContent: 'center', // Centers the Image vertically
      alignItems: 'center', // Centers the Image horizontally
      width: '100%',
      height: normalizeHeight(80),
      backgroundColor: myTheme.buttonBorder1st, // Background color for the wrapper
      borderRadius: SHARED.borderRadius, 
    },
    productImage: {
      width: '100%', // Slightly smaller than the wrapper to create padding
      height: '100%', // Adjusted height
      resizeMode: 'cover', // Ensures the image fills the space proportionally
      borderRadius: SHARED.borderRadius, 
    },

    imageHeightS: {
      height: normalizeHeight(70),
    },

    imageHeightL: {
      height: normalizeHeight(80),
    },

    iconOverlayContainer: {
      position: 'absolute',
      top: normalizeHeight(3),
      right: normalizeWidth(3),
      width: normalizeWidth(25),
      height: normalizeHeight(25),
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
      borderRadius: SHARED.borderRadius1st, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    threeDotsButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    threeDotsText: {
      fontSize: SHARED.fontL,
      color: myTheme.textLight,
      fontWeight: 'bold',
    },
    actionIcons: {
      justifyContent: 'space-between',
      marginTop: normalizeHeight(10),
    },

    
    buttonRowWidth: {
      width: "100%", 
    },

    buttonRowGap: {
      gap: normalizeWidth(35), 
    },

    // LiveSellingCard
    liveSellingCard: {
      alignItems: 'center',
      marginRight: normalizeWidth(15),
      marginVertical: normalizeHeight(8),
      paddingTop: normalizeHeight(20),
      paddingBottom: normalizeHeight(10),
      paddingLeft: normalizeWidth(15),
      paddingRight: normalizeWidth(15),
      backgroundColor: myTheme.cardBackground,
      borderWidth: myTheme.boxBorderWidth,
      borderColor: myTheme.borderColorGray,
    },
    videoIconContainer: {
      position: 'absolute',
      top: normalizeHeight(4),
      right: normalizeWidth(6),
    },
    redDot: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: normalizeWidth(7),
      height: normalizeHeight(7),
      backgroundColor: myTheme.onlineDot,
      borderRadius: 4,
      borderWidth: 1,
      borderColor:  myTheme.onlineDotBorder,
    },
    liveIconWrapper: {
      justifyContent: 'center', // Centers the Image vertically
      alignItems: 'center', // Centers the Image horizontally
      width: normalizeWidth(45),
      height:  normalizeHeight(45),
      backgroundColor: myTheme.buttonBorder1st,
      borderRadius: 50, // Optional: Makes the wrapper circular if width and height are equal
    },
    liveSellingImage: {
      width: 45, // Set desired image width
      height: 45, // Set desired image height
      borderRadius: 40, // Makes the image circular if width and height are equal
      resizeMode: 'cover', // Ensures the image fills the space proportionally
    },
    liveSellingInfo: {
        justifyContent: 'center', // Vertically center content
        alignItems: 'center', // Horizontally center content
    },
    liveSellingName: {
      fontSize: SHARED.fontS,
      fontWeight: 'bold',
      color: myTheme.textGray,
    },
    liveSellingTitle: {
      fontSize: SHARED.fontXS,
      color: myTheme.textBlur,
    },


    // CategoryCard
    categoryCard: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: normalizeHeight(10),
      marginBottom: normalizeHeight(10),
      marginLeft: normalizeWidth(10),
      marginRight: normalizeWidth(10),
      paddingTop: normalizeHeight(15),
      paddingBottom: normalizeHeight(15),
      paddingLeft: normalizeWidth(15),
      paddingRight: normalizeWidth(15),
      backgroundColor: myTheme.cardBackground,
      borderWidth: myTheme.boxBorderWidth,
      borderColor: myTheme.borderColorGray,
    },
    categoryImage: {
      width: normalizeWidth(140),
      height: normalizeHeight(100),
      borderRadius: SHARED.borderRadius,
      marginBottom: normalizeHeight(10),
    },
    categoryInfo: {
      alignItems: 'center',
      flex: 1,
    },
    categoryName: {
      fontSize: SHARED.fontM,
      fontWeight: 'bold',
      color: myTheme.text2nd,
      marginBottom: normalizeHeight(5),
      textAlign: 'center',
    },
    categoryDescription: {
      fontSize: SHARED.fontS,
      color: myTheme.textGray,
      textAlign: 'center',
      marginBottom:  normalizeHeight(10),
      lineHeight:  normalizeHeight(16),
    },
    categoryDetails: {
      width: '100%',
      marginTop: normalizeHeight(2),
    },


    // CategoryDetailScreen
    subcategoryList: {
      paddingTop: normalizeHeight(10),
    },
    subcategoryCard: {
      alignItems: 'center',
      paddingTop: normalizeHeight(15),
      paddingBottom: normalizeHeight(15),
      paddingLeft: normalizeWidth(15),
      paddingRight: normalizeWidth(15),
      marginVertical: normalizeHeight(8),
      borderRadius: SHARED.borderRadius2nd,
      backgroundColor: myTheme.cardBackground,
      borderWidth: myTheme.boxBorderWidth,
      borderColor: myTheme.borderColorGray,
    },

    subcategoryImage: {
      width: normalizeWidth(80),
      height: normalizeHeight(80),
      borderRadius: SHARED.borderRadius,
      marginRight: normalizeWidth(15),
    },
    subcategoryContent: {
      flex: 1,
    },
    subcategoryName: {
      fontSize: SHARED.fontM,
      fontWeight: 'bold',
      color: myTheme.text2nd,
    },
    subcategoryDescription: {
      fontSize: SHARED.fontS,
      color: myTheme.textGray,
      marginTop: normalizeWidth(2),
    },
    productCountBadge: {
      marginTop: normalizeHeight(5),
      alignSelf: 'flex-start',
      backgroundColor: '#FFD700', // Gold background for the badge
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 10,
    },
    productList: { 
      paddingTop: normalizeHeight(10),
      paddingBottom: normalizeHeight(10),
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
    },


    // DetailScreen
    saleBanner: {
      position: 'absolute',
      top: 0,
      width: '100%',
      backgroundColor: 'red',
      paddingTop: normalizeHeight(5),
      paddingBottom: normalizeHeight(5),
      paddingLeft: normalizeWidth(5),
      paddingRight: normalizeWidth(5),
      zIndex: 1,
      alignItems: 'center',
    },

    bannerImageWrapper: {
      marginTop: normalizeHeight(10),
      width: '100%',
      height: normalizeHeight(200),
      backgroundColor: "red",
      borderRadius: SHARED.borderRadius2nd, // Rounded corners
      overflow: 'hidden', // Ensures child elements are clipped
    },
    bannerContentImage: {
      width: '100%',
      height: '100%',
      borderRadius: SHARED.borderRadius2nd, // Rounded corners for the image
      resizeMode: 'cover', // Ensures the image fills the container while maintaining aspect ratio
    },
    
    priceContainer: {
      position: 'absolute',
      bottom: normalizeHeight(10),
      right: normalizeHeight(10),
      paddingTop: normalizeHeight(5),
      paddingBottom: normalizeHeight(1),
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderWidth: myTheme.boxBorderWidth,
      borderColor: myTheme.borderColorDark,
      borderRadius: 5,
      zIndex: 2,
    },

    selectedReactionWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    selectedReactionText: {
      fontSize: SHARED.fontXxL,
      color: myTheme.textGray,
    },

    reactionBarSection: {
      paddingHorizontal: normalizeWidth(16),
      alignItems: 'center',
      marginBottom: normalizeHeight(5),
    },

    commentSection: {
      //paddingHorizontal: normalizeWidth(10),
      marginBottom: normalizeHeight(10),
    },
    commentsList: {
      //paddingHorizontal: normalizeWidth(10),
    },
    commentContainer: {
      paddingTop: normalizeHeight(15),
      paddingBottom: normalizeHeight(15),
      paddingLeft: normalizeWidth(15),
      paddingRight: normalizeWidth(15),
      borderRadius: SHARED.borderRadius,
      borderColor: myTheme.lineBorderColor,
      borderWidth: myTheme.boxBorderWidth2nd,
      marginBottom: normalizeHeight(10),
      position: 'relative',
    },
    userImage: {
      width: normalizeWidth(30),
      height: normalizeWidth(30),
      borderRadius: 20,
    },
    commentWrapper: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      position: 'relative',
      paddingRight: normalizeWidth(40),
      marginBottom: normalizeHeight(10),
    },
    commentTextWrapper: {
      lineHeight: normalizeHeight(18),
    },
    timeAndReactionWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: normalizeHeight(5),
    },
    replyContainer: {
      marginLeft: normalizeWidth(15),
      marginTop: normalizeHeight(5),
      paddingLeft: normalizeWidth(10),
    },
    replyInputWrapper: {
      marginLeft: normalizeWidth(-15),
      marginRight: normalizeWidth(-15),
      marginTop: normalizeHeight(10),
    },

  });
};
