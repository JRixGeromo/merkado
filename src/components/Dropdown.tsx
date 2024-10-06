import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Updated import for Picker
import { useAppSelector } from '../hooks/reduxHooks'; // To access the theme from Redux
import { commonStyles } from '../styles/commonStyles';
import { normalizeHeight } from '../utils/responsive';

interface DropdownProps {
  selectedValue: string;
  onValueChange: (itemValue: string, itemIndex: number) => void;
  options: { label: string; value: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedValue,
  onValueChange,
  options,
}) => {
  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const styles = commonStyles(theme); // Dynamically create styles based on the theme
  const { dropdown } = styles; // Destructure styles

  return (
    <View style={[dropdown, { height: normalizeHeight(50) }]}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={{ color: theme === 'light' ? '#333' : '#fff' }} // Set text color based on theme
      >
        {options.map(option => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
};

export default Dropdown;
