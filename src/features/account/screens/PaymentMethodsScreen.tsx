import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

const PaymentMethodsScreen = () => {
  const { commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
    </View>
  );
};

export default PaymentMethodsScreen;
