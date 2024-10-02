import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Default to Ionicons
import { commonStyles } from '../styles/commonStyles';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive';

interface TextInputWithIconProps {
  placeholder: string;
  iconName: string; // Icon name as a string
  value: string;
  onChangeText: (text: string) => void;
  iconPack?: typeof Icon; // Ensure iconPack is of the correct type
  secureTextEntry?: boolean;
  style?: object;
}

const TextInputWithIcon: React.FC<TextInputWithIconProps> = ({
  placeholder,
  iconName,
  value,
  onChangeText,
  iconPack = Icon, // Default to Ionicons if no iconPack is provided
  secureTextEntry = false,
  style = {},
}) => {
  const IconComponent = iconPack; // No need for additional fallback, default is handled

  return (
    <View style={[commonStyles.box, style, { flexDirection: 'row', alignItems: 'center' }]}>
      {/* Ensure the icon shows up by giving it a specific color */}
      <IconComponent
        name={iconName}
        size={normalizeFontSize(24)}
        color="#000" // You can change this to the desired icon color
        style={{ marginRight: normalizeHeight(8) }} // Adding a margin to space it from the TextInput
      />
      <TextInput
        style={[commonStyles.input, { fontSize: normalizeFontSize(16) }]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInputWithIcon;
