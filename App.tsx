import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';
import ProductCard from './src/components/ProductCard'; // Example component
import { useAppDispatch, useAppSelector } from './src/hooks/reduxHooks'; // Custom hooks for Redux
import { toggleTheme } from './src/reducers/themeReducer'; // Import the toggleTheme action
import CustomButton from './src/components/CustomButton'; // Reusable Button
import TextInputWithIcon from './src/components/TextInputWithIcon'; // Reusable TextInput with Icon
import DateTimePickerComponent from './src/components/DateTimePicker'; // Reusable DatePicker
import Dropdown from './src/components/Dropdown'; // Reusable Dropdown

const dropdownOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

const App = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  const dynamicStyles = styles(theme);

  // Component state
  const [inputValue, setInputValue] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedOption, setSelectedOption] = React.useState(dropdownOptions[0].value);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={dynamicStyles.scrollView}>
      <View style={dynamicStyles.container}>
        <Text style={dynamicStyles.title}>Welcome to the Themed App</Text>

        <ProductCard />

        {/* Custom Button */}
        <CustomButton
          title="Custom Button"
          onPress={() => alert('Custom Button Pressed')}
          backgroundColor={theme === 'light' ? 'blue' : 'gray'}
          color="#fff"
        />

        {/* TextInput with Icon */}
        <TextInputWithIcon
          placeholder="Enter your text"
          iconName="person"  // Ionicons icon name
          value={inputValue}
          onChangeText={setInputValue}
        />

        {/* Date Picker */}
        <DateTimePickerComponent mode="date" onDateChange={setSelectedDate} />
        <Text>Date Selected: {selectedDate.toLocaleDateString()}</Text>

        {/* Dropdown */}
        <Dropdown
          selectedValue={selectedOption}
          onValueChange={setSelectedOption}
          options={dropdownOptions}
        />
        <Text>Selected Option: {selectedOption}</Text>

        {/* Button to toggle theme */}
        <Button title="Toggle Theme" onPress={() => dispatch(toggleTheme())} />
      </View>
    </ScrollView>
  );
};

// Define dynamic styles based on the theme
const styles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    scrollView: {
      flex: 1,
      backgroundColor: theme === 'light' ? '#F7F7F7' : '#181818',
    },
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      color: theme === 'light' ? '#333' : '#FFF',
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 20,
    },
  });

export default App;
