import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

const FollowersScreen = () => {
  const { commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Followers</Text>
      {/* List of users following the vendor or user */}
    </View>
  );
};

export default FollowersScreen;
