import React, { useState, useMemo } from 'react';
import { TextInput, View, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive';
import { useAppSelector } from '../hooks/reduxHooks'; // Import your redux selector for theme
import IconLib from './IconLib'; // Import your custom Icon library

interface TextInputWithIconProps {
  placeholder: string;
  iconName: keyof typeof IconLib; // Ensure it matches the key of IconLib
  value?: string; // Optional for cases like date picker
  onChangeText?: (text: string) => void; // Make this optional
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
  iconSize?: number;
  iconColor?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  textColor?: string;
  inputBackgroundColor?: string;
  placeholderFontSize?: number;
  onFocus?: () => void; // Make sure this prop exists
  editable?: boolean;
}

const TextInputWithIcon: React.FC<TextInputWithIconProps> = ({
  placeholder,
  iconName, // Dynamically refer to the icon name in IconLib
  value,
  onChangeText,
  secureTextEntry = false,
  placeholderTextColor,
  iconSize = normalizeFontSize(20),
  iconColor,
  style = {},
  inputStyle = {},
  textColor,
  inputBackgroundColor,
  placeholderFontSize = 14, // Default placeholder font size
  onFocus, // Destructure onFocus
  editable = true, // Set editable as true by default
}) => {
  const currentTheme = useAppSelector(state => state.theme.theme); // Access current theme (light/dark)
  const commonStyle = commonStyles(currentTheme); // Generate styles based on the current theme

  // Memoize the theme-based styles
  const themeBasedStyles = useMemo(() => {
    return {
      iconColor: iconColor || commonStyle.iconColor.color,
      textColor: textColor || commonStyle.textColor.color,
      placeholderColor:
        placeholderTextColor || commonStyle.placeholderTextColor.color,
      inputBackgroundColor: commonStyle.inputBackgroundColor.backgroundColor,
    };
  }, [iconColor, textColor, placeholderTextColor, commonStyle]);

  const themeBasedIconColor = themeBasedStyles.iconColor;
  const themeBasedTextColor = themeBasedStyles.textColor;
  const themeBasedPlaceholderColor = themeBasedStyles.placeholderColor;
  const themeBasedInputBackgroundColor = themeBasedStyles.inputBackgroundColor;

  // Function to render dynamic icon from IconLib
  const renderIcon = (iconName: keyof typeof IconLib, size: number, color: string) => {
    const IconComponent = IconLib[iconName]; // Access the icon component dynamically
    return <IconComponent size={size} color={color} />;
  };

  return (
    <View
      style={[
        commonStyle.inputContainer,
        {
          backgroundColor: themeBasedInputBackgroundColor, // Remove background color to make it blank/transparent
          borderWidth: 0, // Remove border to make it clean
        },
        style, // Apply custom container styles if passed
      ]}
    >
      {/* Dynamically render the Icon using IconLib */}
      {renderIcon(iconName, iconSize, themeBasedIconColor)}

      <TextInput
        style={[
          commonStyle.input,
          inputStyle,
          {
            color: themeBasedTextColor,
            fontSize: placeholderFontSize,
            backgroundColor: 'transparent', // Ensure the input itself has no background
          },
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={themeBasedPlaceholderColor} // Apply theme-based placeholder color
        onFocus={() => {
          console.log('Input field focused'); // Log to verify if focus is triggered
          if (onFocus) {
            onFocus(); // Call the onFocus function passed as a prop
          }
        }}
        editable={editable} // Add the editable prop
      />
    </View>
  );
};

export default TextInputWithIcon;
