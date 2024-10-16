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

  fullBackgrounColor: string;
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

  
  buttonBorderPrimary: string;
  buttonBorderBlack: string;
  buttonBorderGray: string;
  buttonBorderLight: string;

  tabBarBackgroundColor: string;
  iconColor: string;
  cardBackground: string;
  modalOverlay: string;
  loader: string;
  
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
  textGray: '#38b000',

  fullBackgrounColor: '#eaeaea',
  googleButtonColor: '#4285F4',
  facebookButtonColor: '#8d99ae',
  inputBackgroundColor: '#d6d6d6',

  buttonPrimary: '#4CAF50',
  buttonSecondary: '#ffffff',
  buttonSuccess: '#8ac926',
  buttonInfo: '#00a8e8',
  buttonWarning: '#fb6107',
  buttonError: '#ba181b',
  buttonDanger: '#ba181b',
  buttonDisabled: '#b8bdb5',
  buttonDark: '#393d3f',
  buttonBlack: '#000000',
  buttonLight: '#ffffff',
  buttonHighlight: '#f9c74f',
  buttonLink: '#38b000',
  buttonGray: '#e6e6ea',

  buttonBorderPrimary: '#4CAF50',
  buttonBorderBlack: '#393d3f',
  buttonBorderGray: '#e6e6ea',
  buttonBorderLight: '#ffffff',
  
  tabBarBackgroundColor: '#ffffff',
  iconColor: "#7cb518",
  cardBackground: '#ffffff',
  modalOverlay: 'rgba(255, 255, 255, 0.3)',
  loader: "#ffffff",
  
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
  textPrimary: '#f5f1ed',
  textSecondary: '#dee2e6',
  textPlaceHolderInfo: '#9999a1',
  textDisabled: '#ced4da',
  textDark: '#e6e6e9',
  textBlack: '#000000',
  textLight: '#ffffff',
  textHighlight: '#ff3f00',
  textLink: '#38b000',
  textGray: '#8d99ae',

  fullBackgrounColor: '#000000',
  googleButtonColor: '#4285F4',
  facebookButtonColor: '#3b5998',
  inputBackgroundColor: '#2d2d2d',

  buttonPrimary: '#4CAF50',
  buttonSecondary: '#ffffff',
  buttonSuccess: '#8ac926',
  buttonInfo: '#00a8e8',
  buttonWarning: '#fb6107',
  buttonError: '#ba181b',
  buttonDanger: '#ba181b',
  buttonDisabled: '#b8bdb5',
  buttonDark: '#393d3f',
  buttonBlack: '#000000',
  buttonLight: '#ffffff',
  buttonHighlight: '#f9c74f',
  buttonLink: '#38b000',
  buttonGray: '#e6e6ea',
  
  buttonBorderPrimary: '#4CAF50',
  buttonBorderBlack: '#393d3f',
  buttonBorderGray: '#e6e6ea',
  buttonBorderLight: '#ffffff',

  tabBarBackgroundColor: '#333533',
  iconColor: "#7cb518",
  cardBackground: '#444444',
  modalOverlay: 'rgba(255, 255, 255, 0.3)',
  loader: "#ffffff",
  
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
