import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Box from '../../../components/Box';
import CustomButton from '../../../components/CustomButton';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import { commonStyles } from '../../../styles/commonStyles';

const RegistrationScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [location, setLocation] = useState('');
  
    const handleRegister = () => {
      // Add validation and registration logic here
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
  
      // Proceed with the registration API call
    };
  
    return (
      <Box style={commonStyles.container}>
        <Text style={commonStyles.title}>Register</Text>
  
        <TextInputWithIcon
          placeholder="Email"
          iconName="email"  // Adjusted to match your convention
          value={email}
          onChangeText={setEmail}
        />
        
        <TextInputWithIcon
          placeholder="Password"
          iconName="lock"  // Adjusted to match your convention
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        
        <TextInputWithIcon
          placeholder="Confirm Password"
          iconName="lock"  // Adjusted to match your convention
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        
        {/* Optional field for vendor registration */}
        <TextInputWithIcon
          placeholder="Location (Optional)"
          iconName="location-pin"  // Adjusted to match your convention
          value={location}
          onChangeText={setLocation}
        />
  
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