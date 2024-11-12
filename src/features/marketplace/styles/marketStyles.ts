import { StyleSheet, Platform, ViewStyle } from 'react-native';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../../../utils/responsive'; // Import responsive utilities
import { SHARED } from '../../../styles/baseStyles';
import { theme } from '../../../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const marketStyles = (currentTheme: 'light' | 'dark' | 'feminine') => {
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
  
    // SearchBarWithToggle 
    searchContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: normalizeWidth(15),
      paddingVertical: normalizeHeight(10),
      borderBottomWidth: SHARED.borderWidth,
      borderBottomColor: selectedTheme.lineBorderColor,
    },
    
    searchInput: {
      flex: 1,
      backgroundColor: selectedTheme.inputBackgroundColor,
      paddingTop: normalizeHeight(5),
      paddingBottom: normalizeHeight(5),
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      borderRadius: SHARED.borderRadiusSecondary,
      fontSize: SHARED.fontS,
      marginRight: normalizeWidth(10),
    },

    toggleIconButton: {
      paddingTop: normalizeHeight(5),
      paddingBottom: normalizeHeight(5),
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      backgroundColor: selectedTheme.buttonSecondary,
      borderRadius: SHARED.borderRadiusSecondary,
      marginLeft:  normalizeWidth(5),
    },

    activeIconButton: {
      backgroundColor: selectedTheme.buttonInfo,
    },

    iconText: {
      fontSize: SHARED.fontM,
      color: selectedTheme.textDark,
    },
    activeIconText: {
      color: selectedTheme.textLight,
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
      backgroundColor: selectedTheme.cardBackground,
    },
  
    featuredProductCard: {
      width: normalizeWidth(275),
      marginRight:  normalizeWidth(15),
      marginLeft:  normalizeWidth(4),
    },
    postedProductCard: {
      marginHorizontal: 0,
    },

    newBadgeContainer: {
      position: 'absolute',
      backgroundColor: '#4CAF50', // Green background
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
    productInfo: {
      flex: 1,
      paddingRight: normalizeWidth(10),
      alignItems: 'flex-start', // Ensures child elements are aligned to the top-left
      justifyContent: 'flex-start', // Forces content to start at the top
    },
    productName: { fontSize: SHARED.fontM, color: selectedTheme.textSecondary },
    vendorInfo: { fontSize: SHARED.fontXS, color: selectedTheme.textGray, marginBottom:  normalizeHeight(5) },
    priceRow: { alignItems: 'center', marginRight: normalizeWidth(10) },
   
    discountedPrice: {
      fontSize: SHARED.fontM,
      fontWeight: 'bold',
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

    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    productImage: {
      width: '100%',
      height: normalizeHeight(70),
      borderRadius:  SHARED.borderRadius,
      marginBottom: normalizeHeight(6),
    },

    featuredProductImage: {
      width: '100%',
      height: normalizeHeight(70),
    },

    iconOverlayContainer: {
      position: 'absolute',
      top: normalizeHeight(3),
      right: normalizeWidth(3),
      width: normalizeWidth(25),
      height: normalizeHeight(25),
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
      borderRadius: SHARED.borderRadiusPrimary, 
      justifyContent: 'center',
      alignItems: 'center',
    },

    threeDotsButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    threeDotsText: {
      fontSize: SHARED.fontL,
      color: selectedTheme.textLight,
      fontWeight: 'bold',
    },
  
    actionIcons: {
      justifyContent: 'space-between',
      marginTop: 10,
    },

    // badgesRow: {
    //   flexDirection: 'row',
    //   marginBottom: 5,
    //   gap: 8,
    // },
    
    // productDescription: { fontSize: 12, color: '#666', marginVertical: 5 },
    // vendorInfo: { fontSize: 10, color: '#777', marginBottom: 5 },

    // popularBadge: {
    //   backgroundColor: '#FF9800',
    //   color: '#fff',
    //   paddingHorizontal: 8,
    //   paddingVertical: 3,
    //   fontSize: 10,
    //   fontWeight: 'bold',
    //   borderRadius: 5,
    // },
    // newBadge: {
    //   backgroundColor: '#4CAF50',
    //   color: '#fff',
    //   paddingHorizontal: 8,
    //   paddingVertical: 3,
    //   fontSize: 10,
    //   fontWeight: 'bold',
    //   borderRadius: 5,
    // },

    // iconButton: {
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   backgroundColor: '#e0e0e0',
    //   borderRadius: 4,
    //   paddingLeft: 10,
    //   paddingRight: 10,
    //   paddingTop: 2,
    //   paddingBottom: 2,
    //   width: 60,
    //   marginRight: 10,
    // },
    // iconText: { fontSize: 12, color: 'gray' },
  
    // reactionRow: {
    //   flexDirection: 'row', // Arrange children in a row
    //   width: '100%', // Ensure it spans the full width
    // },
    // alignLeft: {
    //   alignItems: 'flex-start', // Align items to the left within the flex space
    // },
    // alignRight: {
    //   alignItems: 'flex-end', // Align items to the right within the flex space
    // },
  
    // ratingText: {
    //   fontSize: 12,
    //   color: '#aaa',
    //   fontWeight: 'bold',
    // },
    // reactionContainer: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    // },
    // reactionText: {
    //   fontSize: 12,
    //   color: '#aaa',
    //   fontWeight: 'bold',
    // },


  



    ////////////////////////
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
      color: selectedTheme.textGray,
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
      zIndex: 1,
      alignItems: 'center',
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
      borderWidth: SHARED.borderWidthSecondary,
      borderColor: selectedTheme.borderColorDark,
      borderRadius: 5,
      zIndex: 2,
    },
    reactionBarSection: {
      paddingHorizontal: normalizeWidth(16),
      alignItems: 'center',
      marginBottom: normalizeHeight(5),
    },
    commentSection: {
      paddingHorizontal: normalizeWidth(10),
      marginBottom: normalizeHeight(10),
    },
    commentContainer: {
      paddingTop: normalizeHeight(15),
      paddingBottom: normalizeHeight(15),
      paddingLeft: normalizeWidth(15),
      paddingRight: normalizeWidth(15),
      borderRadius: SHARED.borderRadius,
      borderColor: selectedTheme.lineBorderColor,
      borderWidth: SHARED.borderWidth,
      marginBottom: normalizeHeight(10),
      position: 'relative',
    },
    commentsList: {
      paddingHorizontal: normalizeWidth(10),
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
      marginLeft: -15,
      marginRight: -15,
      marginTop: normalizeHeight(10),
    },
    chatButton: {
      backgroundColor: selectedTheme.buttonDark,
    },
    cartButton: {
      backgroundColor: selectedTheme.buttonPrimary,
    },
  });
};
