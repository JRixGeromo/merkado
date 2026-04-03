import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

const SocialAccountsScreen = () => {
  const { commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Social Accounts</Text>
      {/* Display linked social media accounts */}
    </View>
  );
};

export default SocialAccountsScreen;
