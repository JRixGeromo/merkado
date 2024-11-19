export interface ThemeType {

  themeBG: string[] | string; // Allow lightBG to accept an array of strings
  /************************** */
  // Text
  text1st: string;
  text2nd: string;
  textPHolderInfo: string;
  textDark: string;
  textLight: string;
  textPriceBanner: string;
  textLink: string;
  textGray: string;
  textBlur: string;
  textHighlight: string; // #800e13 (Light) / #f2bb05 (Dark)
  textDisabled: string; // #ced4da (Light) / #ced4da (Dark)

  online: string; 
  onlineDot: string;
  onlineDotBorder: string;
  // below are not in use
  // textLight: string;         // #ffffff (Light) / #ffffff (Dark)
  // textBlack: string;         // #000000 (Light) / #000000 (Dark)
  ///////////////////

  /************************** */
  // Border
  borderColor1st: string;
  borderColorGray: string;
  borderColorDark: string; // #343a40 (Light) / #e6e6e9 (Dark)
  borderColorLightGray: string;
  // below are not in use
  // borderColorSecondary: string;  // #000000 (Light) / #dee2e6 (Dark)
  ///////////////////

  /************************** */
  // Card and Background
  fullBackgroundColor: string;
  cardBackground: string;
  fullContainerBGColor: string; // #f7ede2 (Light) / #161a1d (Dark)
  badgeBackgroundColor: string;
  lightBackgroundColor: string;

  // below are not in use
  // formBackgroundColorSecondary: string;     // #f7ede2 (Light) / #161a1d (Dark)
  // formBackgroundColorPrimary: string;       // #f7ede2 (Light) / #000000 (Dark)
  // commentBackgroundColor: string;           // #f7ede2 (Light) / #000000 (Dark)
  ///////////////////

  /************************** */
  // Input Background
  inputBackgroundColor: string;
  ///////////////////

  /************************** */
  // Line, Button, and Button Border
  boxBorderWidth: number;
  boxBorderWidth2nd: number;
  
  lineBorderColor: string;
  lineBorderColorLight: string;
  googleButtonColor: string;
  facebookButtonColor: string;

  button1st: string;
  button2nd: string;
  buttonInfo: string;
  buttonDanger: string;
  buttonCancel: string;

  buttonBorder1st: string; // #4CAF50 (Light) / #4CAF50 (Dark)
  buttonDark: string; // #495057 (Light) / #252422 (Dark)
  buttonBorderLight: string; // #ffffff (Light) / #ffffff (Dark)
  buttonClose: string; // #343a40 (Light) / #343a40 (Dark)
  buttonText1st: string;
  buttonText2nd: string;
  buttonTextDelete: string;

  // below are not in use
  // buttonSuccess: string;          // #8ac926 (Light) / #8ac926 (Dark)
  // buttonWarning: string;          // #fb6107 (Light) / #fb6107 (Dark)
  // buttonError: string;            // #ba181b (Light) / #ba181b (Dark)
  // buttonDisabled: string;         // #b8bdb5 (Light) / #b8bdb5 (Dark)
  // buttonAction: string;           // #ffffff (Light) / #343a40 (Dark)
  // buttonHighlight: string;        // #f9c74f (Light) / #f9c74f (Dark)
  // buttonLink: string;             // #38b000 (Light) / #38b000 (Dark)
  // buttonGray: string;             // #495057 (Light) / #495057 (Dark)
  // buttonBorderBlack: string;      // #393d3f (Light) / #393d3f (Dark)
  // buttonBorderGray: string;       // #e6e6ea (Light) / #e6e6ea (Dark)
  ///////////////////

  /************************** */
  // Tab
  tabHeaderBGColor: string;
  tabBottomBGColor: string;
  headerBorderColor: string;
  ///////////////////

  /************************** */
  // Icon
  iconColor1st: string;
  iconColor2nd: string;
  iconColorSmileys: string;
  iconColorGray: string;
  iconColorLight: string;
  ///////////////////

  /************************** */
  // Overlay and Loader
  modalOverlay: string;
  loader: string;
  ///////////////////

  /************************** */
  // Switch and Shadow Elevation
  switchInactive: string; // Light gray for inactive track
  switchActive: string; // Green for active track
  switchThumbInactive: string; // Gray for inactive thumb
  switchThumbActive: string; // White for active thumb
  shadowElevation: number;
  ///////////////////

  /************************** */
  // Fonts
  headingFont: string;
  bodyFont: string;
  bodyFontSlim: string;
  buttonFont: string;
  tabFont: string;

  // below are not in use
  // alternativeFont1: string;        // 'QwitcherGrypen-Regular' (Light) / 'QwitcherGrypen-Regular' (Dark)
  // alternativeFont2: string;        // 'LondrinaSketch-Regular' (Light) / 'LondrinaSketch-Regular' (Dark)
  // alternativeFont3: string;        // 'GreatVibes-Regular' (Light) / 'GreatVibes-Regular' (Dark)
  ///////////////////
}

