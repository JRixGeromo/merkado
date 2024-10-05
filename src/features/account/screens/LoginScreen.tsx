import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { toggleTheme } from '../../../reducers/themeReducer';
import Box from '../../../components/Box';
import CustomButton from '../../../components/CustomButton';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import { commonStyles } from '../../../styles/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';  // FontAwesome icons for social media

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

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
        style={{ height: 50 }} 
      />

      {/* Password Input */}
      <TextInputWithIcon
        placeholder="Password"
        iconName="lock-closed" // Ionicons for password
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ height: 50 }} 
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

      {/* Social Login Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
        {/* Google Login Button */}
        <TouchableOpacity
          style={[commonStyles.socialButton, { backgroundColor: '#4285F4' }]} // Google button styling
          onPress={() => console.log('Google Login Pressed')}
        >
          <Icon name="google" size={20} color="#fff" style={{ marginRight: 10 }} />
          <Text style={{ color: '#fff' }}>Google</Text>
        </TouchableOpacity>

        {/* Facebook Login Button */}
        <TouchableOpacity
          style={[commonStyles.socialButton, { backgroundColor: '#3b5998' }]} // Facebook button styling
          onPress={() => console.log('Facebook Login Pressed')}
        >
          <Icon name="facebook" size={20} color="#fff" style={{ marginRight: 10 }} />
          <Text style={{ color: '#fff' }}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </Box>
  );
};

export default LoginScreen;
