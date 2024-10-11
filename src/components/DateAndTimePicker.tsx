import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
import { commonStyles } from '../styles/commonStyles'; // Import your common styles
import { useAppSelector } from '../hooks/reduxHooks'; // Import your redux selector for theme

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
}

const DateAndTimePicker: React.FC<DateAndTimePickerProps> = ({
  onDateChange,
  initialDate, // Removed default value
  mode = 'date',
  placeholder = "Select Date", // Default placeholder text
  iconName,
  iconSize = 20, // Default icon size
  iconColor = '#000', // Default icon color
  inputStyle = {}, // Additional styles for the TextInput
  textColor = 'black', // Default text color
  placeholderFontSize = 14, // Default placeholder font size
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined); // Removed default date
  const [showCalendar, setShowCalendar] = useState(false); // Toggle calendar visibility

  const handleDayPress = (day: { dateString: string }) => {
    const date = new Date(day.dateString);
    setSelectedDate(date); // Update the selected date
    onDateChange(date); // Pass the selected date back to the parent component
    setShowCalendar(false); // Close the calendar after selection
  };

  const currentTheme = useAppSelector(state => state.theme.theme); // Access current theme (light/dark)
  const commonStyle = commonStyles(currentTheme); // Generate styles based on the current theme

  return (
    <View style={{ marginTop: 20 }}>
      {/* TextInput for displaying selected date with calendar icon */}
      <TouchableOpacity
        style={[commonStyle.inputContainer, { flexDirection: 'row', alignItems: 'center', padding: 15 }]}
        onPress={() => setShowCalendar(true)} // Show calendar on press
      >
        <Icon
          name={iconName}
          size={iconSize}
          color={iconColor} // Use icon color passed as a prop
          style={{ marginRight: 10 }} // Add space between icon and input
        />
        <TextInput
          placeholder={placeholder} // Use the passed placeholder
          value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''} // Format date to display
          editable={false} // Make it read-only, only clickable to open calendar
          style={[
            commonStyle.input,
            inputStyle, // Apply additional styles passed as a prop
            { color: textColor, fontSize: placeholderFontSize }, // Control text color and placeholder font size
          ]}
          placeholderTextColor="#888" // Placeholder color
        />
      </TouchableOpacity>

      <Modal visible={showCalendar} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={{
                [selectedDate?.toISOString().split('T')[0] || '']: {
                  selected: true,
                  marked: true,
                  selectedColor: '#00adf5', // Customize selected color
                },
              }}
              theme={{
                todayTextColor: '#00adf5',
                selectedDayBackgroundColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                monthTextColor: 'black',
                arrowColor: 'orange',
              }}
            />
            <TouchableOpacity
              onPress={() => setShowCalendar(false)} // Close calendar
              style={{ marginTop: 20, alignItems: 'center' }}
            >
              <Text style={{ color: 'blue' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DateAndTimePicker;
