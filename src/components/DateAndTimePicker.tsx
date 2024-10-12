import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '../styles/commonStyles';
import { useAppSelector } from '../hooks/reduxHooks';
import { normalizeFontSize } from '../utils/responsive';

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
}

const DateAndTimePicker: React.FC<DateAndTimePickerProps> = ({
  onDateChange,
  initialDate,
  mode = 'date',
  placeholder = "Select Date", // Default placeholder text
  iconName,
  iconSize = normalizeFontSize(20),
  iconColor = '#000', // Default icon color
  inputStyle = {}, // Additional styles for the TextInput
  textColor, // Use the text color from the theme
  placeholderFontSize = 14, // Default placeholder font size
  placeholderTextColor, // Use the color from the theme
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(initialDate); // Start with no initial date
  const [showCalendar, setShowCalendar] = useState(false); // Toggle calendar visibility

  const handleDayPress = (day: { dateString: string }) => {
    const date = new Date(day.dateString);
    setSelectedDate(date); // Update the selected date
    onDateChange(date); // Pass the selected date back to the parent component
    setShowCalendar(false); // Close the calendar after selection
  };

  const currentTheme = useAppSelector(state => state.theme.theme); // Access current theme (light/dark)
  const commonStyle = commonStyles(currentTheme); // Generate styles based on the current theme

  // Fallback to theme-based colors if not provided as props
  const themeBasedIconColor = iconColor || commonStyle.iconColor.color; 
  const themeBasedTextColor = textColor || commonStyle.textColor.color;
  const themeBasedPlaceholderColor = placeholderTextColor || commonStyle.placeholderTextColor.color;
  
  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity
        style={[commonStyle.inputContainer, { flexDirection: 'row', alignItems: 'center', padding: 15 }]} // Apply inputContainer styles
        onPress={() => setShowCalendar(true)} // Show calendar on press
        accessibilityLabel="Select date" // Accessibility
      >
        <Icon
          name={iconName}
          size={iconSize}
          color={themeBasedIconColor}
          style={{ marginRight: 10 }} // Add space between icon and input
        />
        <TextInput
          placeholder={placeholder} // Use the passed placeholder
          value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''} // Format date to display
          editable={false} // Make it read-only, only clickable to open calendar
          style={[
            commonStyle.input, // Apply input styles
            inputStyle, // Additional styles passed as a prop
            { color: themeBasedTextColor, fontSize: placeholderFontSize }, // Control text color and placeholder font size
          ]}
          placeholderTextColor={themeBasedPlaceholderColor} // Placeholder color
        />
      </TouchableOpacity>

      <Modal visible={showCalendar} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: commonStyle.modal.backgroundColor  }}>
          <View style={{ backgroundColor: commonStyle.card.backgroundColor, borderRadius: 10, padding: 20 }}>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={{
                [selectedDate?.toISOString().split('T')[0] || '']: {
                  selected: true,
                  marked: true,
                  selectedColor: commonStyle.selectedDayBackgroundColor.backgroundColor, // Use theme color
                },
              }}
              theme={{
                todayTextColor: commonStyle.todayTextColor.color, // Use primary color from theme
                selectedDayBackgroundColor: commonStyle.selectedDayBackgroundColor.backgroundColor, // Use primary color from theme
                dayTextColor: commonStyle.dayTextColor.color, // Use text color from theme
                textDisabledColor: commonStyle.textDisabledColor.color, // Disabled text color
                monthTextColor: commonStyle.monthTextColor.color, // Month text color
                arrowColor: commonStyle.arrowColor.color, // Use primary color from theme
              }}
            />
            <TouchableOpacity
              onPress={() => setShowCalendar(false)} // Close calendar
              style={{ marginTop: 20, alignItems: 'center' }}
            >
              <Text style={[ commonStyle.modalText ]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DateAndTimePicker;
