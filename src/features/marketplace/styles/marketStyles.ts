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
  const selectedTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
 
    // MarketPlaceScreen
    liveSellingContainer: {
      marginBottom: normalizeHeight(20), // Add spacing from the section below
      marginLeft: normalizeWidth(5), // Add spacing from the section below
      paddingVertical: normalizeHeight(10), // Ensure padding around the section
      borderTopWidth: 1, // Add top border
      borderBottomWidth: 1, // Add bottom border
      borderColor: selectedTheme.borderColorLightGray, // Light gray border color
    },
    liveSellingList: {
      paddingHorizontal: normalizeWidth(10),
    },
    featuredList: {
      paddingHorizontal: 5,
    },
    recentlyPostedContainer: {
      marginTop: 10,
      marginHorizontal: 4,
    },

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
    productInfo: {
      flex: 1,
      paddingRight: normalizeWidth(10),
      alignItems: 'flex-start', // Ensures child elements are aligned to the top-left
      justifyContent: 'flex-start', // Forces content to start at the top
    },
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
      marginTop: normalizeHeight(10),
      gap: normalizeWidth(30),
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
      backgroundColor: selectedTheme.cardBackground,
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
      backgroundColor: selectedTheme.buttonDanger,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: 'white',
    },
    liveIconWrapper: {
      position: 'relative',
    },
    liveSellingImage: {
      width: normalizeWidth(45),
      height:  normalizeHeight(45),
      borderRadius: 25,
      marginRight: normalizeWidth(10),
    },
    liveSellingInfo: {
      flex: 1,
    },
    liveSellingName: {
      fontSize: SHARED.fontM,
      fontWeight: 'bold',
      color: selectedTheme.textSecondary,
    },
    liveSellingTitle: {
      fontSize: SHARED.fontXS,
      color: selectedTheme.textBlur,
    },


    // CategoryCard
    categoryCard: {
      flex: 1,
      marginTop: normalizeHeight(10),
      marginBottom: normalizeHeight(10),
      marginLeft: normalizeWidth(10),
      marginRight: normalizeWidth(10),
      paddingTop: normalizeHeight(15),
      paddingBottom: normalizeHeight(15),
      paddingLeft: normalizeWidth(15),
      paddingRight: normalizeWidth(15),
      backgroundColor: selectedTheme.cardBackground,
      alignItems: 'center',
      justifyContent: 'space-between',
      
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
      color: selectedTheme.textSecondary,
      marginBottom: normalizeHeight(5),
      textAlign: 'center',
    },
    categoryDescription: {
      fontSize: SHARED.fontS,
      color: selectedTheme.textGray,
      textAlign: 'center',
      marginBottom:  normalizeHeight(10),
      lineHeight:  normalizeHeight(16),
    },
    categoryDetails: {
      width: '100%',
      marginTop: normalizeHeight(10),
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
      borderRadius: SHARED.borderRadiusSecondary,
      backgroundColor: selectedTheme.cardBackground
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
      color: selectedTheme.textSecondary,
    },
    subcategoryDescription: {
      fontSize: SHARED.fontS,
      color: selectedTheme.textGray,
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
      width: '100%',
      height: normalizeHeight(200),
      resizeMode: 'cover',
    },
    
    bannerContentImage: {
      width: '100%',
      height: normalizeHeight(200),
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

    selectedReactionWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    selectedReactionText: {
      fontSize: SHARED.fontXxL,
      color: selectedTheme.textGray,
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
    commentsList: {
      paddingHorizontal: normalizeWidth(10),
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
