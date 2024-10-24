import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { normalizeHeight } from '../../../utils/responsive'; // Assuming you have responsive utilities

import { commonStyles } from '../../../styles/commonStyles';
import { layoutStyles } from '../../../styles/layoutStyles';
import { theme as appTheme } from '../../../styles/theme';
import { useTranslation } from 'react-i18next';
import IconLib from '../../../components/IconLib';
import { useAppSelector } from '../../../hooks/reduxHooks';

const CheckoutScreen: React.FC = () => {
  const themeType = useAppSelector(state => state.theme.theme);
  const selectedTheme = appTheme[themeType];

  // Handle Checkout process here
  const handleCheckout = () => {
    // Add your checkout logic
    console.log('Proceed to checkout');
  };

  return (
    <View style={[styles.container, { backgroundColor: selectedTheme.fullBackgroundColor }]}>
      <Text style={[styles.heading, { color: selectedTheme.textPrimary }]}>Checkout</Text>

      {/* Add additional checkout details like address, payment methods, and order summary */}

      <TouchableOpacity
        style={[styles.checkoutButton, { backgroundColor: selectedTheme.buttonBorderPrimary }]}
        onPress={handleCheckout}
      >
        <Text style={[styles.checkoutText, { color: selectedTheme.textPrimary }]}>Confirm Purchase</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalizeHeight(20),
  },
  heading: {
    fontSize: normalizeHeight(24),
    fontWeight: 'bold',
    marginBottom: normalizeHeight(20),
  },
  checkoutButton: {
    paddingVertical: normalizeHeight(15),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalizeHeight(20),
  },
  checkoutText: {
    fontSize: normalizeHeight(18),
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
