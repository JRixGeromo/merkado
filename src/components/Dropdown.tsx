import React, { useState, useMemo } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks';
import { commonStyles } from '../styles/commonStyles';
import { normalizeFontSize } from '../utils/responsive';
import IconLib from './IconLib'; // Ensure this is the correct path to IconLib

interface DropdownProps {
  selectedValue: string; // Current selected value
  onValueChange: (value: string) => void; // Callback when value changes
  options: { label: string; value: string }[]; // Options for the dropdown
  placeholder?: string; // Placeholder text for the dropdown
  iconName?: keyof typeof IconLib; // Default icon from IconLib
  iconSize?: number; // Default icon size
  iconColor?: string; // Default icon color
  inputStyle?: object; // Additional styles for the TextInput
  textColor?: string; // Default text color
  placeholderFontSize?: number; // Font size for the placeholder
  placeholderTextColor?: string; // Placeholder text color
  customBackground?: string; // Placeholder text color
  joinLabelValue?: boolean; // Flag to join label and value
  showIcon?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedValue,
  onValueChange,
  options = [], // Provide a default value to avoid undefined
  placeholder = 'Select an option', // Default placeholder
  iconName = 'PersonAdd_O', // Set a default icon from IconLib
  iconSize = normalizeFontSize(20),
  iconColor,
  inputStyle = {},
  textColor,
  placeholderFontSize = 14,
  placeholderTextColor,
  customBackground,
  joinLabelValue = false, // Default is false
  showIcon = true, // Show the icon by default
}) => {
  const [showModal, setShowModal] = useState(false);
  const currentTheme = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(currentTheme);

  // Memoize the theme-based styles
  const themeBasedStyles = useMemo(() => {
    return {
      iconColor: iconColor || commonStyle.iconColor.color,
      textColor: textColor || commonStyle.textColor.color,
      placeholderColor:
        placeholderTextColor || commonStyle.placeholderTextColor.color,
      inputBackgroundColor:
        customBackground || commonStyle.inputBackgroundColor.backgroundColor,
    };
  }, [iconColor, textColor, placeholderTextColor, commonStyle]);

  const themeBasedIconColor = themeBasedStyles.iconColor;
  const themeBasedTextColor = themeBasedStyles.textColor;
  const themeBasedPlaceholderColor = themeBasedStyles.placeholderColor;
  const themeBasedInputBackgroundColor = themeBasedStyles.inputBackgroundColor;

  // Display the placeholder if no value is selected, otherwise display the selected value (capitalized)
  const selectedOption = options.find(option => option.value === selectedValue);

  const displayText = !selectedValue
    ? placeholder
    : joinLabelValue && selectedOption
    ? `${selectedOption.label} (${selectedOption.value})` // Join label and value
    : selectedOption?.label || placeholder;

  // Render the icon dynamically using IconLib
  const renderIcon = (iconName: keyof typeof IconLib, size: number, color: string) => {
    const IconComponent = IconLib[iconName];
    if (!IconComponent) {
      console.warn(`Icon ${iconName} not found in IconLib. Rendering default icon.`);
      return <IconLib.PersonAdd_O size={size} color={color} />; // Default fallback icon
    }
    return <IconComponent size={size} color={color} />;
  };

  return (
    <View
      style={[
        commonStyle.inputContainer,
        {
          backgroundColor: themeBasedInputBackgroundColor,
          borderWidth: 0,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 12,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        accessibilityLabel="Select option"
        style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}
      >
        {showIcon && (
          <View style={{ marginRight: 8 }}>
            {renderIcon(iconName, iconSize, themeBasedIconColor)}
          </View>
        )}
        <Text
          style={{
            color: !selectedValue
              ? themeBasedPlaceholderColor
              : themeBasedTextColor,
            fontSize: placeholderFontSize,
            flex: 1,
          }}
        >
          {displayText}
        </Text>
      </TouchableOpacity>

      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View
          style={[
            {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            commonStyle.modalContainer,
          ]}
        >
          <View
            style={[
              commonStyle.modalContent,
              { backgroundColor: commonStyle.card.backgroundColor },
            ]}
          >
            {options.length > 0 ? (
              options.map(option => (
                <TouchableOpacity
                  key={option.value}
                  onPress={() => {
                    onValueChange(option.value); // Use value instead of label
                    setShowModal(false);
                  }}
                  style={[
                    commonStyle.option,
                    { borderColor: commonStyle.modal.borderColor },
                  ]}
                >
                  <Text style={[commonStyle.modalText]}>{option.label}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={[commonStyle.modalText]}>No options available</Text>
            )}
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={commonStyle.closeButton}
            >
              <Text style={[commonStyle.modalText]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Dropdown;
