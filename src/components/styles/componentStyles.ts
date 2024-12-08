import { StyleSheet, Platform, ViewStyle } from 'react-native';
import {
  normalizeFontSize,
  normalizeHeight,
  normalizeWidth,
} from '../../utils/responsive'; // Import responsive utilities
import { SHARED } from '../../styles/baseStyles';
import { theme } from '../../styles/theme'; // Make sure this path is correct

// Dynamically generated styles based on theme
export const compStyles = (currentTheme: 'light' | 'dark' | 'femme') => {
  const myTheme = theme[currentTheme]; // Dynamically select light or dark theme

  return StyleSheet.create({
    splashContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: myTheme.cardBackground,
    },
    splashText: {
      fontSize: SHARED.fontXxL,
      fontWeight: 'bold',
      color: myTheme.text1st,
      marginTop: normalizeHeight(10),
    },
    commentFormContainer: {
      paddingTop: normalizeHeight(12),
      paddingBottom: normalizeHeight(12),
      paddingLeft: normalizeWidth(12),
      paddingRight: normalizeWidth(12),
    },
    inputWrapper: {
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
    contentImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },

    // Portrait
    contentBoxPortrait: {
      backgroundColor: myTheme.cardBackground,
      width: normalizeWidth(120),
      height: normalizeHeight(210),
      marginRight: normalizeWidth(10),
      paddingBottom: 0,
      marginBottom: 0,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: myTheme.lineBorderColorLight,
      borderWidth: myTheme.boxBorderWidth2nd,
      borderRadius: SHARED.borderRadius2nd,
      overflow: 'hidden',
    },
    cardImageWrapper: {
      width: '100%',
      flex: 0.47,
      position: 'relative',
    },
    contentContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      flex: 0.38,
    },
    buttonContainer: {
      flex: 0.15,
    },

    productImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    goFullScreenButton: {
      position: 'absolute',
      top: normalizeHeight(2),
      right: normalizeWidth(2),
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      padding: 5,
      borderRadius: 0,
    },
    goLiveShowButton: {
      position: 'absolute',
      bottom: normalizeHeight(2),
      right: normalizeWidth(2),
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      padding: 5,
      borderRadius: 15,
    },
    productName: {
      fontSize: SHARED.fontS,
      color: myTheme.text2nd,
      fontFamily: myTheme.bodyFont,
      fontWeight: 'bold',
      marginTop: normalizeHeight(3),
    },
    productPrice: {
      fontSize: SHARED.fontM,
      color: myTheme.textHighlight,
      fontFamily: myTheme.bodyFont,
      fontWeight: 'bold',
      marginTop: 0,
    },
    storeLocation: {
      fontSize: SHARED.fontXS,
      color: myTheme.text2nd,
      fontFamily: myTheme.bodyFontSlim,
    },
    modalTitle: {
      fontSize: SHARED.fontL,
      fontWeight: 'bold',
      color: myTheme.text1st,
      marginBottom: 15,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: normalizeHeight(2),
      borderRadius: SHARED.borderRadius,
      backgroundColor: myTheme.cardBackground,
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
      backgroundColor: myTheme.cardBackground,
    },
    dropdownOption: {
      paddingTop: normalizeHeight(10),
      paddingBottom: normalizeHeight(10),
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      borderBottomWidth: 1,
      borderColor: myTheme.text1st,
    },
    modalOverlay: {
      backgroundColor: myTheme.modalOverlay,
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalText: {
      fontSize: SHARED.fontL,
      color: myTheme.text1st,
      fontFamily: myTheme.bodyFont,
    },
    dropdownMenu: {
      backgroundColor: myTheme.cardBackground,
      borderRadius: 10,
      paddingTop: normalizeHeight(10),
      paddingBottom: normalizeHeight(10),
      paddingLeft: normalizeWidth(10),
      paddingRight: normalizeWidth(10),
      width: normalizeWidth(220),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
    dropdownItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: normalizeHeight(10),
      borderBottomWidth: 1,
      borderColor: myTheme.lineBorderColor,
    },
    dropdownText: {
      color: myTheme.text2nd,
      fontFamily: myTheme.bodyFont,
      marginLeft: normalizeWidth(10),
    },
    slideModal: {
      justifyContent: 'flex-end',
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
    slideModalContent: {
      backgroundColor: myTheme.cardBackground,
      padding: normalizeHeight(20),
      borderTopLeftRadius: normalizeHeight(15),
      borderTopRightRadius: normalizeHeight(15),
      minHeight: '60%',
      maxHeight: '80%',
    },
    slideModalCloseButton: {
      alignSelf: 'flex-end',
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
  });
};
