import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { useTheme } from '../../../hooks/useTheme';
import { commonStyles } from '../../../styles/commonStyles';
import { baseStyles } from '../../../styles/baseStyles';

const LiveShowsScreen = () => {
  const { themeType, commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Live Shows</Text>
      {/* Display live shows */}
    </View>
  );
};

export default LiveShowsScreen;
