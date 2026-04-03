import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import { baseStyles } from '../../../styles/baseStyles';

const ProductCategoriesScreen = () => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);
  const baseStyle = baseStyles(themeType);

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Product Categories</Text>
      {/* Display list of product categories */}
    </View>
  );
};

export default ProductCategoriesScreen;
