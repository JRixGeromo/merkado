export interface ThemeType {
  primary: string;
  secondary: string;
  linkText: string;
  paragraph: string;
  googleButtonColor: string;
  facebookButtonColor: string;
  textColor: string;
  backgroundColor: string;
  buttonTextColor: string;
  buttonBackgroundColor: string;
  borderColor: string;
  iconColor: string;
  placeholderTextColor: string;
  inputBackgroundColor: string;
  danger: string;
  cardBackground: string;
  linkColor: string;
  modalOverlay: string;
  loader: string;
  screenHeaderFont: string;
  tabFont: string;
  tabColor: string;
  headingFont: string; // New: Font for headers and titles
  bodyFont: string; // New: Font for body text
  buttonFont: string; // New: Font for buttons
  alternativeFont1: string; // New: Font for buttons
  alternativeFont2: string; // New: Font for buttons
  alternativeFont3: string; // New: Font for buttons
}

const lightTheme: ThemeType = {
  primary: '#4CAF50',
  secondary: '#fff',
  linkText: '#4CAF50',
  paragraph: '#000',
  googleButtonColor: '#4285F4',
  facebookButtonColor: '#3b5998',
  textColor: '#333',
  backgroundColor: '#fff',
  buttonTextColor: '#fff',
  buttonBackgroundColor: '#4CAF50',
  borderColor: '#4CAF50',
  iconColor: "#4CAF50",
  placeholderTextColor: '#999',
  inputBackgroundColor: '#cce3de',
  danger: '#ff4d4f',
  cardBackground: '#f8f9fa',
  linkColor: '#1E90FF',
  modalOverlay: 'rgba(0, 0, 0, 0.5)',
  loader: "#000",
  screenHeaderFont: 'Poppins-Regular',  // Bold font for headers
  tabFont: 'RobotoCondensed-Light',  // Bold font for screen title
  tabColor: "#000",
  headingFont: 'Poppins-Bold', // Bold font for headers
  bodyFont: 'Roboto-Regular',  // Regular font for body
  buttonFont: 'Montserrat-Bold', // Bold font for buttons
  alternativeFont1: 'QwitcherGrypen-Regular', // Bold font for buttons
  alternativeFont2: 'LondrinaSketch-Regular', // Bold font for buttons
  alternativeFont3: 'GreatVibes-Regular', // Bold font for buttons
};

const darkTheme: ThemeType = {
  primary: '#fff',
  secondary: '#7cb518',
  linkText: '#7cb518',
  paragraph: '#fff',
  googleButtonColor: '#4285F4',
  facebookButtonColor: '#3b5998',
  textColor: '#fff',
  backgroundColor: '#333',
  buttonTextColor: '#fff',
  buttonBackgroundColor: '#008000',
  borderColor: '#7cb518',
  iconColor: "#7cb518",
  placeholderTextColor: '#ccc',
  inputBackgroundColor: '#000',
  danger: '#ff4d4f',
  cardBackground: '#444',
  linkColor: '#7cb518',
  modalOverlay: 'rgba(255, 255, 255, 0.3)',
  loader: "#fff",
  screenHeaderFont: 'Poppins-Regular',  // Bold font for headers
  tabFont: 'RobotoCondensed-Light',  // Bold font for screen title
  tabColor: "#d3d3d3",
  headingFont: 'Poppins-Bold',  // Bold font for headers
  bodyFont: 'Roboto-Regular',   // Regular font for body
  buttonFont: 'Montserrat-Bold', // Bold font for buttons
  alternativeFont1: 'QwitcherGrypen-Regular', // Bold font for buttons
  alternativeFont2: 'LondrinaSketch-Regular', // Bold font for buttons
  alternativeFont3: 'GreatVibes-Regular', // Bold font for buttons
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
