import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

const ProductCategoriesScreen = () => {
  const { commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Product Categories</Text>
      {/* Display list of product categories */}
    </View>
  );
};

export default ProductCategoriesScreen;
