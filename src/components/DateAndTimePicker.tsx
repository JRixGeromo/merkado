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
import { commonStyles } from '../styles/commonStyles';
import { useAppSelector } from '../hooks/reduxHooks';
import { normalizeFontSize } from '../utils/responsive';
import { format } from 'date-fns';

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

  const currentTheme = useAppSelector(state => state.theme.theme); // Access current theme (light/dark)
  const commonStyle = commonStyles(currentTheme); // Generate styles based on the current theme

  // Memoize the theme-based styles
  const themeBasedStyles = useMemo(() => {
    return {
      iconColor: iconColor || commonStyle.iconColor.color,
      textColor: textColor || commonStyle.textColor.color,
      placeholderColor:
        placeholderTextColor || commonStyle.placeholderTextColor.color,
      inputBackgroundColor: commonStyle.inputBackgroundColor.backgroundColor,
    };
  }, [iconColor, textColor, placeholderTextColor, commonStyle]);

  const themeBasedIconColor = themeBasedStyles.iconColor;
  const themeBasedTextColor = themeBasedStyles.textColor;
  const themeBasedPlaceholderColor = themeBasedStyles.placeholderColor;
  const themeBasedInputBackgroundColor = themeBasedStyles.inputBackgroundColor;

  // Format date to display based on passed or default date format
  const formattedDate = selectedDate ? format(selectedDate, dateFormat) : '';

  return (
    <View style={{}}>
      <TouchableOpacity
        style={[
          commonStyle.inputContainer,
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
          style={{ marginRight: 4 }} // Add space between icon and input
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
              paddingHorizontal: 10, // Add some padding inside the input field
            },
          ]}
          placeholderTextColor={themeBasedPlaceholderColor} // Placeholder color
        />
      </TouchableOpacity>

      <Modal visible={showCalendar} animationType="slide" transparent={true}>
        <TouchableWithoutFeedback onPress={() => setShowCalendar(false)}>
          <View
            style={[
              commonStyle.modalOverlay,
              {
                flex: 1,
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
              },
            ]}
          >
            <View
              style={{
                backgroundColor: commonStyle.card.backgroundColor,
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
                    selectedColor:
                      commonStyle.selectedDayBackgroundColor.backgroundColor, // Use theme color
                  },
                }}
                theme={{
                  todayTextColor: commonStyle.todayTextColor.color, // Use primary color from theme
                  selectedDayBackgroundColor:
                    commonStyle.selectedDayBackgroundColor.backgroundColor, // Use primary color from theme
                  dayTextColor: commonStyle.dayTextColor.color, // Use text color from theme
                  textDisabledColor: commonStyle.textDisabledColor.color, // Disabled text color
                  monthTextColor: commonStyle.monthTextColor.color, // Month text color
                  arrowColor: commonStyle.arrowColor.color, // Use primary color from theme
                  calendarBackground: commonStyle.card.backgroundColor, // Set background color for the calendar from the theme
                }}
              />
              <TouchableOpacity
                onPress={() => setShowCalendar(false)} // Close calendar
                style={{ marginTop: 20, alignItems: 'center' }}
                accessibilityLabel="Close calendar"
              >
                <Text style={commonStyle.modalText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default DateAndTimePicker;
