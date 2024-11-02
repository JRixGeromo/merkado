export interface ThemeType {
  textPrimary: string;
  textSecondary: string;
  textPlaceHolderInfo: string;
  textDisabled: string;
  textDark: string;
  textBlack: string;
  textLight: string;
  textHighlight: string;
  textPriceBanner: string;
  textLink: string;
  textGray: string;
  textBlur: string;

  borderColorPrimary: string;
  borderColorSecondary: string;
  borderColorGray: string;
  borderColorDark: string;

  fullBackgroundColor: string;
  fullContainerBackgroundColor: string;
  formBackgroundColorPrimary: string;
  formBackgroundColorSecondary: string;

  googleButtonColor: string;
  facebookButtonColor: string;
  inputBackgroundColor: string;

  buttonPrimary: string;
  buttonSecondary: string;
  buttonSuccess: string;
  buttonInfo: string;
  buttonWarning: string;
  buttonError: string;
  buttonDanger: string;
  buttonDisabled: string;
  buttonAction: string;
  buttonHighlight: string;
  buttonLink: string;
  buttonGray: string;
  buttonDark: string;
  buttonCancel: string;
  buttonClose: string;

  buttonBorderPrimary: string;
  buttonBorderBlack: string;
  buttonBorderGray: string;
  buttonBorderLight: string;

  tabHeaderBackgroundColor: string;
  tabBarBackgroundColor: string;
  headerBorderBottomColor: string;
  commentBackgroundColor: string;

  iconColorPrimary: string;
  iconColorSecondary: string;
  iconColorSmileys: string;
  iconColorGray: string;
  iconColorLight: string;

  cardBackground: string;
  modalOverlay: string;
  loader: string;
  lineBorderColor: string;
  lineBorderColorLight: string;

  headingFont: string;
  bodyFont: string;
  bodyFontSlim: string;
  buttonFont: string;
  tabFont: string;

  switchInactive: string;
  switchActive: string;
  switchThumbInactive: string;
  switchThumbActive: string;
  shadowElevation: number;

  alternativeFont1: string;
  alternativeFont2: string;
  alternativeFont3: string;
}

const lightTheme: ThemeType = {
  textPrimary: '#4CAF50',
  textSecondary: '#000000',
  textPlaceHolderInfo: '#9caea9',
  textDisabled: '#ced4da',
  textDark: '#343a40',
  textBlack: '#000000',
  textLight: '#ffffff',
  textHighlight: '#800e13',
  textPriceBanner: '#ffa737',
  textLink: '#38b000',
  textGray: '#4f5d75',
  buttonDark: '#495057',
  textBlur: '#adb5bd',

  borderColorPrimary: '#4CAF50',
  borderColorSecondary: '#000000',
  borderColorGray: '#8d99ae',
  borderColorDark: '#343a40',

  cardBackground: '#f7ede2',
  fullBackgroundColor: '#ffffff',
  fullContainerBackgroundColor: '#ffffff',
  formBackgroundColorPrimary: '#f7ede2',
  formBackgroundColorSecondary: '#f7ede2',

  googleButtonColor: '#4285F4',
  facebookButtonColor: '#8d99ae',
  inputBackgroundColor: '#ffffff',

  buttonPrimary: '#4CAF50',
  buttonSecondary: '#ffffff',
  buttonSuccess: '#8ac926',
  buttonInfo: '#184e77',
  buttonWarning: '#fb6107',
  buttonError: '#ba181b',
  buttonDanger: '#ba181b',
  buttonDisabled: '#b8bdb5',
  buttonAction: '#ffffff',
  buttonHighlight: '#f9c74f',
  buttonLink: '#38b000',
  buttonGray: '#495057',
  buttonCancel: '#e6e6ea',
  buttonClose: '#343a40',

  buttonBorderPrimary: '#4CAF50',
  buttonBorderBlack: '#393d3f',
  buttonBorderGray: '#e6e6ea',
  buttonBorderLight: '#ffffff',

  tabHeaderBackgroundColor: '#ffffff',
  tabBarBackgroundColor: '#ffffff',
  headerBorderBottomColor: '#dddddd',
  commentBackgroundColor: '#f7ede2',

  iconColorPrimary: '#7cb518',
  iconColorSecondary: '#f6aa1c',
  iconColorSmileys: '#fcbf49',
  iconColorGray: '#6c757d',
  iconColorLight: '#ced4da',

  modalOverlay: 'rgba(255, 255, 255, 0.3)',
  loader: '#ffffff',
  lineBorderColor: '#cad2c5',
  lineBorderColorLight: '#788585',
  
  switchInactive: '#D1D5DB',         // Light gray for inactive track, subtle on white background
  switchActive: '#4CAF50',           // Green for active background track (suggests "on")
  switchThumbInactive: '#9CA3AF',    // Medium gray for inactive thumb
  switchThumbActive: '#FFFFFF',      // White for active thumb, maintains the light theme feel
  
  shadowElevation: 3,      // White for active thumb, contrasts with green

  headingFont: 'Poppins-Bold',
  bodyFont: 'Roboto-Regular',
  bodyFontSlim: 'RobotoCondensed-Light',
  buttonFont: 'Montserrat-Bold',
  tabFont: 'RobotoCondensed-Light',

  alternativeFont1: 'QwitcherGrypen-Regular',
  alternativeFont2: 'LondrinaSketch-Regular',
  alternativeFont3: 'GreatVibes-Regular',
};

