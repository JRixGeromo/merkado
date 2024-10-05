import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks'; // Import Redux hooks
import { toggleTheme } from '../../../reducers/themeReducer'; // Import theme toggle action
import Box from '../../../components/Box';
import CustomButton from '../../../components/CustomButton';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import { commonStyles } from '../../../styles/commonStyles'; // Common styles

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useAppSelector((state) => state.theme.theme); // Get current theme from Redux
  const dispatch = useAppDispatch(); // Get dispatch for Redux actions

  const handleLogin = () => {
    // Handle login logic
    console.log('Login pressed');
  };

  return (
    <Box style={[commonStyles.container, { backgroundColor: theme === 'light' ? '#fff' : '#333' }]}>
      {/* Welcome Text */}
      <Text style={[commonStyles.title, { color: theme === 'light' ? '#333' : '#fff' }]}>
        Welcome Back
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

      {/* Login Button */}
      <CustomButton
        title="Login"
        onPress={handleLogin}
        backgroundColor="#4CAF50" // Green color for the button
        color="#fff"
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={commonStyles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>

      {/* Or Login with Social */}
      <Text style={commonStyles.orText}>Or login with</Text>

      {/* Social Login Button */}
      <CustomButton
        title="Login with Google"
        onPress={() => console.log('Google Login Pressed')}
        backgroundColor="#4285F4" // Blue color for the Google button
        color="#fff"
      />
    </Box>
  );
};

export default LoginScreen;
