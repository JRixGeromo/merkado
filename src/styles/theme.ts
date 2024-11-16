export interface ThemeType {
  /************************** */
  // Text
  textPrimary: string;
  textSecondary: string;
  textPlaceHolderInfo: string;
  textDark: string;
  textLight: string;
  textPriceBanner: string;
  textLink: string;
  textGray: string;
  textBlur: string;
  textHighlight: string; // #800e13 (Light) / #f2bb05 (Dark)
  textDisabled: string; // #ced4da (Light) / #ced4da (Dark)

  online: string; // #ced4da (Light) / #ced4da (Dark)
  // below are not in use
  // textLight: string;         // #ffffff (Light) / #ffffff (Dark)
  // textBlack: string;         // #000000 (Light) / #000000 (Dark)
  ///////////////////

  /************************** */
  // Border
  borderColorPrimary: string;
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
  fullContainerBackgroundColor: string; // #f7ede2 (Light) / #161a1d (Dark)
  badgeBackgroundColor: string;

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
  boxBorderWidthSecondary: number;
  
  lineBorderColor: string;
  lineBorderColorLight: string;
  googleButtonColor: string;
  facebookButtonColor: string;

  buttonPrimary: string;
  buttonSecondary: string;
  buttonInfo: string;
  buttonDanger: string;
  buttonCancel: string;

  buttonBorderPrimary: string; // #4CAF50 (Light) / #4CAF50 (Dark)
  buttonDark: string; // #495057 (Light) / #252422 (Dark)
  buttonBorderLight: string; // #ffffff (Light) / #ffffff (Dark)
  buttonClose: string; // #343a40 (Light) / #343a40 (Dark)
  buttonTextPrimary: string;
  buttonTextSecondary: string;
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
  tabHeaderBackgroundColor: string;
  tabBarBackgroundColor: string;
  headerBorderBottomColor: string;
  ///////////////////

  /************************** */
  // Icon
  iconColorPrimary: string;
  iconColorSecondary: string;
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
  // Text
  textPrimary: '#4CAF50',
  textSecondary: '#000000',
  textPlaceHolderInfo: '#9caea9',
  textDark: '#343a40',
  textLight: '#ffffff',
  textPriceBanner: '#ffa737',
  textLink: '#38b000',
  textGray: '#4f5d75',
  textBlur: '#495057',
  textHighlight: '#800e13',
  textDisabled: '#ced4da',

  online: '#9ef01a',

  // below are not in use
  // textBlack: '#000000',
  // textLight: '#000',
  ///////////////////

  /************************** */
  // Border
  borderColorPrimary: '#4CAF50',
  borderColorGray: '#d3d3d3',
  borderColorDark: '#343a40',
  borderColorLightGray: '#dddddd',

  // below are not in use
  // borderColorSecondary: '#000000',
  ///////////////////

  /************************** */
  // Card and Background
  cardBackground: '#e9ecef',
  fullBackgroundColor: '#ffffff',
  fullContainerBackgroundColor: '#ffffff',
  badgeBackgroundColor: '#4CAF50',

  // below are not in use
  // formBackgroundColorPrimary: '#f7ede2',
  // formBackgroundColorSecondary: '#f7ede2',
  // commentBackgroundColor: '#f7ede2',
  ///////////////////

  /************************** */
  // Input background
  inputBackgroundColor: '#ffffff',
  ///////////////////

  /************************** */
  // Line, buttton and button border
  boxBorderWidth: 0.5,
  boxBorderWidthSecondary: 0,
  lineBorderColor: '#cad2c5',
  lineBorderColorLight: '#788585',
  googleButtonColor: '#4285F4',
  facebookButtonColor: '#8d99ae',

  buttonPrimary: '#cccccc',
  buttonSecondary: '#ffffff',
  buttonInfo: '#bee9e8',
  buttonDanger: '#ba181b',
  buttonCancel: '#e6e6ea',
  buttonBorderPrimary: '#4CAF50',
  buttonDark: '#a5a5a5',
  buttonBorderLight: '#ffffff',
  buttonClose: '#343a40',
  buttonTextPrimary: '#ffffff',
  buttonTextSecondary: '#ffffff',
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
  tabHeaderBackgroundColor: '#ffffff',
  tabBarBackgroundColor: '#ffffff',
  headerBorderBottomColor: '#dddddd',
  ///////////////////

  /************************** */
  // Tab
  iconColorPrimary: '#7cb518',
  iconColorSecondary: '#f6aa1c',
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
  switchThumbActive: '#FFFFFF', // White for active thumb, maintains the light theme feel
  shadowElevation: 3, // White for active thumb, contrasts with green
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
  /************************** */
  // Text
  textPrimary: '#e91e63', // Pink shade for primary text
  textSecondary: '#000000', // Warm brown for secondary text
  textPlaceHolderInfo: '#f8bbd0', // Light pink placeholder
  textDark: '#4e342e', // Deep brown for dark text
  textLight: '#ffffff',
  textPriceBanner: '#ffb74d', // Light orange for price highlight
  textLink: '#c2185b', // Dark pink for links
  textGray: '#666666', // Soft beige-gray
  textBlur: '#5e503f', // Light muted beige
  textHighlight: '#e4572e', // Pink highlight
  textDisabled: '#d7ccc8', // Muted beige for disabled text

  online: '#7cb518',
  // below are not in use
  // textBlack: '#000000',
  // textLight: '#000',          // Pure white for light text
  ///////////////////

  /************************** */
  // Border
  borderColorPrimary: '#e91e63', // Pink primary border
  borderColorGray: '#d3d3d3', // Soft gray border
  borderColorDark: '#4e342e', // Dark brown border
  borderColorLightGray: '#dddddd',

  // below are not in use
  // borderColorSecondary: '#000000',
  ///////////////////

  /************************** */
  // Card and Background
  fullBackgroundColor: '#ffffff', // Very light peach background
  cardBackground: '#eff6e0', // Light pink background for cards
  fullContainerBackgroundColor: '#ffffff',
  badgeBackgroundColor: '#4CAF50',

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
  boxBorderWidth: 0.5,
  boxBorderWidthSecondary: 0,
  lineBorderColor: '#f8bbd0', // Light pink line
  lineBorderColorLight: '#000', // Light orange-pink line
  googleButtonColor: '#f06292', // Soft pink for Google button
  facebookButtonColor: '#8e24aa', // Purple for Facebook button

  buttonPrimary: '#eadde1', // Pink primary button
  buttonSecondary: '#ffebee', // Very light pink for secondary button
  buttonInfo: '#ffdac6', // Purple for info button
  buttonDanger: '#d32f2f', // Red for danger button
  buttonCancel: '#ffebee', // Light pink for cancel button

  buttonBorderPrimary: '#ffc2d1', // Pink for primary button border
  buttonDark: '#d6ccc2', // Dark brown button
  buttonBorderLight: '#ffffff', // White for light button border
  buttonClose: '#6d4c41', // Brown for close button
  buttonTextPrimary: '#ffffff',
  buttonTextSecondary: '#000000',
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
  tabHeaderBackgroundColor: '#ffccd5', // Light orange tab header
  tabBarBackgroundColor: '#ffccd5', // Light pink tab bar
  headerBorderBottomColor: '#d7ccc8', // Beige for header border
  ///////////////////

  /************************** */
  // Icon
  iconColorPrimary: '#e91e63', // Pink icons
  iconColorSecondary: '#ba68c8', // Purple icons
  iconColorSmileys: '#ffb74d', // Orange for smiley icons
  iconColorGray: '#6d4c41', // Brown-gray icons
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
  /************************** */
  // Text
  textPrimary: '#7cb518',
  textSecondary: '#dee2e6',
  textPlaceHolderInfo: '#9999a1',
  textDark: '#fff',
  textLight: '#ffffff',
  textPriceBanner: '#ffa737',
  textLink: '#38b000',
  textGray: '#8d99ae',
  textBlur: '#adb5bd',
  textHighlight: '#f2bb05',
  textDisabled: '#ced4da',

  online: '#9ef01a',
  // below are not in use
  // textBlack: '#000000',
  // textLight: '#ffffff',
  ///////////////////

  /************************** */
  // Border
  borderColorPrimary: '#7cb518',
  borderColorGray: '#373c42',
  borderColorDark: '#e6e6e9',
  borderColorLightGray: '#dddddd',

  // below are not in use
  // borderColorSecondary: '#dee2e6',
  ///////////////////

  /************************** */
  // Card and Background
  cardBackground: '#1b2021',
  fullBackgroundColor: '#111111',
  fullContainerBackgroundColor: '#111111',
  badgeBackgroundColor: '#4CAF50',

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
  boxBorderWidth: 0.5,
  boxBorderWidthSecondary: 0,
  lineBorderColor: '#4a4e69',
  lineBorderColorLight: '#9caea9',
  googleButtonColor: '#4285F4',
  facebookButtonColor: '#3b5998',

  buttonPrimary: '#333d29',
  buttonSecondary: '#212529',
  buttonInfo: '#184e77',
  buttonDanger: '#a50104',
  buttonCancel: '#e6e6ea',
  buttonBorderPrimary: '#4CAF50',
  buttonDark: '#252422',
  buttonBorderLight: '#ffffff',
  buttonClose: '#343a40',
  buttonTextPrimary: '#d9d9d9',
  buttonTextSecondary: '#adb6c4',
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
  tabHeaderBackgroundColor: '#222725',
  tabBarBackgroundColor: '#222725',
  headerBorderBottomColor: '#444444',
  ///////////////////

  /************************** */
  // Icon
  iconColorPrimary: '#7cb518',
  iconColorSecondary: '#f6aa1c',
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
