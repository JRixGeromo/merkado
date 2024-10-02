// src/components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { normalizeFontSize, normalizeHeight } from '../utils/responsive';

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  style?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor = '#6200ee',
  color = '#ffffff',
  disabled = false,
  style = {},
}) => {
  return (
    <TouchableOpacity
      style={[commonStyles.button, { backgroundColor }, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[commonStyles.buttonText, { color, fontSize: normalizeFontSize(16) }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
