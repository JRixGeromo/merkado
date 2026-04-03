import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

const ManageVendorsScreen = () => {
  const { themeType, commonStyle, baseStyle } = useTheme();

  return (
    <View style={baseStyle.container}>
      <Text style={commonStyle.screenHeaderTitle}>Manage Vendors</Text>
      {/* Manage vendor list */}
    </View>
  );
};

export default ManageVendorsScreen;
