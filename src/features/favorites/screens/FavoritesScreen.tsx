import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

const FavoritesScreen = () => {
  const { commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Favorites</Text>
      {/* List of favorite items */}
    </View>
  );
};

export default FavoritesScreen;
