// src/components/Dropdown.tsx
import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Updated import for Picker
import { commonStyles } from '../styles/commonStyles';
import { normalizeHeight } from '../utils/responsive';

interface DropdownProps {
  selectedValue: string;
  onValueChange: (itemValue: string, itemIndex: number) => void;
  options: { label: string; value: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ selectedValue, onValueChange, options }) => {
  return (
    <View style={[commonStyles.dropdown, { height: normalizeHeight(50) }]}>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
        {options.map((option) => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

export default Dropdown;
