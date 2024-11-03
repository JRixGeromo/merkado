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
  ActivityIndicator,
} from 'react-native';

import CustomButton from '../../../components/CustomButton';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import { commonStyles } from '../../../styles/commonStyles'; // Import your style
import { layoutStyles } from '../../../styles/layoutStyles';
import { theme as appTheme } from '../../../styles/theme';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import IconLib from '../../../components/IconLib'; // Import IconLib here
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { gql, useMutation } from '@apollo/client';
import { setUser } from '../../../store/slices/authSlice'; // Import the setUser action
import { normalizeHeight } from '../../../utils/responsive';


type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

const LoginScreen = () => {
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false); // Add loading state

  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType); // This is fine
  const layoutStyle = layoutStyles(themeType); // Rename this to avoid conflict
  const selectedTheme = appTheme[themeType];
  
  const dispatch = useAppDispatch(); // Get dispatch for Redux actions

  const navigation = useNavigation<NavigationProp>(); // Ensure proper type for navigation
  const { t } = useTranslation(); // Initialize translation

  // Apollo useMutation hook for login
  const [loginUser] = useMutation(LOGIN_USER);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(t('error'), t('fillFields')); // Translation for error message
      return;
    }
    
    setLoading(true); // Set loading to true while the request is being made
    try {
      const { data } = await loginUser({
        variables: {
          email,
          password,
        },
      });

      if (data?.loginUser) {
        // Dispatch the setUser action to store the user in Redux
        dispatch(
          setUser({
            user: data.loginUser.user,
            token: data.loginUser.token,
          }),
        );

        Alert.alert(t('success'), t('loginSuccess'));
        navigation.navigate('DashboardScreen'); // Navigate to the dashboard screen
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert(t('error'), t('loginFailed')); // Show translated error message
    } finally {
      setLoading(false); // Set loading to false once the request is completed
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('RegistrationScreen');
  };

  useEffect(() => {
    const backAction = () => {
      return true; // Prevent the user from going back to the splash screen
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove(); // Clean up when the component unmounts
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[ layoutStyle.container, {padding: 20, justifyContent: 'center'}]}>
          <View style={[layoutStyle.shadowedContainer, layoutStyle.formContainer, {backgroundColor: selectedTheme.cardBackground}]}>

         
          <Image
            source={require('../../../../assets/logo.png')}
            style={commonStyle.logo}
          />

          <Text style={commonStyle.headerTitle}>{t('welcomeBack')}</Text>

          <TextInputWithIcon
            placeholder={t('email')}
            iconName="Email" // Use IconLib
            value={email}
            onChangeText={setEmail}
            style={{ height: 45 }}
          />

          <TextInputWithIcon
            placeholder={t('password')}
            iconName="Locked" // Use IconLib
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{ height: 45 }}
          />

          {/* Loading indicator */}
          {loading ? (
            <ActivityIndicator
              size="large"
              color={selectedTheme.textPrimary}
              style={commonStyle.loader}
            />
          ) : (
            <CustomButton
              title={t('login')}
              onPress={handleLogin}
              color={selectedTheme.textLight}
              backgroundColor={selectedTheme.buttonPrimary}
              borderRadius={2} // You can set this dynamically too
            />
          )}

          <TouchableOpacity>
            <Text style={[commonStyle.linkText, layoutStyle.marginAllL, { fontWeight: 'bold' }]}>
              {t('forgotPassword')}
            </Text>
          </TouchableOpacity>

          <Text style={[layoutStyle.smallText, layoutStyle.marginAllM, {color: selectedTheme.textSecondary }]}>{t('orLoginWith')}</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
            }}
          >

            <CustomButton
              title={t('google')}
              onPress={() => console.log('Google Login Pressed')}
              color={selectedTheme.textLight}
              backgroundColor={selectedTheme.googleButtonColor}
              borderRadius={2} // You can set this dynamically too
              iconName={'Google'}
            />

            <CustomButton
              title={t('facebook')}
              onPress={() => console.log('Facebook Login Pressed')}
              color={selectedTheme.textLight}
              backgroundColor={selectedTheme.facebookButtonColor}
              borderRadius={2} // You can set this dynamically too
              iconName={'Fb'}
            />

          </View>

          <TouchableOpacity onPress={navigateToRegister}>
            <Text style={[layoutStyle.smallText, layoutStyle.marginAllM, { color: selectedTheme.textSecondary }]}>
              {t('noAccount')}{' '}
              <Text style={[commonStyle.linkText, { fontWeight: 'bold' }]}>
                {t('register')}
              </Text>
            </Text>
          </TouchableOpacity>
           </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
