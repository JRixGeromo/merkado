import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import TextInputWithIcon from '../../../components/TextInputWithIcon';
import CustomButton from '../../../components/CustomButton';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { useTranslation } from 'react-i18next';
import { theme as appTheme } from '../../../styles/theme';

const EditProfileScreen = () => {
  const theme = useAppSelector(state => state.theme.theme);
  const { t } = useTranslation();
  const commonStyle = commonStyles(theme);
  const selectedTheme = appTheme[theme];

  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleSave = () => {
    Alert.alert(t('profileUpdated'), t('profileUpdatedSuccess'));
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={commonStyle.container}>
      </View>
    </ScrollView>
  );
};

export default EditProfileScreen;
