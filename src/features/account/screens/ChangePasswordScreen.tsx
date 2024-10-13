import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';

const ChangePasswordScreen = () => {
  const themeType = useAppSelector((state) => state.theme.theme);
  const commonStyle = commonStyles(themeType);

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.title}>Change Password</Text>
      {/* Add inputs and logic for changing password */}
    </View>
  );
};

export default ChangePasswordScreen;
