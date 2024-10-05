import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks'; // Import Redux hooks
import { toggleTheme } from '../../../reducers/themeReducer'; // Import theme toggle action
import { commonStyles } from '../../../styles/commonStyles'; // Common styles
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes'; // Import your RootStackParamList
import Icon from 'react-native-vector-icons/Ionicons'; // For the theme toggle icon

const RegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');

  const theme = useAppSelector((state) => state.theme.theme); // Get current theme from Redux
  const dispatch = useAppDispatch(); // Get dispatch for Redux actions
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Use correct type

  // Registration logic with validation
  const handleRegister = () => {
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

  const styles = commonStyles(theme); // Dynamically create styles based on the theme
  const { button, buttonText, title, container } = styles; // Destructure commonly used styles

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[container]}>
          <Text style={title}>
            Register
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

          {/* Confirm Password Input */}
          <TextInputWithIcon
            placeholder="Confirm Password"
            iconName="lock-closed" // Same icon for confirm password
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={{ height: 50 }}
          />

          {/* Optional Location Input */}
          <TextInputWithIcon
            placeholder="Location (Optional)"
            iconName="location" // Ionicons for location
            value={location}
            onChangeText={setLocation}
            style={{ height: 50 }}
          />

          {/* Register Button */}
          <CustomButton
            title="Register"
            onPress={handleRegister}
            backgroundColor={button?.backgroundColor} // Background color from commonStyles
            color={buttonText?.color} // Text color from commonStyles
          />

          {/* Login Link */}
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={[{ marginTop: 20 }, buttonText]}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
