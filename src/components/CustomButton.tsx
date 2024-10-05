import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
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
  const currentTheme = useAppSelector((state) => state.theme.theme); // 'light' or 'dark'
  const selectedTheme = appTheme[currentTheme]; // Now it accesses the full theme object (light or dark)

  const commonStyle = commonStyles(currentTheme); // Generate styles based on the current theme

  const buttonBackgroundColor = backgroundColor || selectedTheme.primary; // Fallback to theme primary color
  const buttonTextColor = color || selectedTheme.buttonTextColor;

  return (
    <TouchableOpacity
      style={[
        commonStyle.button, // Use generated button style from commonStyles
        { backgroundColor: buttonBackgroundColor, paddingVertical: 12, borderRadius: 8 },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[commonStyle.buttonText, { color: buttonTextColor, fontSize: normalizeFontSize(18) }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
