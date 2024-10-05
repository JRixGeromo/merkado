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
  }
  
  const lightTheme: ThemeType = {
    primary: '#4CAF50',
    secondary: '#1E90FF',
    googleButtonColor: '#4285F4',
    facebookButtonColor: '#3b5998',
    textColor: '#333',
    backgroundColor: '#fff',
    buttonTextColor: '#fff',
    placeholderTextColor: '#999',
  };
  
  const darkTheme: ThemeType = {
    primary: '#1E90FF',
    secondary: '#4CAF50',
    googleButtonColor: '#4285F4',
    facebookButtonColor: '#3b5998',
    textColor: '#fff',
    backgroundColor: '#333',
    buttonTextColor: '#fff',
    placeholderTextColor: '#ccc',
  };
  
  export const theme = {
    light: lightTheme,
    dark: darkTheme,
  };
  