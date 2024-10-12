import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  ActivityIndicator,  // Import ActivityIndicator
} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import DateAndTimePicker from '../../../components/DateAndTimePicker'; // Import DatePicker
import Dropdown from '../../../components/Dropdown'; // Import Dropdown for Gender
import { useAppSelector } from '../../../hooks/reduxHooks'; // Import Redux hooks
import { commonStyles } from '../../../styles/commonStyles'; // Common styles
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes'; // Import your RootStackParamList
import { gql, useMutation } from '@apollo/client'; // Import Apollo Client's useMutation
import { useTranslation } from 'react-i18next'; // Import the translation hook
import { theme as appTheme } from '../../../styles/theme'; // Import your theme for direct use

// Define GraphQL mutation for registering a user
const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!, 
    $password: String!, 
    $firstName: String!, 
    $lastName: String!, 
    $birthdate: String, 
    $gender: Gender!
  ) {
    registerUser(
      email: $email, 
      password: $password, 
      firstName: $firstName, 
      lastName: $lastName, 
      birthdate: $birthdate, 
      gender: $gender
    ) {
      token
      user {
        id
        email
        firstName
        lastName
        birthdate
        gender
      }
    }
  }
`;


const RegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [gender, setGender] = useState('');

  const theme = useAppSelector((state) => state.theme.theme); // Get current theme from Redux
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Use correct type
  const { t } = useTranslation(); // Initialize translation

  // Use Apollo Client's useMutation hook
  const [registerUser, { loading, error }] = useMutation(REGISTER_USER);

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
          birthdate: birthdate.toISOString().split('T')[0], // Format birthdate as YYYY-MM-DD
          gender: gender || 'OTHER', // Make sure gender is one of "MALE", "FEMALE", or "OTHER"
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

  const commonStyle = commonStyles(theme); // Dynamically create styles based on the theme
  const { buttonText, container } = commonStyle; // Destructure commonly used styles
  const selectedTheme = appTheme[theme]; // Access the current theme (light or dark)

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[container]}>
          <Image
            source={require('../../../../assets/logo.png')} // Adjust the path to your logo
            style={commonStyle.logo} // Add any custom styles for the logo image
          />
          <TextInputWithIcon
            placeholder="First Name"
            iconName="person"
            value={firstName}
            onChangeText={setFirstName}
            style={{ height: 45 }}
          />
          <TextInputWithIcon
            placeholder="Last Name"
            iconName="person"
            value={lastName}
            onChangeText={setLastName}
            style={{ height: 45 }}
          />
          <Dropdown
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            options={[
              { label: 'Male', value: 'MALE' },
              { label: 'Female', value: 'FEMALE' },
              { label: 'Other', value: 'OTHER' },
            ]}
            placeholder="Gender"
            iconName="person"
            iconSize={20}
          />

          <DateAndTimePicker
            onDateChange={setBirthdate} // Correctly handle the date change
            iconName="calendar"
            iconSize={20}
            placeholder="Birth Date"
            inputStyle={{ height: 40 }}
          />

          <TextInputWithIcon
            placeholder="Email"
            iconName="mail"
            value={email}
            onChangeText={setEmail}
            style={{ height: 45 }}
          />
          <TextInputWithIcon
            placeholder="Password"
            iconName="lock-closed"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{ height: 45 }}
          />
          <TextInputWithIcon
            placeholder="Confirm Password"
            iconName="lock-closed"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={{ height: 45 }}
          />

          {/* Display Activity Indicator when loading */}
          {loading && (
            <View style={{ marginTop: 20, marginBottom: 20 }}>
              <ActivityIndicator
              size="large"
              color={selectedTheme.primary} // Use primary color directly from the theme
              style={commonStyle.loader}
            />
            </View>
          )}

          {/* Button will show only when not loading */}
          {!loading && (
            <CustomButton
              title={t('register')}
              onPress={handleRegister}
              color={buttonText?.color}
            />
          )}

          {/* Display error message if registration failed */}
          {error && <Text style={{ color: 'red' }}>Registration failed: {error.message}</Text>}
          
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={[commonStyle.paragraph, { marginTop: 20 }]}>
              {t('hasAccount')}
              <Text style={[commonStyle.linkText, { fontWeight: 'bold' }]}>
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
