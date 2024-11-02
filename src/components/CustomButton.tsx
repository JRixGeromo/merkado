import React from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks'; // Hook to access the theme from Redux
import { commonStyles } from '../styles/commonStyles'; // Import your style
import { normalizeFontSize } from '../utils/responsive'; // Import for responsive text size
import { theme as appTheme } from '../styles/theme'; // Import your theme
import IconLib from './IconLib'; // Import IconLib

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
  paddingVertical?: number; // Customizable vertical padding
  paddingHorizontal?: number; // Customizable horizontal padding
  iconName?: keyof typeof IconLib; // Optional icon on the left
  iconSize?: number; // Optional icon size prop
  iconColor?: string; // Optional icon color
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  backgroundColor,
  color,
  disabled = false,
  width = 'auto', // Default width is auto, can be overridden
  borderRadius = 15, // Default borderRadius is 15, can be overridden
  borderColor, // Optional borderColor prop
  iconName, // Optional icon from IconLib
  iconColor, // Optional icon color
  iconSize = 20, // Default icon size
  textSize = 16, // Default text size, can be overridden
  style = {
    margin: 5,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 15,
    paddingLeft: 15,
  },
  onPress,
}) => {
  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const commonStyle = commonStyles(theme);
  const selectedTheme = appTheme[theme];

  const buttonBackgroundColor = backgroundColor || selectedTheme.buttonPrimary;
  const buttonTextColor = color || selectedTheme.textPrimary;
  const buttonBorderColor = borderColor || selectedTheme.buttonBorderPrimary;
  const iconFinalColor = iconColor || buttonTextColor;

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: buttonBackgroundColor,
          opacity: disabled ? 0.6 : 1,
          width, // Apply custom width
          borderRadius, // Apply custom borderRadius
          borderColor: buttonBorderColor, // Apply borderColor
          borderWidth: borderColor ? 0.5 : 0, // Only apply border if borderColor is provided
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center', // Center the icon and text inside the button
        },
        style, // Merge any additional styles passed
      ]}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={title}
    >
      {/* Render the optional icon on the left if provided */}
      {iconName && (
        <View style={{ marginRight: 1 }}>
          {React.createElement(IconLib[iconName], { size: iconSize, color: iconFinalColor })}
        </View>
      )}
      <Text
        style={{
          color: buttonTextColor,
          fontSize: normalizeFontSize(textSize),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
