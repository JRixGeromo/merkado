export interface ThemeType {
  primary: string;
  secondary: string;
  success: string;
  info: string;
  placeHolderInfo: string;
  warning: string;
  error: string;
  danger: string;
  disabled: string;
  dark: string;
  black: string;
  light: string;
  highlight: string;
  link: string;
  gray: string;
  
  fullBackgrounColor: string;
  googleButtonColor: string;
  facebookButtonColor: string;
  backgroundColor: string;
  buttonBackgroundColor: string;
  borderColor: string;
  iconColor: string;
  inputBackgroundColor: string;
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
  primary: '#4CAF50',
  secondary: '#000000',
  success: '#38b000',
  info: '#219ebc',
  placeHolderInfo: '#9caea9',
  warning: '#fb8500',
  error: '#c1121f',
  danger: '#fcbf49',
  disabled: '#ced4da',
  dark: '#343a40',
  black: '#000000',
  light: '#ffffff',
  highlight: '#9d0208',
  link: '#38b000',
  gray: '#e6e6ea',

  fullBackgrounColor: '#e0e1dd',
  googleButtonColor: '#4285F4',
  facebookButtonColor: '#3b5998',
  backgroundColor: '#fff',
  buttonBackgroundColor: '#4CAF50',
  borderColor: '#4CAF50',
  iconColor: "#70e000",
  inputBackgroundColor: '#edeec9',
  cardBackground: '#f8f9fa',
  modalOverlay: 'rgba(0, 0, 0, 0.5)',
  loader: "#000000",
  
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

  primary: '#f5f1ed',
  secondary: '#dee2e6',
  success: '#38b000',
  info: '#219ebc',
  placeHolderInfo: '#e2e8dd',
  warning: '#fb8500',
  error: '#c1121f',
  danger: '#fcbf49',
  disabled: '#ced4da',
  dark: '#343a40',
  black: '#000000',
  light: '#ffffff',
  highlight: '#fcbf49',
  link: '#38b000',
  gray: '#e6e6ea',

  fullBackgrounColor: '#000000',
  googleButtonColor: '#4285F4',
  facebookButtonColor: '#3b5998',
  backgroundColor: '#333',
  buttonBackgroundColor: '#008000',
  borderColor: '#e6e6e6',
  iconColor: "#7cb518",
  inputBackgroundColor: '#000000',
  cardBackground: '#444',
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
