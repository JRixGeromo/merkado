import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

const WishesScreen = () => {
  const { commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Wishes</Text>
      {/* Display list of wishes */}
    </View>
  );
};

export default WishesScreen;
