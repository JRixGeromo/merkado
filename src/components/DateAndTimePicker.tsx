import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
import { commonStyles } from '../styles/commonStyles'; // Import your common styles
import { useAppSelector } from '../hooks/reduxHooks'; // Import your redux selector for theme

interface DateAndTimePickerProps {
  onDateChange: (date: Date) => void;
  initialDate?: Date; // Optional initial date
  mode?: 'date' | 'datetime'; // Optional mode, default is 'date'
  placeholder?: string; // Placeholder for the input field
}

const DateAndTimePicker: React.FC<DateAndTimePickerProps> = ({
  onDateChange,
  initialDate = new Date(),
  mode = 'date',
  placeholder = "Select Date", // Default placeholder text
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(initialDate);
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
      {/* Use TextInput for displaying selected date with calendar icon */}
      <TouchableOpacity
        style={[
          commonStyle.inputContainer,
          { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff' }, // Ensure background is white
        ]}
        onPress={() => setShowCalendar(true)} // Show calendar on press
      >
        <Icon
          name="calendar"
          size={20}
          color="#000" // Customize icon color if needed
          style={{ marginRight: 10 }} // Add space between icon and input
        />
        <TextInput
          placeholder={placeholder} // Use the passed placeholder
          value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''} // Format date to display
          editable={false} // Make it read-only, only clickable to open calendar
          style={[
            commonStyle.input,
            { flex: 1, color: 'black' }, // Ensure text color is black
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
