import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { normalizeHeight } from '../../../utils/responsive'; // Assuming you have responsive utilities
import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';
import { theme as appTheme } from '../../../styles/theme';
import { useTranslation } from 'react-i18next';

import CustomButton from '../../../components/CustomButton';
import IconLib from '../../../components/IconLib';
import { useAppSelector } from '../../../hooks/reduxHooks';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Use NativeStackNavigationProp
import { RootStackParamList } from '../../../navigationTypes'; // Import RootStackParamList

const CheckoutScreen: React.FC = () => {
 
  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Correct the type here
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);
  const layoutStyle = layoutStyles(themeType);
  const selectedTheme = appTheme[themeType];
  const { t } = useTranslation();

  // Handle Checkout process here
  const handlePurchase = () => {
    // Add your checkout logic
    console.log('handle purchase');
  };

  return (
    <View style={[layoutStyle.container, { backgroundColor: selectedTheme.fullBackgroundColor }]}>
      <CustomButton
        title={t('Proceed to Checkout')}
        onPress={handlePurchase}
        color={selectedTheme.textLight}
        backgroundColor={selectedTheme.borderColorPrimary}
        borderRadius={2} // You can set this dynamically too
        style={{
          marginLeft: 0,
          marginRight: 0,
          padding:10,
        }}
      />
    </View>
  );
};

export default CheckoutScreen;