const lightTheme: ThemeType = {
  /************************** */

  themeBG: ['#FFFFFF', '#ADD8E6'], // White to light blue gradient
  
  // Text
  text1st: '#000000',
  text2nd: '#6c757d',

  textPHolderInfo: '#9caea9',
  textDark: '#343a40',
  textLight: '#ffffff',
  textPriceBanner: '#ffa737',
  textLink: '#38b000',
  textGray: '#4f5d75',
  textBlur: '#495057',
  textHighlight: '#800e13',
  textDisabled: '#ced4da',

  online: '#38b000',
  onlineDot: 'red',
  onlineDotBorder: '#ffffff',

  // below are not in use
  // textBlack: '#000000',
  // textLight: '#000',
  ///////////////////

  /************************** */
  // Border
  borderColor1st: '#4CAF50',
  borderColorGray: '#d3d3d3',
  borderColorDark: '#343a40',
  borderColorLightGray: '#dddddd',

  // below are not in use
  // borderColorSecondary: '#000000',
  ///////////////////

  /************************** */
  // Card and Background
  cardBackground: '#ffffff',
  fullBackgroundColor: '#ffffff',
  fullContainerBGColor: '#ffffff',
  badgeBackgroundColor: '#4CAF50',
  lightBackgroundColor: '#ffffff',

  // below are not in use
  // formBackgroundColorPrimary: '#f7ede2',
  // formBackgroundColorSecondary: '#f7ede2',
  // commentBackgroundColor: '#f7ede2',
  ///////////////////

  /************************** */
  // Input background
  inputBackgroundColor: '#dee2e6',
  ///////////////////

  /************************** */
  // Line, buttton and button border
  boxBorderWidth: 0,
  boxBorderWidth2nd: 1,
  lineBorderColor: '#cad2c5',
  lineBorderColorLight: '#788585',
  googleButtonColor: '#4285F4',
  facebookButtonColor: '#8d99ae',

  button1st: '#cccccc',
  button2nd: '#ffffff',
  buttonInfo: '#bee9e8',
  buttonDanger: '#ba181b',
  buttonCancel: '#e6e6ea',
  buttonBorder1st: '#8ecae6',
  buttonDark: '#a5a5a5',
  buttonBorderLight: '#ffffff',
  buttonClose: '#343a40',
  buttonText1st: '#ffffff',
  buttonText2nd: '#ffffff',
  buttonTextDelete: '#ffffff',

  // below are not in use
  // buttonSuccess: '#8ac926',
  // buttonWarning: '#fb6107',
  // buttonError: '#ba181b',
  // buttonDisabled: '#b8bdb5',
  // buttonAction: '#ffffff',
  // buttonHighlight: '#f9c74f',
  // buttonLink: '#38b000',
  // buttonGray: '#495057',
  // buttonBorderBlack: '#393d3f',
  // buttonBorderGray: '#e6e6ea',
  ///////////////////

  /************************** */
  // Tab
  tabHeaderBGColor: '#ffffff',
  tabBottomBGColor: '#ffffff',
  headerBorderColor: '#8d99ae',
  ///////////////////

  /************************** */
  // Tab
  iconColor1st: '#262626',
  iconColor2nd: '#a5a5a5',
  iconColorSmileys: '#fcbf49',
  iconColorGray: '#6c757d',
  iconColorLight: '#ced4da',
  ///////////////////

  /************************** */
  // Overlay and loader
  modalOverlay: 'rgba(255, 255, 255, 0.3)',
  loader: '#ffffff',
  ///////////////////

  /************************** */
  // Switch and shadow elevation
  switchInactive: '#D1D5DB', // Light gray for inactive track, subtle on white background
  switchActive: '#4CAF50', // Green for active background track (suggests "on")
  switchThumbInactive: '#9CA3AF', // Medium gray for inactive thumb
  switchThumbActive: '#ffffff', // White for active thumb, maintains the light theme feel
  shadowElevation: 1, // White for active thumb, contrasts with green
  ///////////////////

  /************************** */
  // Fonts
  headingFont: 'Poppins-Bold',
  bodyFont: 'Roboto-Regular',
  bodyFontSlim: 'RobotoCondensed-Light',
  buttonFont: 'Montserrat-Bold',
  tabFont: 'NanumGothicCoding-Regular',

  // below are not in use
  // alternativeFont1: 'QwitcherGrypen-Regular',
  // alternativeFont2: 'LondrinaSketch-Regular',
  // alternativeFont3: 'GreatVibes-Regular',
  ///////////////////
};

