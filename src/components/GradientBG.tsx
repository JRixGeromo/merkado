import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { theme as appTheme } from '../styles/theme';
import { useTheme } from '../hooks/useTheme';

const GradientBG: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { themeType } = useTheme();
  const background = appTheme[themeType].themeBG;

  // Check if background is a gradient (array) or solid color (string)
  const isGradient = Array.isArray(background);

  return isGradient ? (
    <LinearGradient colors={background} style={styles.gradient}>
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  ) : (
    <View style={[styles.gradient, { backgroundColor: background }]}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1, // Ensures full-screen coverage
  },
  content: {
    flex: 1, // Ensures child components take up full space
  },
});

export default GradientBG;
