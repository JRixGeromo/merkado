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
  width?: number | string;  // Add an optional width prop
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor,
  color,
  disabled = false,
  style = {},
  width = 'auto',  // Default width is auto, can be overridden
}) => {
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const selectedTheme = appTheme[currentTheme];
  const commonStyle = commonStyles(currentTheme); // Generate common styles based on the theme
  const buttonBackgroundColor =
    backgroundColor || selectedTheme.buttonBackgroundColor;
  const buttonTextColor = color || selectedTheme.buttonTextColor;
  
  return (
    <TouchableOpacity
      style={[
        commonStyle.button,
        {
          backgroundColor: buttonBackgroundColor,
          paddingVertical: 10,
          opacity: disabled ? 0.6 : 1,
          width,  // Apply custom width
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={title}
    >
      <Text
        style={[
          commonStyle.buttonText,
          {
            color: buttonTextColor,
            fontSize: normalizeFontSize(16),
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
