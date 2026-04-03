import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

const ReactionsScreen = () => {
  const { commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Reactions</Text>
      {/* Display reactions for different products or shows */}
    </View>
  );
};

export default ReactionsScreen;
