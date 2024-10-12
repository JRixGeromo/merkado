import React from 'react';
import { TextInput, View, StyleProp, TextStyle, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Default to Ionicons
import { commonStyles } from '../styles/commonStyles';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive';
import { useAppSelector } from '../hooks/reduxHooks'; // Import your redux selector for theme

interface TextInputWithIconProps {
  placeholder: string;
  iconName: string;
  value?: string;  // Optional for cases like date picker
  onChangeText?: (text: string) => void;  // Make this optional
  iconPack?: typeof Icon;
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
  iconName,
  value,
  onChangeText,
  iconPack = Icon,
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

  // Fallback to theme-based colors if not provided as props
  const themeBasedIconColor = iconColor || commonStyle.iconColor.color; 
  const themeBasedPlaceholderColor =
    placeholderTextColor || commonStyle.placeholderTextColor.color;
  const themeBasedTextColor = textColor || commonStyle.textColor.color;
  const themeBasedInputBackgroundColor = inputBackgroundColor || commonStyle.inputBackgroundColor.backgroundColor;
  
  const IconComponent = iconPack;

  return (
    <View style={[
      commonStyle.inputContainer, 
      style, 
      {
        backgroundColor: themeBasedInputBackgroundColor, // Remove background color to make it blank/transparent
        borderWidth: 0, // Remove border to make it clean
      }
    ]}>
      <IconComponent
        name={iconName}
        size={iconSize}
        color={themeBasedIconColor}
        style={{ marginRight: normalizeHeight(8) }}
      />
      <TextInput
        style={[
          commonStyle.input,
          inputStyle,
          { 
            color: themeBasedTextColor, 
            fontSize: placeholderFontSize, 
            backgroundColor: 'transparent' // Ensure the input itself has no background
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
