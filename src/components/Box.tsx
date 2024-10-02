import React from 'react';
import { View, StyleSheet } from 'react-native';
import { normalizeHeight } from '../utils/responsive';
import { useAppSelector } from '../hooks/reduxHooks'; // Import to access theme

interface BoxProps {
  children: React.ReactNode;
  style?: object;
}

const Box: React.FC<BoxProps> = ({ children, style = {} }) => {
  // Access current theme from Redux store
  const theme = useAppSelector((state) => state.theme.theme);

  // Define dynamic styles based on theme
  const dynamicStyles = styles(theme);

  return (
    <View style={[dynamicStyles.box, style]}>
      {children}
    </View>
  );
};

// Define styles
const styles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    box: {
      padding: normalizeHeight(16),
      backgroundColor: theme === 'light' ? '#f8f9fa' : '#333', // Light/Dark mode color
      borderRadius: 8,
      marginVertical: normalizeHeight(16),
    },
  });

export default Box;
