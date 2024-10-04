import React, { useState } from 'react';

import { View, Text } from 'react-native';
import Box from '../../../components/Box';
import CustomButton from '../../../components/CustomButton'; // Reusable Button
import TextInputWithIcon from '../../../components/TextInputWithIcon'; // Reusable TextInput with Icon
import DateTimePickerComponent from '../../../components/DateTimePicker'; // Reusable DatePicker
import Dropdown from '../../../components/Dropdown'; // Reusable Dropdown
import { commonStyles } from '../../../styles/commonStyles';

const DashboardScreen = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState('');
    
    const dropdownOptions = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ];
  
    const handleProfilePress = () => {
      alert('Navigating to Profile');
    };
  
    const handleOrdersPress = () => {
      alert('Navigating to Orders');
    };
  
    return (
      <Box style={commonStyles.container}>
        <Text style={commonStyles.title}>Welcome to Your Dashboard</Text>
  
        {/* Custom Button for Profile */}
        <CustomButton
          title="View Profile"
          onPress={handleProfilePress}
          backgroundColor="blue"
          color="#fff"
        />
  
        {/* Custom Button for Orders */}
        <CustomButton
          title="View Orders"
          onPress={handleOrdersPress}
          backgroundColor="blue"
          color="#fff"
        />
  
        {/* TextInput with Icon */}
        <Box>
          <TextInputWithIcon
            placeholder="Enter your text"
            iconName="person"  // Ionicons icon name
            value={inputValue}
            onChangeText={setInputValue}
          />
        </Box>
  
        {/* Date Picker */}
        <DateTimePickerComponent mode="date" onDateChange={setSelectedDate} />
        <Text>Date Selected: {selectedDate.toLocaleDateString()}</Text>
  
        {/* Dropdown */}
        <Dropdown
          selectedValue={selectedOption}
          onValueChange={setSelectedOption}
          options={dropdownOptions}
        />
      </Box>
    );
  };
  
  export default DashboardScreen;