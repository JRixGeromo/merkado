export interface ThemeType {
  textPrimary: string;
  textSecondary: string;
  textPlaceHolderInfo: string;
  textDisabled: string;
  textDark: string;
  textBlack: string;
  textLight: string;
  textHighlight: string;
  textLink: string;
  textGray: string;

  borderColorPrimary: string;
  borderColorSecondary: string;
  borderColorGray: string;
  borderColorDark: string;

  fullBackgrounColor: string;
  fullContainerBackgrounColor: string;
  formBackgrounColor: string;

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
  buttonDark: string;
  buttonBlack: string;
  buttonLight: string;
  buttonHighlight: string;
  buttonLink: string;
  buttonGray: string;
  buttonCancel: string;
  buttonClose: string;

  buttonBorderPrimary: string;
  buttonBorderBlack: string;
  buttonBorderGray: string;
  buttonBorderLight: string;

  tabBarBackgroundColor: string;
  commentBackgroundColor: string;

  iconColorPrimary: string;
  iconColorSecondary: string;
  iconColorSmileys: string;
  iconColorGray: string;

  cardBackground: string;
  modalOverlay: string;
  loader: string;
  lineBorderColor: string;

  headingFont: string;
  bodyFont: string;
  bodyFontSlim: string;
  buttonFont: string;
  tabFont: string;

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
  textLink: '#38b000',
  textGray: '#8d99ae',

  borderColorPrimary: '#4CAF50',
  borderColorSecondary: '#000000',
  borderColorGray: '#8d99ae',
  borderColorDark: '#343a40',

  fullBackgrounColor: '#edede9',
  fullContainerBackgrounColor: '#ffffff',
  formBackgrounColor: '#ebebeb',

  googleButtonColor: '#4285F4',
  facebookButtonColor: '#8d99ae',
  inputBackgroundColor: '#d6d6d6',

  buttonPrimary: '#4CAF50',
  buttonSecondary: '#ffffff',
  buttonSuccess: '#8ac926',
  buttonInfo: '#184e77',
  buttonWarning: '#fb6107',
  buttonError: '#ba181b',
  buttonDanger: '#ba181b',
  buttonDisabled: '#b8bdb5',
  buttonDark: '#5e503f',
  buttonBlack: '#000000',
  buttonLight: '#ffffff',
  buttonHighlight: '#f9c74f',
  buttonLink: '#38b000',
  buttonGray: '#8d99ae',
  buttonCancel: '#e6e6ea',
  buttonClose: '#343a40',

  buttonBorderPrimary: '#4CAF50',
  buttonBorderBlack: '#393d3f',
  buttonBorderGray: '#e6e6ea',
  buttonBorderLight: '#ffffff',

  tabBarBackgroundColor: '#ffffff',
  commentBackgroundColor: '#ffffff',

  iconColorPrimary: '#7cb518',
  iconColorSecondary: '#f6aa1c',
  iconColorSmileys: '#fcbf49',
  iconColorGray: '#6c757d',

  cardBackground: '#ffffff',
  modalOverlay: 'rgba(255, 255, 255, 0.3)',
  loader: '#ffffff',
  lineBorderColor: '#cad2c5',

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
  textDark: '#e6e6e9',
  textBlack: '#000000',
  textLight: '#ffffff',
  textHighlight: '#ff3f00',
  textLink: '#38b000',
  textGray: '#8d99ae',

  borderColorPrimary: '#7cb518',
  borderColorSecondary: '#dee2e6',
  borderColorGray: '#8d99ae',
  borderColorDark: '#e6e6e9',

  fullBackgrounColor: '#000000',
  fullContainerBackgrounColor: '#000000',
  formBackgrounColor: '#2f2f2f',

  googleButtonColor: '#4285F4',
  facebookButtonColor: '#3b5998',
  inputBackgroundColor: '#000',

  buttonPrimary: '#606c38',
  buttonSecondary: '#ffffff',
  buttonSuccess: '#8ac926',
  buttonInfo: '#184e77',
  buttonWarning: '#fb6107',
  buttonError: '#ba181b',
  buttonDanger: '#ba181b',
  buttonDisabled: '#b8bdb5',
  buttonDark: '#5e503f',
  buttonBlack: '#000000',
  buttonLight: '#ffffff',
  buttonHighlight: '#f9c74f',
  buttonLink: '#38b000',
  buttonGray: '#e6e6ea',
  buttonCancel: '#e6e6ea',
  buttonClose: '#343a40',

  buttonBorderPrimary: '#4CAF50',
  buttonBorderBlack: '#393d3f',
  buttonBorderGray: '#e6e6ea',
  buttonBorderLight: '#ffffff',

  tabBarBackgroundColor: '#333533',
  commentBackgroundColor: '#161616',

  iconColorPrimary: '#7cb518',
  iconColorSecondary: '#f6aa1c',
  iconColorSmileys: '#fcbf49',
  iconColorGray: '#6c757d',

  cardBackground: '#444444',
  modalOverlay: 'rgba(255, 255, 255, 0.3)',
  loader: '#ffffff',
  lineBorderColor: '#000000',

  headingFont: 'Poppins-Bold',
  bodyFont: 'Roboto-Regular',
  bodyFontSlim: 'RobotoCondensed-Light',
  buttonFont: 'Montserrat-Bold',
  tabFont: 'RobotoCondensed-Light',

  alternativeFont1: 'QwitcherGrypen-Regular',
  alternativeFont2: 'LondrinaSketch-Regular',
  alternativeFont3: 'GreatVibes-Regular',
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
