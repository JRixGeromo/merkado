// src/styles/theme.ts

export interface ThemeType {
  primary: string;
  secondary: string;
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
}

const lightTheme: ThemeType = {
  primary: '#4CAF50', // Green
  secondary: '#fff', // White
  googleButtonColor: '#4285F4', // Google blue
  facebookButtonColor: '#3b5998', // Facebook blue
  textColor: '#333', // Dark text color for light mode
  backgroundColor: '#fff', // Light background
  buttonTextColor: '#fff', // Button text color
  buttonBackgroundColor: '#4CAF50', // Button  color
  iconColor: "#4CAF50",
  placeholderTextColor: '#999', // Placeholder text
  inputBackgroundColor: '#ccc',
  danger: '#ff4d4f', // Red for danger actions like delete or logout
  cardBackground: '#f8f9fa', // Light card background
  linkColor: '#1E90FF', // Link color in light mode (same as secondary)
  modalOverlay: 'rgba(0, 0, 0, 0.5)', // Dark overlay for light theme
};

const darkTheme: ThemeType = {
  primary: '#55a630', // White
  secondary: '#4CAF50', // Green
  googleButtonColor: '#4285F4', // Google blue
  facebookButtonColor: '#3b5998', // Facebook blue
  textColor: '#fff', // Light text color for dark mode
  backgroundColor: '#333', // Dark background
  buttonTextColor: '#fff', // Button text color
  buttonBackgroundColor: '#fff', // Button color
  iconColor: "#4CAF50",
  placeholderTextColor: '#ccc', // Lighter placeholder text for dark mode
  inputBackgroundColor: '#000',
  danger: '#ff4d4f', // Red for danger actions like delete or logout
  cardBackground: '#444', // Dark card background
  linkColor: '#4CAF50', // Link color in dark mode (same as secondary)
  modalOverlay: 'rgba(255, 255, 255, 0.3)', // Light overlay for dark theme
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