const darkTheme: ThemeType = {
  textPrimary: '#7cb518',
  textSecondary: '#dee2e6',
  textPlaceHolderInfo: '#9999a1',
  textDisabled: '#ced4da',
  textDark: '#66666e',
  textBlack: '#000000',
  textLight: '#ffffff',
  textHighlight: '#f2bb05',
  textPriceBanner: '#ffa737',
  textLink: '#38b000',
  textGray: '#8d99ae',
  textBlur: '#adb5bd',

  borderColorPrimary: '#7cb518',
  borderColorSecondary: '#dee2e6',
  borderColorGray: '#8d99ae',
  borderColorDark: '#e6e6e9',

  cardBackground: '#1b2021',
  fullBackgroundColor: '#161a1d',
  fullContainerBackgroundColor: '#161a1d',
  formBackgroundColorPrimary: '#000000',
  formBackgroundColorSecondary: '#161a1d',

  googleButtonColor: '#4285F4',
  facebookButtonColor: '#3b5998',
  inputBackgroundColor: '#161a1d',

  buttonPrimary: '#4f772d',
  buttonSecondary: '#212529',
  buttonSuccess: '#8ac926',
  buttonInfo: '#184e77',
  buttonWarning: '#fb6107',
  buttonError: '#ba181b',
  buttonDanger: '#a50104',
  buttonDisabled: '#b8bdb5',
  buttonAction: '#343a40',
  buttonHighlight: '#f9c74f',
  buttonLink: '#38b000',
  buttonGray: '#495057',
  buttonDark: '#252422',
  
  buttonCancel: '#e6e6ea',
  buttonClose: '#343a40',

  buttonBorderPrimary: '#4CAF50',
  buttonBorderBlack: '#393d3f',
  buttonBorderGray: '#e6e6ea',
  buttonBorderLight: '#ffffff',

  tabHeaderBackgroundColor: '#222725',
  tabBarBackgroundColor: '#222725',
  headerBorderBottomColor: '#444444',
  commentBackgroundColor: '#000000',

  iconColorPrimary: '#7cb518',
  iconColorSecondary: '#f6aa1c',
  iconColorSmileys: '#fcbf49',
  iconColorGray: '#6c757d',
  iconColorLight: '#ced4da',

  modalOverlay: 'rgba(255, 255, 255, 0.3)',
  loader: '#ffffff',
  lineBorderColor: '#4a4e69',
  lineBorderColorLight: '#9caea9',

  switchInactive: '#e0e0e0',         // Light gray for inactive background track
  switchActive: '#4CAF50',           // Green for active background track (suggests "on")
  switchThumbInactive: '#9E9E9E',    // Dark gray for inactive thumb
  switchThumbActive: '#FFFFFF',      // White for active thumb, contrasts with green

  shadowElevation: 1,

  headingFont: 'Poppins-Bold',
  bodyFont: 'Roboto-Regular',
  bodyFontSlim: 'RobotoCondensed-Light',
  buttonFont: 'Montserrat-Bold',
  tabFont: 'Montserrat-Meduim',

  alternativeFont1: 'QwitcherGrypen-Regular',
  alternativeFont2: 'LondrinaSketch-Regular',
  alternativeFont3: 'GreatVibes-Regular',
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
