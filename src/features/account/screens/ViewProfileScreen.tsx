import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { useTranslation } from 'react-i18next';
import { theme as appTheme } from '../../../styles/theme';

const ViewProfileScreen = () => {
  const theme = useAppSelector(state => state.theme.theme);
  const { t } = useTranslation();
  const commonStyle = commonStyles(theme);
  const selectedTheme = appTheme[theme];

  const profileData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    birthDate: '1990-01-01',
    profileImageUrl: 'https://yourimageurl.com/profile.jpg',
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      
    </ScrollView>
  );
};

export default ViewProfileScreen;