const femmeTheme: ThemeType = {

  themeBG: ['#FFFFFF', '#FFC0CB'], // White to pink gradient
  
  /************************** */
  // Text
  text1st: '#ffffff', // Pink shade for primary text
  text2nd: '#000000', // Warm brown for secondary text
  textPHolderInfo: '#f8bbd0', // Light pink placeholder
  textDark: '#4e342e', // Deep brown for dark text
  textLight: '#ffffff',
  textPriceBanner: '#ffb74d', // Light orange for price highlight
  textLink: '#c2185b', // Dark pink for links
  textGray: '#666666', // Soft beige-gray
  textBlur: '#5e503f', // Light muted beige
  textHighlight: '#e4572e', // Pink highlight
  textDisabled: '#d7ccc8', // Muted beige for disabled text

  online: '#7cb518',
  onlineDot: 'red',
  onlineDotBorder: '#e7c6ff',
  // below are not in use
  // textBlack: '#000000',
  // textLight: '#000',          // Pure white for light text
  ///////////////////

  /************************** */
  // Border
  borderColor1st: '#e91e63', // Pink primary border
  borderColorGray: '#d3d3d3', // Soft gray border
  borderColorDark: '#4e342e', // Dark brown border
  borderColorLightGray: '#dddddd',

  // below are not in use
  // borderColorSecondary: '#000000',
  ///////////////////

  /************************** */
  // Card and Background
  fullBackgroundColor: '#ffffff', // Very light peach background
  cardBackground: '#e4c1f9', // Light pink background for cards
  fullContainerBGColor: '#ffffff',
  badgeBackgroundColor: '#000000',
  lightBackgroundColor: '#ffffff',

  // below are not in use
  // formBackgroundColorPrimary: '#ffe0b2',
  // formBackgroundColorSecondary: '#ffccbc',
  // commentBackgroundColor: '#ffccbc',
  ///////////////////

  /************************** */
  // Input Background
  inputBackgroundColor: '#ebebeb', // Light orange for inputs
  ///////////////////

  /************************** */
  // Line, Button, and Button Border
  boxBorderWidth: 0,
  boxBorderWidth2nd: 1,
  lineBorderColor: '#f8bbd0', // Light pink line
  lineBorderColorLight: '#000', // Light orange-pink line
  googleButtonColor: '#f06292', // Soft pink for Google button
  facebookButtonColor: '#8e24aa', // Purple for Facebook button

  button1st: '#faf3dd', // Pink primary button
  button2nd: '#ffffff', // Very light pink for secondary button
  buttonInfo: '#ffdac6', // Purple for info button
  buttonDanger: '#d32f2f', // Red for danger button
  buttonCancel: '#ffebee', // Light pink for cancel button

  buttonBorder1st: '#ffc2d1', // Pink for primary button border
  buttonDark: '#d6ccc2', // Dark brown button
  buttonBorderLight: '#ffffff', // White for light button border
  buttonClose: '#6d4c41', // Brown for close button
  buttonText1st: '#ffffff',
  buttonText2nd: '#000000',
  buttonTextDelete: '#ffffff',

  // below are not in use
  // buttonSuccess: '#8ac926',
  // buttonWarning: '#fb6107',
  // buttonError: '#ba181b',
  // buttonDisabled: '#b8bdb5',
  // buttonAction: '#ffffff',
  // buttonHighlight: '#f9c74f',
  // buttonLink: '#38b000',
  // buttonGray: '#495057',
  // buttonBorderBlack: '#393d3f',
  // buttonBorderGray: '#e6e6ea',
  ///////////////////

  /************************** */
  // Tab
  tabHeaderBGColor: '#560bad', // Light orange tab header
  tabBottomBGColor: '#560bad', // Light pink tab bar
  headerBorderColor: '#d7ccc8', // Beige for header border
  ///////////////////

  /************************** */
  // Icon
  iconColor1st: '#ffffff', // Pink icons
  iconColor2nd: '#a5a5a5', // Purple icons
  iconColorSmileys: '#ffb74d', // Orange for smiley icons
  iconColorGray: '#252422', // Brown-gray icons
  iconColorLight: '#000000', // White icons
  ///////////////////

  /************************** */
  // Overlay and Loader
  modalOverlay: 'rgba(248, 187, 208, 0.3)', // Light pink overlay
  loader: '#f48fb1', // Light pink loader
  ///////////////////

  /************************** */
  // Switch and Shadow Elevation
  switchInactive: '#f8bbd0', // Pink for inactive track
  switchActive: '#e91e63', // Darker pink for active track
  switchThumbInactive: '#d7ccc8', // Beige for inactive thumb
  switchThumbActive: '#ffffff', // White for active thumb
  shadowElevation: 1,
  ///////////////////

  /************************** */
  // Fonts
  headingFont: 'Poppins-Bold',
  bodyFont: 'Roboto-Regular',
  bodyFontSlim: 'RobotoCondensed-Light',
  buttonFont: 'Montserrat-Bold',
  tabFont: 'NanumGothicCoding-Regular',

  // below are not in use
  // alternativeFont1: 'QwitcherGrypen-Regular',
  // alternativeFont2: 'LondrinaSketch-Regular',
  // alternativeFont3: 'GreatVibes-Regular',
  ///////////////////
};

