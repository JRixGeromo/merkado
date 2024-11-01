import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { toggleTheme } from '../../../store/slices/themeSlice';
import CustomButton from '../../../components/CustomButton';
import ListOptions from '../../../components/ListOptions'; // Import Dropdown component
import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigationTypes';
import { useTranslation } from 'react-i18next';
import { theme as appTheme } from '../../../styles/theme';

const AccountScreen = () => {
  
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const themeType = useAppSelector(state => state.theme.theme);
    const commonStyle = commonStyles(themeType); // This is fine
    const layoutStyle = layoutStyles(themeType); // Rename this to avoid conflict
  
    const selectedTheme = appTheme[themeType];


  const { t, i18n } = useTranslation();

  const accountInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: '123 Main St, Springfield, CA',
    paymentMethod: {
      type: 'Mastercard',
      last4: '0123',
    },
    profileImage: require('../../../../assets/logo.png'),
  };

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Tagalog', value: 'tl' },
    { label: 'Bisaya', value: 'bs' },
    { label: 'Hiligaynon', value: 'il' },
    { label: 'Masbateño', value: 'mb' },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Fixed Profile Header */}
      {/* <View style={commonStyle.profileHeader}>
        <Image
          source={accountInfo.profileImage}
          style={[
            commonStyle.profileImage,
            { width: 100, height: 100, borderRadius: 50 },
          ]}
        />
        <Text style={commonStyle.profileName}>{accountInfo.name}</Text>
        <Text style={commonStyle.profileEmail}>{accountInfo.email}</Text>
      </View> */}

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        {/* Account Information Card */}
        <View style={layoutStyle.innerContainer}>
          {/* <View style={commonStyle.card}>
            <View style={commonStyle.cardHeader}>
              <Icon
                name="person"
                size={24}
                color={selectedTheme.iconColorPrimary}
              />
              <Text style={commonStyle.cardHeaderTitle}>
                {t('accountInformation')}
              </Text>
            </View>
            <Text style={commonStyle.cardText}>
              {t('location')}: {accountInfo.location}
            </Text>
            <TouchableOpacity>
              <Text style={commonStyle.editLink}>{t('edit')}</Text>
            </TouchableOpacity>
          </View> */}

          {/* Payment Method Card */}
          {/* <View style={commonStyle.card}>
            <View style={commonStyle.cardHeader}>
              <Icon
                name="card"
                size={24}
                color={selectedTheme.iconColorPrimary}
              />
              <Text style={commonStyle.cardHeaderTitle}>
                {t('paymentMethod')}
              </Text>
            </View>
            <Text style={commonStyle.cardText}>
              {accountInfo.paymentMethod.type} {t('endingIn')}{' '}
              {accountInfo.paymentMethod.last4}
            </Text>
            <TouchableOpacity>
              <Text style={commonStyle.editLink}>{t('edit')}</Text>
            </TouchableOpacity>
          </View> */}

          {/* Preferences Card */}
          <View style={commonStyle.card}>
            <View style={commonStyle.cardHeader}>
              <Icon
                name="settings-outline"
                size={24}
                color={selectedTheme.iconColorPrimary}
              />
              <Text style={commonStyle.cardHeaderTitle}>
                {t('preferences')}
              </Text>
            </View>

            {/* Dark Mode Toggle */}
            <View
              style={[commonStyle.toggleButtonContainer, { marginTop: 10 }]}
            >
              <TouchableOpacity onPress={() => dispatch(toggleTheme())}>
                <Text style={commonStyle.cardText}>{t('theme')}</Text>
              </TouchableOpacity>
              <Icon
                name={themeType === 'dark' ? 'moon' : 'sunny'}
                size={24}
                color={selectedTheme.iconColorPrimary}
              />
            </View>

            {/* Language Selection Dropdown */}
            <View style={commonStyle.languageContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <ListOptions
                  selectedValue={selectedLanguage}
                  onValueChange={value => {
                    setSelectedLanguage(value);
                    i18n.changeLanguage(value);
                  }}
                  options={languageOptions}
                  placeholder={t('Select Language')} // Just use "Select Language" here
                  //iconName="Globe"
                  textColor={selectedTheme.textPrimary}
                  customBackground="transparent"
                  showIcon={false}
                  //joinLabelVaue={true} // Join the label and value in the dropdown text
                />
                <Icon
                  name="globe"
                  size={24}
                  color={selectedTheme.iconColorPrimary}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountScreen;
