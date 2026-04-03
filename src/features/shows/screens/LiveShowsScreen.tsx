import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

const LiveShowsScreen = () => {
  const { commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Live Shows</Text>
      {/* Display live shows */}
    </View>
  );
};

export default LiveShowsScreen;
