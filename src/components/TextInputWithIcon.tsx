import React from 'react';
import { TextInput, View, StyleProp, TextStyle, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Default to Ionicons
import { commonStyles } from '../styles/commonStyles';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive';
import { useAppSelector } from '../hooks/reduxHooks'; // Import your redux selector for theme

interface TextInputWithIconProps {
  placeholder: string;
  iconName: string;
  value: string;
  onChangeText: (text: string) => void;
  iconPack?: typeof Icon;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
  iconSize?: number;
  iconColor?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  textColor?: string;  // Add a prop to define text color
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
  iconColor = '#000',
  style = {},
  inputStyle = {},
  textColor,
}) => {
  const currentTheme = useAppSelector((state) => state.theme.theme);  // Access current theme (light/dark)
  const commonStyle = commonStyles(currentTheme); // Generate styles based on the current theme
  
  // Fallback to theme-based colors if not provided as props
  const themeBasedIconColor = iconColor || commonStyle.iconColor.color;  // Ensure dynamicStyles.iconColor exists
  const themeBasedPlaceholderColor = placeholderTextColor || commonStyle.placeholderTextColor.color;
  const themeBasedTextColor = textColor || commonStyle.textColor.color;

  const IconComponent = iconPack;

  return (
    <View style={[commonStyle.inputContainer, style]}>
      <IconComponent
        name={iconName}
        size={iconSize}
        color={themeBasedIconColor}
        style={{ marginRight: normalizeHeight(8) }}
      />
      <TextInput
        style={[commonStyle.input, inputStyle, { color: themeBasedTextColor }]}  // Apply theme-based text color
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={themeBasedPlaceholderColor}  // Apply theme-based placeholder color
      />
    </View>
  );
};

export default TextInputWithIcon;
