import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { useTheme } from '../../../hooks/useTheme';
import { commonStyles } from '../../../styles/commonStyles';
import { baseStyles } from '../../../styles/baseStyles';

const ReactionsScreen = () => {
  const { themeType, commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Reactions</Text>
      {/* Display reactions for different products or shows */}
    </View>
  );
};

export default ReactionsScreen;
