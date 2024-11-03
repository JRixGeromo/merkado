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
import ListOptions from '../../../components/ListOptions';

import { commonStyles } from '../../../styles/commonStyles'; // Import your style
import { layoutStyles } from '../../../styles/layoutStyles';
import { theme as appTheme } from '../../../styles/theme';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import { gql, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { setUser } from '../../../store/slices/authSlice';

const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $birthdate: String
    $gender: Gender!
  ) {
    registerUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      birthdate: $birthdate
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

  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType); // This is fine
  const layoutStyle = layoutStyles(themeType); // Rename this to avoid conflict
  const selectedTheme = appTheme[themeType];

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
      <View style={[layoutStyle.container, {padding: 20, justifyContent: 'center'}]}>
      <View style={[layoutStyle.shadowedContainer, layoutStyle.formContainer, {backgroundColor: selectedTheme.cardBackground}]}>
          <Image
            source={require('../../../../assets/logo.png')}
            style={commonStyle.logo}
          />
          <TextInputWithIcon
            placeholder={t('firstName')}
            iconName="Person"
            value={firstName}
            onChangeText={setFirstName}
            style={{ height: 45 }}
          />
          <TextInputWithIcon
            placeholder={t('lastName')}
            iconName="Person"
            value={lastName}
            onChangeText={setLastName}
            style={{ height: 45 }}
          />
          <ListOptions
            selectedValue={gender}
            onValueChange={itemValue => setGender(itemValue)}
            options={[
              { label: t('male'), value: 'MALE' },
              { label: t('female'), value: 'FEMALE' },
              { label: t('other'), value: 'OTHER' },
            ]}
            placeholder={t('gender')}
            iconName="Gender"
            iconSize={22}
            showIcon={true}
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
            iconName="Email"
            value={email}
            onChangeText={setEmail}
            style={{ height: 45 }}
          />
          <TextInputWithIcon
            placeholder={t('password')}
            iconName="Locked"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{ height: 45 }}
          />
          <TextInputWithIcon
            placeholder={t('confirmPassword')}
            iconName="Locked"
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

          {error && (
            <Text style={{ color: 'red' }}>{t('registrationFailed')}</Text>
          )}

          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={[layoutStyle.smallText, layoutStyle.marginAllM, { color: selectedTheme.textSecondary }]}>
              {t('hasAccount')}{' '}
              <Text style={[commonStyle.linkText, { fontWeight: 'bold' }]}>
                {t('login')}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
