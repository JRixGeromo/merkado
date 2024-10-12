import React from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks'; // Hook to access the theme from Redux
import { commonStyles } from '../styles/commonStyles'; // Import your styles
import { normalizeFontSize } from '../utils/responsive'; // Import for responsive text size
import { theme as appTheme } from '../styles/theme'; // Import your theme and give it an alias to avoid conflicts

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor,
  color,
  disabled = false,
  style = {},
}) => {
  const currentTheme = useAppSelector((state) => state.theme.theme); // Access the current theme
  const selectedTheme = appTheme[currentTheme]; // Access light or dark theme

  const commonStyle = commonStyles(currentTheme); // Generate common styles based on the theme

  // Fallback to theme-based colors if not provided as props
  const buttonBackgroundColor =
    backgroundColor || selectedTheme.buttonBackgroundColor; // Fallback to theme primary color
  const buttonTextColor =
    color || selectedTheme.buttonTextColor; // Fallback to theme text color

  return (
    <TouchableOpacity
      style={[
        commonStyle.button, // Use the common button styles
        {
          backgroundColor: buttonBackgroundColor, // Apply dynamic background color
          paddingVertical: 10, // Customize vertical padding
          opacity: disabled ? 0.6 : 1, // Add a disabled effect by reducing opacity
        },
        style, // Apply any additional styles passed as props
      ]}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={title} // Add accessibility label for better screen reader support
    >
      <Text
        style={[
          commonStyle.buttonText, // Use common text styles for buttons
          {
            color: buttonTextColor, // Apply dynamic text color
            fontSize: normalizeFontSize(16), // Adjust font size responsively
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