const darkTheme: ThemeType = {
  themeBG: '#000000',
  /************************** */
  // Text
  text1st: '#7cb518',
  text2nd: '#dee2e6',
  textPHolderInfo: '#9999a1',
  textDark: '#fff',
  textLight: '#ffffff',
  textPriceBanner: '#ffa737',
  textLink: '#38b000',
  textGray: '#8d99ae',
  textBlur: '#adb5bd',
  textHighlight: '#f2bb05',
  textDisabled: '#ced4da',

  online: '#9ef01a',
  onlineDot: 'red',
  onlineDotBorder: '#333d29',
  // below are not in use
  // textBlack: '#000000',
  // textLight: '#ffffff',
  ///////////////////

  /************************** */
  // Border
  borderColor1st: '#7cb518',
  borderColorGray: '#353535',
  borderColorDark: '#e6e6e9',
  borderColorLightGray: '#373c42',

  // below are not in use
  // borderColorSecondary: '#dee2e6',
  ///////////////////

  /************************** */
  // Card and Background
  cardBackground: '#1b2021',
  fullBackgroundColor: '#111111',
  fullContainerBGColor: '#111111',
  badgeBackgroundColor: '#4CAF50',
  lightBackgroundColor: '#ffffff',

  // below are not in use
  //formBackgroundColorSecondary: '#161a1d',
  // formBackgroundColorPrimary: '#000000',
  // commentBackgroundColor: '#000000',
  ///////////////////

  /************************** */
  // Input background
  inputBackgroundColor: '#161a1d',
  ///////////////////

  /************************** */
  // Line, button, and button border
  boxBorderWidth: 0,
  boxBorderWidth2nd: 0,
  lineBorderColor: '#4a4e69',
  lineBorderColorLight: '#9caea9',
  googleButtonColor: '#4285F4',
  facebookButtonColor: '#3b5998',

  button1st: '#333d29',
  button2nd: '#212529',
  buttonInfo: '#184e77',
  buttonDanger: '#a50104',
  buttonCancel: '#e6e6ea',
  buttonBorder1st: '#4CAF50',
  buttonDark: '#252422',
  buttonBorderLight: '#ffffff',
  buttonClose: '#343a40',
  buttonText1st: '#d9d9d9',
  buttonText2nd: '#adb6c4',
  buttonTextDelete: '#ffffff',

  // below are not in use
  // buttonSuccess: '#8ac926',
  // buttonWarning: '#fb6107',
  // buttonError: '#ba181b',
  // buttonDisabled: '#b8bdb5',
  // buttonAction: '#343a40',
  // buttonHighlight: '#f9c74f',
  // buttonLink: '#38b000',
  // buttonGray: '#495057',

  // buttonBorderBlack: '#393d3f',
  // buttonBorderGray: '#e6e6ea',
  ///////////////////

  /************************** */
  // Tab
  tabHeaderBGColor: '#222725',
  tabBottomBGColor: '#222725',
  headerBorderColor: '#22333b',
  ///////////////////

  /************************** */
  // Icon
  iconColor1st: '#7cb518',
  iconColor2nd: '#a5a5a5',
  iconColorSmileys: '#fcbf49',
  iconColorGray: '#6c757d',
  iconColorLight: '#ced4da',
  ///////////////////

  /************************** */
  // Overlay and loader
  modalOverlay: 'rgba(255, 255, 255, 0.3)',
  loader: '#ffffff',
  ///////////////////

  /************************** */
  // Switch and shadow elevation
  switchInactive: '#e0e0e0', // Light gray for inactive background track
  switchActive: '#4CAF50', // Green for active background track (suggests "on")
  switchThumbInactive: '#9E9E9E', // Dark gray for inactive thumb
  switchThumbActive: '#FFFFFF', // White for active thumb, contrasts with green
  shadowElevation: 1,
  ///////////////////

  /************************** */
  // Fonts
  headingFont: 'Poppins-Bold',
  bodyFont: 'Roboto-Regular',
  bodyFontSlim: 'RobotoCondensed-Light',
  buttonFont: 'Montserrat-Bold',
  tabFont: 'NanumGothicCoding-Regular',

  // below are not in use
  // alternativeFont1: 'QwitcherGrypen-Regular',
  // alternativeFont2: 'LondrinaSketch-Regular',
  // alternativeFont3: 'GreatVibes-Regular',
  ///////////////////
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
  femme: femmeTheme,
};
