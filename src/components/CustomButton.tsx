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
  width?: number | string;  // Optional width prop
  borderRadius?: number; // Optional borderRadius prop
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor,
  color,
  disabled = false,
  style = {},
  width = 'auto',  // Default width is auto, can be overridden
  borderRadius = 15,  // Default borderRadius is 5, can be overridden
}) => {
  
  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const commonStyle = commonStyles(theme);
  const selectedTheme = appTheme[theme];


  const buttonBackgroundColor =
    backgroundColor || selectedTheme.buttonBackgroundColor;
  const buttonTextColor = color || selectedTheme.primary;
  
  return (
    <TouchableOpacity
      style={[
        commonStyle.button,
        {
          backgroundColor: buttonBackgroundColor,
          paddingVertical: 10,
          opacity: disabled ? 0.6 : 1,
          width,  // Apply custom width
          borderRadius,  // Apply custom borderRadius
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
