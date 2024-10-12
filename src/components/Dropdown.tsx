import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks';
import { commonStyles } from '../styles/commonStyles';
import { normalizeFontSize } from '../utils/responsive';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons for the icon

interface DropdownProps {
  selectedValue: string; // Current selected value
  onValueChange: (value: string) => void; // Callback when value changes
  options: { label: string; value: string }[]; // Options for the dropdown
  placeholder?: string; // Placeholder text for the dropdown
  iconName?: string; // Default icon
  iconSize?: number; // Default icon size
  iconColor?: string; // Default icon color
  inputStyle?: object; // Additional styles for the TextInput
  textColor?: string; // Default text color
  placeholderFontSize?: number; // Font size for the placeholder
  placeholderTextColor?: string; // Placeholder text color
}
const Dropdown: React.FC<DropdownProps> = ({
  selectedValue,
  onValueChange,
  options,
  placeholder = "Select an option", // Default placeholder
  iconName = "person", // Default icon
  iconSize = normalizeFontSize(20), // Default icon size
  iconColor, // Use the color from the theme
  inputStyle = {}, // Additional styles for the TextInput
  textColor, // Use the text color from the theme
  placeholderFontSize = 14, // Default placeholder font size
  placeholderTextColor, // Use the color from the theme
}) => {
  const [showModal, setShowModal] = useState(false);
  const currentTheme = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(currentTheme);

  // Fallback to theme-based colors if not provided as props
  const themeBasedIconColor = iconColor || commonStyle.iconColor.color; 
  const themeBasedTextColor = textColor || commonStyle.textColor.color;
  const themeBasedPlaceholderColor = placeholderTextColor || commonStyle.placeholderTextColor.color;

  return (
    <View style={[commonStyle.inputContainer, { marginBottom: 15 }]}>
      <TouchableOpacity
        onPress={() => setShowModal(true)} // Show modal on press
        accessibilityLabel="Select option" // Accessibility
      >
        <Icon
          name={iconName}
          size={iconSize}
          color={themeBasedIconColor} // Use theme-based icon color
          style={{ position: 'absolute', left: 0 }} // Position the icon inside the dropdown
        />
        <Text style={{
          color: selectedValue ? themeBasedTextColor : themeBasedPlaceholderColor, // Use theme-based colors
          fontSize: placeholderFontSize, // Use passed placeholder font size
          marginLeft: iconSize + 15 // Adjust margin to make space for the icon
        }}>
          {selectedValue || placeholder} {/* Show placeholder if no value is selected */}
        </Text>
      </TouchableOpacity>
      
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={[commonStyle.modalContainer, { backgroundColor: commonStyle.modal.backgroundColor }]}>
          <View style={[commonStyle.modalContent, { backgroundColor: commonStyle.card.backgroundColor }]}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => {
                  onValueChange(option.value); // Call the onValueChange prop with the selected value
                  setShowModal(false);
                }}
                style={[commonStyle.option, { borderColor: commonStyle.modal.borderColor }]} // Use primary color for border
              >
                <Text style={[ commonStyle.modalText ]}>{option.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setShowModal(false)} style={commonStyle.closeButton}>
              <Text style={[ commonStyle.modalText ]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Dropdown;
