import React, { useState, useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
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
import { useTranslation } from 'react-i18next'; // Import the translation hook

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

  const { t, i18n } = useTranslation(); // Initialize translation

  const handleLogin = () => {
    console.log('Login pressed');
    navigation.navigate('DashboardScreen'); // Navigate to DashboardScreen after login
  };

  const navigateToRegister = () => {
    navigation.navigate('RegistrationScreen');
  };

  const commonStyle = commonStyles(theme); // Dynamically create styles based on the theme
  const {
    button,
    buttonText,
    socialButtonText,
    googleButton,
    facebookButton,
    title,
  } = commonStyle;

  useEffect(() => {
    const backAction = () => {
      // Prevent the user from going back to the splash screen
      return true; // Return true to block the back button
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove(); // Clean up when the component unmounts
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={commonStyle.container}>

          <Image
            source={require('../../../../assets/logo.png')} // Adjust the path to your logo
            style={commonStyle.logo} // Add any custom styles for the logo image
          />
          
          <Text style={title}>{t('welcomeBack')}</Text>

          <TextInputWithIcon
            placeholder={t('email')}
            iconName="mail"
            value={email}
            onChangeText={setEmail}
            style={{ height: 45 }}
          />
          <TextInputWithIcon
            placeholder={t('password')}
            iconName="lock-closed"
            secureTextEntry
            value={password}
            onChangeText={setEmail}
            style={{ height: 45 }}
          />

          <CustomButton
            title={t('login')}
            onPress={handleLogin}
            color={buttonText?.color}
          />

          <TouchableOpacity>
            <Text style={[commonStyle.linkText, {fontWeight: "bold"}]}>
              {t('forgotPassword')}
            </Text>
          </TouchableOpacity>

          <Text style={commonStyle.orText}>{t('orLoginWith')}</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
            }}
          >
            <TouchableOpacity
              style={[commonStyle.socialButton, googleButton]}
              onPress={() => console.log('Google Login Pressed')}
            >
              <Icon
                name="google"
                size={20}
                color={socialButtonText?.color}
                style={{ marginRight: 10 }}
              />
              <Text style={socialButtonText}>{t('google')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[commonStyle.socialButton, facebookButton]}
              onPress={() => console.log('Facebook Login Pressed')}
            >
              <Icon
                name="facebook"
                size={20}
                color={socialButtonText?.color}
                style={{ marginRight: 10 }}
              />
              <Text style={socialButtonText}>{t('facebook')}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={navigateToRegister}>
            <Text style={[commonStyle.paragraph, { marginTop: 20 }]}>
              {t('noAccount')}{' '}
              <Text style={[commonStyle.linkText, { fontWeight: 'bold' }]}>
                {t('register')}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
