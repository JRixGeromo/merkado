import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import DateAndTimePicker from '../../../components/DateAndTimePicker'; // Import DatePicker
import Dropdown from '../../../components/Dropdown'; // Import Dropdown for Gender
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks'; // Import Redux hooks
import { toggleTheme } from '../../../reducers/themeReducer'; // Import theme toggle action
import { commonStyles } from '../../../styles/commonStyles'; // Common styles
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes'; // Import your RootStackParamList
import { gql, useMutation } from '@apollo/client'; // Import Apollo Client's useMutation

// Define GraphQL mutation for registering a user
const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!, 
    $password: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $birthdate: String, 
    $gender: String, 
    $location: String
  ) {
    registerUser(
      email: $email, 
      password: $password, 
      firstName: $firstName, 
      lastName: $lastName, 
      birthdate: $birthdate, 
      gender: $gender, 
      location: $location
    ) {
      token
      user {
        id
        email
      }
    }
  }
`;

const RegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');
  const [firstName, setFirstName] = useState(''); // New field
  const [lastName, setLastName] = useState(''); // New field
  const [birthdate, setBirthdate] = useState(new Date()); // New field
  const [gender, setGender] = useState('male'); // New field with default value

  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const dispatch = useAppDispatch(); // Get dispatch for Redux actions
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Use correct type

  // Use Apollo Client's useMutation hook
  const [registerUser, { loading, error }] = useMutation(REGISTER_USER);

  // Gender options
  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  // Registration logic with validation
  const handleRegister = async () => {
    if (!email || !password || !confirmPassword || !firstName || !lastName) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    try {
      const { data } = await registerUser({
        variables: {
          email,
          password,
          firstName,
          lastName,
          birthdate: birthdate.toISOString().split('T')[0], // Format as YYYY-MM-DD
          gender,
          location: location || '', // Make location optional
        },
      });

      if (data?.registerUser) {
        Alert.alert('Success', 'Registration successful!');
        navigation.navigate('DashboardScreen');
      }
    } catch (err) {
      console.error('Registration error:', err);
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

  const styles = commonStyles(theme); // Dynamically create styles based on the theme
  const { button, buttonText, title, container } = styles; // Destructure commonly used styles
  const handleDateChange = (date: Date) => {
    setBirthdate(date); // Update the selected date
    console.log('Selected date:', date); // Log the selected date
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[container]}>
          <Text style={title}>Register</Text>
          <TextInputWithIcon
            placeholder="First Name"
            iconName="person" // Ionicons for first name
            value={firstName}
            onChangeText={setFirstName}
            style={{ height: 45 }}
            iconSize={20}
          />
          <TextInputWithIcon
            placeholder="Last Name"
            iconName="person" // Ionicons for last name
            value={lastName}
            onChangeText={setLastName}
            style={{ height: 45 }}
            iconSize={20}
          />
          <Dropdown
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Other', value: 'other' },
            ]}
            placeholder="Select Gender"
            iconName="person"
            iconSize={20}
            iconColor="#000"
            textColor="black"
            placeholderFontSize={14}
          />
          <DateAndTimePicker
            onDateChange={(date) => console.log(date)}
            iconName="calendar"
            iconSize={20}
            iconColor="#000"
            placeholder="Select Your Birthdate"
            inputStyle={{ height: 45 }} // Custom styles for the input
            textColor="black" // Custom text color
            placeholderFontSize={14} // Custom placeholder font size
          />

          <TextInputWithIcon
            placeholder="Email"
            iconName="mail" // Ionicons for email
            value={email}
            onChangeText={setEmail}
            style={{ height: 45 }}
            iconSize={20}
          />
          <TextInputWithIcon
            placeholder="Password"
            iconName="lock-closed" // Ionicons for password
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{ height: 45 }}
            iconSize={20}
          />
          <TextInputWithIcon
            placeholder="Confirm Password"
            iconName="lock-closed" // Same icon for confirm password
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={{ height: 45 }}
            iconSize={20}
          />
          <TextInputWithIcon
            placeholder="Location (Optional)"
            iconName="location" // Ionicons for location
            value={location}
            onChangeText={setLocation}
            style={{ height: 45 }}
            iconSize={20}
          />

          {/* Display loading state */}
          {loading && <Text style={buttonText}>Registering...</Text>}

          {/* Display error message if registration failed */}
          {error && <Text style={{ color: 'red' }}>Registration failed: {error.message}</Text>}

          <CustomButton
            title="Register"
            onPress={handleRegister}
            backgroundColor={button?.backgroundColor} // Background color from commonStyles
            color={buttonText?.color} // Text color from commonStyles
          />
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
