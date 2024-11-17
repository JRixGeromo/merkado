import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks';
import { theme as appTheme } from '../styles/theme';

interface GradientBGProps {
  children: React.ReactNode;
}

const GradientBG: React.FC<GradientBGProps> = ({ children }) => {
  const themeType = useAppSelector(state => state.theme.theme); // Get current theme
  const gradientColors = appTheme[themeType].themeBG; // Fetch gradient colors based on theme
  console.log(gradientColors);  
  return (
    <LinearGradient colors={gradientColors} style={styles.gradient}>
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1, // Ensures the gradient covers the entire screen
  },
  content: {
    flex: 1, // Ensures children take up full space
  },
});

export default GradientBG;
