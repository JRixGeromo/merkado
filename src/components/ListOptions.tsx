import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useAppSelector } from '../hooks/reduxHooks';
import { normalizeFontSize } from '../utils/responsive';
import IconLib from './IconLib'; // Ensure this is the correct path to IconLib
import { compStyles } from './styles/componentStyles'; // Import your style
import { baseStyles } from '../styles/baseStyles';
import { theme as appTheme } from '../styles/theme';
import { useTranslation } from 'react-i18next'; // Import translation hook
import CustomButton from './CustomButton'; // Import your CustomButton component

interface ListOptionsProps {
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

const ListOptions: React.FC<ListOptionsProps> = ({
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
  const themeType = useAppSelector(state => state.theme.theme);
  const compStyle = compStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  // Inside the component
  const [addNewModalVisible, setAddNewModalVisible] = useState(false);
  const [newOption, setNewOption] = useState('');

  const myTheme = appTheme[themeType];
  const { t } = useTranslation();

  // Memoize the theme-based styles
  const themeBasedStyles = useMemo(() => {
    return {
      iconColor: iconColor || myTheme.iconColor1st,
      textColor: textColor || myTheme.text2nd,
      placeholderColor:
        placeholderTextColor || myTheme.textPHolderInfo,
      inputBackgroundColor:
        customBackground || myTheme.inputBackgroundColor,
    };
  }, [iconColor, textColor, placeholderTextColor]);

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
  const renderIcon = (
    iconName: keyof typeof IconLib,
    size: number,
    color: string,
  ) => {
    const IconComponent = IconLib[iconName];
    if (!IconComponent) {
      console.warn(
        `Icon ${iconName} not found in IconLib. Rendering default icon.`,
      );
      return <IconLib.PersonAdd_O size={size} color={color} />; // Default fallback icon
    }
    return <IconComponent size={size} color={color} />;
  };

  const handleAddNewOption = () => {
    if (newOption.trim() === '') {
      Alert.alert(t('Error'), t('Please enter a valid option.'));
      return;
    }
    const newEntry = {
      label: newOption,
      value: newOption.toLowerCase().replace(/\s/g, '_'),
    };
    options.push(newEntry);
    onValueChange(newEntry.value);
    setAddNewModalVisible(false);
    setNewOption('');
  };

  return (
    <View
      style={[
        compStyle.inputContainer,
        {
          backgroundColor: themeBasedInputBackgroundColor,
          borderWidth: 0,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 10,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        accessibilityLabel="Select option"
        style={baseStyle.columnsInside}
      >
        {showIcon && (
          <View style={{ marginRight: 10 }}>
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
            baseStyle.modalContainer,
          ]}
        >
          <View
            style={[
              compStyle.modalContent,
              { backgroundColor: myTheme.cardBackground },
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
                    compStyle.dropdownOption,
                    { borderColor: myTheme.borderColorGray },
                  ]}
                >
                  <Text style={[compStyle.modalText]}>{option.label}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={[compStyle.modalText]}>No options available</Text>
            )}
            <TouchableOpacity
              onPress={() => setAddNewModalVisible(true)}
              style={compStyle.dropdownOption} // This is a button without a border
            >
              <Text style={compStyle.modalText}>{t('Add New')}</Text>
            </TouchableOpacity>
            <View style={baseStyle.verticalSpacerM} />
            <CustomButton
              title={t('Close')}
              onPress={() => setShowModal(false)}
              backgroundColor={myTheme.buttonClose} // Use theme for close button color
              borderRadius={2} // You can set this dynamically too
              color={myTheme.buttonText1st}
            />
          </View>
        </View>
      </Modal>
      <Modal
        visible={addNewModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View
          style={[
            baseStyle.modalContainer,
            {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
          ]}
        >
          <View
            style={[
              compStyle.modalContent,
              { backgroundColor: myTheme.cardBackground },
            ]}
          >
            <Text style={[compStyle.modalText, { marginBottom: 10 }]}>
              {t('Enter New Option')}
            </Text>
            <TextInput
              placeholder={t('New Option')}
              value={newOption}
              onChangeText={setNewOption}
              style={[baseStyle.input, { marginBottom: 10 }]}
              placeholderTextColor={myTheme.textPHolderInfo}
            />
            <CustomButton
              title={t('Add')}
              onPress={handleAddNewOption}
              backgroundColor={myTheme.button1st}
              color={myTheme.buttonText1st}
              borderRadius={2}
            />
            <CustomButton
              title={t('Cancel')}
              onPress={() => setAddNewModalVisible(false)}
              backgroundColor={myTheme.buttonClose}
              color={myTheme.buttonText1st}
              borderRadius={2}
              style={{ marginTop: 10 }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ListOptions;
