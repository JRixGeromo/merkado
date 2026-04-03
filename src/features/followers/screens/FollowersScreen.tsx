import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { useTheme } from '../../../hooks/useTheme';
import { commonStyles } from '../../../styles/commonStyles';
import { baseStyles } from '../../../styles/baseStyles';

const FollowersScreen = () => {
  const { themeType, commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Followers</Text>
      {/* List of users following the vendor or user */}
    </View>
  );
};

export default FollowersScreen;
