// src/styles/theme.ts

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
  iconColor: string;
  placeholderTextColor: string;
  inputBackgroundColor: string;
  danger: string; // Add danger color for destructive actions
  cardBackground: string; // Background color for card-like containers
  linkColor: string; // Color for clickable links
  modalOverlay: string; // Add modal overlay color
  loader: string; // Add modal overlay color
}

const lightTheme: ThemeType = {
  primary: '#4CAF50', // Green
  secondary: '#fff', // White
  linkText: '#4CAF50', // Green
  paragraph: '#000', // White
  googleButtonColor: '#4285F4', // Google blue
  facebookButtonColor: '#3b5998', // Facebook blue
  textColor: '#333', // Dark text color for light mode
  backgroundColor: '#fff', // Light background
  buttonTextColor: '#fff', // Button text color
  buttonBackgroundColor: '#4CAF50', // Button  color
  iconColor: "#4CAF50",
  placeholderTextColor: '#999', // Placeholder text
  inputBackgroundColor: '#cce3de',
  danger: '#ff4d4f', // Red for danger actions like delete or logout
  cardBackground: '#f8f9fa', // Light card background
  linkColor: '#1E90FF', // Link color in light mode (same as secondary)
  modalOverlay: 'rgba(0, 0, 0, 0.5)', // Dark overlay for light theme
  loader: "#000",
};

const darkTheme: ThemeType = {
  primary: '#fff', // White
  secondary: '#4CAF50', // Green
  linkText: '#4CAF50', // White
  paragraph: '#fff', // White
  googleButtonColor: '#4285F4', // Google blue
  facebookButtonColor: '#3b5998', // Facebook blue
  textColor: '#fff', // Light text color for dark mode
  backgroundColor: '#333', // Dark background
  buttonTextColor: '#fff', // Button text color
  buttonBackgroundColor: '#008000', // Button color
  iconColor: "#4CAF50",
  placeholderTextColor: '#ccc', // Lighter placeholder text for dark mode
  inputBackgroundColor: '#000',
  danger: '#ff4d4f', // Red for danger actions like delete or logout
  cardBackground: '#444', // Dark card background
  linkColor: '#4CAF50', // Link color in dark mode (same as secondary)
  modalOverlay: 'rgba(255, 255, 255, 0.3)', // Light overlay for dark theme
  loader: "#fff",
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
