import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

const RatingsReviewsScreen = () => {
  const { commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Ratings & Reviews</Text>
      {/* List of product reviews and ratings */}
    </View>
  );
};

export default RatingsReviewsScreen;
