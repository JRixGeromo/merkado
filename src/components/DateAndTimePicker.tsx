import React, { useState, useMemo } from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import { compStyles } from './styles/componentStyles'; // Import your style
import { commonStyles } from '../styles/commonStyles';
import { baseStyles } from '../styles/baseStyles';
import CustomButton from './CustomButton';
import { useAppSelector } from '../hooks/reduxHooks';
import { theme as appTheme } from '../styles/theme';
import { normalizeFontSize } from '../utils/responsive';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next'; // Import the translation hook

interface DateAndTimePickerProps {
  onDateChange: (date: Date) => void;
  initialDate?: Date; // Optional initial date
  mode?: 'date' | 'datetime'; // Optional mode, default is 'date'
  placeholder?: string; // Placeholder for the input field
  iconName: string; // Name of the icon to display
  iconSize?: number; // Size of the icon
  iconColor?: string; // Color of the icon
  inputStyle?: object; // Additional styles for the TextInput
  textColor?: string; // Color for the text input
  placeholderFontSize?: number; // Font size for the placeholder
  placeholderTextColor?: string; // Placeholder text color
  dateFormat?: string; // Date format
}

const DateAndTimePicker: React.FC<DateAndTimePickerProps> = ({
  onDateChange,
  initialDate,
  mode = 'date',
  placeholder = 'Select Date', // Default placeholder text
  iconName,
  iconSize = normalizeFontSize(20),
  iconColor, // Default icon color
  inputStyle = {}, // Additional styles for the TextInput
  textColor, // Use the text color from the theme
  placeholderFontSize = 14, // Default placeholder font size
  placeholderTextColor, // Use the color from the theme
  dateFormat = 'yyyy-MM-dd', // Default date format
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    initialDate,
  ); // Start with no initial date
  const [showCalendar, setShowCalendar] = useState(false); // Toggle calendar visibility

  const handleDayPress = (day: { dateString: string }) => {
    const date = new Date(day.dateString);
    setSelectedDate(date); // Update the selected date
    onDateChange(date); // Pass the selected date back to the parent component
    setShowCalendar(false); // Close the calendar after selection
  };

  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType); // This is fine
  const compStyle = compStyles(themeType); // This is fine
  const baseStyle = baseStyles(themeType); // Rename this to avoid conflict

  const myTheme = appTheme[themeType];

  const { t } = useTranslation(); // Initialize translation

  // Memoize the theme-based styles
  const themeBasedStyles = useMemo(() => {
    return {
      iconColor: iconColor || myTheme.iconColor1st,
      textColor: textColor || myTheme.text2nd,
      placeholderColor:
        placeholderTextColor || myTheme.textPHolderInfo,
      inputBackgroundColor: myTheme.inputBackgroundColor,
    };
  }, [iconColor, textColor, placeholderTextColor]);

  const themeBasedIconColor = themeBasedStyles.iconColor;
  const themeBasedPlaceholderColor = themeBasedStyles.placeholderColor;
  const themeBasedInputBackgroundColor = themeBasedStyles.inputBackgroundColor;

  // Format date to display based on passed or default date format
  const formattedDate = selectedDate ? format(selectedDate, dateFormat) : '';

  return (
    <View style={{}}>
      <TouchableOpacity
        style={[
          compStyle.inputContainer,
          {
            backgroundColor: themeBasedInputBackgroundColor,
            borderWidth: 0,
          },
        ]}
        onPress={() => setShowCalendar(true)} // Show calendar on press
        accessibilityLabel="Open date picker" // Accessibility
        accessibilityHint="Opens the calendar to select a date"
      >
        <Icon
          name={iconName}
          size={iconSize}
          color={themeBasedIconColor}
          style={{ marginRight: 10 }} // Add space between icon and input
        />
        <TextInput
          placeholder={placeholder} // Use the passed placeholder
          value={formattedDate} // Display formatted date
          editable={false} // Make it read-only, only clickable to open calendar
          style={[
            commonStyle.input, // Apply input styles
            inputStyle, // Additional styles passed as a prop
            {
              color: themeBasedStyles.textColor,
              fontSize: placeholderFontSize,
              borderWidth: 0, // Remove the border if needed
              paddingHorizontal: 0, // Add some padding inside the input field
            },
          ]}
          placeholderTextColor={themeBasedPlaceholderColor} // Placeholder color
        />
      </TouchableOpacity>

      <Modal visible={showCalendar} animationType="slide" transparent={true}>
        <TouchableWithoutFeedback onPress={() => setShowCalendar(false)}>
          <View
            style={[
              compStyle.modalOverlay,
              {
                flex: 1,
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
              },
            ]}
          >
            <View
              style={{
                backgroundColor: myTheme.cardBackground,
                borderRadius: 10,
                padding: 20,
                width: '80%', // Adjust the width as needed
              }}
            >
              <Calendar
                onDayPress={handleDayPress}
                markedDates={{
                  [selectedDate?.toISOString().split('T')[0] || '']: {
                    selected: true,
                    marked: true,
                    selectedColor: myTheme.text1st, // Use theme color
                  },
                }}
                theme={{
                  todayTextColor: myTheme.text1st, // Use primary color from theme
                  selectedDayBackgroundColor: myTheme.text1st, // Use primary color from theme
                  dayTextColor: myTheme.text1st, // Use text color from theme
                  textDisabledColor: myTheme.textDisabled, // Disabled text color
                  monthTextColor: myTheme.text2nd, // Month text color
                  arrowColor: myTheme.iconColor1st, // Use primary color from theme
                  calendarBackground: myTheme.cardBackground, // Set background color for the calendar from the theme
                }}
              />
              <CustomButton
                title={t('Close')}
                onPress={() => setShowCalendar(false)} // Close calendar
                backgroundColor={myTheme.buttonClose} // Use theme for close button color
                borderRadius={2} // You can set this dynamically too
                color={myTheme.buttonText1st}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default DateAndTimePicker;
