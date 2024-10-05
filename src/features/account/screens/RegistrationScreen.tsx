import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import Box from '../../../components/Box';
import CustomButton from '../../../components/CustomButton';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks'; // Import Redux hooks
import { toggleTheme } from '../../../reducers/themeReducer'; // Import theme toggle action
import { commonStyles } from '../../../styles/commonStyles'; // Common styles

const RegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');

  const theme = useAppSelector((state) => state.theme.theme); // Get current theme from Redux
  const dispatch = useAppDispatch(); // Get dispatch for Redux actions

  const handleRegister = () => {
    // Add validation logic here
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    // Proceed with the registration logic (e.g., API call)
    Alert.alert('Success', 'Registration successful!');
  };

  return (
    <Box style={[commonStyles.container, { backgroundColor: theme === 'light' ? '#fff' : '#333' }]}>
      <Text style={[commonStyles.title, { color: theme === 'light' ? '#333' : '#fff' }]}>
        Register
      </Text>

      {/* Email Input */}
      <TextInputWithIcon
        placeholder="Email"
        iconName="mail" // Ionicons for email
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInputWithIcon
        placeholder="Password"
        iconName="lock-closed" // Ionicons for password
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Confirm Password Input */}
      <TextInputWithIcon
        placeholder="Confirm Password"
        iconName="lock-closed" // Same icon for confirm password
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Optional Location Input */}
      <TextInputWithIcon
        placeholder="Location (Optional)"
        iconName="location" // Ionicons for location
        value={location}
        onChangeText={setLocation}
      />

      {/* Register Button */}
      <CustomButton
        title="Register"
        onPress={handleRegister}
        backgroundColor="blue"
        color="#fff"
      />
    </Box>
  );
};

export default RegistrationScreen;
