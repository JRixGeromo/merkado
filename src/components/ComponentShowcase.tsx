import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import DateTimePickerComponent from '../components/DateTimePicker';
import Dropdown from '../components/Dropdown';
import TextInputWithIcon from '../components/TextInputWithIcon';
import { normalizeHeight } from '../utils/responsive';

// Dummy dropdown options
const dropdownOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

const ComponentShowcase: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(
    dropdownOptions[0].value,
  );
  const [inputValue, setInputValue] = useState('');

  const handleDateChange = (date: Date) => setSelectedDate(date);
  const handleOptionChange = (value: string) => setSelectedOption(value);
  const handleInputChange = (text: string) => setInputValue(text);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reusable Component Showcase</Text>

      {/* Text Input with Icon */}
      <TextInputWithIcon
        placeholder="Enter text"
        iconName="person" // Ionicons icon name
        value={inputValue}
        onChangeText={handleInputChange}
      />

      {/* Date Time Picker */}
      <Text>Date Selected: {selectedDate.toLocaleDateString()}</Text>
      <DateTimePickerComponent mode="date" onDateChange={handleDateChange} />

      {/* Dropdown */}
      <Text>Selected Option: {selectedOption}</Text>
      <Dropdown
        selectedValue={selectedOption}
        onValueChange={value => handleOptionChange(value)}
        options={dropdownOptions}
      />

      {/* Custom Button */}
      <CustomButton
        title="Submit"
        onPress={() =>
          alert(
            `Submitted: ${inputValue}, ${selectedOption}, ${selectedDate.toLocaleDateString()}`,
          )
        }
        backgroundColor="green"
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalizeHeight(20),
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: normalizeHeight(20),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ComponentShowcase;
