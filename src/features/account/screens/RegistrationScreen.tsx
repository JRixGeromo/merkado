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
import { useTranslation } from 'react-i18next'; // Import the translation hook

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
  const [gender, setGender] = useState(''); // New field with default value

  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const dispatch = useAppDispatch(); // Get dispatch for Redux actions
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Use correct type
  const { t, i18n } = useTranslation(); // Initialize translation

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
            selectedValue={gender} // The currently selected value, controlled by the `gender` state
            onValueChange={(itemValue) => setGender(itemValue)} // Callback to update the `gender` state when a new value is selected
            options={[ // The list of options displayed in the dropdown
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Other', value: 'other' },
            ]}
            placeholder="Select Gender" // Placeholder text when no value is selected
            iconName="person" // Icon to display inside the dropdown
            iconSize={20} // Size of the icon
            placeholderFontSize={14} // Font size of the placeholder text
          />

            <DateAndTimePicker
              onDateChange={(date) => console.log(date)} // Correctly handle the date change
              iconName="calendar" // Example icon for the date picker
              iconSize={20} // Icon size
              placeholder="Select Date" // Placeholder for date input
              inputStyle={{ height: 40 }} // Example of styling the input
              placeholderFontSize={14} // Placeholder font size
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
            title={t('register')}
            onPress={handleRegister}
            backgroundColor={button?.backgroundColor}
            color={buttonText?.color}
          />
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={[styles.forgotPasswordText, { marginTop: 20 }]}>
              {t('hasAccount')}
              <Text style={{ fontWeight: 'bold', color: title?.color  }}>
                {" "}{t('login')}
              </Text>
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
