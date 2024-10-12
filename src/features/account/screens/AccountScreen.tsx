import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { toggleTheme, loadThemeFromStorage } from '../../../store/slices/themeSlice';  // Correct path to your theme slice
import CustomButton from '../../../components/CustomButton';
import { commonStyles } from '../../../styles/commonStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const AccountScreen = () => {
  const theme = useAppSelector(state => state.theme.theme);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const styles = commonStyles(theme);

  // Access translations
  const { t, i18n } = useTranslation(); // Access i18n for language switching

  // Mock Data for Account Info
  const accountInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: '123 Main St, Springfield, CA',
    paymentMethod: {
      type: 'Mastercard',
      last4: '0123',
    },
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="person" size={20} color={styles.iconColor.color} />
            <Text style={styles.cardHeaderTitle}>{t('accountInformation')}</Text>
          </View>
          <Text style={styles.cardText}>{t('name')}: {accountInfo.name}</Text>
          <Text style={styles.cardText}>{t('email')}: {accountInfo.email}</Text>
          <Text style={styles.cardText}>{t('location')}: {accountInfo.location}</Text>
          <TouchableOpacity 
           //onPress={() => navigation.navigate('EditAccountScreen')}
          >
            <Text style={styles.editLink}>{t('edit')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="card" size={20} color={styles.iconColor.color} />
            <Text style={styles.cardHeaderTitle}>{t('paymentMethod')}</Text>
          </View>
          <Text style={styles.cardText}>
            {accountInfo.paymentMethod.type} {t('endingIn')} {accountInfo.paymentMethod.last4}
          </Text>
          <TouchableOpacity 
            //onPress={() => navigation.navigate('PaymentMethodScreen')}
          >
            <Text style={styles.editLink}>{t('edit')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="moon" size={20} color={styles.iconColor.color} />
            <Text style={styles.cardHeaderTitle}>{t('preferences')}</Text>
          </View>
          <View style={styles.toggleButtonContainer}>
            <Text style={styles.cardText}>{t('darkMode')}</Text>
            <TouchableOpacity onPress={() => dispatch(toggleTheme())}>
              <Icon
                name={theme === 'dark' ? 'moon' : 'sunny'}
                size={24}
                color={styles.iconColor.color}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="language" size={20} color={styles.iconColor.color} />
            <Text style={styles.cardHeaderTitle}>{t('language')}</Text>
          </View>
          <View>
            <Button title="English" onPress={() => i18n.changeLanguage('en')} />
            <Button title="Tagalog" onPress={() => i18n.changeLanguage('tl')} />
            <Button title="Bisaya" onPress={() => i18n.changeLanguage('bs')} />
          </View>
        </View>
        <CustomButton
          title={t('logout')}
          onPress={() => {
            // Implement logout logic
          }}
          backgroundColor={styles.button.backgroundColor}
          color={styles.buttonText.color}
        />
      </View>
    </ScrollView>
  );
};

export default AccountScreen;
