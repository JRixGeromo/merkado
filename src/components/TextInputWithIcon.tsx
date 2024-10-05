import React from 'react';
import { TextInput, View, StyleProp, TextStyle, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Default to Ionicons
import { commonStyles } from '../styles/commonStyles';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive';

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
  placeholderTextColor = '#7F7F7F',
  iconSize = normalizeFontSize(20),
  iconColor = '#000',
  style = {},
  inputStyle = {},
  textColor = '#333',  // Default text color is set to dark grey
}) => {
  const IconComponent = iconPack;

  return (
    <View style={[commonStyles.inputContainer, style]}>
      {/* Icon with dynamic color and size */}
      <IconComponent
        name={iconName}
        size={iconSize}
        color={iconColor}
        style={{ marginRight: normalizeHeight(8) }}
      />
      <TextInput
        style={[commonStyles.input, inputStyle, { color: textColor }]}  // Text color applied here
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default TextInputWithIcon;
