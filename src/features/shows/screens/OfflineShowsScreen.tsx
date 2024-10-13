import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';

const OfflineShowsScreen = () => {
  const themeType = useAppSelector((state) => state.theme.theme);
  const commonStyle = commonStyles(themeType);

  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.title}>Offline Shows</Text>
      {/* Display offline shows */}
    </View>
  );
};

export default OfflineShowsScreen;
