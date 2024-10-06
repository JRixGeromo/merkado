import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { toggleTheme } from '../../../reducers/themeReducer';
import CustomButton from '../../../components/CustomButton';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import { commonStyles } from '../../../styles/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { RootStackParamList } from '../../../navigationTypes'; // Import your navigation types
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Correct import for stack navigation

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const dispatch = useAppDispatch(); // Get dispatch for Redux actions

  const navigation = useNavigation<NavigationProp>(); // Ensure proper type for navigation

  const handleLogin = () => {
    console.log('Login pressed');
    navigation.navigate('DashboardScreen'); // Navigate to DashboardScreen after login
  };

  const navigateToRegister = () => {
    navigation.navigate('RegistrationScreen');
  };

  const styles = commonStyles(theme); // Dynamically create styles based on the theme
  const {
    button,
    buttonText,
    socialButtonText,
    googleButton,
    facebookButton,
    title,
  } = styles;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={title}>Welcome Back</Text>

          <TextInputWithIcon
            placeholder="Email"
            iconName="mail"
            value={email}
            onChangeText={setEmail}
            style={{ height: 50 }}
          />

          <TextInputWithIcon
            placeholder="Password"
            iconName="lock-closed"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{ height: 50 }}
          />

          <CustomButton
            title="Login"
            onPress={handleLogin}
            backgroundColor={button?.backgroundColor}
            color={buttonText?.color}
          />

          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Or login with</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
            }}
          >
            <TouchableOpacity
              style={[styles.socialButton, googleButton]}
              onPress={() => console.log('Google Login Pressed')}
            >
              <Icon
                name="google"
                size={20}
                color={socialButtonText?.color}
                style={{ marginRight: 10 }}
              />
              <Text style={socialButtonText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.socialButton, facebookButton]}
              onPress={() => console.log('Facebook Login Pressed')}
            >
              <Icon
                name="facebook"
                size={20}
                color={socialButtonText?.color}
                style={{ marginRight: 10 }}
              />
              <Text style={socialButtonText}>Facebook</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={navigateToRegister}>
            <Text style={[styles.forgotPasswordText, { marginTop: 20 }]}>
              Don't have an account?{' '}
              <Text style={{ fontWeight: 'bold', color: title?.color }}>
                Register
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
