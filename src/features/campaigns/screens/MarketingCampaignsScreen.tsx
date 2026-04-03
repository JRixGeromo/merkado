import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

const MarketingCampaignsScreen = () => {
  const { commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Marketing Campaigns</Text>
      {/* Display list of marketing campaigns */}
    </View>
  );
};

export default MarketingCampaignsScreen;
