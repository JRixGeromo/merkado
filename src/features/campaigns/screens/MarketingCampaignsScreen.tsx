import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';

const MarketingCampaignsScreen = () => {
  const themeType = useAppSelector((state) => state.theme.theme);
  const commonStyle = commonStyles(themeType);

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.title}>Marketing Campaigns</Text>
      {/* Display list of marketing campaigns */}
    </View>
  );
};

export default MarketingCampaignsScreen;
