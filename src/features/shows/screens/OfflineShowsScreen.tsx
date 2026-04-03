import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

const OfflineShowsScreen = () => {
  const { commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Offline Shows</Text>
      {/* Display offline shows */}
    </View>
  );
};

export default OfflineShowsScreen;
