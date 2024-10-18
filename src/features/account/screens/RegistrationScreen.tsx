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
  ActivityIndicator,
} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import DateAndTimePicker from '../../../components/DateAndTimePicker';
import Dropdown from '../../../components/Dropdown';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import { gql, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { theme as appTheme } from '../../../styles/theme';
import { setUser } from '../../../store/slices/authSlice';

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
  const [gender, setGender] = useState(''); // Default value for gender

  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation();

  const theme = useAppSelector(state => state.theme.theme); // Get current theme from Redux
  const commonStyle = commonStyles(theme);
  const selectedTheme = appTheme[theme];


  const [registerUser, { loading, error }] = useMutation(REGISTER_USER);

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword || !firstName || !lastName) {
      Alert.alert(t('error'), t('fillFields'));
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(t('error'), t('passwordsDoNotMatch'));
      return;
    }

    try {
      const { data } = await registerUser({
        variables: {
          email,
          password,
          firstName,
          lastName,
          birthdate: birthdate.toISOString().split('T')[0],
          gender,
        },
      });

      if (data?.registerUser) {
        const { user, token } = data.registerUser;
        dispatch(setUser({ user, token }));

        Alert.alert(t('success'), t('registrationSuccess'));
        navigation.navigate('DashboardScreen');
      }
    } catch (err) {
      console.error('Registration error:', err);
      Alert.alert(t('error'), t('registrationFailed'));
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={commonStyle.container}>
          <Image
            source={require('../../../../assets/logo.png')}
            style={commonStyle.logo}
          />
          <TextInputWithIcon
            placeholder={t('firstName')}
            iconName="person"
            value={firstName}
            onChangeText={setFirstName}
            style={{ height: 45 }}
          />
          <TextInputWithIcon
            placeholder={t('lastName')}
            iconName="person"
            value={lastName}
            onChangeText={setLastName}
            style={{ height: 45 }}
          />
          <Dropdown
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            options={[
              { label: t('male'), value: 'MALE' },
              { label: t('female'), value: 'FEMALE' },
              { label: t('other'), value: 'OTHER' },
            ]}
            placeholder={t('gender')}
            iconName="male"
            iconSize={20}
            showIcon= {true}
          />

          <DateAndTimePicker
            onDateChange={setBirthdate}
            iconName="calendar"
            iconSize={20}
            placeholder={t('birthDate')}
            inputStyle={{ height: 40 }}
          />

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
            onChangeText={setPassword}
            style={{ height: 45 }}
          />
          <TextInputWithIcon
            placeholder={t('confirmPassword')}
            iconName="lock-closed"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={{ height: 45 }}
          />

          {loading && (
            <View style={{ marginTop: 20, marginBottom: 20 }}>
              <ActivityIndicator
                size="large"
                color={selectedTheme.textPrimary}
                style={commonStyle.loader}
              />
            </View>
          )}

          {!loading && (
            <CustomButton
              title={t('register')}
              onPress={handleRegister}
              color={selectedTheme.textLight}
              backgroundColor={selectedTheme.buttonPrimary}
              borderRadius={2} // You can set this dynamically too
            />
          )}

          {error && <Text style={{ color: 'red' }}>{t('registrationFailed')}</Text>}
          
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={[commonStyle.paragraph, { marginTop: 20 }]}>
              {t('hasAccount')}{' '}
              <Text style={[commonStyle.linkText, { fontWeight: 'bold' }]}>
                {t('login')}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
