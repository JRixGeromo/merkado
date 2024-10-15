export interface ThemeType {
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  error: string;
  danger: string;
  disabled: string;
  dark: string;
  black: string;
  light: string;
  highlight: string;
  link: string;

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
  
  headingFont: string; // New: Font for headers and titles
  bodyFont: string; // New: Font for body text
  bodyFontSlim: string;
  buttonFont: string; // New: Font for buttons
  alternativeFont1: string; // New: Font for buttons
  alternativeFont2: string; // New: Font for buttons
  alternativeFont3: string; // New: Font for buttons
}

const lightTheme: ThemeType = {
  primary: '#4CAF50',
  secondary: '#dee2e6',
  success: '#38b000',
  info: '#219ebc',
  warning: '#fb8500',
  error: '#c1121f',
  danger: '#fcbf49',
  disabled: '#ced4da',
  dark: '#343a40',
  black: '#000000',
  light: '#ffffff',
  highlight: '#fcbf49',
  link: '#38b000',

  googleButtonColor: '#4285F4',
  facebookButtonColor: '#3b5998',
  backgroundColor: '#fff',
  buttonBackgroundColor: '#4CAF50',
  borderColor: '#4CAF50',
  iconColor: "#70e000",
  inputBackgroundColor: '#edeec9',
  cardBackground: '#f8f9fa',
  modalOverlay: 'rgba(0, 0, 0, 0.5)',
  loader: "#000",
  
  headingFont: 'Poppins-Bold', // Bold font for headers
  bodyFont: 'Roboto-Regular',  // Regular font for body
  bodyFontSlim: 'RobotoCondensed-Light',  // Bold font for screen title
  buttonFont: 'Montserrat-Bold', // Bold font for buttons
  alternativeFont1: 'QwitcherGrypen-Regular', // Bold font for buttons
  alternativeFont2: 'LondrinaSketch-Regular', // Bold font for buttons
  alternativeFont3: 'GreatVibes-Regular', // Bold font for buttons
};

const darkTheme: ThemeType = {

  primary: '#4CAF50',
  secondary: '#dee2e6',
  success: '#38b000',
  info: '#219ebc',
  warning: '#fb8500',
  error: '#c1121f',
  danger: '#fcbf49',
  disabled: '#ced4da',
  dark: '#343a40',
  black: '#000000',
  light: '#ffffff',
  highlight: '#fcbf49',
  link: '#38b000',

  googleButtonColor: '#4285F4',
  facebookButtonColor: '#3b5998',
  backgroundColor: '#333',
  buttonBackgroundColor: '#008000',
  borderColor: '#7cb518',
  iconColor: "#7cb518",
  inputBackgroundColor: '#000',
  cardBackground: '#444',
  modalOverlay: 'rgba(255, 255, 255, 0.3)',
  loader: "#fff",
  
  headingFont: 'Poppins-Bold', // Bold font for headers
  bodyFont: 'Roboto-Regular',  // Regular font for body
  bodyFontSlim: 'RobotoCondensed-Light',  // Bold font for screen title
  buttonFont: 'Montserrat-Bold', // Bold font for buttons
  alternativeFont1: 'QwitcherGrypen-Regular', // Bold font for buttons
  alternativeFont2: 'LondrinaSketch-Regular', // Bold font for buttons
  alternativeFont3: 'GreatVibes-Regular', // Bold font for buttons
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
