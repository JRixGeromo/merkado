// src/styles/theme.ts

export interface ThemeType {
  primary: string;
  secondary: string;
  googleButtonColor: string;
  facebookButtonColor: string;
  textColor: string;
  backgroundColor: string;
  buttonTextColor: string;
  placeholderTextColor: string;
  danger: string; // Add danger color for destructive actions
  cardBackground: string; // Background color for card-like containers
  linkColor: string; // Color for clickable links
}

const lightTheme: ThemeType = {
  primary: '#4CAF50', // Green
  secondary: '#1E90FF', // Blue
  googleButtonColor: '#4285F4', // Google blue
  facebookButtonColor: '#3b5998', // Facebook blue
  textColor: '#333', // Dark text color for light mode
  backgroundColor: '#fff', // Light background
  buttonTextColor: '#fff', // Button text color
  placeholderTextColor: '#999', // Placeholder text
  danger: '#ff4d4f', // Red for danger actions like delete or logout
  cardBackground: '#f8f9fa', // Light card background
  linkColor: '#1E90FF', // Link color in light mode (same as secondary)
};

const darkTheme: ThemeType = {
  primary: '#1E90FF', // Blue
  secondary: '#4CAF50', // Green
  googleButtonColor: '#4285F4', // Google blue
  facebookButtonColor: '#3b5998', // Facebook blue
  textColor: '#fff', // Light text color for dark mode
  backgroundColor: '#333', // Dark background
  buttonTextColor: '#fff', // Button text color
  placeholderTextColor: '#ccc', // Lighter placeholder text for dark mode
  danger: '#ff4d4f', // Red for danger actions like delete or logout
  cardBackground: '#444', // Dark card background
  linkColor: '#4CAF50', // Link color in dark mode (same as secondary)
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
