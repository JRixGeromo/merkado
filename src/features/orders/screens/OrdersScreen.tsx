import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

const OrdersScreen = () => {
  const { themeType, commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Orders</Text>
      {/* List of orders with details */}
    </View>
  );
};

export default OrdersScreen;
