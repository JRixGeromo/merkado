import React from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks'; // Hook to access the theme from Redux
import { commonStyles } from '../styles/commonStyles'; // Import your style
import { normalizeFontSize } from '../utils/responsive'; // Import for responsive text size
import { theme as appTheme } from '../styles/theme'; // Import your theme and give it an alias to avoid conflicts

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  width?: number | string; // Optional width prop
  borderRadius?: number; // Optional borderRadius prop
  textSize?: number; // Optional textSize prop for font size
  borderColor?: string; // Optional borderColor prop
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor,
  color,
  disabled = false,
  style = {},
  width = 'auto', // Default width is auto, can be overridden
  borderRadius = 15, // Default borderRadius is 15, can be overridden
  textSize = 16, // Default text size, can be overridden
  borderColor, // Optional borderColor prop
}) => {
  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const commonStyle = commonStyles(theme);
  const selectedTheme = appTheme[theme];

  const buttonBackgroundColor = backgroundColor || selectedTheme.buttonPrimary;
  const buttonTextColor = color || selectedTheme.textPrimary;
  const buttonBorderColor = borderColor || selectedTheme.buttonBorderPrimary; // Fallback to theme's button border color

  return (
    <TouchableOpacity
      style={[
        commonStyle.button,
        {
          backgroundColor: buttonBackgroundColor,
          paddingVertical: 8,
          opacity: disabled ? 0.6 : 1,
          width, // Apply custom width
          borderRadius, // Apply custom borderRadius
          borderColor: buttonBorderColor, // Apply custom borderColor
          borderWidth: borderColor ? 1 : 0, // Only apply border if borderColor is provided
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={title}
    >
      <Text
        style={[
          {
            color: buttonTextColor,
            fontSize: normalizeFontSize(textSize), // Use dynamic text size
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
