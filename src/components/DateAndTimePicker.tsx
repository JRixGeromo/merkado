import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '../styles/commonStyles';
import { useAppSelector } from '../hooks/reduxHooks';

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
  initialDate = new Date(), // Use new Date() as default if not provided
  mode = 'date',
  placeholder = "Select Date",
  iconName,
  iconSize = 20,
  iconColor = '#000',
  inputStyle = {},
  textColor = 'black',
  placeholderFontSize = 14,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(initialDate);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDayPress = (day: { dateString: string }) => {
    const date = new Date(day.dateString);
    setSelectedDate(date);
    onDateChange(date);
    setShowCalendar(false);
  };

  const currentTheme = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(currentTheme);

  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity
        style={[commonStyle.inputContainer, { flexDirection: 'row', alignItems: 'center', padding: 15 }]}
        onPress={() => setShowCalendar(true)} // Show calendar on press
        accessibilityLabel="Select date" // Accessibility
      >
        <Icon
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={{ marginRight: 10 }}
        />
        <TextInput
          placeholder={placeholder}
          value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
          editable={false} // Read-only to open calendar
          style={[
            commonStyle.input,
            inputStyle,
            { color: textColor, fontSize: placeholderFontSize },
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
                  selectedColor: '#00adf5',
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
