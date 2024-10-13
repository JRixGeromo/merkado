import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { useTranslation } from 'react-i18next';
import { theme as appTheme } from '../../../styles/theme';

const ViewProfileScreen = () => {
  const theme = useAppSelector((state) => state.theme.theme);
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
      <View style={commonStyle.container}>
        <Image
          source={{ uri: profileData.profileImageUrl }}
          style={commonStyle.profileImage}
        />
        <Text style={commonStyle.profileName}>
          {profileData.firstName} {profileData.lastName}
        </Text>
        <Text style={commonStyle.profileEmail}>
          {profileData.email}
        </Text>
        <Text style={commonStyle.profileBirthDate}>
          {t('birthDate')}: {profileData.birthDate}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ViewProfileScreen;
